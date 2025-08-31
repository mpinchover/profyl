"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/config/auth-context";

export default function Protected({ children, redirectTo = "/" }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace(redirectTo);
  }, [loading, user, router, redirectTo]);

  if (loading || !user) return null; // or a spinner/skeleton
  return <>{children}</>;
}
