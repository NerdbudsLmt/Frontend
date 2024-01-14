"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCustomToast from "@/components/Toast";
import { Spinner } from "@chakra-ui/react";


/**
 * Represents the values of the Company form.
 * @interface CompanyFormValues
 */

interface CompanyFormValues {
  firstname: string;
  lastname: string;
  businessName: string;
  businessIndustry: string;
  username: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  businessName: Yup.string().required("Business Name is required"),
  businessIndustry: Yup.string().required("Industry Name is required"),
  username: Yup.string().required("Username Number is required"),
});

export default function Company() {
  const toast = useCustomToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      firstname: "",
      lastname: "",
      businessName: "",
      businessIndustry: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem("token");

        const parsedToken = token?.replace(/"/g, "") || null;

        console.log(parsedToken);

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        setIsLoading(true);

        const res = await fetch(`${apiUrl}/users/business`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedToken}`,
          },
          body: JSON.stringify(values),
        });
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
          
          router.push("/login");
          setIsLoading(false);
        } else {
          toast("Error", "error", true, 2000, data.message, "top-right");
        setIsLoading(false);

        }
      } catch (error: any) {
        console.error("Error:", (error as Error).message);
        toast("Error", "error", true, 2000, error, "top-right");
      }
    },
  });

  return (
    <div className="py-6 mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px] min-h-[100dvh]">
      <Link href="/signup" className=" ">
        <BsChevronLeft size={30} className="" />
      </Link>
      <div className="flex gap-8 mt-4">
        <div className="hidden laptop:block grow basis-[40%] ">
          <Image
            src="/images/businessload.svg"
            alt="Vercel Logo"
            width={600}
            height={600}
          />
        </div>
        <div className="grow-[2] basis-[55%]">
          <h1 className="text-4xl font-bold text-app-sblue">
            Hello
            <span className="text-app-porange">Enterpreneurs👋</span>
          </h1>
          <p className="text-gray-400 my-2">
            We give your <span className="text-app-porange">business </span> an
            edge over others.
          </p>
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="flex justify-between gap-4">
              <div className="my-3">
                <label
                  htmlFor="firstname"
                  className="block text-gray-300 text-[16px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  // name="firstname"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstname")}
                  className="border-[1.5px] w-full text-[16px] rounded-md text-black bg-white px-3 py-1 mt-1"
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.firstname}
                  </div>
                ) : null}
              </div>
              <div className="my-3">
                <label
                  htmlFor="lastname"
                  className="block text-gray-300 text-[16px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  // name="lastname"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastname")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.lastname}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="">
              <div className="my-3">
                <label
                  htmlFor="businessName"
                  className="block text-gray-300 text-[16px]"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  // name="businessName"
                  placeholder="Nerdbud Ltd"
                  {...formik.getFieldProps("businessName")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.businessName && formik.errors.businessName ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.businessName}
                  </div>
                ) : null}
              </div>
            </div>

            {/* <div className="flex justify-between gap-4"> */}
            <div className="my-3">
              <label
                htmlFor="businessIndustry"
                className="block text-gray-300 text-[16px]"
              >
                Industry
              </label>
              <input
                type="text"
                id="businessIndustry"
                // name="businessIndustry"
                placeholder="Software Design"
                {...formik.getFieldProps("businessIndustry")}
                className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
              />
              {formik.touched.businessIndustry &&
              formik.errors.businessIndustry ? (
                <div className="text-[red] text-[14px] italic">
                  {formik.errors.businessIndustry}
                </div>
              ) : null}
            </div>

            {/* </div> */}

            <div className="">
              <div className="my-3">
                <label
                  htmlFor="username"
                  className="block text-gray-300 text-[16px]"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  // name="username"
                  placeholder="Username"
                  {...formik.getFieldProps("username")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-1 mt-1"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
            </div>

            <button
              className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
              type="submit"
              disabled={isLoading}

            >
             
              {isLoading ? <Spinner/> : ' Create account'}

            </button>
          </form>

          <p className="text-sm text-gray-400 mt-2 mb-5">
            Do have an account?{" "}
            <span className="text-app-porange"> Log in </span>
          </p>
         
        </div>
      </div>
    </div>
  );
}
