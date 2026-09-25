"use client";
import { VStack, Button, Center, Text } from "@chakra-ui/react";
import { useAuth } from "@/config/auth-context";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { PageShell, PageHeading } from "@/components/common/common";

const LoginOAuth = ({ title, icon, handleLogin }) => {
  return (
    <Button
      onClick={handleLogin}
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
    >
      <Center position="absolute" left="16px" boxSize="20px" color="gray.400">
        {icon}
      </Center>
      Continue with {title}
    </Button>
  );
};

const Login = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const router = useRouter();

  const handleLogin = (signinMethod) => {
    signinMethod()
      .then(() => router.replace("/"))
      .catch((e) => console.log(e));
  };

  return (
    <PageShell center maxWidth="380px" gapY={{ base: "32px", md: "36px" }}>
      <PageHeading
        title="Welcome to Profyl"
        subtitle="Sign in, or create an account with the same button."
      />

      <VStack width="100%" gapY="3">
        <LoginOAuth
          handleLogin={() => handleLogin(signInWithGoogle)}
          icon={<FaGoogle size="18px" />}
          title="Google"
        />
        <LoginOAuth
          handleLogin={() => handleLogin(signInWithGithub)}
          icon={<FaGithub size="18px" />}
          title="GitHub"
        />
      </VStack>

      <Text color="gray.500" fontSize="xs" textAlign="center" lineHeight="1.6">
        We only use your account to sign you in.
      </Text>
    </PageShell>
  );
};

export default Login;
