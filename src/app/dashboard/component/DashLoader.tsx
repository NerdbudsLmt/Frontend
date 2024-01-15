import { Skeleton } from "@chakra-ui/react";
import React from "react";

export const DashLoader = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index}>
          <Skeleton className="border-2 border-[#B1AFAF] my-4 h-[40px] rounded-lg py-4 px-4">
            <div></div>
          </Skeleton>
        </div>
      ))}
    </>
  );
};
