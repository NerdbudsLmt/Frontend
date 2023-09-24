"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsEyeSlashFill, BsEyeFill, BsChevronLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

/**
 * Represents the values of the Company form.
 * @interface CompanyFormValues
 */

interface CompanyFormValues {
  firstName: string;
  lastName: string;
  university: string;
  level: string;
  semester: string;
  uniemail: string;
  reg: string;
  password: string;
  picture: string | null;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  university: Yup.string().required("university Name is required"),
  level: Yup.string().required("level Name is required"),
  semester: Yup.string().required("Position Name is required"),
  uniemail: Yup.string().email("Invalid email").required("Email is required"),
  reg: Yup.string().required("reg number is required"),
  password: Yup.string().required("Password is required"),
  picture: Yup.mixed()
    .test("fileSize", "File size must be less than 1MB", (value) =>
      value ? (value as File).size <= 1024000 : true
    )
    .test("fileType", "Only image files are allowed", (value) =>
      value ? (value as File).type.startsWith("image/") : true
    ),
});

export default function ProjectPal() {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      university: "",
      level: "",
      semester: "",
      uniemail: "",
      reg: "",
      password: "",
      picture: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div>
      <div className="my-6">
        <Link href="/signup">
          <BsChevronLeft size={30} className="my-5" />
        </Link>
        <div className="flex gap-8 mb-4">
          <div className=" basis-[40%] ">
            <Image
              src="/images/studentlog.svg"
              alt="Vercel Logo"
              width={600}
              height={600}
              priority
            />

            <div className="bg-sign my-10 p-4 rounded-md">
              <h1 className="text-3xl font-bold text-app-sblue">
                <span className="text-white">Introducing</span> Project
                <span className="text-app-porange"> Pal</span>
              </h1>
              <p className="text-[17px] mt-2">
                Level up your final year project with Project Pal! Expert
                programmers will assist you every step of the way, ensuring
                success. Join now for seamless guidance, top-notch coding
                support, and ace your project with confidence!
              </p>
            </div>

            <div>
              <div className="flex my-6 gap-6 flex-col tablet:flex-row">
                <div className="flex w-[100%] tablet_l:w-[60%] gap-3 items-center">
                  <Image
                    src="/images/sean.svg"
                    className=" rounded-full"
                    alt="Vercel Logo"
                    width={60}
                    height={50}
                    priority
                  />
                  <div className="my-auto">
                    <p className="text-app-sblue">Temi Adebayo </p>
                    <p>400L Student</p>
                  </div>
                </div>
                <p className="w-[100%] tablet_l:w-[40%] text-sm">
                  &ldquo; Project Pal made my final year a success! Expert
                  guidance and coding support were game-changers!&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[55%]">
            <h1 className="text-4xl font-bold text-app-sblue">
              Join <span className="text-app-porange">us </span>
              <span className="text-app-porange">today 👋</span>
            </h1>
            <p className="text-gray-400 my-2">
              Help us take your{" "}
              <span className="text-app-porange">company </span> to the next
              level.
            </p>

            <form className="my-4" onSubmit={formik.handleSubmit}>
              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="university"
                    className="block text-gray-300 text-[16px]"
                  >
                    University Name
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    placeholder="university Name"
                    {...formik.getFieldProps("university")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />
                  {formik.touched.university && formik.errors.university ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.university}
                    </div>
                  ) : null}
                </div>
              </div>
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

              <div className="flex justify-between gap-4">
                <div className="my-3">
                  <label
                    htmlFor="level"
                    className="block text-gray-300 text-[16px]"
                  >
                    Level
                  </label>
                  <input
                    type="text"
                    id="level"
                    name="level"
                    placeholder="Software Design"
                    {...formik.getFieldProps("level")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />
                  {formik.touched.level && formik.errors.level ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.level}
                    </div>
                  ) : null}
                </div>
                <div className="my-3">
                  <label
                    htmlFor="semester"
                    className="block text-gray-300 text-[16px]"
                  >
                    Semester
                  </label>
                  <input
                    type="text"
                    id="semester"
                    name="semester"
                    placeholder="Project Manager"
                    {...formik.getFieldProps("semester")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />
                  {formik.touched.semester && formik.errors.semester ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.semester}
                    </div>
                  ) : null}
                </div>
              </div>

              <h1 className="text-lg my-4 font-bold text-app-sblue">
                Studentship <span className="text-app-porange">Details </span>
              </h1>

              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="uniemail"
                    className="block text-gray-300 text-[16px]"
                  >
                    University Email
                  </label>
                  <input
                    type="text"
                    id="uniemail"
                    name="sean.chinedu@lmu.edu.ng"
                    placeholder="nerdbudsltd@gmail.com"
                    {...formik.getFieldProps("uniemail")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />
                  {formik.touched.uniemail && formik.errors.uniemail ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.uniemail}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="reg"
                    className="block text-gray-300 text-[16px]"
                  >
                    University Reg No
                  </label>
                  <input
                    type="text"
                    id="reg"
                    name="sean.chinedu@lmu.edu.ng"
                    placeholder="nerdbudsltd@gmail.com"
                    {...formik.getFieldProps("reg")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />
                  {formik.touched.reg && formik.errors.reg ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.reg}
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

              <div className="my-3 relative">
                <label
                  htmlFor="picture"
                  className="block text-gray-300 text-[16px]"
                >
                  Proof of Identification
                </label>
                <Image
                  src="/images/upload.svg"
                  alt="Upload Icon"
                  width={200}
                  height={200}
                  priority
                />
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  accept="image/*"
                  onChange={(event) => {
                    const selectedFile = event.currentTarget.files
                      ? event.currentTarget.files[0]
                      : null;
                    formik.setFieldValue("picture", selectedFile);
                  }}
                  className="border-[1.5px] absolute top-7 bg-white opacity-0 z-10 w-[200px] h-[170px] text-[16px] rounded-md text-black px-3 py-1 mt-1"
                />
                {formik.touched.picture && formik.errors.picture ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.picture}
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
              <span className="text-app-sblue underline">
                {" "}
                Terms of Service{" "}
              </span>{" "}
              and acknowledge that you have read our{" "}
              <span className="text-app-porange underline">
                {" "}
                Privacy Policy.
              </span>{" "}
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
    </div>
  );
}
