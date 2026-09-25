"use client";
import {
  HStack,
  Link,
  Text,
  VStack,
  Button,
  Flex,
  CloseButton,
  Dialog,
  Portal,
  Separator,
  SkeletonCircle,
  SkeletonText,
  Image,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { RiArrowLeftSLine, RiEditFill } from "react-icons/ri";
import { IoAdd, IoLink, IoSchoolSharp } from "react-icons/io5";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { IoMdBriefcase } from "react-icons/io";

const NUM_ITEMS_TO_SHOW_PROFILE_SECTION = 1;

// Single source of truth for the profile surfaces so every card on the
// profile shares the same radius, padding, border and hover behaviour.
const cardStyles = {
  width: "100%",
  bgColor: "gray.900",
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "gray.700",
  padding: { base: "16px", sm: "20px" },
  transition: "border-color 0.2s ease, background-color 0.2s ease",
};

const sectionGap = { base: "12px", sm: "16px" };

const numProfileItemsToShow = (showAll, isEditMode, data = []) => {
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
    <HStack width="100%" gap="2.5">
      {icon && (
        <Flex color="gray.400" alignItems="center" fontSize="sm">
          {icon}
        </Flex>
      )}
      <Text
        color="gray.100"
        fontSize="sm"
        fontWeight="600"
        letterSpacing="0.01em"
        whiteSpace="nowrap"
      >
        {title}
      </Text>
      <Separator flex="1" borderColor="gray.700" />
    </HStack>
  );
};

export const AccountSectionTitleLink = ({ title, icon }) => {
  return (
    <Link
      width="100%"
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none" }}
      href={`/${title.toLowerCase()}`}
    >
      <SectionTitle title={title} icon={icon} />
    </Link>
  );
};

export const Back = ({ handleClick, route }) => {
  return (
    <Link
      href={`/${route}`}
      onClick={handleClick}
      display="inline-flex"
      alignItems="center"
      gap="0.5"
      fontSize="xs"
      fontWeight="500"
      color="gray.400"
      transition="color 0.2s ease"
      _focus={{ outline: "none", boxShadow: "none" }}
      _hover={{ textDecoration: "none", color: "gray.100" }}
    >
      <RiArrowLeftSLine size={16} />
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
      width="100%"
      gap={2}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Button flex={{ base: "none", sm: 1 }} onClick={handleSave}>
        Save
      </Button>
      <Button
        onClick={handleCancel}
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

const CardSkeleton = ({ count = 1, noOfLines = 2 }) => {
  return Array.from({ length: count }).map((_, i) => (
    <VStack key={i} {...cardStyles} gapY="3" alignItems="start">
      <SkeletonText backgroundColor="gray.700" width="180px" noOfLines={1} />
      <SkeletonText backgroundColor="gray.700" width="120px" noOfLines={1} />
      {noOfLines > 0 && (
        <SkeletonText
          backgroundColor="gray.700"
          width="full"
          noOfLines={noOfLines}
        />
      )}
    </VStack>
  ));
};

export const WorkExperience = ({
  data = [],
  isEditMode,
  isLoading,
  seeAll = false,
  Icon = <IoMdBriefcase />,
}) => {
  const [showAll, setShowAll] = useState(seeAll);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const dataToDisplay = numProfileItemsToShow(showAll, isEditMode, data);
  const canSeeAll =
    !isLoading &&
    !isEditMode &&
    !seeAll &&
    data.length > NUM_ITEMS_TO_SHOW_PROFILE_SECTION;

  return (
    <VStack width="100%" gapY={sectionGap} alignItems="start">
      <SectionTitle title="Experience" icon={Icon} />
      {isLoading ? (
        <CardSkeleton count={2} />
      ) : (
        dataToDisplay.map((e, i) => (
          <ProfileItemCard
            key={`${e.company}-${e.start}-${i}`}
            isEditMode={isEditMode}
            primary={e.company}
            secondary={e.title}
            start={e.start}
            end={e.end}
            description={e.description}
            onEdit={() => "/update/experience/some-id"}
          />
        ))
      )}
      {canSeeAll && (
        <SeeAllProfileItemsBtn
          showAll={showAll}
          handleShowAll={handleShowAll}
          title="experience"
          n={data.length}
        />
      )}
    </VStack>
  );
};

export const ProfileHeader = ({
  src,
  isLoading,
  name = "Matt Pin",
  handle = "igorezma",
}) => {
  if (isLoading) {
    return (
      <VStack width="100%" alignItems="center" gapY={{ base: "16px", sm: "20px" }}>
        <SkeletonCircle
          backgroundColor="gray.700"
          size={{ base: "88px", sm: "104px" }}
        />
        <VStack gapY="2" alignItems="center">
          <SkeletonText
            width="180px"
            height="20px"
            backgroundColor="gray.700"
            noOfLines={1}
          />
          <SkeletonText
            width="100px"
            backgroundColor="gray.700"
            noOfLines={1}
          />
        </VStack>
      </VStack>
    );
  }

  return (
    <VStack width="100%" alignItems="center" gapY={{ base: "16px", sm: "20px" }}>
      <Image
        src={src}
        alt={name}
        boxSize={{ base: "88px", sm: "104px" }}
        borderRadius="full"
        objectFit="cover"
        bgColor="gray.900"
        borderWidth="1px"
        borderColor="gray.700"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.35)"
      />

      <VStack gapY="1" textAlign="center">
        <Text
          color="gray.100"
          fontSize={{ base: "xl", sm: "2xl" }}
          fontWeight="600"
          letterSpacing="-0.02em"
          lineHeight="1.2"
        >
          {name}
        </Text>
        <Text color="gray.400" fontSize="sm">
          @{String(handle).replace(/^@/, "")}
        </Text>
      </VStack>
    </VStack>
  );
};

const DateRange = ({ start, end }) => {
  if (!start && !end) return null;

  return (
    <HStack color="gray.400" fontSize="xs" gap="1.5" fontWeight="400">
      <Text>{start}</Text>
      <RxArrowRight size="12px" />
      <Text>{end}</Text>
    </HStack>
  );
};

// Shared card for experience and education entries: same header row, the same
// date range treatment and the same clamped description with a See more toggle.
const ProfileItemCard = ({
  primary,
  secondary,
  start,
  end,
  description,
  isEditMode,
  onEdit,
  clampLines = 3,
}) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Chakra clamps with display:-webkit-box, so overflow shows up as a
    // scrollHeight taller than the rendered box.
    const measure = () =>
      setIsOverflowing(el.scrollHeight > el.offsetHeight + 1);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [description, expanded]);

  const showSeeMore = !isEditMode && !!description && (isOverflowing || expanded);

  return (
    <VStack
      {...cardStyles}
      gapY="2"
      alignItems="start"
      fontSize="sm"
      _hover={{ borderColor: "gray.600" }}
    >
      <HStack width="100%" justifyContent="space-between" gap="3" alignItems="start">
        <HStack gap="2" flexWrap="wrap" rowGap="0.5">
          <Text color="gray.100" fontWeight="600">
            {primary}
          </Text>
          {secondary && <Text color="gray.300">{secondary}</Text>}
        </HStack>
        {isEditMode && (
          <Button
            onClick={() => router.push(onEdit())}
            variant="ghost"
            size="xs"
            color="gray.400"
            _hover={{ color: "gray.100", bgColor: "gray.800" }}
            aria-label={`Edit ${primary}`}
          >
            <RiEditFill />
          </Button>
        )}
      </HStack>

      <DateRange start={start} end={end} />

      {!!description && (
        <Text
          ref={textRef}
          color="gray.300"
          lineHeight="1.7"
          mt="1"
          lineClamp={expanded ? "none" : clampLines}
        >
          {description}
        </Text>
      )}

      {showSeeMore && (
        <InlineToggleBtn
          onClick={() => setExpanded((prev) => !prev)}
          label={expanded ? "See less" : "See more"}
        />
      )}
    </VStack>
  );
};

