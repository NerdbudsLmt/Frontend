import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type webProps = {
  title: string;
  bg: string;
  content: string;
  img: string;
  btn: string;
  name: string;
};
export const Work = ({ title, bg, content, img, btn, name }: webProps) => {
  return (
    <div className="mt-20 ">
      <Link
        href="/"
        className="w-fit mb-4 mx-auto flex items-center space-x-2 border-2 border-white text-[14px] text-[#ffffff] py-1 px-14 rounded-full"
      >
        <>
          <span>{name}</span>
          <BsArrowRight className="text-lg" />
        </>
      </Link>
      <div
        key={img}
        className="py-6 px-6 flex flex-col-reverse laptop:flex-row laptop:gap-[1%] gap-5 justify-center rounded-3xl mt-8 h-fit"
        style={{
          background: bg,
        }}
      >
        <Image
          className="grow w-[90%] mx-auto laptop:w-[47%]"
          src={img}
          alt="web"
          width={786}
          height={545}
        />
        <div className=" grow w-[90%] mx-auto laptop:w-[47%] my-auto ">
          <div>
            <p className="text-[20px] tablet_l:text-[24px] laptop_L:text-[30px] font-bold leading[24px] laptop_l:leading-[48px]">{title}</p>
            <p className="mt-4 mb-5 text-[14px] laptop:text[16px] ">{content}</p>
            <Link
              href="/"
              style={{
                background: btn,
              }}
              className="px-5 py-2 text-[14px] laptop:text[16px]  rounded-3xl"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
