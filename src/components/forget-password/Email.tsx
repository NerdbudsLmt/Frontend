"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import useCustomToast from "../Toast";
import StepIndicator from "./StepIndicator";

/**
 * Represents the values of the Company form.
 * @interface LoginFormValues
 */

interface LoginFormValues {
  email: string;
}
interface NextPageProps {
  handleNext: () => void;
  steps: number;
  step: number;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const Email: React.FC<NextPageProps> = ({ handleNext, steps, step }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const toast = useCustomToast();
  // Initialize Formik for managing form state and validation.
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res: any = await fetch(
          `${apiUrl}/auth/resetpassword/send-token`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
            }),
          }
        );
        const data = await res.json();
        if (res.status === 200) {
          toast(
            "Reset Link Sent",
            "success",
            true,
            2000,
            data.data.message,
            "top-right"
          );
          handleNext();
          // setIsLoading(false);
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
      <div className="flex flex-row-reverse gap-8 my-4 ">
        <div className="hidden laptop:block grow basis-[65%] h-[100vh] rounded-lg overflow-hidden"></div>
        <div className="grow-[2] basis-[45%] my-auto">
          <h1 className="text-4xl font-bold text-app-sblue">
            Forget
            <span className="text-app-porange"> password</span>
          </h1>
          <p className="text-gray-400 my-2">
            <span className="text-app-porange">Lets get you back </span>
            in your account.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="">
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
                    // name="email"
                    placeholder="geekOpsltd@gmail.com"
                    {...formik.getFieldProps("email")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2.5 mt-2"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
              type="submit"
              // onClick={nextPage}
            >
              Reset password
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-2 mb-5">
            Do you remember?{" "}
            <Link href="/login" className="text-app-porange underline">
              {" "}
              Return to Log in{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <StepIndicator steps={steps} step={step} />
      </div>
    </div>
  );
};

export default Email;
