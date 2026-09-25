"use client";
import { VStack, Text, Button, Input } from "@chakra-ui/react";
import { PageShell, PageHeading } from "@/components/common/common";

const HomeLoggedOut = () => {
  return (
    <PageShell center maxWidth="420px" gapY={{ base: "32px", md: "36px" }}>
      <PageHeading
        title="Join the waitlist"
        subtitle="Leave your email and we'll let you know when Profyl is ready for you."
      />

      <VStack
        as="form"
        onSubmit={(e) => e.preventDefault()}
        width="100%"
        gapY="3"
      >
        <Input
          type="email"
          placeholder="Enter email"
          height="48px"
          bgColor="gray.900"
          borderWidth="1px"
          borderColor="gray.700"
          borderRadius="lg"
          color="gray.100"
          fontSize="sm"
          paddingX="16px"
          transition="border-color 0.2s ease"
          _placeholder={{ color: "gray.500" }}
          _hover={{ borderColor: "gray.600" }}
          _focusVisible={{ borderColor: "gray.500", outline: "none" }}
        />
        <Button
          type="submit"
          width="100%"
          height="48px"
          borderRadius="lg"
          fontSize="sm"
          fontWeight="600"
        >
          Submit
        </Button>
      </VStack>

      <Text color="gray.500" fontSize="xs" textAlign="center">
        No spam — one email when we launch.
      </Text>
    </PageShell>
  );
};

export default HomeLoggedOut;
