"use client";
import { VStack } from "@chakra-ui/react";
import profile_image from "@/components/common/profile.png";
import { useParams } from "next/navigation";

import {
  PageShell,
  WorkExperience,
  Education,
  ProfileLinks,
  ProfileHeader,
} from "@/components/common/common";
import { useEffect, useState } from "react";
import {
  workExperience,
  education,
  links,
  profileName,
} from "@/data/profile";

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
    <PageShell>
      <ProfileHeader
        isLoading={isLoading}
        src={profile_image.src}
        name={profileName}
        handle={userHandle}
      />

      <VStack width="100%" gapY={{ base: "32px", md: "40px" }}>
        <WorkExperience isLoading={isLoading} data={workExperience} />
        <Education isLoading={isLoading} data={education} />
        <ProfileLinks isLoading={isLoading} data={links} />
      </VStack>
    </PageShell>
  );
};

export default ProfilePage;
