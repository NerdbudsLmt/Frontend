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
  VStack,
  Icon,
  useColorModeValue,
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
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import {
  MdPayment,
  MdOutlineDesktopWindows,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IconType } from "react-icons";
import { PiCalendarBlankBold, PiEnvelopeSimple } from "react-icons/pi";
import { BsThreeDotsVertical } from 'react-icons/bs'

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
      flexDirection={'column'}
      justifyContent={'space-between'}
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

      <div className="flex gap-3 mt-[16rem] w-fit mx-auto items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full border-[2px] border-app-pblue">
          <Image 
            src="/images/john.svg" 
            className=" rounded-full"
            alt="web" 
            width={50} 
            height={50} 
          />
        </div>
      <div>
        <p className="text-yellow">Nerdbuds Ltd</p>
        <p className="text-app-sblue text-sm">Company account</p>
      </div>
      <BsThreeDotsVertical  size={20}/>
      </div>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="white"
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
        <div
          // href="#team"
          className="hidden tablet:flex items-center text-[.75rem] mx-0 font-semibold space-x-2 border-2 border-app-pblue text-app-pblue py-1 px-5 rounded-full"
        >
            <span>Monday, 10th July 2023</span>
            <PiCalendarBlankBold className="text-xl" />
        </div>
      
    <div className="flex gap-4 items-center">
      <div className="flex gap-4 text-xl items-center font-semibold  ">
       <PiEnvelopeSimple />
        <FiBell />
        <div className="bg-app-pblue h-9 w-[2px] rounded-sm"></div>
      </div>
      <p className="py-2 px-4 text-[.75rem] font-semibold bg-[#F5F4F4] rounded-md">
      Welcome Nerdbuds!
      </p>
    </div>
    </Flex>
  );
};

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {

      const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg='white'>
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
      </Box>
    </Box>
  )
}

