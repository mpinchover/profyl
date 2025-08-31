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
import { SectionTitle, AccountSectionTitleLink } from "../../components/common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

const Settings = () => {
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
export default Settings;
