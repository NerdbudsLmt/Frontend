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
  NewPassword: string;
  ComfirmPassword: string;
  }
// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  NewPassword: Yup.string().required("Password is required"),
  ComfirmPassword: Yup.string().required("Password is required"),
});

export default function SetPassword() {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      NewPassword: "",
      ComfirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="my-6 mx-auto w-[90%] max-w-[900px] ">
      <Link href="/signup" className=" ">
        <BsChevronLeft size={30} className="" />
      </Link>
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
             Set new
            <span className="text-app-porange"> password</span>
          </h1>
          <p className="text-gray-400 my-2">
          Password must be at least 8 characters.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
           
            <div className="">
             
            <div className="">
            <div className="my-3 relative">
              <label
                htmlFor="NewPassword"
                className="block font-semibold text-[16px]"
              >
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="NewPassword"
                // name="password"
                placeholder="NewPassword"
                {...formik.getFieldProps("NewPassword")}
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
              {formik.touched.NewPassword && formik.errors.NewPassword ? (
                <div className="text-[red] text-[14px] italic">
                  {formik.errors.NewPassword}
                </div>
              ) : null}
            </div>
            </div>
            </div>

            {/* <div className="flex justify-between gap-4"> */}
            <div className="my-3 relative">
              <label
                htmlFor="ComfirmPassword"
                className="block font-semibold text-[16px]"
              >
                Comfirm Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="ComfirmPassword"
                // name="password"
                placeholder="ComfirmPassword"
                {...formik.getFieldProps("ComfirmPassword")}
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
              {formik.touched.ComfirmPassword && formik.errors.ComfirmPassword ? (
                <div className="text-[red] text-[14px] italic">
                  {formik.errors.ComfirmPassword}
                </div>
              ) : null}
            </div>


            {/* </div> */}

            

            <button
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
              type="submit"
            >
              Proceed
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}
