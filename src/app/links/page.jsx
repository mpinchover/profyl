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
  ButtonGroup,
} from "@chakra-ui/react";
import profile_image from "../profile.png";
import { RiEditFill } from "react-icons/ri";
import {
  SectionTitle,
  AccountSectionTitleLink,
  Back,
  UpdateButton,
  AccountSaveCancelBtns,
} from "../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useState } from "react";

const fakeProfileLinksData = [
  { url: "github.com/mpinchover" },
  { url: "medium.com/mpinchover" },
  { url: "artstation.com/mpinchover" },
];

const ProfileLinkItem = ({ disabled, url }) => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root disabled={disabled} width="100%">
        <Input bgColor="gray.900" value={url} />
      </Field.Root>
    </VStack>
  );
};

const ProfileLinkData = ({ data = [], disabled }) => {
  if (data.length === 0) return null;

  return (
    <VStack
      width="100%"
      gapY={4}
      separator={<StackSeparator borderColor="gray.600" />}
      alignItems="start"
    >
      {data.map((e, i) => (
        <ProfileLinkItem disabled={disabled} key={e.id ?? i} url={e.url} />
      ))}
    </VStack>
  );
};

const ProfileLinks = () => {
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
      paddingBottom={staticState ? "80px" : "140px"}
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack
        position="relative"
        alignItems="start"
        width="100%"
        maxWidth="600px"
        gapY={10}
      >
        <Back route="settings" />
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Links" />
          <UpdateButton
            staticState={staticState}
            handleClick={toggleShowSaveButtons}
          />
        </VStack>
        <ProfileLinkData disabled={staticState} data={fakeProfileLinksData} />
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

export default ProfileLinks;
