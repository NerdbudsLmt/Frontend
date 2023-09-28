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
  otpNumber: string;
}
// Define validation schema using Yup

  const validationSchema = Yup.object().shape({
    otpNumber: Yup.string() // Update to use otpNumber
      .matches(/^\d{6}$/, "OTP must be a 6-digit number") // Assuming OTP is a 6-digit number
      .required("OTP Number is required"),
  });
  
export default function Otp() {
  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      otpNumber: "", // Update to use otpNumber
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });
  

  return (
    <div className="my-6 mx-auto w-[90%] max-w-[900px] ">
     
      <div className="flex flex-row-reverse gap-8 my-4 ">
        <div className=" basis-[65%] h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/businessload.svg"
            alt="Vercel Logo"
            className="h-[800px] w-full relative -top-16 "
            width={600}
            height={500}
            quality={100}
          />
        </div>
        <div className="basis-[45%] my-auto">
          <h1 className="text-4xl font-bold text-app-sblue">
            Password
            <span className="text-app-porange"> reset</span>
          </h1>
          <p className="text-gray-400 my-2">
          Input the code was sent to  <span className="text-app-porange">nerdbudsltd@gmail.com </span>
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="">
              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-[16px]"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otpNumber"
                    placeholder="Enter OTP Number"
                    {...formik.getFieldProps("otpNumber")} // Update field props to use otpNumber
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                  />

                  {formik.touched.otpNumber && formik.errors.otpNumber ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.otpNumber}
                    </div>
                  ) : null}
                </div>
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
            Didn&apos;t recieve the email?{" "}
            <span className="text-app-porange underline"> Click to resend </span>
          </p>
        </div>
      </div>
    </div>
  );
}
