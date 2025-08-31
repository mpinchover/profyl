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
  CloseButton,
  Dialog,
  Portal,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { use } from "react";

import { RiEditFill } from "react-icons/ri";
import {
  SectionTitle,
  AccountSectionTitleLink,
  Back,
  UpdateButton,
  AccountSaveCancelBtns,
  AddSectionItemBtn,
  WorkExperience,
  DeleteProfileItemBtn,
} from "../../../common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fakeEduData = [
  {
    start: "September 2016",
    end: "May 2020",
    name: "Columbia",
    degree: "B.A",
  },
];

const EdItem = ({ disabled }) => {
  return (
    <VStack gapY={4} width="100%">
      <Field.Root disabled={disabled} width="100%">
        <Field.Label>University</Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your university" />
      </Field.Root>
      <Field.Root disabled={disabled}>
        <Field.Label>Degree </Field.Label>
        <Input bgColor="gray.900" placeholder="Enter your degree" />
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
      </VStack>
      <Field.Root disabled={disabled}>
        <Field.Label>Description </Field.Label>

        <Textarea bgColor="gray.900" placeholder="Comment..." resize="none" />
      </Field.Root>
    </VStack>
  );
};

const EducationData = ({ data = [], disabled, handleDelete }) => {
  if (data.length === 0) return null;

  return (
    <VStack width="100%" gapY={4} alignItems="start">
      <EdItem
        disabled={disabled}
        title={fakeWorkExpData.title}
        company={fakeWorkExpData.company}
        start={fakeWorkExpData.start}
        end={fakeWorkExpData.end}
        description={fakeWorkExpData.description}
      />
      <DeleteProfileItemBtn
        handleDelete={handleDelete}
        profileSection={"experence"}
      />
    </VStack>
  );
};

const UpdateEducation = ({ params }) => {
  const { uuid } = use(params);

  const itemUUID = uuid;
  const [staticState, setStaticState] = useState(true);

  const router = useRouter();

  const handleCancel = () => {
    router.push("/experience");
  };

  const handleDelete = () => {};

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
        {/* <Back route="experience" /> */}

        <EducationData handleDelete={handleDelete} data={fakeEduData} />
        <AccountSaveCancelBtns handleCancel={handleCancel} />
      </VStack>
    </VStack>
  );
};

export default UpdateEducation;
