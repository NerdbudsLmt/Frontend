import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const ProjectLoader = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="my-4">
          <Skeleton
            className="border-2 border-[#B1AFAF] rounded-lg py-4 px-4 tablet:px-8"
            h="180px"
          >
            {" "}
            <div className="flex justify-between">
              <div>
                <SkeletonText mb="2" color="gray.500" />
                <SkeletonText mb="2" color="gray.500" />
                <SkeletonText color="gray.500" />
              </div>
              <div>
                <SkeletonText color="gray.500" />
              </div>
            </div>
          </Skeleton>
        </div>
      ))}
    </>
  );
};
