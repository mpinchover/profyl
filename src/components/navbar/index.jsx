"use client";
import { HStack, Menu, Text, Button, Portal } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      paddingY="20px"
      paddingX={{ base: "10px", sm: "100px" }}
      position="absolute"
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
              <Menu.Item value="new-txt-a">
                New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
              </Menu.Item>
              <Menu.Item value="new-file-a">
                New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
              </Menu.Item>
              <Menu.Item value="new-win-a">
                New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
              </Menu.Item>
              <Menu.Item value="open-file-a">
                Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
              </Menu.Item>
              <Menu.Item value="export-a">
                Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  );
};

export default Navbar;
