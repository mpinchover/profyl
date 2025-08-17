"use client";
import { HStack, Menu, Text, Button, Portal, Link } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <HStack
      justifyContent="center"
      paddingY="20px"
      position="absolute"
      width="100%"
      paddingX={{ base: "20px", sm: "none" }}
    >
      <HStack
        justifyContent={"space-between"}
        alignItems="center"
        width="100%"
        maxWidth="600px"
      >
        <Link
          active={{ outline: "none" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _hover={{ textDecoration: "none" }}
          href="/"
        >
          <Text fontSize="16px" fontWeight="500" color="white">
            Profyl
          </Text>
        </Link>
        <Menu.Root>
          <Menu.Trigger asChild>
            <RiMenu4Line size={"20px"} />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item
                  onClick={() => router.push("/settings")}
                  value="new-txt"
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  onClick={() => router.push("/login")}
                  value="new-file"
                >
                  Logout
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </HStack>
  );
};

export default Navbar;
