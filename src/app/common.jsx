"use client";
import {
  HStack,
  Link,
  Text,
  VStack,
  Button,
  Grid,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowLeftSLine, RiEditFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { RxArrowRight } from "react-icons/rx";
import { useRouter } from "next/navigation";

export const SectionTitle = ({ title, icon }) => {
  return (
    <HStack color="gray.200" position="relative" width="100%">
      {icon}
      <Text fontWeight={"600"}>{title}</Text>
    </HStack>
  );
};

export const AccountSectionTitleLink = ({ title, icon }) => {
  return (
    <Link
      active={{ outline: "none" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none" }}
      href={`/${title.toLowerCase()}`}
    >
      <HStack color="gray.200" position="relative" width="100%">
        {icon}
        <Text fontWeight={"600"}>{title}</Text>
      </HStack>
    </Link>
  );
};

export const Back = ({ handleClick, route }) => {
  return (
    <Link
      active={{ outline: "none" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none" }}
      href={`/${route}`}
      onClick={handleClick}
      fontSize="xs"
    >
      <RiArrowLeftSLine size={18} />
      Back
    </Link>
  );
};

export const UpdateButton = ({ handleClick, staticState }) => {
  return (
    <Link
      onClick={handleClick}
      fontSize="xs"
      display="inline-flex"
      alignItems="center"
      gap="1"
      opacity={staticState ? 1 : 0}
      pointerEvents={staticState ? "auto" : "none"}
      transition="opacity 0.2s ease-in-out"
    >
      <RiEditFill />
      Update
    </Link>
  );
};

export const AddSectionItemBtn = ({ handleAdd, staticState, sectionToAdd }) => {
  return (
    <Button
      // opacity={staticState ? 1 : 0}
      // pointerEvents={staticState ? "auto" : "none"}
      transition="opacity 0.2s ease-in-out"
      w="100%"
    >
      <IoAdd />

      <Text w="100%">Add {sectionToAdd}</Text>
    </Button>
  );
};

export const AccountSaveCancelBtns = ({
  handleSave,
  handleCancel,
  staticState,
}) => {
  return (
    <Flex
      // opacity={!staticState ? 1 : 0}
      // pointerEvents={!staticState ? "auto" : "none"}
      // transition="opacity 0.2s ease-in-out"
      width="100%"
      // alignItems="start"
      // bottom="20px"
      gap={2}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Button flex={{ base: "none", sm: 1 }} onClick={handleSave}>
        Save
      </Button>
      <Button
        onClick={handleCancel}
        variant="subtle"
        flex={{ base: "none", sm: 1 }}
      >
        Cancel
      </Button>
    </Flex>
  );
};

export const WorkExperience = ({ data, isEditMode }) => {
  return (
    <VStack width="100%">
      {data.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <WorkExpItem
              isEditMode={isEditMode}
              title={e.title}
              company={e.company}
              start={e.start}
              end={e.end}
              description={e.description}
            />
          </Box>
        );
      })}
    </VStack>
  );
};

const WorkExpItem = ({
  start,
  end,
  title,
  company,
  description,
  isEditMode,
}) => {
  const router = useRouter();
  const [hidden, setHidden] = useState(!isEditMode);
  const handleSeeMore = () => {
    setHidden((prev) => !prev);
  };

  return (
    <HStack
      borderRadius="sm"
      bgColor="gray.900"
      p="20px"
      fontSize="sm"
      w="100%"
      position="relative"
    >
      <VStack alignItems="start" spacing={1} w="100%">
        <HStack width="100%" justifyContent={"space-between"}>
          <HStack>
            <Text>{company}</Text>
            <Text fontWeight="200">{title}</Text>
          </HStack>
          <Button
            onClick={() => router.push("/update/experience")}
            variant="ghost"
            size="xs"
          >
            <RiEditFill />
          </Button>
        </HStack>

        <HStack fontWeight="200">
          <Text>{start}</Text>
          <RxArrowRight size="12px" />
          <Text>{end}</Text>
        </HStack>

        {/* One-line clamp + fade + ellipsis */}
        <Box position="relative" w="100%">
          <Text transition="0.2s ease" lineClamp={hidden ? 1 : "none"}>
            {description}
          </Text>

          <Box
            position="absolute"
            opacity={hidden ? 1 : 0}
            transition="0.2s ease"
            right="0"
            top="0"
            bottom="0"
            w="100%"
            pointerEvents="none"
            bgGradient="to-l"
            gradientFrom="gray.900"
            gradientTo="transparent"
          ></Box>
        </Box>
        <Link
          onClick={handleSeeMore}
          transition="0.2s ease"
          _hover={{ color: "white" }}
          zIndex={10}
          variant="subtle"
          fontSize="xs"
        >
          {!isEditMode && (hidden ? "See more" : "See less")}
        </Link>
      </VStack>
    </HStack>
  );
};
