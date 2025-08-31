"use client";
import { VStack, Link, Image, Text, Button } from "@chakra-ui/react";

const HomeLoggedOut = () => {
  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack
        maxWidth="600px"
        width="100%"
        alignItems="start"
        position="relative"
      >
        <Text>A better way to connect.</Text>
        <Link>Get started here.</Link>
      </VStack>
    </VStack>
  );
};

export default HomeLoggedOut;
