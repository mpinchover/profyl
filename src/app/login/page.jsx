"use client";
import { VStack, Button, Center, Text, Spinner } from "@chakra-ui/react";
import { useAuth } from "@/config/auth-context";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageShell, PageHeading } from "@/components/common/common";

const LoginOAuth = ({ title, icon, handleLogin, isPending, isDisabled }) => {
  return (
    <Button
      onClick={handleLogin}
      disabled={isDisabled}
      width="100%"
      height="48px"
      position="relative"
      paddingX="0"
      justifyContent="center"
      bgColor="gray.900"
      color="gray.100"
      borderWidth="1px"
      borderColor="gray.700"
      borderRadius="lg"
      fontSize="sm"
      fontWeight="500"
      transition="background-color 0.2s ease, border-color 0.2s ease"
      _hover={{ bgColor: "gray.800", borderColor: "gray.600" }}
      _active={{ bgColor: "gray.900" }}
      _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
    >
      <Center position="absolute" left="16px" boxSize="20px" color="gray.400">
        {isPending ? <Spinner size="xs" borderWidth="2px" /> : icon}
      </Center>
      Continue with {title}
    </Button>
  );
};

const Login = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const router = useRouter();
  const [pendingProvider, setPendingProvider] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (provider, signinMethod) => {
    setError("");
    setPendingProvider(provider);

    try {
      await signinMethod();

      // Nobody has access yet — everyone lands on the waitlist.
      router.replace("/waitlist");
    } catch (e) {
      console.log(e);
      if (e?.code !== "auth/popup-closed-by-user") {
        setError("We couldn't log you in. Please try again.");
      }
      setPendingProvider(null);
    }
  };

  return (
    <PageShell center maxWidth="380px" gapY={{ base: "32px", md: "36px" }}>
      <PageHeading
        title="Welcome to Profyl"
        subtitle="We're not open yet. Sign in to claim your spot on the waitlist."
      />

      <VStack width="100%" gapY="3">
        <LoginOAuth
          handleLogin={() => handleLogin("google", signInWithGoogle)}
          isPending={pendingProvider === "google"}
          isDisabled={!!pendingProvider}
          icon={<FaGoogle size="18px" />}
          title="Google"
        />
        <LoginOAuth
          handleLogin={() => handleLogin("github", signInWithGithub)}
          isPending={pendingProvider === "github"}
          isDisabled={!!pendingProvider}
          icon={<FaGithub size="18px" />}
          title="GitHub"
        />
      </VStack>

      {error && (
        <Text color="red.300" fontSize="xs" textAlign="center">
          {error}
        </Text>
      )}

      <Text color="gray.500" fontSize="xs" textAlign="center" lineHeight="1.6">
        We only use your account to sign you in.
      </Text>
    </PageShell>
  );
};

export default Login;
