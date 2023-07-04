import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Home() {
  return (
    <section>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full"
            >
              <>
                <span>Learn about our services</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-center text-app-sblue">
              Nerd <span className="text-app-porange">Support</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center">
              Your needs are our priority. We&apos;re here to support you with
              innovative solutions and unparalleled assistance.
            </p>
          </div>
        </div>
      </header>

      <Image
        src="/images/contactimg.svg"
        alt="hand"
        width={1400}
        height={1200}
        priority
      />

      <div className="flex items-center">
        <div className="border-r-2">
          <h1 className="text-2xl font-bold  text-app-sblue">
            Follow <span className="text-app-porange">us</span>
          </h1>
          <div className="flex gap-3 mt-3">
            <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
            <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
            <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
            <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="h-full w-[1px]"/>

        <div>
          <Link
            href="/"
            className=" border-[#3F9BD5] bg-[#3F9BD5] text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit mt-6 tablet_l:mt-0 py-2 px-6 rounded-full"
          >
            <Image
              src="/images/phone.svg"
              alt="lang"
              width={20}
              height={20}
              //   priority
            />
            <span>+234 904 900 4960</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
