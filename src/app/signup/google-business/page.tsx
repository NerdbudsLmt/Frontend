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
  business: string;
  industry: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  business: Yup.string().required("Business Name is required"),
  industry: Yup.string().required("Industry Name is required"),
});

export default function BusinessG() {
  const [show, setShow] = useState<boolean>(true);

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      business: "",
      industry: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="my-6 mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <Link href="/signup" className=" ">
        <BsChevronLeft size={30} className="" />
      </Link>
      <div className="flex gap-8 my-4 ">
        <div className="hidden laptop:block grow basis-[40%] ">
          <Image
            src="/images/businessload.svg"
            alt="Vercel Logo"
            width={600}
            height={600}
          />
        </div>
        <div className="grow-[2] basis-[55%] my-auto">
          <h1 className="text-4xl font-bold text-app-sblue">
            Hello
            <span className="text-app-porange">Enterpreneurs👋</span>
          </h1>
          <p className="text-gray-400 my-2">
            We give your <span className="text-app-porange">business </span> an
            edge over others.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
           
            <div className="">
              <div className="my-3">
                <label
                  htmlFor="business"
                  className="block text-gray-300 text-[16px]"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  // name="business"
                  placeholder="Nerdbud Ltd"
                  {...formik.getFieldProps("business")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.business && formik.errors.business ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.business}
                  </div>
                ) : null}
              </div>
            </div>

            {/* <div className="flex justify-between gap-4"> */}
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

            {/* </div> */}

            

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
