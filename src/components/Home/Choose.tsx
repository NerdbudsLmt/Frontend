import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export const Choose = () => {
  return (
    <div className="my-10 md:my-24 lg:my-32">
      <div>
        <p className="text-app-sblue text-[20px] font-[500]">
          How we can help?
        </p>
        <p className="text-[32px] font-[600] my-2 text-neutral-900 dark:text-white">
          Why choose us?
        </p>
        <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
          Experience seamless technology integration with our cutting-edge
          software for unparalleled user satisfaction.
        </p>
      </div>
      
      <div className="mt-5 md:mt-14 flex justify-between flex-col tablet_l:flex-row">
        <div className="relative w-full tablet_l:w-[45%] h-[300px] bg-center bg-auto bg-no-repeat bg-[url('/images/building.svg')] rounded-3xl">
          <div className="absolute h-full w-full flex flex-col justify-between">
            <div className="pt-5 pb-2">
              <Link
                href="/"
                className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-4 rounded-full"
              >
                Design and Implementation
                <Image
                  src="/images/star.svg"
                  alt="lang"
                  width={10}
                  height={15}
                  //   priority
                />
              </Link>
              <p className="text-white text-2xl font-[600] text-center w-fit mx-auto">
              For Companies
              </p>
            </div>
            <Link
              href="/"
              className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 mb-6 w-fit mt-1 py-1 px-4 rounded-full"
            >
             Learn more 
              <BsArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="bg-neutral-900 w-[5px] h-[280px] hidden tablet_l:block my-auto rounded-md dark:bg-white" />
        <div className="relative w-full tablet_l:w-[45%] h-[300px] bg-center bg-auto bg-no-repeat bg-[url('/images/lady.svg')] rounded-3xl">
          <div className="absolute h-full w-full flex flex-col justify-between">
            <div className="pt-5 pb-2">
              <Link
                href="/"
                className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-4 rounded-full"
              >
                Simplicity for Everyone
                <Image
                  src="/images/user.svg"
                  alt="lang"
                  width={10}
                  height={15}
                  //   priority
                />
              </Link>
              <p className="text-white text-2xl font-[600] text-center w-fit mx-auto">
              For Individuals
              </p>
            </div>
            <Link
              href="/"
              className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 mb-6 w-fit mt-1 py-1 px-4 rounded-full"
            >
             Learn more 
              <BsArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
