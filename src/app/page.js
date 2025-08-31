"use client";

import HomeLoggedOut from "../components/home-logged-out";
import HomeLoggedIn from "../components/home-logged-in";
import { useAuth } from "@/config/auth-context";
import { Center, Spinner } from "@chakra-ui/react";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Center minH="100vh">
        <Spinner size="lg" thickness="3px" speed="0.65s" aria-label="Loading" />
      </Center>
    );
  }

  return user ? <HomeLoggedIn /> : <HomeLoggedOut />;
}
