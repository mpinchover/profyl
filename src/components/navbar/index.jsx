"use client";
import { HStack, Menu, Text, Button, Portal } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
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
        <Text fontSize="16px" fontWeight="500" color="white">
          Profyl
        </Text>
        <Menu.Root>
          <Menu.Trigger asChild>
            <RiMenu4Line size={"20px"} />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt">Settings</Menu.Item>
                <Menu.Item value="new-file">Logout</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </HStack>
  );
};

export default Navbar;
