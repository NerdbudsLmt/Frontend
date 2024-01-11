"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import useCustomToast from "@/components/Toast";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function Contact() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const toast = useCustomToast();

  const formik = useFormik<ContactForm>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },

    onSubmit: async (values) => {
      // Check if any of the fields are empty
      if (
        !values.firstName ||
        !values.lastName ||
        !values.email ||
        !values.phoneNumber ||
        !values.message
      ) {
        toast(
          "All fields are required",
          "error",
          true,
          2000,
          "Please fill out all fields",
          "top-right"
        );
        return;
      }

      try {
        const res = await fetch(`${apiUrl}/contactform`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.status === 200) {
          toast(
            "Message Sent",
            "success",
            true,
            2000,
            data.data.message,
            "top-right"
          );
          formik.resetForm();
        } else {
          toast("Failed", "error", true, 2000, data.message, "top-right");
          console.error(res);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  });
  return (
    <>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <Link
              href="/about"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full transition-transform hover:scale-110"
            >
              <>
                <span>Learn about our services</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center lg:text-7xl text-app-sblue">
              Nerd <span className="text-[#F9D262]">Support</span>
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

      <div className="flex flex-col items-center w-full mx-auto my-20 lg:flex-row lg:justify-center">
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-5 pb-5">
          <h1 className="text-2xl font-bold text-app-sblue">
            Follow <span className="text-[#F9D262]">us</span>
          </h1>
          <div className="flex gap-3 mt-3">
            <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
            <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
            <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
            <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
            <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
          </div>
        </div>
        {/* <div className="h-full w-[4px] mx-7 bg-[#fff]"/> */}
        <div className="pl-5 mt-2 lg:mt-0 lg:pl-5">
          <Link
            href="/"
            className="border-[#3F9BD5] bg-[#3F9BD5] text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit mt-3 lg:mt-0 py-2 px-6 rounded-full lg:w-auto"
          >
            <Image
              src="/images/phone.svg"
              alt="lang"
              width={20}
              height={20}
              // priority
            />
            <span>+234 904 900 4960</span>
          </Link>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-5xl font-bold text-center text-app-sblue">
          Get <span className="text-[#fff]">in </span>{" "}
          <span className="text-[#F9D262]">touch</span>
        </h1>

        <form
          className="tablet_l:w-[600px] w-[95%] mx-auto mt-10 mb-20"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-between gap-5 flex-col tablet_l:flex-row">
            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-white/40 rounded-md">
              <BiUser className="text-xl text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-white outline-none"
                {...formik.getFieldProps("firstName")}
                name="firstName"
                placeholder="First Name"
              />
            </div>

            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-white/40 rounded-md">
              <BiUser className="text-xl text-white" />
              <input
                type="text"
                className="flex-grow bg-transparent text-white outline-none"
                {...formik.getFieldProps("lastName")}
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <br />
          <div className="flex justify-between items-center space-x-2 p-2 border-2 border-white/40 rounded-md">
            <MdEmail className="text-xl text-white" />
            <input
              type="text"
              className="flex-grow bg-transparent text-white outline-none"
              {...formik.getFieldProps("email")}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <br />
          <div className="flex justify-between items-center space-x-2 p-2 border-2 border-white/40 rounded-md">
            <BsTelephone className="text-xl text-white" />
            <input
              type="text"
              className="flex-grow bg-transparent text-white outline-none"
              {...formik.getFieldProps("phoneNumber")}
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <br />
          <div className="flex justify-between items- space-x-2 p-2 border-2 border-white/40 rounded-md">
            <AiOutlineFileText className="text-xl text-white" />
            <textarea
              className="flex-grow bg-transparent h-[200px] text-white outline-none"
              {...formik.getFieldProps("message")}
              placeholder="Write your message?"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-3 px-10 py-3 mt-7 mx-auto w-fit bg-app-sblue text-[14px] laptop:text[16px]  rounded-3xl transition-transform hover:scale-110"
          >
            Submit
            <BsArrowRight className="text-md" />
          </button>
        </form>
      </div>
    </>
  );
}
