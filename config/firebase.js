import { initializeApp } from 'firebase/app';

import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage,connectStorageEmulator } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// UNCOMMENT "connectFunctionsEmulator" BELOW: enable connection to firebase functions emulator
// connectFunctionsEmulator
import {
  getFunctions,
  connectFunctionsEmulator
} from "firebase/functions";
  
const firebaseConfig = {
    // Values found at /.env file. 
    // If this file is not present create a .env file in the root directory
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics and Performance Monitoring if running in the browser
let analytics = null; // Initialize to null
let perf = null;

// Check if we're running in a browser environment
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  perf = getPerformance(app);

  // App Check: set debug token for localhost when env var is set (so Firestore Enforced accepts requests in dev:prod)
  // Docs: https://firebase.google.com/docs/app-check/web/debug-provider?authuser=0
  const debugToken = process.env.NEXT_PUBLIC_APPCHECK_DEBUG_TOKEN;
  if (debugToken) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = debugToken;
  }

  // Initialize App Check when we have a site key (prod or dev:prod). With debug token set above, SDK uses it and passes verification.
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY;
  if (recaptchaSiteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(recaptchaSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
}

export { app, analytics, perf }

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);


// UNCOMMENT BELOW: enable connection to firebase functions emulator
// connectFunctionsEmulator(functions,"127.0.0.1",5001)

// Connect to emulators only when explicitly enabled (e.g. yarn dev with start-dev.sh).
// yarn dev:prod runs Next without the emulator, so we use production Firebase.
if (process.env.NEXT_PUBLIC_USE_EMULATOR === 'true') {
  console.log("Running Emulator");
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
