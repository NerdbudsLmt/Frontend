import { Box, VStack, Text, Button, HStack, Checkbox } from "@chakra-ui/react";
import React from "react";

export const Notification = () => {
  return (
    <div>
      {" "}
      <Box bg="#F5F4F4" height="auto" width="498px" rounded="10px" padding={6}>
        <Text fontSize="32px" color="#363939" fontWeight={600}>
          Notification
        </Text>
        <VStack spacing={4} width={"344px"}>
          <HStack alignItems={"flex-start"}>
            <Checkbox />
            <VStack
              alignItems={"flex-start"}
              gap={0}
              justifyContent={"flex-start"}
            >
              <h2 className="text-[16px] text-[#151515] font-medium">
                News and Updates
              </h2>
              <p className="text-[16px] text-[#667085]">
                Receive news about our new products or updated product features.
              </p>
            </VStack>
          </HStack>
          <HStack alignItems={"flex-start"}>
            <Checkbox p={0} m={0} />
            <VStack alignItems={"flex-start"}>
              <h2 className="text-[16px] text-[#151515] font-medium">
                Project Updates
              </h2>
              <p className="text-[16px] text-[#667085]">
                Receive information on the current status of your projects.
              </p>
            </VStack>
          </HStack>
          <HStack alignItems={"flex-start"}>
            <Checkbox p={0} m={0} />
            <VStack alignItems={"flex-start"}>
              <h2 className="text-[16px] text-[#151515] font-medium">
                Reminders
              </h2>
              <p className="text-[16px] text-[#667085]">
                Receive reminders of your scheduled meetings.
              </p>
            </VStack>
          </HStack>
        </VStack>
        <div className="mt-5">
          <HStack>
            <button className="bg-[#3F9BD5] text-white py-[10px] px-[21px] rounded-[10px]">
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
