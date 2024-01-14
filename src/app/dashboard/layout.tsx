"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiHome, FiSettings, FiMenu } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import {
  MdPayment,
  MdOutlineDesktopWindows,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IconType } from "react-icons";
import { PiCalendarBlankBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Inbox } from "./component/Inbox";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

type NestedLinkItemProps = {
  name: string;
  link: string;
};

export type LinkItemProps = {
  name: string;
  link: string;
  icon: IconType;
  nestedIcon?: IconType;
  links?: NestedLinkItemProps[];
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="#132E40"
      borderRight="1px"
      // borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="100dvh"
      color="white"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mb="6"
        mx="6"
        justifyContent="space-between"
      >
        <Link href="/" className="flex gap-4">
          <Image
            src="/images/nav-logo.png"
            alt="Vercel Logo"
            width={33}
            height={33}
            priority
          />
          <Text fontSize="3xl" fontWeight="bold">
            Nerdbuds
          </Text>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem />
    </Box>
  );
};

const NavItem = () => {
  return (
    <Flex
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"85dvh"}
    >
      <div>
        <Flex
          align="center"
          as="a"
          href="/dashboard"
          p="4"
          mx="2"
          my="4"
          color="white"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#F9D262",
            color: "black",
          }}
        >
          <Flex align="center" gap={3}>
            <FiHome />
            Dashboard
          </Flex>
        </Flex>

        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
            _hover={{
              bg: "#F9D262",
              color: "black",
            }}
            color="white"
            borderRadius="lg"
            role="group"
            mx="2"
            cursor="pointer"
          >
            <HStack>
              <Flex align="center" p="2" mx="2">
                <Flex align="center" gap={3}>
                  <RxDashboard />
                  Projects
                </Flex>
                <MdOutlineKeyboardArrowRight className="ml-14" size={30} />
              </Flex>
            </HStack>
          </MenuButton>
          <MenuList bg={"#F9D262"} color="black">
            <MenuItem
              as="a"
              href="/dashboard/projects/create"
              bg="#FFE393"
              _hover={{
                bg: "#132E40",
                color: "white",
              }}
              py="2"
            >
              Create a Project
            </MenuItem>
            <MenuItem
              as="a"
              href="/dashboard/projects/existing"
              bg="#FFE393"
              _hover={{
                bg: "#132E40",
                color: "white",
              }}
              py="2"
            >
              Existing Project
            </MenuItem>
            <MenuItem
              as="a"
              href="/dashboard/projects/progress"
              bg="#FFE393"
              _hover={{
                bg: "#132E40",
                color: "white",
              }}
              py="2"
            >
              Project in progress
            </MenuItem>
            <MenuItem
              as="a"
              href="/dashboard/projects/finished"
              bg="#FFE393"
              _hover={{
                bg: "#132E40",
                color: "white",
              }}
              py="2"
            >
              Finished Projects
            </MenuItem>
          </MenuList>
        </Menu>

        <Flex
          align="center"
          as="a"
          href="/dashboard/payment"
          p="4"
          mx="2"
          my="4"
          color="white"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#F9D262",
            color: "black",
          }}
        >
          <Flex align="center" gap={3}>
            <MdPayment />
            Payment
          </Flex>
        </Flex>

        <Flex
          align="center"
          as="a"
          href="/dashboard/support"
          p="4"
          mx="2"
          my="4"
          color="white"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#F9D262",
            color: "black",
          }}
        >
          <Flex align="center" gap={3}>
            <MdOutlineDesktopWindows />
            Support
          </Flex>
        </Flex>

        <Flex
          align="center"
          as="a"
          href="/dashboard/settings"
          p="4"
          mx="2"
          my="4"
          color="white"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#F9D262",
            color: "black",
          }}
        >
          <Flex align="center" gap={3}>
            <FiSettings />
            Settings
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const newFormattedDate = date.toLocaleDateString("en-US", options);
    setFormattedDate(newFormattedDate);
  }, []);

  const { data: session }: any = useSession();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="white"
      flexWrap={'wrap'}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        mb={'2'}
        icon={<FiMenu />}
      />
      <div
        // href="#team"
        className="hidden tablet:flex items-center text-[.75rem] mx-0 font-semibold space-x-2 border-2 border-app-pblue text-app-pblue py-1 px-5 rounded-full"
      >
        <span>{formattedDate}</span>
        <PiCalendarBlankBold className="text-xl" />
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-3 w-fit mx-auto items-center">
          <div className="w-10 h-10 my-auto overflow-hidden rounded-full border-[1px] border-gray-400">
            <Image
              src={session?.user?.profilePicture}
              className=" rounded-full "
              alt="web"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-app-sblue font-medium">{session?.user?.firstname} {session?.user?.lastname}</p>
            <p className="text-app-sblue text-[12px] font-medium">
              {session?.user.userType} Account
            </p>
          </div>
          <Image
            onClick={() => signOut()}
            src="/images/logout.svg"
            alt="hand"
            className="cursor-pointer"
            width={22}
            height={22}
            priority
          />
        </div>
      </div>
    </Flex>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        
        <div className=" fixed bottom-4 right-3 ">
        <TawkMessengerReact
          propertyId="658beb0670c9f2407f83a50e"
          widgetId="1hil8s5jb"
        />
      </div>
      </Box>
    </Box>
  );
}
