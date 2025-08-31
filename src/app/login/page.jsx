"use client";
import { VStack, Button, Grid, Center, Text, Flex } from "@chakra-ui/react";
import { GrGoogle } from "react-icons/gr";
import { FaApple, FaGithub, FaDiscord } from "react-icons/fa";

const LoginOAuth = ({ title, icon }) => {
  return (
    <Button
      w="100%"
      maxW="300px" // all buttons share the same max width
      h="48px" // consistent height
      // variant="outline"
      p={0}
      justifyContent="center"
      position={"relative"}
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
          <LoginOAuth icon={<GrGoogle />} title="Google" />
          {/* <LoginOAuth icon={<FaApple />} title="Apple" /> */}
          <LoginOAuth icon={<FaGithub />} title="Github" />
          {/* <LoginOAuth icon={<FaDiscord />} title="Discord" /> */}
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Login;
