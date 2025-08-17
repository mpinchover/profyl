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

const dividerSm = "8px";

const fakeLinks = [
  {
    url: "github.com/mpinchover",
  },
  {
    url: "medium.com/mpinch",
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

const Experience = ({ data = [] }) => {
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

const Links = () => {
  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack width="100%" alignItems="center" position="relative">
        <Box
          borderRadius="full"
          transition="filter 0.2s ease"
          _hover={{ filter: "brightness(0.5)" }}
          overflow="hidden"
        >
          <Image
            width="100px"
            height="100px"
            src={profile_image.src}
            cursor="pointer"
          />
        </Box>
        {/* <Button
          _hover={{ background: "transparent" }}
          bottom="15%"
          variant="ghost"
          size="xs"
          position="absolute"
        >
          Update
        </Button> */}
      </VStack>
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Account" />
          {/* <UpdateButton /> */}
        </VStack>
        <AccountSettings />
      </VStack>
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Personal" />
          <UpdateButton />
        </VStack>
        <Personal />
      </VStack>
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Experience" />
          <UpdateButton />
        </VStack>
        <Experience data={fakeWorkExpData} />
      </VStack>
      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <VStack width="100" alignItems="start" gapY={0}>
          <SectionTitle title="Education" />
          <UpdateButton />
        </VStack>
        <Education data={fakeEduData} />
      </VStack>

      
    </VStack>
  );
};

export default Links;
