"use client";
import { Text, Link } from "@chakra-ui/react";
import { PageShell, PageHeading } from "@/components/common/common";

const NotFound = () => {
  return (
    <PageShell center maxWidth="420px" gapY={{ base: "24px", md: "28px" }}>
      <Text
        color="gray.600"
        fontSize="sm"
        fontWeight="600"
        letterSpacing="0.12em"
        textAlign="center"
      >
        404
      </Text>

      <PageHeading
        title="Page not found"
        subtitle="That page doesn't exist, or the profile you're looking for isn't on Profyl."
      />

      <Text color="gray.500" fontSize="xs" textAlign="center">
        <Link
          href="/"
          color="gray.300"
          textDecoration="underline"
          textUnderlineOffset="2px"
          _hover={{ color: "gray.100", textDecoration: "underline" }}
        >
          Go home
        </Link>
      </Text>
    </PageShell>
  );
};

export default NotFound;
