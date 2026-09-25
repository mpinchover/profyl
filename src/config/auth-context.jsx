"use client";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  setPersistence,
  browserLocalPersistence,
  signOut,
  User,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth } from "@/config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // persist the session
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch(() => {});
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    auth.authStateReady().then(() => setLoading(false));
    return () => unsub();
  }, []);

  // A first-time sign-in is a waitlist signup: the account is kept so we have
  // the email to reach out to, but the session is ended so they land on the
  // waitlist screen instead of an app they don't have access to yet.
  const signIn = async (provider) => {
    const credential = await signInWithPopup(auth, provider);
    const isNewUser = getAdditionalUserInfo(credential)?.isNewUser ?? false;

    if (isNewUser) {
      await signOut(auth);
    }

    return { isNewUser };
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    // Always show the account chooser instead of silently reusing the one
    // Google session the browser happens to have.
    provider.setCustomParameters({ prompt: "select_account" });
    return signIn(provider);
  };

  const signInWithGithub = async () => signIn(new GithubAuthProvider());

  const logout = async () => {
    await signOut(auth);
  };

  const value = useMemo(
    () => ({ user, loading, signInWithGoogle, signInWithGithub, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
};
