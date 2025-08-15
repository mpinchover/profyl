import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Link,
  Button,
  LinkBox,
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
    <HStack fontSize="sm" gapY={0}>
      {/* <Image
        borderRadius="md"
        src={google_image.src}
        width="40px"
        height="auto"
        aspectRatio={1 / 1}
      /> */}
      <VStack alignItems="start" gapY={0}>
        <HStack>
          <Text>Google</Text>
          {/* <Text>|</Text> */}
          <Text fontWeight="200">Software engineer </Text>
        </HStack>
        <HStack fontSize={fontSm} fontWeight="200">
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
      <VStack alignItems="start" gapY={0}>
        <HStack>
          <Text>Columbia University</Text>
          <Text fontWeight="200">B.A</Text>
          {/* <Text>|</Text> */}
        </HStack>
        <HStack fontSize={fontSm} fontWeight="200">
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

const UpdateButton = () => {
  return (
    <Link fontSize={fontSm} right="0px" position="absolute">
      <RiEditFill /> <Text>Update</Text>
    </Link>
  );
};

export default function Home() {
  return (
    <Box
      paddingBottom="20px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.500"
    >
      <Box paddingX={{ base: "10px", sm: "100px" }}>
        <VStack gapY={0} alignItems="start">
          <Image
            width="140px"
            height="140px"
            borderRadius="md"
            src={profile_image.src}
          />

          <Text fontSize="sm" mt="5px">
            Igor Ezmayavitch
          </Text>
          <HStack fontSize={fontSm}>
            <FiPaperclip size={fontSm} />
            <Text>Copy link to profile</Text>
          </HStack>
          <HStack fontSize={fontSm}>
            <RiDownload2Fill size={fontSm} />
            <Text>Download as CV</Text>
          </HStack>
        </VStack>

        <VStack
          position="relative"
          mt={sectionDividerMd}
          alignItems="start"
          width="100%"
          gap={0}
        >
          <HStack position="relative" width="100%">
            <IoMdBriefcase />
            <Text fontWeight={"600"} fontSize="sm">
              Experience
            </Text>

            <UpdateButton />
          </HStack>

          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box gap={0} key={i} width="100%">
                <WorkExp />
                {i < 1 && <Separator my={dividerSm} borderColor="gray.400" />}
              </Box>
            );
          })}
        </VStack>
        <VStack mt={sectionDividerMd} alignItems="start" width="100%" gap={0}>
          <HStack width="100%" position="relative" fontSize="sm">
            <IoSchoolSharp />
            <Text fontWeight={"600"}>Education</Text>

            <UpdateButton />
          </HStack>

          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box key={i} width="100%">
                <Education />
                {i < 1 && <Separator my={dividerSm} borderColor="gray.400" />}
              </Box>
            );
          })}
        </VStack>
        <VStack mt={sectionDividerMd} alignItems="start" width="100%" gap={0}>
          <HStack position="relative" width="100%">
            <FaExternalLinkSquareAlt />
            <Text fontWeight={"600"} fontSize="sm">
              Links
            </Text>
            <UpdateButton />
          </HStack>
          {Array.from({ length: 2 }).map((e, i) => {
            return (
              <Box key={i} width="100%">
                <PLink />
                {i < 1 && <Separator my={dividerSm} borderColor="gray.400" />}
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}
