/**
 * One-off script to remove all custom claims from a user by email.
 * Uses Firebase Admin SDK with the project's service account key.
 *
 * Run from project root: yarn remove-claim <email>
 * Example: yarn remove-claim user@gmail.com
 */

const admin = require('firebase-admin');
const path = require('path');

const email = process.argv[2];
if (!email || !email.includes('@')) {
  console.error('Usage: yarn remove-claim <email>');
  process.exit(1);
}

const serviceAccountPath = path.join(
  process.cwd(),
  'caffeine-app-service-account-key.json'
);

async function removeClaims() {
  try {
    const serviceAccount = require(serviceAccountPath);
    if (!admin.apps.length) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    }

    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, {});

    console.log(`Done. All custom claims removed for ${email} (uid: ${user.uid}).`);
    console.log('They must sign out and sign back in for the new token to apply.');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

removeClaims();
