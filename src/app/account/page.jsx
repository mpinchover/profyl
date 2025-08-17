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

const fakeEduData = [
  {
    start: "September 2016",
    end: "May 2020",
    name: "Columbia",
    degree: "B.A",
  },
];

const fakeLinks = [
  {
    url: "github.com/mpinchover",
  },
  {
    url: "medium.com/mpinch",
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

const Education = ({ data = [] }) => {
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

const Personal = () => {
  return (
    <VStack width="100%" gapY={4}>
      <Field.Root width="100%">
        <Field.Label>Name</Field.Label>
        <Input
          onChange={() => {}}
          value="Igor Ezmayvitch"
          bgColor="gray.900"
          placeholder="Enter your email"
        />
      </Field.Root>
      <Field.Root width="100%">
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

const AccountSettings = () => {
  return (
    <VStack width="100%" gapY={4}>
      <Field.Root width="100%">
        <Field.Label>Email</Field.Label>
        <Input
          disabled={true}
          onChange={() => {}}
          value="igor@gmail.com"
          bgColor="gray.900"
          placeholder="Enter your email"
        />
      </Field.Root>
    </VStack>
  );
};

// const Account = () => {
//   return (
//     <VStack
//       paddingBottom="80px"
//       paddingTop="80px"
//       minHeight="100dvh"
//       bgColor="gray.800"
//       paddingX={{ base: "20px", sm: "none" }}
//       gapY={14}
//     >
//       <VStack width="100%" alignItems="center" position="relative">
//         <Box
//           borderRadius="full"
//           transition="filter 0.2s ease"
//           _hover={{ filter: "brightness(0.5)" }}
//           overflow="hidden"
//         >
//           <Image
//             width="100px"
//             height="100px"
//             src={profile_image.src}
//             cursor="pointer"
//           />
//         </Box>
//         {/* <Button
//           _hover={{ background: "transparent" }}
//           bottom="15%"
//           variant="ghost"
//           size="xs"
//           position="absolute"
//         >
//           Update
//         </Button> */}
//       </VStack>
// <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
//   <VStack width="100" alignItems="start" gapY={0}>
//     <SectionTitle title="Account" />
//     {/* <UpdateButton /> */}
//   </VStack>
//   <AccountSettings />
// </VStack>
//       <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
//         <VStack width="100" alignItems="start" gapY={0}>
//           <SectionTitle title="Personal" />
//           <UpdateButton />
//         </VStack>
//         <Personal />
//       </VStack>
//       <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
//         <VStack width="100" alignItems="start" gapY={0}>
//           <SectionTitle title="Experience" />
//           <UpdateButton />
//         </VStack>
//         <Experience data={fakeWorkExpData} />
//       </VStack>
//       <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
//         <VStack width="100" alignItems="start" gapY={0}>
//           <SectionTitle title="Education" />
//           <UpdateButton />
//         </VStack>
//         <Education data={fakeEduData} />
//       </VStack>
//     </VStack>
//   );
// };

const Account = () => {
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
          // transition="0.2s ease"
          bgColor="gray.200"
          overflow="hidden"
        >
          <Image
            width="100px"
            height="100px"
            src={profile_image.src}
            cursor="pointer"
            _hover={{ opacity: 0.6 }}
            transition="0.2s ease"
          />
        </Box>
      </VStack>

      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <AccountSectionTitleLink icon={<IoSettingsSharp />} title="Account" />
        <AccountSectionTitleLink icon={<IoPerson />} title="Personal" />
        <AccountSectionTitleLink icon={<IoMdBriefcase />} title="Experience" />
        <AccountSectionTitleLink icon={<IoSchoolSharp />} title="Education" />
        <AccountSectionTitleLink
          icon={<FaExternalLinkSquareAlt />}
          title="Links"
        />
      </VStack>
    </VStack>
  );
};
export default Account;
