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
import { useSession } from "next-auth/react";
import React from "react";
import { CiBank } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Profile = () => {
  const { data: session }: any = useSession();

  return (
    <div>
      {" "}
      <Box
        bg="#F5F4F4"
        height="512px"
        width={{ base: "100%", md: "498px" }}
        rounded="10px"
        h={'fit-content'}
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
                width={{ base: "full", md: "355px" }}
                rounded={"lg"}
                // placeholder="Sean"
                value={session?.user?.firstname}
                focusBorderColor="#3F9BD5"
                className="capitalize"
                isDisabled

              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup size={"lg"}>
              <InputLeftElement>
                <FaRegUserCircle color="#757575" />
              </InputLeftElement>
              <Input
                width={{ base: "full", md: "355px" }}
                rounded={"lg"}
                // placeholder="Chinedu"
                value={session?.user?.lastname}
                className="capitalize"
                isDisabled
               
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
                  width={{ base: "full", md: "355px" }}
                  rounded={"lg"}
                  placeholder={session?.user.email}
                  isDisabled
                  focusBorderColor="#3F9BD5"
                />
              </InputGroup>
            </FormControl>
            {/* <button className="text-white bg-[#3F9BD5]  rounded-[10px] px-[24px] py-[10px] h-[45px] md:inline-flex hidden">
              Edit
            </button> */}
          </HStack>

          {/* <FormControl>
            <InputGroup size={"lg"}>
              <InputLeftElement>
                <Image src={"/svgs/Bank-r.svg"} alt={"dashboard"} />
              </InputLeftElement>
              <Input
                width={{ base: "full", md: "355px" }}
                rounded={"lg"}
                placeholder={session?.user.userType}
                isDisabled
                focusBorderColor="#3F9BD5"
                fontStyle={'capitalize'}
              />
            </InputGroup>
          </FormControl> */}
          {/* <h3 className="text-[#5A5A5A] text-[11px]">
            This information can only be changed after you schedule a meeting
            stating the reason for the change.
          </h3> */}
          {/* <HStack>
            <FormControl>
              <InputGroup size={"lg"}>
                <InputLeftElement>
                  <Image src={"/svgs/Dashboard.svg"} alt={"dashboard"} />
                </InputLeftElement>
                <Input
                  width={{ base: "full", md: "355px" }}
                  rounded={"lg"}
                  placeholder="Sean"
                  focusBorderColor="#3F9BD5"
                />
              </InputGroup>
            </FormControl>
            {/* <button className="text-white bg-[#3F9BD5] md:inline-flex hidden rounded-[10px] px-[24px] py-[10px] h-[45px]">
              Edit
            </button>
          </HStack> */}
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
