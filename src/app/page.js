"use client";

import HomeLoggedOut from "../components/home-logged-out";
import HomeLoggedIn from "../components/home-logged-in";
import { useAuth } from "@/config/auth-context";
import { Center, Spinner } from "@chakra-ui/react";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Center minHeight="100dvh" bgColor="gray.800">
        <Spinner
          size="lg"
          borderWidth="3px"
          color="gray.500"
          animationDuration="0.65s"
          aria-label="Loading"
        />
      </Center>
    );
  }

  return user ? <HomeLoggedIn /> : <HomeLoggedOut />;
}
