import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const useEmulators = process.env.NEXT_PUBLIC_USE_EMULATORS === "true";

if (!firebaseConfig.apiKey && !useEmulators) {
  // Failing loudly here beats an opaque auth/invalid-api-key at sign-in time.
  throw new Error(
    "Firebase is not configured. Copy .env.example to .env.local and fill in " +
      "the NEXT_PUBLIC_FIREBASE_* values, then restart the dev server."
  );
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

if (typeof window !== "undefined" && useEmulators) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}

// Analytics is browser-only and unavailable in some environments (SSR,
// private modes, blocked scripts), so it is initialized behind isSupported().
if (typeof window !== "undefined" && !useEmulators && firebaseConfig.measurementId) {
  isSupported()
    .then((supported) => supported && getAnalytics(app))
    .catch(() => {});
}
