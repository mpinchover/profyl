import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey: "demo",
      authDomain: "localhost",
      projectId: "demo-project",
      appId: "demo-app",
    });

export const auth = getAuth(app);

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_USE_EMULATORS === "true"
) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}
