import { Skeleton } from "@chakra-ui/react";
import React from "react";

export const ProjectLoader = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <Skeleton className="border-2 border-[#B1AFAF] rounded-lg py-4 px-4 tablet:px-8">
            <div></div>
          </Skeleton>
        </div>
      ))}
    </>
  );
};
