"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc'
import { useFormik } from "formik";
import * as Yup from "yup";

/**
 * Represents the values of the Company form.
 * @interface CompanyFormValues
 */

interface CompanyFormValues {
  firstName: string;
  lastName: string;
  company: string;
  industry: string;
  position: string;
  email: string;
  password: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  company: Yup.string().required("Company Name is required"),
  industry: Yup.string().required("Industry Name is required"),
  position: Yup.string().required("Position Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Company() {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      industry: "",
      position: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="my-6">
      <div className="flex gap-8 mb-4">
        <div className=" basis-[40%] ">
          <Image
            src="/images/scompany.svg"
            alt="Vercel Logo"
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="basis-[55%]">
          <h1 className="text-4xl font-bold text-app-sblue">
            Join <span className="text-app-porange">us </span>
            <span className="text-app-porange">today 👋</span>
          </h1>
          <p className="text-gray-400 my-2">
            Help us take your <span className="text-app-porange">company </span>{" "}
            to the next level.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="flex justify-between gap-4">
              <div className="my-3">
                <label
                  htmlFor="firstName"
                  className="block text-gray-300 text-[16px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                  className="border-[1.5px] w-full text-[16px] rounded-md text-black bg-white px-3 py-1 mt-1"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="my-3">
                <label
                  htmlFor="lastName"
                  className="block text-gray-300 text-[16px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastName")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="">
              <div className="my-3">
                <label
                  htmlFor="company"
                  className="block text-gray-300 text-[16px]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  {...formik.getFieldProps("company")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.company && formik.errors.company ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.company}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <div className="my-3">
                <label
                  htmlFor="industry"
                  className="block text-gray-300 text-[16px]"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  placeholder="Software Design"
                  {...formik.getFieldProps("industry")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.industry}
                  </div>
                ) : null}
              </div>
              <div className="my-3">
                <label
                  htmlFor="position"
                  className="block text-gray-300 text-[16px]"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Project Manager"
                  {...formik.getFieldProps("position")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.position && formik.errors.position ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.position}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="">
              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-[16px]"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="nerdbudsltd@gmail.com"
                  {...formik.getFieldProps("email")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="my-3 relative">
              <label
                htmlFor="password"
                className="block font-semibold text-[16px]"
              >
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
              />
              <div
                className="absolute top-9 right-4"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <BsEyeFill className="text-black" />
                ) : (
                  <BsEyeSlashFill className="text-black" />
                )}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-[red] text-[14px] italic">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
              type="submit"
            >
              Create account
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-2 mb-5">
            Do have an account?{" "}
            <span className="text-app-porange"> Log in </span>
          </p>
          <p className="w-[450px]">
            By continuing you agree to Nerdbuds{" "}
            <span className="text-app-sblue underline"> Terms of Service </span>{" "}
            and acknowledge that you have read our{" "}
            <span className="text-app-porange underline"> Privacy Policy.</span>{" "}
          </p>
          <button
              className="bg-[#265D80] flex items-center justify-center mt-6 gap-4 text-white py-2 px-5 w-full rounded-full"
              // type="submit"
            >
              <FcGoogle />
                       Sign up with Google
            </button>
        </div>
      </div>
    </div>
  );
}
