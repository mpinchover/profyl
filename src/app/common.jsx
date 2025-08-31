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
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowLeftSLine, RiEditFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { RxArrowRight } from "react-icons/rx";
import { useRouter } from "next/navigation";

const fontSm = "10px";
const dividerSm = "8px";
const sectionDividerMd = "20px";
const NUM_ITEMS_TO_SHOW_PROFILE_SECTION = 1;

const numProfileItemsToShow = (showAll, isEditMode, data) => {
  if (isEditMode || showAll) {
    return data;
  }
  return data.slice(0, NUM_ITEMS_TO_SHOW_PROFILE_SECTION);
};

export const DeleteProfileItemBtn = ({ handleDelete, profileSection }) => {
  return (
    <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Link color="red" variant="subtle" fontSize="xs">
          Delete {profileSection}
        </Link>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete {profileSection}?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button onClick={handleDelete}>Delete</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

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
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/new/experience")}
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
        // variant="subtle"
        // bgColor="gray.700"
        color="gray.100"
        border="1px solid"
        borderColor="gray.100"
        _hover={{ color: "gray.300", borderColor: "gray.300" }}
        bgColor="transparent"
        flex={{ base: "none", sm: 1 }}
      >
        Cancel
      </Button>
    </Flex>
  );
};

export const WorkExperience = ({ data, isEditMode }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const dataToDisplay = numProfileItemsToShow(showAll, isEditMode, data);
  return (
    <VStack width="100%" alignItems="start">
      {dataToDisplay.map((e, i) => {
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
      {!isEditMode && (
        <SeeAllProfileItemsBtn
          showAll={showAll}
          handleShowAll={handleShowAll}
          title="education"
          n={7}
        />
      )}
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
          {isEditMode && (
            <Button
              onClick={() => router.push("/update/experience/some-id")}
              variant="ghost"
              size="xs"
            >
              <RiEditFill />
            </Button>
          )}
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

const SeeAllProfileItemsBtn = ({ title, n, handleShowAll, showAll }) => {
  return (
    <Link onClick={handleShowAll}>
      {showAll ? (
        <Text fontSize="xs">See less</Text>
      ) : (
        <Text fontSize="xs">
          See all {title} ({n})
        </Text>
      )}
    </Link>
  );
};
export const Education = ({ data, isEditMode }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const dataToDisplay = numProfileItemsToShow(showAll, isEditMode, data);

  return (
    <VStack width="100%" alignItems="start">
      {dataToDisplay.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <EducationItem
              isEditMode={isEditMode}
              name={e.name}
              start={e.start}
              end={e.end}
              degree={e.degree}
            />
          </Box>
        );
      })}
      {!isEditMode && (
        <SeeAllProfileItemsBtn
          showAll={showAll}
          handleShowAll={handleShowAll}
          title="education"
          n={7}
        />
      )}
    </VStack>
  );
};

const EducationItem = ({
  id, // e.g. education item uuid
  start,
  end,
  name, // school
  degree, // e.g. B.S. Computer Science
  description = "", // optional: coursework, honors, summary
  isEditMode,
}) => {
  const router = useRouter();
  const [hidden, setHidden] = useState(!isEditMode);
  const handleSeeMore = () => setHidden((prev) => !prev);

  const showSeeMore = !isEditMode && description && description.length > 0;

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
        <HStack w="100%" justifyContent="space-between">
          <HStack>
            <Text>{name}</Text>
            <Text fontWeight="200">{degree}</Text>
          </HStack>

          {isEditMode && (
            <Button
              onClick={() => router.push(`/update/education/"some-id"`)}
              variant="ghost"
              size="xs"
            >
              <RiEditFill />
            </Button>
          )}
        </HStack>

        <HStack fontWeight="200">
          <Text>{start}</Text>
          <RxArrowRight size="12px" />
          <Text>{end}</Text>
        </HStack>

        {!!description && (
          <>
            {/* One-line clamp + fade + ellipsis (mirrors WorkExpItem) */}
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
              />
            </Box>

            {showSeeMore && (
              <Link
                onClick={handleSeeMore}
                transition="0.2s ease"
                _hover={{ color: "white" }}
                zIndex={10}
                variant="subtle"
                fontSize="xs"
              >
                {hidden ? "See more" : "See less"}
              </Link>
            )}
          </>
        )}
      </VStack>
    </HStack>
  );
};

export const ProfileLinks = ({ data }) => {
  return (
    <VStack width="100%">
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
    <HStack
      borderRadius="sm"
      bgColor="gray.900"
      p={"20px"}
      fontSize={"sm"}
      alignItems="center"
    >
      {/* <RxGithubLogo /> */}
      <Link>{url}</Link>
    </HStack>
  );
};
