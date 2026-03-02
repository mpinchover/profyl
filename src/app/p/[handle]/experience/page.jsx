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
  StackSeparator,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import profile_image from "@/components/common/profile.png";
import { FiPaperclip } from "react-icons/fi";
import { RxArrowRight } from "react-icons/rx";
import { Separator } from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { RiArrowLeftSLine, RiDownload2Fill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";
import { Toaster, toaster } from "@/components/ui/toaster";
import { useAuth } from "@/config/auth-context";
import { useParams } from "next/navigation";

import {
  SectionTitle,
  WorkExperience,
  Education,
  ProfileLinks,
  ProfileHeader,
} from "@/components/common/common";
import { useEffect, useState } from "react";

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
      "Quisque a pulvinar mauris, ac auctor augue, Quisque a pulvinar mauris, ac auctor augue,  ac auctor augue,  ac auctor augue,  ac auctor augue, augue, aa, a,b,",
  },
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
      "Quisque a pulvinar mauris, ac auctor augue, Quisque a pulvinar mauris, ac auctor augue,  ac auctor augue,  ac auctor augue,  ac auctor augue, augue, aa, a,b,",
  },
];

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(!profile ? true : false);

  const params = useParams();
  const userHandle = params.handle;

  const getProfile = async (userHandle) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/get-profile/${userHandle}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setProfile(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile(userHandle);
  }, [userHandle]);

  return (
    <VStack
      paddingBottom="100px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      // backgroundColor="black"
      paddingX={{ base: "20px", sm: "none" }}
    >
      <VStack alignItems="start" width="100%" maxWidth="600px">
        <ProfileHeader isLoading={isLoading} src={profile_image.src} />

        <VStack mt="50px" gap={16} alignContent="start" width="100%">
          <WorkExperience
            isLoading={isLoading}
            data={fakeWorkExpData}
            seeAll={true}
            Icon={<RiArrowLeftSLine size={18} />}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ProfilePage;
