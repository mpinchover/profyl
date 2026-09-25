import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase web config for the "vaddr-e4941" project. These values are not
// secrets — they identify the project and ship to the browser in the client
// bundle regardless. Access is controlled by the enabled auth providers,
// the authorized domains list and security rules.
const firebaseConfig = {
  apiKey: "AIzaSyD6VX1_2J8GTHLsQ5KxIk00UujMQPQXqHY",
  authDomain: "vaddr-e4941.firebaseapp.com",
  projectId: "vaddr-e4941",
  storageBucket: "vaddr-e4941.firebasestorage.app",
  messagingSenderId: "812193331113",
  appId: "1:812193331113:web:c433948724194cd08bf6b8",
  measurementId: "G-M18KPBWHYJ",
};

// Flip to true to point auth at a local emulator on 127.0.0.1:9099.
const USE_EMULATORS = false;

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

if (typeof window !== "undefined" && USE_EMULATORS) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}

// Analytics is browser-only and unavailable in some environments (SSR,
// private modes, blocked scripts), so it is initialized behind isSupported().
if (typeof window !== "undefined" && !USE_EMULATORS) {
  isSupported()
    .then((supported) => supported && getAnalytics(app))
    .catch(() => {});
}
