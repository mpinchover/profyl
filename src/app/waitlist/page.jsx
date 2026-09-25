"use client";
import { VStack, Text, Link, Icon } from "@chakra-ui/react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { PageShell, PageHeading } from "@/components/common/common";

const Waitlist = () => {
  return (
    <PageShell center maxWidth="420px" gapY={{ base: "28px", md: "32px" }}>
      <VStack gapY={{ base: "20px", md: "24px" }}>
        <VStack
          boxSize="56px"
          borderRadius="full"
          bgColor="gray.900"
          borderWidth="1px"
          borderColor="gray.700"
          justifyContent="center"
        >
          <Icon as={IoCheckmarkSharp} boxSize="24px" color="gray.100" />
        </VStack>

        <PageHeading
          title="You're on the waitlist"
          subtitle="Thanks for signing up. We're letting people in a few at a time, and we'll reach out at the email you signed up with as soon as your spot opens."
        />
      </VStack>

      <Text color="gray.500" fontSize="xs" textAlign="center" lineHeight="1.6">
        Already been let in?{" "}
        <Link
          href="/login"
          color="gray.300"
          textDecoration="underline"
          textUnderlineOffset="2px"
          _hover={{ color: "gray.100", textDecoration: "underline" }}
        >
          Log in
        </Link>
      </Text>
    </PageShell>
  );
};

export default Waitlist;
