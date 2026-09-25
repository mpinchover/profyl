"use client";
import { VStack } from "@chakra-ui/react";
import profile_image from "@/components/common/profile.png";
import { useParams } from "next/navigation";

import { Back, WorkExperience, ProfileHeader } from "@/components/common/common";
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
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      as="main"
      minHeight="100dvh"
      bgColor="gray.800"
      color="gray.300"
      paddingTop={{ base: "84px", md: "96px" }}
      paddingBottom={{ base: "64px", md: "96px" }}
      paddingX={{ base: "20px", sm: "24px" }}
    >
      <VStack
        width="100%"
        maxWidth="600px"
        alignItems="stretch"
        gapY={{ base: "32px", md: "40px" }}
      >
        <ProfileHeader
          isLoading={isLoading}
          src={profile_image.src}
          handle={userHandle}
        />

        <VStack width="100%" alignItems="start" gapY={{ base: "16px", md: "20px" }}>
          <Back route={`p/${userHandle}`} />
          <WorkExperience
            isLoading={isLoading}
            data={fakeWorkExpData}
            seeAll={true}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ProfilePage;
