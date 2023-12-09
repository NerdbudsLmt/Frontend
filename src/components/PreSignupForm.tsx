"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface PreSignupFormProps {
    link: string; // Explicitly define the type of the link prop
  }

export default function PreSignupForm({ link }: PreSignupFormProps) {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Save form values to sessionStorage
      sessionStorage.setItem('formValues', JSON.stringify(values));
      // Redirect to another page
      window.location.href = link;
    },
  });

   // Effect to clear sessionStorage on component unmount
   useEffect(() => {
    return () => {
      sessionStorage.removeItem('formValues');
    };
  }, []);

  return (
    <div className="py-6 mx-auto bg-app-pblue text-white w-full">
      <div className="mt-4">
        <div className="">
          <h1 className="text-4xl font-bold text-app-sblue">
            Hello
            <span className="text-app-porange">there</span>
          </h1>
          <p className="text-gray-400 my-2">
            Let&apos;s get you <span className="text-app-porange">started </span>
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="my-3">
              <label htmlFor="email" className="block text-gray-300 text-[16px]">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Your email"
                {...formik.getFieldProps("email")}
                className="border-[1.5px] w-full text-[16px] rounded-md text-black bg-white px-3 py-1 mt-1"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-[red] text-[14px] italic">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="my-3">
              <label htmlFor="password" className="block text-gray-300 text-[16px]">
                Password
              </label>
              <input
                type={show ? "password" : "text"}
                id="password"
                placeholder="Your password"
                {...formik.getFieldProps("password")}
                className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-[red] text-[14px] italic">{formik.errors.password}</div>
              ) : null}
              <div className="mt-2 flex items-center text-gray-400">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={show}
                  onChange={() => setShow(!show)}
                  className="mr-2"
                />
                <label htmlFor="showPassword">Show password</label>
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
            Do you have an account?{" "}
            <span className="text-app-porange">Log in</span>
          </p>
          <p className="w-[450px]">
            By continuing you agree to Nerdbuds{" "}
            <span className="text-app-sblue underline">Terms of Service</span> and
            acknowledge that you have read our{" "}
            <span className="text-app-porange underline">Privacy Policy.</span>
          </p>
          <Link href="/signup/google-business">
            <button className="bg-[#265D80] flex items-center justify-center mt-6 gap-4 text-white py-2 px-5 w-full rounded-full">
              <FcGoogle />
              Sign up with Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
