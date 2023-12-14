import {
  Box,
  FormControl,
  VStack,
  Input,
    InputLeftElement,
  Text,
  HStack,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { CiLock } from "react-icons/ci";

const Password = () => {
  return (
    <div>
      {" "}
      <Box
        bg="#F5F4F4"
        height="auto"
        width={{ base: "full", sm: "498px" }}
        rounded="10px"
        padding={6}
      >
        <Text fontSize="32px" color="#363939" fontWeight={600}>
          Password
        </Text>
        <VStack spacing={4}>
          <FormControl>
            <InputGroup outline={"none"} size={"lg"}>
              <  InputLeftElement>
                <CiLock />
              </  InputLeftElement>
              <Input placeholder="Password" outline={"none"} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup size={"lg"}>
              <  InputLeftElement>
                <CiLock />
              </  InputLeftElement>
              <Input placeholder="Password123" outline={"#205584"} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup size={"lg"}>
              <  InputLeftElement>
                <CiLock />
              </  InputLeftElement>
              <Input placeholder="Password123" />
            </InputGroup>
          </FormControl>
        </VStack>
        <div className="mt-5">
          <HStack>
            <button className="bg-[#3F9BD5] text-white  md:py-[10px] md:px-[21px] py-[8px] px-[14px] rounded-[10px]">
              Save Changes
            </button>
            <button className="bg-[#B1AFAF] text-white py-[10px] px-[24px]  rounded-[10px] ">
              Cancel
            </button>
          </HStack>
        </div>
      </Box>
    </div>
  );
};

export default Password;
