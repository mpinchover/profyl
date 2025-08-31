"use client";
import {
  VStack,
  Link,
  Image,
  Text,
  Button,
  Box,
  Heading,
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
    >
      <VStack
        maxWidth="600px"
        width="100%"
        alignItems="start"
        position="relative"
      >
        <Heading fontWeight="400" size="xl">
          Does this give you{" "}
          <Text as="span" fontWeight="extrabold">
            diarrhea
          </Text>
          ?
        </Heading>
        {/* <Text>A better way to connect.</Text>
        <Link>Get started here.</Link> */}
        <BGImage src={image6.src} />
        <BGImage src={image1.src} />
        {/* <BGImage src={image2.src} /> */}
        <BGImage src={image3.src} />
        <Link onClick={() => router.push("/login")}>
          Log in and share your profile without needing a toilet.
        </Link>
      </VStack>
    </VStack>
  );
};

export default HomeLoggedOut;
