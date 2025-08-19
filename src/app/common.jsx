"use client";
import { HStack, Link, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowLeftSLine, RiEditFill } from "react-icons/ri";

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
    <Link
      active={{ outline: "none" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none" }}
      href={`/${title.toLowerCase()}`}
    >
      <HStack color="gray.200" position="relative" width="100%">
        {icon}
        <Text fontWeight={"600"}>{title}</Text>
      </HStack>
    </Link>
  );
};

export const Back = ({ handleClick, route }) => {
  return (
    <Link
      active={{ outline: "none" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none" }}
      href={`/${route}`}
      onClick={handleClick}
      fontSize="xs"
    >
      <RiArrowLeftSLine size={18} />
      Back
    </Link>
  );
};

export const UpdateButton = ({ handleClick, staticState }) => {
  return (
    <Link
      onClick={handleClick}
      fontSize="xs"
      display="inline-flex"
      alignItems="center"
      gap="1"
      opacity={staticState ? 1 : 0}
      pointerEvents={staticState ? "auto" : "none"}
      transition="opacity 0.2s ease-in-out"
    >
      <RiEditFill />
      Update
    </Link>
  );
};

export const AccountSaveCancelBtns = ({ handleSave, handleCancel }) => {
  return (
    <VStack
      paddingX={{ base: "20px", sm: "none" }}
      width="100%"
      alignItems="start"
      bottom="20px"
      position="fixed"
      left={{ base: "0px", sm: "auto" }}
      right={{ base: "0px", sm: "auto" }}
    >
      <Button onClick={handleSave} width={{ base: "100%", sm: "140px" }}>
        Save
      </Button>
      <Button
        onClick={handleCancel}
        variant="subtle"
        width={{ base: "100%", sm: "140px" }}
      >
        Cancel
      </Button>
    </VStack>
  );
};
