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
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";

const roles = [
  { company: "Docker", title: "Senior software engineer" },
  { company: "Docker", title: "Senior software engineer" },
];

const companies = ["Docker", "Suno", "Replit"];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const JobAction = ({ applied, setApplied, loading, handleApply }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100px"
      right="10px"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      //   height="50px"
    >
      {!applied && (
        <Button onClick={handleApply} loading={loading}>
          Apply
        </Button>
      )}
      {applied && <CiCircleCheck color="green" size="35px" />}
    </Flex>
  );
};

const Job = ({ company, title }) => {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleApply = async () => {
    setLoading(true);
    try {
      await sleep(2000);
      setApplied(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack
      width="100%"
      gapY={0}
      p="20px"
      _hover={{ backgroundColor: "gray.700" }}
      position="relative"
    >
      <Text width="100%" textAlign={"left"}>
        {title}
      </Text>
      <Text fontSize={"xs"} width="100%" textAlign={"left"}>
        {company}
      </Text>

      <JobAction
        handleApply={handleApply}
        applied={applied}
        setApplied={setApplied}
        loading={loading}
      />
    </VStack>
  );
};

const JobsPage = () => {
  return (
    <VStack
      paddingBottom="100px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
    >
      <VStack alignItems="start" width="100%" maxWidth="600px">
        <VStack alignItems="start" width="100%">
          <Text fontWeight="700" textAlign={"left"}>
            Roles
          </Text>
          <Box width="100%" backgroundColor="gray.900">
            {roles.map(({ company, title }, i) => {
              return <Job key={i} company={company} title={title} />;
            })}
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default JobsPage;
