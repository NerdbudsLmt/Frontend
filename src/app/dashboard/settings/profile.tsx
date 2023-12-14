import {
  Box,
  FormControl,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiBank } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Profile = () => {
  return (
    <div>
      {" "}
      <Box
        bg="#F5F4F4"
        height="512px"
        width={{ base: "100%", md: "498px" }}
        rounded="10px"
        padding={6}
      >
        <Text fontSize="32px" color="#363939" fontWeight={600}>
          Profile
        </Text>
        <Stack spacing={4}>
          <FormControl>
            <InputGroup size={"lg"}>
              <InputLeftElement>
                <FaRegUserCircle color="#757575" />
              </InputLeftElement>
              <Input
                width={"355px"}
                rounded={"lg"}
                placeholder="Sean"
                focusBorderColor="#3F9BD5"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup size={"lg"}>
              <InputLeftElement>
                <FaRegUserCircle color="#757575" />
              </InputLeftElement>
              <Input
                width={"355px"}
                rounded={"lg"}
                placeholder="Chinedu"
                focusBorderColor="#3F9BD5"
              />
            </InputGroup>
          </FormControl>
          <HStack>
            <FormControl>
              <InputGroup size={"lg"}>
                <InputLeftElement>
                  <MdAlternateEmail color="#757575" />
                </InputLeftElement>
                <Input
                  width={"355px"}
                  rounded={"lg"}
                  placeholder="seanchinedu@gmail.com"
                  focusBorderColor="#3F9BD5"
                />
              </InputGroup>
            </FormControl>
            <button className="text-white bg-[#3F9BD5] inline-flex rounded-[10px] px-[24px] py-[10px] h-[45px]">
              Edit
            </button>
          </HStack>

          <FormControl>
            <InputGroup size={"lg"}>
              <InputLeftElement>
                <Image src={"/svgs/Bank-r.svg"} alt={"dashboard"} />
              </InputLeftElement>
              <Input
                width={"355px"}
                rounded={"lg"}
                placeholder="Techbuds"
                focusBorderColor="#3F9BD5"
              />
            </InputGroup>
          </FormControl>
          <h3 className="text-[#5A5A5A] text-[11px]">
            This information can only be changed after you schedule a meeting
            stating the reason for the change.
          </h3>
          <HStack>
            <FormControl>
              <InputGroup size={"lg"}>
                <InputLeftElement>
                  <Image src={"/svgs/Dashboard.svg"} alt={"dashboard"} />
                </InputLeftElement>
                <Input
                  width={"355px"}
                  rounded={"lg"}
                  placeholder="Sean"
                  focusBorderColor="#3F9BD5"
                />
              </InputGroup>
            </FormControl>
            <button className="text-white bg-[#3F9BD5] inline-flex rounded-[10px] px-[24px] py-[10px] h-[45px]">
              Edit
            </button>
          </HStack>
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
