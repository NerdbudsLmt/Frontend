"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsEyeSlashFill, BsEyeFill, BsChevronLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Spinner } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const refId = searchParams.get("refid");

  // Store refId in local storage
  useEffect(() => {
    if (refId) {
      sessionStorage.setItem("refId", refId);
    }
  }, [refId]);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        setIsLoading(true);

        localStorage.setItem("signupData", JSON.stringify(values));
        router.push("/signup/user-type");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.error("Error occurred:", error);
      }
    },
  });

  return (
    <main className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <Nav />

      <div className="py-6 mx-auto w-[100%] ">
        <div className="flex  gap-8 my-4">
          <div className="login fp1 hidden laptop:block grow laptop:basis-[65%] h-[90dvh] rounded-lg overflow-hidden"></div>
          <div className="min-h-[100dvh]  laptop:grow-[2] w-[97%] m-auto laptop:basis-[45%] laptop:my-auto">
            <h1 className="text-4xl font-bold text-app-sblue">
              Hello
              <span className="text-app-porange"> there</span>👋
            </h1>
            <p className="text-gray-400 my-2">
              Let’s get you <span className="text-app-porange"> started! </span>
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
                      placeholder="nerdbudsltd@gmail.com"
                      {...formik.getFieldProps("email")}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1 outline-none"
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
                {isLoading ? <Spinner /> : "Proceed"}
              </button>
            </form>

            <div className="text-sm text-gray-400 mt-2 mb-5">
              Do have an account?{" "}
              <Link href="/login" className="underline text-app-porange">
                Log in{" "}
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-2 mb-5">
              Can&apos;t log in?{" "}
              <Link
                href="/forget-password"
                className="text-app-sblue underline"
              >
                {" "}
                Forget password{" "}
              </Link>
            </p>

            {/* <button
              className="bg-[#265D80] flex items-center justify-center mt-6 gap-4 text-white py-2 px-5 w-full rounded-full"
              // type="submit"
            >
              <FcGoogle />
              Sign up with Google
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}
