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
    <Link>
      <HStack color="gray.200" position="relative" width="100%">
        {icon}
        <Text fontWeight={"600"}>{title}</Text>
      </HStack>
    </Link>
  );
};

export const Back = ({ handleClick }) => {
  return (
    <Link onClick={handleClick} fontSize="xs">
      <RiArrowLeftSLine size={18} />
      Back
    </Link>
  );
};

export const UpdateButton = ({ handleClick }) => {
  const [show, setShow] = useState(true);
  return (
    <Link
      // opacity={show ? 1 : 0}
      // animation=".2s ease"
      onClick={handleClick}
      fontSize="xs"
    >
      <RiEditFill />
      Update
    </Link>
  );
};

export const AccountSaveCancelBtns = ({ handleSave, handleCancel }) => {
  return (
    <VStack width="100%" alignItems="start" bottom="20px" position="fixed">
      <Button onClick={handleSave} width="140px">
        Save
      </Button>
      <Button onClick={handleCancel} variant="subtle" width="140px">
        Cancel
      </Button>
    </VStack>
  );
};
