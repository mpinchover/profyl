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
  Back,
} from "../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";

const fakeEduData = [
  {
    start: "September 2016",
    end: "May 2020",
    name: "Columbia",
    degree: "B.A",
  },
];

const UpdateButton = ({ handleClick }) => {
  return (
    <Link onClick={handleClick} fontSize="xs">
      <RiEditFill />
      Update
    </Link>
  );
};

const EdItem = ({ disabled }) => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root disabled={disabled} width="100%">
        <Field.Label>School</Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your email" />
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Field of study </Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your company" />
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Degree </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="Enter your company" />
        </HStack>
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Start date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>End date </Field.Label>
        <HStack>
          <Input bgColor="gray.900" placeholder="mm" />
          <Input bgColor="gray.900" placeholder="yyyy" />
        </HStack>
      </Field.Root>
    </VStack>
  );
};

const EducationData = ({ data = [], disabled }) => {
  if (data.length === 0) return null;

  return (
    <VStack
      width="100%"
      gapY={4}
      separator={<StackSeparator borderColor="gray.600" />}
    >
      {data.map((e, i) => (
        <EdItem
          disabled={disabled}
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
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <Back route="settings" />
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Education" />
          <UpdateButton
            staticState={staticState}
            handleClick={toggleShowSaveButtons}
          />
        </VStack>
        <EducationData disabled={staticState} data={fakeEduData} />
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

export default Education;
