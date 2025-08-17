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
import { IoMdImage } from "react-icons/io";
import { Toaster, toaster } from "@/components/ui/toaster";

import { SectionTitle } from "./common";

const fontSm = "10px";
const dividerSm = "8px";
const sectionDividerMd = "20px";

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
const WorkExperience = ({ data }) => {
  return (
    <VStack width="100%" separator={<StackSeparator borderColor="gray.600" />}>
      {data.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <WorkExpItem
              title={e.title}
              company={e.company}
              start={e.start}
              end={e.end}
            />
          </Box>
        );
      })}
    </VStack>
  );
};

const WorkExpItem = ({ start, end, title, company }) => {
  return (
    <HStack fontSize="sm">
      <VStack alignItems="start" gapY={1}>
        <HStack>
          <Text>{company}</Text>
          {/* <Text>|</Text> */}
          <Text fontWeight="200">{title} </Text>
        </HStack>
        <HStack fontWeight="200">
          <Text>{start}</Text>
          <RxArrowRight size={fontSm} />
          {/* <Text fontSize="xs"> |</Text> */}
          <Text>{end}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const Education = () => {
  return (
    <VStack width="100%" separator={<StackSeparator borderColor="gray.600" />}>
      {fakeEduData.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <EducationItem
              name={e.name}
              start={e.start}
              end={e.end}
              degree={e.degree}
            />
          </Box>
        );
      })}
    </VStack>
  );
};

const EducationItem = ({ start, end, name, degree }) => {
  return (
    <HStack fontSize="sm">
      <VStack alignItems="start" gapY={1}>
        <HStack>
          <Text>{name}</Text>
          <Text fontWeight="200">{degree}</Text>
          {/* <Text>|</Text> */}
        </HStack>
        <HStack fontWeight="200">
          <Text>{start}</Text>
          <RxArrowRight size={fontSm} />
          {/* <Text fontSize="xs"> |</Text> */}
          <Text>{end}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const ProfileLinks = ({ data }) => {
  return (
    <VStack width="100%" separator={<StackSeparator borderColor="gray.600" />}>
      {data.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <PLink url={e.url} />
          </Box>
        );
      })}
    </VStack>
  );
};

const PLink = ({ url }) => {
  return (
    <HStack fontSize={"sm"} alignItems="center">
      {/* <RxGithubLogo /> */}
      <Link>{url}</Link>
    </HStack>
  );
};

const ArtworkItem = ({ src }) => {};

const Artwork = ({ data }) => {
  return (
    <>
      {data.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <ArtworkItem src={e.src} />
          </Box>
        );
      })}
    </>
  );
};

export default function Home() {
  const handleCopyLink = () => {
    toaster.create({
      title: "Copied link",
      // description: "Toast Description",
    });
  };

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

            <Text fontSize="lg" mt="5px">
              Igor Ezmayavitch
            </Text>
            {/* <Text fontSize="xs">@i_ezmaya</Text> */}
            <HStack>
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
            </HStack>
          </VStack>
        </VStack>

        <VStack mt="50px" gap={10} alignContent="start" width="100%">
          <SectionTitle title="Experience" icon={<IoMdBriefcase />} />
          <WorkExperience data={fakeWorkExpData} />
          <SectionTitle title="Education" icon={<IoSchoolSharp />} />
          <Education data={fakeEduData} />
          <SectionTitle title="Links" icon={<FaExternalLinkSquareAlt />} />
          <ProfileLinks data={fakeLinks} />
          {/* <SectionTitle title="Artwork" icon={<IoMdImage />} /> */}
          {/* <Artwork data={[{}, {}]} /> */}
        </VStack>
      </VStack>
    </VStack>
  );
}
