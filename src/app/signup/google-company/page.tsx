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
  company: string;
  industry: string;
  position: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  company: Yup.string().required("Company Name is required"),
  industry: Yup.string().required("Industry Name is required"),
  position: Yup.string().required("Position Name is required"),
});

export default function CompanyG() {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      company: "",
      industry: "",
      position: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="my-6">
      <Link href="/signup">
        <BsChevronLeft size={30} className="my-5" />
      </Link>
      <div className="flex gap-8 mb-4">
        <div className=" basis-[40%] ">
          <Image
            src="/images/scompany.svg"
            alt="Vercel Logo"
            width={600}
            height={600}
          />
        </div>
        <div className="basis-[55%] my-auto">
          <h1 className="text-4xl font-bold text-app-sblue">
            Join <span className="text-app-porange">us </span>
            <span className="text-app-porange">today 👋</span>
          </h1>
          <p className="text-gray-400 my-2">
            Help us take your <span className="text-app-porange">company </span>{" "}
            to the next level.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
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
                  // name="company"
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
                  // name="industry"
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
                  // name="position"
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

            <button
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
              type="submit"
            >
              Proceed
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
        </div>
      </div>
    </div>
  );
}
