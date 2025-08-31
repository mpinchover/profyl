"use client";
import { VStack, Button, Grid, Center, Text, Flex } from "@chakra-ui/react";
import { useAuth } from "@/config/auth-context";
import { GrGoogle } from "react-icons/gr";
import { FaApple, FaGithub, FaDiscord } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LoginOAuth = ({ title, icon, handleLogin }) => {
  return (
    <Button
      w="100%"
      maxW="300px" // all buttons share the same max width
      h="48px" // consistent height
      // variant="outline"
      p={0}
      justifyContent="center"
      position={"relative"}
      onClick={handleLogin}
    >
      <Center position="absolute" boxSize="32px" left="10px">
        {icon}
      </Center>
      <Text textAlign="center" w="100%">
        Login with {title}
      </Text>
    </Button>
  );
};

const Login = () => {
  const { user, signInWithGoogle, signInWithGithub } = useAuth();
  const router = useRouter();
  

  return (
    <VStack
      paddingBottom="100px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      px={{ base: "20px", sm: 0 }}
      height="100dvh"
    >
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        w="100%"
        maxW="600px"
        h="100%"
      >
        <VStack w="100%" spacing={3}>
          {" "}
          {/* equal vertical spacing between buttons */}
          <LoginOAuth
            handleLogin={signInWithGoogle}
            icon={<GrGoogle />}
            title="Google"
          />
          {/* <LoginOAuth icon={<FaApple />} title="Apple" /> */}
          <LoginOAuth
            handleLogin={signInWithGithub}
            icon={<FaGithub />}
            title="Github"
          />
          {/* <LoginOAuth icon={<FaDiscord />} title="Discord" /> */}
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Login;
