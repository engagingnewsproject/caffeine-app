/**
 * One-off script to set admin custom claim for a user by email.
 * Uses Firebase Admin SDK with the project's service account key.
 *
 * Run from project root: yarn set-admin-claim <email>
 * Example: yarn set-admin-claim luke@lukecarlhartman.com
 */

const admin = require('firebase-admin');
const path = require('path');

const email = process.argv[2];
if (!email || !email.includes('@')) {
  console.error('Usage: yarn set-admin-claim <email>');
  process.exit(1);
}

const serviceAccountPath = path.join(
  process.cwd(),
  'caffeine-app-service-account-key.json'
);

async function setAdminClaim() {
  try {
    // Initialize with service account key from project root
    const serviceAccount = require(serviceAccountPath);
    if (!admin.apps.length) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    }

    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });

    console.log(`Done. ${email} (uid: ${user.uid}) now has admin claim.`);
    console.log('They must sign out and sign back in for the new token to apply.');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

setAdminClaim();
