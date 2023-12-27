"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsEyeSlashFill, BsEyeFill, BsChevronLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import useCustomToast from "../Toast";
import StepIndicator from "./StepIndicator";

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
  NewPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  ComfirmPassword: Yup.string()
    .oneOf([Yup.ref("NewPassword")], "Password must match")
    .required("Password is required"),
});

const SetPassword: React.FC<NextPageProps> = ({ handleNext, steps, step }) => {
  const [show, setShow] = useState<boolean>(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const toast = useCustomToast();
  const otp = sessionStorage.getItem("otp");
  const formik = useFormik<PasswordFormValues>({
    initialValues: {
      NewPassword: "",
      ComfirmPassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const res: any = await fetch(
          `${apiUrl}/auth/resetpassword/change-password`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              otp: otp,
              newPassword: values.NewPassword,
            }),
          }
        );
        const data = await res.json();
        if (res.status === 200) {
          toast(
            "Success",
            "success",
            true,
            2000,
            data.data.message,
            "top-right"
          );
          handleNext();
          sessionStorage.removeItem("otp");
        } else {
          toast("Error", "error", true, 2000, data.message, "top-right");
        }
      } catch (error: any) {
        toast("Error", "error", true, 2000, error.message, "top-right");
      }
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
                    placeholder="NewPassword"
                    {...formik.getFieldProps("NewPassword")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 "
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
                placeholder="ComfirmPassword"
                {...formik.getFieldProps("ComfirmPassword")}
                className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2"
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
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-6 mt-3 rounded-full"
              type="submit"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <StepIndicator steps={steps} step={step} />
      </div>
    </div>
  );
};

export default SetPassword;
