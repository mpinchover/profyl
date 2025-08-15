"use client";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Link,
  Button,
  LinkBox,
  Icon,
} from "@chakra-ui/react";
import profile_image from "./profile.png";
import google_image from "./google.png";
import { FiPaperclip } from "react-icons/fi";
import { RxArrowRight } from "react-icons/rx";
import { Separator } from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { RiDownload2Fill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import { RiEditFill } from "react-icons/ri";
import { Tabs } from "@chakra-ui/react";
import { Butterfly_Kids } from "next/font/google";

const fontSm = "10px";
const dividerSm = "8px";
const sectionDividerMd = "20px";

const WorkExp = () => {
  return (
    <HStack fontSize="sm">
      <VStack alignItems="start" gapY={1}>
        <HStack>
          <Text>Google</Text>
          {/* <Text>|</Text> */}
          <Text fontWeight="200">Software engineer </Text>
        </HStack>
        <HStack fontWeight="200">
          <Text>May 2024 </Text>
          <RxArrowRight size={fontSm} />
          {/* <Text fontSize="xs"> |</Text> */}
          <Text>now</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const Education = () => {
  return (
    <HStack fontSize="sm">
      <VStack alignItems="start" gapY={1}>
        <HStack>
          <Text>Columbia University</Text>
          <Text fontWeight="200">B.A</Text>
          {/* <Text>|</Text> */}
        </HStack>
        <HStack fontWeight="200">
          <Text>May 2024 </Text>
          <RxArrowRight size={fontSm} />
          {/* <Text fontSize="xs"> |</Text> */}
          <Text>now</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const PLink = () => {
  return (
    <HStack fontSize={"sm"} alignItems="center">
      {/* <RxGithubLogo /> */}
      <Link>github.com/mpinchover</Link>
    </HStack>
  );
};

// const UpdateButton = () => {
//   return (
//     <Link
//       // onClick={handleClick}
//       fontSize={fontSm}
//       right="0px"
//       position="absolute"
//     >
//       <RiEditFill /> <Text>Update</Text>
//     </Link>
//   );
// };

const SectionTitle = ({ title }) => {
  return (
    <HStack color="gray.200" position="relative" width="100%">
      <IoMdBriefcase />
      <Text fontWeight={"600"}>{title}</Text>
    </HStack>
  );
};

export default function Home() {
  const handleClick = () => {
    toaster.create({
      title: "Copied link",
      // description: "Toast Description",
    });
  };

  return (
    <VStack
      paddingBottom="20px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
    >
      <VStack alignItems="start" width="100%" maxWidth="600px">
        <VStack gapY={0} alignItems="start" width="100%">
          <VStack width="100%" alignItems="center">
            <Image
              width="100px"
              height="100px"
              borderRadius="full"
              src={profile_image.src}
            />

            <Text fontSize="lg" mt="5px">
              Igor Ezmayavitch
            </Text>
            <HStack>
              <Button borderRadius="full" p={1} bgColor="gray.700">
                <Icon color="gray.100" as={FiPaperclip} boxSize={4} />
              </Button>
              <Button borderRadius="full" p={1} bgColor="gray.700">
                <Icon color="gray.100" as={RiDownload2Fill} boxSize={4} />
              </Button>
            </HStack>
          </VStack>
          {/* <HStack fontSize={fontSm}> */}
        </VStack>

        <VStack
          position="relative"
          mt={sectionDividerMd}
          alignItems="start"
          width="100%"
        >
          <SectionTitle title="Experience" />

          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box key={i} width="100%">
                <WorkExp />
                {i < 1 && <Separator mt={dividerSm} borderColor="gray.600" />}
              </Box>
            );
          })}
        </VStack>
        <VStack mt={sectionDividerMd} alignItems="start" width="100%">
          <SectionTitle title="Education" />

          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box key={i} width="100%">
                <Education />
                {i < 1 && <Separator mt={dividerSm} borderColor="gray.600" />}
              </Box>
            );
          })}
        </VStack>
        <VStack mt={sectionDividerMd} alignItems="start" width="100%">
          <SectionTitle title="Links" />
          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box key={i} width="100%">
                <PLink />
                {i < 1 && <Separator mt={dividerSm} borderColor="gray.600" />}
              </Box>
            );
          })}
        </VStack>
      </VStack>
    </VStack>
  );
}
