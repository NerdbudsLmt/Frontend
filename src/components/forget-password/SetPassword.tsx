"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsEyeSlashFill, BsEyeFill, BsChevronLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

interface PasswordFormValues {
  NewPassword: string;
  ComfirmPassword: string;
}

interface NextPageProps {
  handleNext: () => void; // Assuming nextPage is a function that takes no arguments and returns void
  steps: number;
  step: number;
}
// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  NewPassword: Yup.string().required("Password is required"),
  ComfirmPassword: Yup.string().required("Password is required"),
});

const SetPassword: React.FC<NextPageProps> = ({ handleNext, steps, step }) => {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<PasswordFormValues>({
    initialValues: {
      NewPassword: "",
      ComfirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      handleNext();
      console.log(values);
    },
  });

  return (
    <div className="my-6 mx-auto w-full ">
      {/* <Link href="/signup" className=" ">
        <BsChevronLeft size={30} className="" />
      </Link> */}
      <div className="flex flex-row-reverse gap-8 my-4 ">
        <div className="fp3 hidden laptop:block grow basis-[65%] h-[600px] rounded-lg overflow-hidden"></div>
        <div className="grow-[2] basis-[45%] my-auto">
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
              {formik.touched.ComfirmPassword &&
              formik.errors.ComfirmPassword ? (
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
};

export default SetPassword;
