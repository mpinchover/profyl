"use client";
import {
  VStack,
  Field,
  Input,
  HStack,
  Checkbox,
  Textarea,
  Box,
  Separator,
  StackDivider,
  StackSeparator,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import profile_image from "../profile.png";
import { RiEditFill } from "react-icons/ri";
import {
  SectionTitle,
  AccountSectionTitleLink,
  AccountSaveCancelBtns,
  UpdateButton,
  Back,
} from "../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";

const PersonalData = ({ disabled }) => {
  return (
    <VStack width="100%" gapY={4}>
      <Field.Root disabled={disabled} width="100%">
        <Field.Label>Name</Field.Label>
        <Input
          onChange={() => {}}
          value="Igor Ezmayvitch"
          bgColor="gray.900"
          placeholder="Enter your email"
        />
      </Field.Root>
      <Field.Root disabled={disabled} width="100%">
        <Field.Label>Handle</Field.Label>
        <Input
          onChange={() => {}}
          value="i_ezmay"
          bgColor="gray.900"
          placeholder="Enter your email"
        />
      </Field.Root>
    </VStack>
  );
};

const Personal = () => {
  const [staticState, setStaticState] = useState(true);

  const toggleShowSaveButtons = () => {
    setStaticState((prev) => !prev);
  };

  const handleSave = () => {
    toggleShowSaveButtons();
  };

  const handleCancel = () => {
    toggleShowSaveButtons();
  };

  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <Back />
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Personal" />
          {staticState && <UpdateButton handleClick={toggleShowSaveButtons} />}
        </VStack>
        <PersonalData disabled={staticState} />
        {!staticState && (
          <AccountSaveCancelBtns
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default Personal;
