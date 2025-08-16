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

const fakeEduData = [
  {
    start: "September 2016",
    end: "May 2020",
    name: "Columbia",
    degree: "B.A",
  },
];

const UpdateButton = () => {
  return (
    <Link fontSize="xs">
      <RiEditFill />
      Update
    </Link>
  );
};

const EdItem = () => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root width="100%">
        <Field.Label>School</Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your email" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Field of study </Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your company" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Degree </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="Enter your company" />
        </HStack>
      </Field.Root>
      <Field.Root>
        <Field.Label>Start date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
      <Field.Root>
        <Field.Label>End date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
    </VStack>
  );
};

const EducationData = ({ data = [] }) => {
  if (data.length === 0) return null;

  return (
    <VStack
      width="100%"
      gapY={4}
      separator={<StackSeparator borderColor="gray.600" />}
    >
      {data.map((e, i) => (
        <EdItem
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

const Education = () => {
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
          <SectionTitle title="Education" />
          <UpdateButton />
        </VStack>
        <EducationData data={fakeEduData} />
      </VStack>
    </VStack>
  );
};

export default Education;
