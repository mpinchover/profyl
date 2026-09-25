"use client";
import { VStack } from "@chakra-ui/react";
import profile_image from "@/components/common/profile.png";
import { useAuth } from "@/config/auth-context";

import {
  PageShell,
  ProfileHeader,
  WorkExperience,
  Education,
  ProfileLinks,
} from "@/components/common/common";
import {
  workExperience,
  education,
  links,
  profileName,
  profileHandle,
} from "@/data/profile";

const HomeLoggedIn = () => {
  const { user } = useAuth();

  return (
    <PageShell>
      <ProfileHeader
        src={user?.photoURL || profile_image.src}
        name={user?.displayName || profileName}
        handle={profileHandle}
      />

      <VStack width="100%" gapY={{ base: "32px", md: "40px" }}>
        <WorkExperience data={workExperience} />
        <Education data={education} />
        <ProfileLinks data={links} />
      </VStack>
    </PageShell>
  );
};

export default HomeLoggedIn;
