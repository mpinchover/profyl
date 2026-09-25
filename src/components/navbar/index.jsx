"use client";
import { HStack, Menu, Text, Portal, Link, IconButton } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useAuth } from "@/config/auth-context";

const loggedOutItems = [{ label: "Login", route: "/login" }];

const loggedInItems = [
  { label: "Settings", route: "/settings" },
  { label: "Messages", route: "/messages" },
];

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  const items = user ? loggedInItems : loggedOutItems;

  return (
    <HStack
      as="header"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="banner"
      height={{ base: "64px", md: "72px" }}
      paddingX={{ base: "20px", sm: "24px" }}
      bgColor="rgba(39, 39, 42, 0.72)"
      backdropFilter="saturate(180%) blur(12px)"
      borderBottomWidth="1px"
      borderColor="gray.700"
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth="600px"
      >
        <Link
          href="/"
          _focus={{ outline: "none", boxShadow: "none" }}
          _hover={{ textDecoration: "none", color: "white" }}
        >
          <Text
            fontSize="md"
            fontWeight="600"
            letterSpacing="-0.01em"
            color="gray.100"
          >
            vaddr
          </Text>
        </Link>
        <Menu.Root positioning={{ placement: "bottom-end", gutter: 0 }}>
          <Menu.Trigger asChild>
            <IconButton
              aria-label="Open menu"
              variant="ghost"
              size="sm"
              color="gray.300"
              _hover={{ color: "white", bgColor: "gray.700" }}
            >
              <RiMenu4Line size="20px" />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content
                zIndex="popover"
                bgColor="gray.900"
                borderWidth="1px"
                borderColor="gray.700"
                minWidth="160px"
              >
                {items.map((item) => (
                  <Menu.Item
                    key={item.route}
                    value={item.route}
                    onClick={() => router.push(item.route)}
                    color="gray.200"
                    _hover={{ bgColor: "gray.800", color: "white" }}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
                {user && (
                  <Menu.Item
                    value="logout"
                    onClick={handleLogout}
                    color="gray.200"
                    _hover={{ bgColor: "gray.800", color: "white" }}
                  >
                    Logout
                  </Menu.Item>
                )}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </HStack>
  );
};

export default Navbar;
