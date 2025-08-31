"use client";
import Protected from "@/components/auth/Protected";
import { useAuth } from "@/config/auth-context";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <Protected redirectTo="/">
      <main style={{ padding: 24 }}>
        <h1>Dashboard</h1>
        <p>Welcome {user?.displayName ?? user?.email}</p>
        <button onClick={logout}>Sign out</button>
      </main>
    </Protected>
  );
}
