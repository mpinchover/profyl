"use client";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Link,
  Button,
  LinkBox,
  Icon,
  StackSeparator,
} from "@chakra-ui/react";
import { GrGoogle } from "react-icons/gr";
import { FaApple } from "react-icons/fa";

const LoginOAuth = ({ title, icon }) => {
  return (
    <Button width={{ base: "100%", sm: "50%" }}>
      {icon}
      Login with {title}
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
      paddingX={{ base: "20px", sm: "none" }}
      // position="relative"
      height="100dvh"
    >
      <VStack
        position="relative"
        alignItems="start"
        width="100%"
        maxWidth="600px"
        height="100%"
      >
        <VStack
          position="absolute"
          left="50%"
          top="50%"
          transform={"translate(-50%,-50%)"}
          alignItems="center"
          width="100%"
        >
          <LoginOAuth icon={<GrGoogle />} title="Google" />
          <LoginOAuth icon={<FaApple />} title="Apple" />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;
