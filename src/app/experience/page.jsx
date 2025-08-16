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
import { SectionTitle, AccountSectionTitleLink } from "../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

const fakeWorkExpData = [
  {
    start: "July 2024",
    end: "now",
    company: "Uber",
    title: "Software engineer",
  },
  {
    start: "June 2023",
    end: "May 2024",
    company: "Sword Health",
    title: "Software engineer",
  },
];

const ExpItem = () => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root width="100%">
        <Field.Label>Job title</Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your email" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Company </Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your company" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Start date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
      <VStack alignItems="start" width="100%">
        <Field.Root>
          <Field.Label>End date </Field.Label>
          <HStack>
            <Input bgColor="gray.900" placeholder="mm" />
            <Input bgColor="gray.900" placeholder="yyyy" />
          </HStack>
        </Field.Root>
        <Checkbox.Root alignSelf="start">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>I work here now</Checkbox.Label>
        </Checkbox.Root>
      </VStack>
      <Field.Root>
        <Field.Label>Description </Field.Label>

        <Textarea bgColor="gray.900" placeholder="Comment..." resize="none" />
      </Field.Root>
    </VStack>
  );
};

const UpdateButton = () => {
  return (
    <Link fontSize="xs">
      <RiEditFill />
      Update
    </Link>
  );
};

const ExperienceData = ({ data = [] }) => {
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
          key={e.id ?? i}
          title={e.title}
          company={e.company}
          start={e.start}
          end={e.end}
        />
      ))}
    </VStack>
  );
};

const Experience = () => {
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
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Experience" />
          <UpdateButton />
        </VStack>
        <ExperienceData data={fakeWorkExpData} />
      </VStack>
    </VStack>
  );
};

export default Experience;
