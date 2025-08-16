"use client";
import { HStack, Link, Text } from "@chakra-ui/react";

export const SectionTitle = ({ title, icon }) => {
  return (
    <HStack color="gray.200" position="relative" width="100%">
      {icon}
      <Text fontWeight={"600"}>{title}</Text>
    </HStack>
  );
};

export const AccountSectionTitleLink = ({ title, icon }) => {
  return (
    <Link>
      <HStack color="gray.200" position="relative" width="100%">
        {icon}
        <Text fontWeight={"600"}>{title}</Text>
      </HStack>
    </Link>
  );
};