const InlineToggleBtn = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      variant="plain"
      height="auto"
      minHeight="0"
      paddingX="0"
      fontSize="xs"
      fontWeight="500"
      color="gray.400"
      _hover={{ color: "gray.100" }}
      transition="color 0.2s ease"
    >
      {label}
    </Button>
  );
};

const SeeAllProfileItemsBtn = ({ title, n, handleShowAll, showAll }) => {
  return (
    <Flex width="100%" justifyContent="center" paddingTop="1">
      <InlineToggleBtn
        onClick={handleShowAll}
        label={showAll ? "Show less" : `See all ${title} (${n})`}
      />
    </Flex>
  );
};

export const Education = ({ data = [], isEditMode, isLoading }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const dataToDisplay = numProfileItemsToShow(showAll, isEditMode, data);
  const canSeeAll =
    !isLoading &&
    !isEditMode &&
    data.length > NUM_ITEMS_TO_SHOW_PROFILE_SECTION;

  return (
    <VStack width="100%" gapY={sectionGap} alignItems="start">
      <SectionTitle title="Education" icon={<IoSchoolSharp />} />
      {isLoading ? (
        <CardSkeleton count={1} />
      ) : (
        dataToDisplay.map((e, i) => (
          <ProfileItemCard
            key={`${e.name}-${e.start}-${i}`}
            isEditMode={isEditMode}
            primary={e.name}
            secondary={e.degree}
            start={e.start}
            end={e.end}
            description={e.description}
            onEdit={() => "/update/education/some-id"}
          />
        ))
      )}
      {canSeeAll && (
        <SeeAllProfileItemsBtn
          showAll={showAll}
          handleShowAll={handleShowAll}
          title="education"
          n={data.length}
        />
      )}
    </VStack>
  );
};

export const ProfileLinks = ({ data = [], isLoading }) => {
  return (
    <VStack width="100%" gapY={sectionGap} alignItems="start">
      <SectionTitle title="Links" icon={<IoLink />} />
      {isLoading ? (
        <CardSkeleton count={2} noOfLines={0} />
      ) : (
        data.map((e, i) => <PLink key={`${e.url}-${i}`} url={e.url} />)
      )}
    </VStack>
  );
};

const PLink = ({ url }) => {
  const href = /^https?:\/\//.test(url) ? url : `https://${url}`;

  return (
    <Link
      {...cardStyles}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="3"
      fontSize="sm"
      color="gray.300"
      _hover={{
        textDecoration: "none",
        color: "gray.100",
        borderColor: "gray.600",
      }}
      _focusVisible={{ outline: "none", borderColor: "gray.600" }}
    >
      <Text truncate>{url}</Text>
      <Flex color="gray.400" flexShrink={0}>
        <RxArrowTopRight size="14px" />
      </Flex>
    </Link>
  );
};
