"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsEyeSlashFill, BsEyeFill, BsChevronLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import useCustomToast from "@/components/Toast";

interface CompanyFormValues {
  email: string;
  password: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useCustomToast();
  const router = useRouter();

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const res: any = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
          callbackUrl: "/dashboard",
        });
        if (res.status === 200) {
          toast(
            "Success",
            "success",
            true,
            2000,
            "Log In Success",
            "top-right"
          );
          // router.push("/dashboard");
          window.location.replace('/dashboard')
          console.log(res);
          setIsLoading(false);
        } else if (res.status === 401) {
          toast(
            "Error",
            "error",
            true,
            2000,
            "Invalid Email or Password",
            "top-right"
          );
          setIsLoading(false);
        }
      } catch (error: any) {
        toast("Error", "error", true, 2000, error, "top-right");
        setIsLoading(false);
      }
    },
  });

  return (
    <main className="mx-auto min-h-[100dvh] text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <Nav />

      <div className="py-6 mx-auto w-[100%] ">
        {/* <Link href="/signup" className=" ">
          <BsChevronLeft size={30} className="" />
        </Link> */}
        <div className="flex flex-row-reverse gap-8 my-4">
          <div className="login fp1 hidden laptop:block grow basis-[65%] h-[90dvh] rounded-lg overflow-hidden"></div>
          {/* <div className=" grow-[2] basis-[45%] my-auto"> */}
          <div className="min-h-[100dvh]  laptop:grow-[2] w-[97%] m-auto laptop:basis-[45%] laptop:my-auto">
            <h1 className="text-4xl font-bold text-app-sblue">
              Welcome
              <span className="text-app-porange"> back</span>
            </h1>
            <p className="text-gray-400 my-2">
              We give your <span className="text-app-porange">business </span>{" "}
              an edge over others.
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
                      placeholder="nerdbudsltd@gmail.com"
                      {...formik.getFieldProps("email")}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 outline-none"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-[red] text-[14px] italic">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-between gap-4"> */}
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
                  // name="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 outline-none"
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

              {/* </div> */}

              <button
                className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
                type="submit"
                disabled={isLoading}
              >
                Proceed
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-2 mb-5">
              Do have an account?{" "}
              <Link href="/signup" className="underline text-app-porange">
                Sign up{" "}
              </Link>
            </p>
            <p className="text-sm text-gray-400 mt-2 mb-5">
              Can&apos;t log in?{" "}
              <Link
                href="/forget-password"
                className="text-app-sblue underline"
              >
                Forget password{" "}
              </Link>
            </p>

            <Link href="/signup/google-company">
              <button
                className="bg-[#265D80] flex items-center justify-center mt-6 gap-4 text-white py-3 px-5 w-full rounded-full"
                // type="submit"
              >
                <FcGoogle />
                Sign up with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
