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

const ExpItem = ({ disabled }) => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root disabled={disabled} width="100%">
        <Field.Label>Job title</Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your email" />
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Company </Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your company" />
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Start date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
      <VStack alignItems="start" width="100%">
        <Field.Root disabled={disabled}>
          <Field.Label>End date </Field.Label>
          <HStack>
            <Input bgColor="gray.900" placeholder="mm" />
            <Input bgColor="gray.900" placeholder="yyyy" />
          </HStack>
        </Field.Root>
        <Checkbox.Root disabled={disabled} alignSelf="start">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>I work here now</Checkbox.Label>
        </Checkbox.Root>
      </VStack>
      <Field.Root disabled={disabled}>
        <Field.Label>Description </Field.Label>

        <Textarea bgColor="gray.900" placeholder="Comment..." resize="none" />
      </Field.Root>
    </VStack>
  );
};

const ExperienceData = ({ data = [], disabled }) => {
  if (data.length === 0) return null;

  return (
    <VStack
      width="100%"
      gapY={4}
      separator={<StackSeparator borderColor="gray.600" />}
      alignItems="start"
    >
      {data.map((e, i) => (
        <ExpItem
          disabled={disabled}
          key={e.id ?? i}
          title={e.title}
          company={e.company}
          start={e.start}
          end={e.end}
          description={e.description}
        />
      ))}
    </VStack>
  );
};

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
        gapY={10}
      >
        <Back route="settings" />
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Experience" />
          {staticState && <UpdateButton handleClick={toggleShowSaveButtons} />}
        </VStack>
        <ExperienceData disabled={staticState} data={fakeWorkExpData} />
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

export default Experience;
