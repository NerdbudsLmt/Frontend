import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const lang = [
  {
    img: "/images/angular.svg",
  },
  {
    img: "/images/css.svg",
  },
  {
    img: "/images/javascript.svg",
  },
  {
    img: "/images/react.svg",
  },
  {
    img: "/images/vue.svg",
  },
  {
    img: "/images/git.svg",
  },
];

export const Tools = () => {
  return (
    <div className="my-28">
      <div>
        <p className="text-app-sblue text-[20px] font-[500]">
          Software for Change.
        </p>
        <p className="text-[32px] font-[600] my-2  text-neutral-900 dark:text-white">
          Our Tools
        </p>
        <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
          Empowering Innovation with React JS and C++. Unleash your potential
          with our cutting-edge programming tools and expertise.
        </p>
      </div>

      <div className="mt-14">
        <div className="flex justify-between gap-4 gap-y-10 flex-wrap">
          {lang.map((item) => (
            <div key={item.img} className="w-fit mx-auto">
              <Image
                src={item.img}
                alt="lang"
                width={50}
                height={40}
                priority
              />
            </div>
          ))}
        </div>

        <div className="justify-center flex flex-col">
          <p className="font-[500] text-[18px] text-center mt-20  text-neutral-900 dark:text-white">
            Welcome to <span className="text-[26px] text-app-sblue">Nerd</span>
            <span className="text-[26px] text-app-porange">buds</span>
          </p>
          <p className="text-center w-[720px] mx-auto mt-3  text-neutral-900 dark:text-white">
            {" "}
            A powerhouse of brilliant engineers crafting cutting-edge software
            solutions. With unmatched expertise and relentless dedication, our
            team transforms ideas into reality. From intricate algorithms to
            sleek interfaces, we excel in building innovative software that
            empowers businesses and simplifies lives. Join us on the forefront
            of technological advancement with Nerdbuds.
          </p>
          <Link
            href="/"
            className="border-app-sblue flex gap-2 items-center bg-app-sblue border-2 w-fit mx-auto mt-6 text-white py-3 px-4 rounded-full"
          >
            Get Started
            <BsArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
