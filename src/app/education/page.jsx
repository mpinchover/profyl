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
  AddSectionItemBtn,
  WorkExperience,
  Education,
} from "../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useState } from "react";

const fakeEduData = [
  {
    start: "September 2016",
    end: "May 2020",
    name: "Columbia",
    degree: "B.A",
  },
];

const ProfileEducation = () => {
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
        gapY={8}
      >
        <Back route="settings" />

        <SectionTitle title="Education" />

        <AddSectionItemBtn
          staticState={staticState}
          sectionToAdd="education"
          route="/new/education"
        />
        <Education isEditMode={true} data={fakeEduData} />
      </VStack>
    </VStack>
  );
};

export default ProfileEducation;
