import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFileText,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook, BsTelephone } from "react-icons/bs";

export default function Home() {
  return (
    <section>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <Link
              href="/about"
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

      <div className="flex items-center w-fit mx-auto my-20">
        <div className="border-r-2 pr-10 ">
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
        {/* <div className="h-full w-[4px] mx-7 bg-[#fff]"/> */}

        <div className="pl-10">
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

      <div className="my-20">
        <h1 className="text-5xl font-bold text-center text-app-sblue">
          Get <span className="text-[#fff]">in </span>{" "}
          <span className="text-app-porange">touch</span>
        </h1>

        <form className="tablet_l:w-[600px] w-[95%] mx-auto mt-10 mb-20">
          <div className="flex justify-between gap-5 flex-col tablet_l:flex-row">
            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-neutral-700/60 dark:border-white/40 rounded-md">
              <BiUser className="text-xl text-neutral-900/50 dark:text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-neutral-900 dark:text-white outline-none"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                placeholder="First Name"
              />
            </div>
            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-neutral-700/60 dark:border-white/40 rounded-md">
              <BiUser className="text-xl text-neutral-900/50 dark:text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-neutral-900 dark:text-white outline-none"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                placeholder="Last Name"
              />
            </div>
          </div>
          <br />
          <div className="flex justify-between items-center space-x-2 p-2 border-2 border-neutral-700/60 dark:border-white/40 rounded-md">
              <MdEmail className="text-xl text-neutral-900/50 dark:text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-neutral-900 dark:text-white outline-none"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                placeholder="Enter your email"
              />
            </div>
          <br />
            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-neutral-700/60 dark:border-white/40 rounded-md">
              <BsTelephone className="text-xl text-neutral-900/50 dark:text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-neutral-900 dark:text-white outline-none"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                placeholder="Enter your phone number"
              />
            </div>
            <br />
            <div className="flex justify-between items- space-x-2 p-2 border-2 border-neutral-700/60 dark:border-white/40 rounded-md">
              <AiOutlineFileText className="text-xl text-neutral-900/50 dark:text-white" />
              <textarea
                // type="text"
                className="flex-grow bg-transparent h-[200px] text-neutral-900 dark:text-white outline-none"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                placeholder="Write your message?"
              />
            </div>
            <button
                className="flex items-center gap-3 px-10 py-3 mt-7 mx-auto w-fit bg-app-sblue text-[14px] laptop:text[16px]  rounded-3xl"
              >
                Submit
                <BsArrowRight className="text-md" />
              </button>
        </form>
      </div>
    </section>
  );
}
