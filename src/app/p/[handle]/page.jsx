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
import { RiDownload2Fill } from "react-icons/ri";
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

const HomeLoggedIn = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const userHandle = params.handle;

  const getProfile = () => {};

  useEffect(() => {
    getProfile();
  }, [userHandle]);

  return (
    <VStack
      paddingBottom="100px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
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

            <VStack gapY={0}>
              <Text fontSize="lg" mt="5px">
                Igor Ezmayavitch
              </Text>
              <Text fontSize="xs">@igorezma</Text>
            </VStack>
            {/* <Text fontSize="xs">@i_ezmaya</Text> */}
            {/* <HStack>
              <Button
                onClick={handleCopyLink}
                borderRadius="full"
                p={1}
                bgColor="gray.700"
              >
                <Icon color="gray.100" as={FiPaperclip} boxSize={4} />
              </Button>
              <Button borderRadius="full" p={1} bgColor="gray.700">
                <Icon color="gray.100" as={RiDownload2Fill} boxSize={4} />
              </Button>
            </HStack> */}
          </VStack>
        </VStack>

        <VStack mt="50px" gap={16} alignContent="start" width="100%">
          <WorkExperience data={fakeWorkExpData} />

          <Education data={fakeEduData} />

          <ProfileLinks data={fakeLinks} />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default HomeLoggedIn;
