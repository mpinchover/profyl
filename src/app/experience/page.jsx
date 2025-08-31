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
} from "../../components/common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useState } from "react";

const fakeWorkExpData = [
  {
    start: "July 2024",
    end: "now",
    company: "Uber",
    title: "Software engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a pulvinar mauris, ac auctor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam aliquet pulvinar odio eu faucibus. In fringilla, tellus ac dignissim congue, sem erat tristique nisl, in bibendum nulla nisi nec elit. Nulla quis commodo urna, vitae vehicula sapien. Aenean velit neque, consectetur eget gravida ullamcorper, volutpat at lectus. Nulla vehicula urna eu lacinia interdum. Praesent vulputate tincidunt justo nec sagittis. Praesent nec augue augue. Vestibulum ullamcorper nec dolor vitae mollis.",
  },
  {
    start: "June 2023",
    end: "May 2024",
    company: "Sword Health",
    title: "Software engineer",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam aliquet pulvinar odio eu faucibus. In fringilla, tellus ac dignissim congue, sem erat tristique nisl, in bibendum nulla nisi nec elit. Nulla quis commodo urna, vitae vehicula sapien. Aenean velit neque, consectetur eget gravida ullamcorper, volutpat at lectus. Nulla vehicula urna eu lacinia interdum. Praesent vulputate tincidunt justo nec sagittis.",
  },
];

const Experience = () => {
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

        <SectionTitle title="Experience" />
        {/* <UpdateButton
            staticState={staticState}
            handleClick={toggleShowSaveButtons}
          /> */}

        <AddSectionItemBtn
          staticState={staticState}
          sectionToAdd="experience"
          route="/new/experience"
        />
        <WorkExperience isEditMode={true} data={fakeWorkExpData} />
      </VStack>
    </VStack>
  );
};

export default Experience;
