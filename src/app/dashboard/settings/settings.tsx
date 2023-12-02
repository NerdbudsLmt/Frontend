"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { BsBell, BsKey } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import Password from "./password";
import { Notification } from "./notification";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("profile");

  return (
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-[#676767] md:text-[30px] text-[20px] font-[600]">
          settings
        </h2>
        <span className="bg-[#363939] p-[6px] w-1 h-1 rounded-full"></span>
        <h3 className="font-[600] text-[#363939] md:text-[30px] text-[20px]">
          {currentPage === "profile" && "Profile"}
          {currentPage === "password" && "Password"}
          {currentPage === "notification" && "Notification"}
        </h3>
      </div>
      <div className="flex gap-[5rem] mt-4">
        <Box
          bg="#F5F4F4"
          width="272px"
          height="243px"
          borderRadius="10px"
          p={3}
        >
          <Text fontSize="24px" fontWeight="500">
            Settings
          </Text>
          <div className="space-y-3 mt-3">
            <span
              className={`flex items-center py-[10px] px-[12px] gap-2 cursor-pointer font-semibold ${
                currentPage === "profile" ? "bg-[#DCEBFF]" : "bg-transparent"
              }  justify-start w-full text-[#363939] rounded-[10px]`}
              onClick={() => setCurrentPage("profile")}
            >
              <BiUser />
              Profile
            </span>
            <span
              className={`flex items-center py-[10px] px-[12px] gap-2 cursor-pointer font-semibold ${
                currentPage === "password" ? "bg-[#DCEBFF]" : "bg-transparent"
              }  justify-start w-full text-[#363939] rounded-[10px]`}
              onClick={() => setCurrentPage("password")}
            >
              <BsKey />
              Password
            </span>
            <span
              className={`flex items-center py-[10px] px-[12px] gap-2 cursor-pointer font-semibold ${
                currentPage === "notification"
                  ? "bg-[#DCEBFF]"
                  : "bg-transparent"
              }  justify-start w-full text-[#363939] rounded-[10px]`}
              onClick={() => setCurrentPage("notification")}
            >
              <BsBell />
              Notification
            </span>
          </div>
        </Box>
        {currentPage === "profile" && (
          <Box
            bg="#F5F4F4"
            height="512px"
            width="498px"
            rounded="10px"
            padding={6}
          >
            <Text fontSize="32px" color="#363939" fontWeight={600}>
              Profile
            </Text>
            <FormControl>
              <InputGroup>
                <InputLeftAddon>
                  <FaRegUserCircle />
                </InputLeftAddon>
                <Input placeholder="Sean" />
              </InputGroup>
            </FormControl>
          </Box>
        )}
        {currentPage === "password" && <Password />}
        {currentPage === "notification" && <Notification />}
      </div>
    </div>
  );
};

export default Settings;
