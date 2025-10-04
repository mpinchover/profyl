"use client";
import {
  VStack,
  Link,
  Image,
  Text,
  Button,
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";
import image6 from "./image6.png";
import image7 from "./image7.png";
import { useRouter } from "next/navigation";

const BGImage = ({ src }) => {
  return (
    <Box borderRadius="md" overflow="hidden" height="150px" width="100%">
      <Image filter="saturate(50%)" src={src} />
    </Box>
  );
};

const HomeLoggedOut = () => {
  const router = useRouter();
  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        maxWidth="400px"
        width="100%"
        alignItems="center"
        position="relative"
        gapY={2}
      >
        <Heading fontWeight="400" size="lg">
          Join waitlist.
        </Heading>
        <Input bgColor="gray.900" placeholder="Enter email" />
        <Button width="100%">Submit</Button>
      </VStack>
    </VStack>
  );
};

export default HomeLoggedOut;
