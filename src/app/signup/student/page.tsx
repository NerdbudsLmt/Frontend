"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";

import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCustomToast from "@/components/Toast";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

/**
 * Represents the values of the Company form.
 * @interface CompanyFormValues
 */

interface CompanyFormValues {
  firstname: string;
  username: string;
  lastname: string;
  universityName: string;
  level: string;
  universityEmail: string;
  universityRegNo: string;
  semester: string;
  howDidYouHear: {
    options: string;
    details: {
      refId: string | null;
      socialMedia: string;
    };
  };
  proofOfIdentification: File | null;
}

export default function Student() {
  const toast = useCustomToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const storedRefId = sessionStorage?.getItem("refId");

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    lastname: Yup.string().required("Last Name is required"),
    universityName: Yup.string().required("universityName Name is required"),
    level: Yup.string().required("level Name is required"),
    universityEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    universityRegNo: Yup.string().required(
      "universityRegNo number is required"
    ),
    semester: Yup.string().required("semester is required"),
    options: Yup.string(),
    // refId: Yup.string().required("refId is required"),
    // socialMedia: Yup.string().required("Choose one"),
    proofOfIdentification: Yup.mixed()
      .required("Image is required")
      .test("fileSize", "File size must be less than 1MB", (value) =>
        value ? (value as File).size <= 1024000 : true
      )
      .test("fileType", "Only image files are allowed", (value) =>
        value ? (value as File).type.startsWith("image/") : true
      ),
  });

  // Initialize Formik for managing form state and validation.
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      universityName: "",
      level: "",
      universityEmail: "",
      universityRegNo: "",
      semester: "",
      howDidYouHear: {
        options: "",
        details: {
          refId: storedRefId,
          socialMedia: "",
        },
      },
      proofOfIdentification: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        // Skip appending the proofOfIdentification field if it's null
        if (key === "proofOfIdentification" && value === null) {
          return;
        }

        // Skip appending the howDidYouHear field if no option is chosen
        if (key === "howDidYouHear" && value.options === "") {
          return;
        }
        if (key === "howDidYouHear") {
          // Append the options property only if it's not an empty string
          formData.append("howDidYouHear", value.options);
          // Check if the options is "An affiliate" and append the refId
          if (value.options === "An affiliate") {
            formData.append("refId", value.details.refId || "");
          }
          // Check if the options is "Social Media" and append the socialMedia
          if (value.options === "Social Media") {
            formData.append("socialMedia", value.details.socialMedia || "");
          }
        } else if (value !== "") {
          // Skip empty values
          formData.append(key, value);
        }
      });

      // console.log("formdata", JSON.stringify(formData));
      console.log(values);

      try {
        setIsLoading(true);
        console.log("working");
        const token = localStorage.getItem("token");
        const parsedToken = token?.replace(/"/g, "") || null;

        const res = await fetch(`${apiUrl}/users/student`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
          body: formData,
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
          console.log("Success:", data);

          router.push("/login");
          setIsLoading(false);
        } else {
          toast("Error", "error", true, 2000, data.message, "top-right");
          console.log("errr 2");
          setIsLoading(false);
        }
      } catch (error: any) {
        console.error("Error:", (error as Error).message);
        toast("Error", "error", true, 2000, error, "top-right");
        setIsLoading(false);
      }
    },
  });
  useEffect(() => {
    if (storedRefId) {
      formik.setFieldValue("howDidYouHear.options", "An affiliate");
      formik.setFieldValue("howDidYouHear.details.refId", storedRefId);
    }
  }, [formik, storedRefId]);

  return (
    <div>
      <div className="py-6 mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px] min-h-[100dvh]">
        <Link href="/signup" className="">
          <BsChevronLeft size={30} className="my-5" />
        </Link>
        <div className="flex gap-8 mb-4">
          <div className="hidden sm:block basis-[50%] ">
            <Image
              src="/images/studentlog.svg"
              alt="Vercel Logo"
              width={600}
              quality={100}
              height={600}
            />

            <div className="bg-sign my-10 p-4 rounded-md">
              <h1 className="text-3xl font-bold text-app-sblue">
                <span className="text-white">Introducing</span> Project
                <span className="text-app-porange"> Pal</span>
              </h1>
              <p className="text-[17px] mt-2">
                Level up your final year project with Project Pal! Expert
                programmers will assist you every step of the way, ensuring
                success. Join now for seamless guidance, top-notch coding
                support, and ace your project with confidence!
              </p>
            </div>

            <div>
              <div className="flex my-6 gap-6 flex-col tablet:flex-row">
                <div className="flex w-[100%] tablet_l:w-[60%] gap-3 items-center">
                  <Image
                    src="/images/Temi.png"
                    className=" rounded-full"
                    alt="Vercel Logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="my-auto">
                    <p className="text-app-sblue">Temi Adebayo </p>
                    <p>400L Student</p>
                  </div>
                </div>
                <p className="w-[100%] tablet_l:w-[40%] text-sm">
                  &ldquo; Project Pal made my final year a success! Expert
                  guidance and coding support were game-changers!&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="grow-[2] basis-[55%] max-w-[600px]  ">
            <h1 className="text-4xl font-bold text-app-sblue">
              Join <span className="text-app-porange">us </span>
              <span className="text-app-porange">today 👋</span>
            </h1>
            <p className="text-gray-400 my-2">
              Help us take your{" "}
              <span className="text-app-porange">company </span> to the next
              level.
            </p>

            <form className="my-4" onSubmit={formik.handleSubmit}>
              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="universityName"
                    className="block text-gray-300 text-[16px]"
                  >
                    University Name
                  </label>
                  <input
                    type="text"
                    id="universityName"
                    placeholder="University Name"
                    {...formik.getFieldProps("universityName")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.universityName &&
                  formik.errors.universityName ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.universityName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="my-3 basis-[50%]">
                  <label
                    htmlFor="firstname"
                    className="block text-gray-300 text-[16px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    {...formik.getFieldProps("firstname")}
                    className="border-[1.5px] w-full text-[16px] rounded-md text-black bg-white px-3 py-2 mt-1"
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                </div>
                <div className="my-3  basis-[50%]">
                  <label
                    htmlFor="lastname"
                    className="block text-gray-300 text-[16px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastname")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <div className="my-3  basis-[50%]">
                  <label
                    htmlFor="level"
                    className="block text-gray-300 text-[16px]"
                  >
                    Level
                  </label>
                  <input
                    type="text"
                    id="level"
                    placeholder="200L"
                    {...formik.getFieldProps("level")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.level && formik.errors.level ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.level}
                    </div>
                  ) : null}
                </div>
                <div className="my-3 basis-[50%]">
                  <label
                    htmlFor="username"
                    className="block text-gray-300 text-[16px]"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    {...formik.getFieldProps("username")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
              </div>

              <h1 className="text-lg my-4 font-bold text-app-sblue">
                Studentship <span className="text-app-porange">Details </span>
              </h1>

              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="universityEmail"
                    className="block text-gray-300 text-[16px]"
                  >
                    Universiy Email
                  </label>
                  <input
                    type="email"
                    id="universityEmail"
                    placeholder="sean.chinedu@lmu.edu.ng"
                    {...formik.getFieldProps("universityEmail")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.universityEmail &&
                  formik.errors.universityEmail ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.universityEmail}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="universityRegNo"
                    className="block text-gray-300 text-[16px]"
                  >
                    Universiy Reg No
                  </label>
                  <input
                    type="text"
                    id="universityRegNo"
                    placeholder="84A23S"
                    {...formik.getFieldProps("universityRegNo")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.universityRegNo &&
                  formik.errors.universityRegNo ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.universityRegNo}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="">
                <div className="my-3">
                  <label
                    htmlFor="semester"
                    className="block text-gray-300 text-[16px]"
                  >
                    Semester
                  </label>
                  <input
                    type="text"
                    id="semester"
                    placeholder="semester"
                    {...formik.getFieldProps("semester")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  {formik.touched.semester && formik.errors.semester ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.semester}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="">
                <div className="my-3">
                  <label htmlFor="" className="block text-gray-300 text-[16px]">
                    How did you hear about us (optional)
                  </label>

                  <select
                    {...formik.getFieldProps("howDidYouHear.options")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  >
                    <option>Option</option>
                    <option value={"An affiliate"}>An Affiliate</option>
                    <option value={"Social Media"}>Social Media</option>
                    <option value={"A Friend"}>A friend</option>
                  </select>
                  {formik.touched.howDidYouHear?.options &&
                  formik.errors.howDidYouHear?.options ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.howDidYouHear?.options}
                    </div>
                  ) : null}
                </div>
              </div>
              {formik.values.howDidYouHear?.options === "An affiliate" && (
                <div className="">
                  <div className="my-3">
                    <label
                      htmlFor="refId"
                      className="block text-gray-300 text-[16px]"
                    >
                      Refferal Id
                    </label>
                    <input
                      type="text"
                      id="howDidYouHear.details.refId"
                      placeholder="Refferal Id"
                      readOnly={storedRefId ? true : false}
                      defaultValue={
                        formik.values.howDidYouHear?.details?.refId ??
                        storedRefId!
                      }
                      {...formik.getFieldProps("howDidYouHear.details.refId")}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                    />
                    {formik.touched.howDidYouHear?.details?.refId &&
                    formik.errors.howDidYouHear?.details?.refId ? (
                      <div className="text-[red] text-[14px] italic">
                        {formik.errors.howDidYouHear?.details?.refId}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {formik.values.howDidYouHear.options === "Social Media" && (
                <div className="">
                  <div className="my-3">
                    <label
                      htmlFor="howDidYouHear.details.socialMedia"
                      className="block text-gray-300 text-[16px]"
                    >
                      Social Media
                    </label>
                    <select
                      {...formik.getFieldProps(
                        "howDidYouHear.details.socialMedia"
                      )}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                    >
                      <option>Option</option>
                      <option value={"Twitter"}>Twitter</option>
                      <option value={"Instagram"}>Instagram</option>
                      <option value={"Snapchat"}>Snapchat</option>
                    </select>
                    {formik.touched.howDidYouHear?.details?.socialMedia &&
                    formik.errors.howDidYouHear?.details?.socialMedia ? (
                      <div className="text-[red] text-[14px] italic">
                        {formik.errors.howDidYouHear?.details?.socialMedia}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              <div className="my-3 relative">
                <label
                  htmlFor="proofOfIdentification"
                  className="block text-gray-300 text-[16px]"
                >
                  Upload ID Card
                  <Image
                    src="/images/upload.svg"
                    alt="Upload Icon"
                    width={100}
                    height={100}
                    priority
                  />
                </label>
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt="Image Preview"
                    width={200}
                    height={200}
                    className="relative rounded-xl mb-2 w-[13rem] h-[10rem]"
                  />
                )}

                <input
                  type="file"
                  id="proofOfIdentification"
                  name="proofOfIdentification"
                  onChange={(event) => {
                    const selectedFile = event.currentTarget.files
                      ? event.currentTarget.files[0]
                      : null;
                    formik.setFieldValue("proofOfIdentification", selectedFile);

                    if (selectedFile) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setImagePreview(reader.result as string);
                      };
                      reader.readAsDataURL(selectedFile);
                    } else {
                      setImagePreview(null);
                    }
                  }}
                  style={{ zIndex: 1, pointerEvents: "none" }}
                  className="border-[1.5px] absolute  bg-white opacity-0 z-10 w-[200px] h-[170px] text-[16px] rounded-md text-black px-3 py-1 mt-1"
                />
                {formik.touched.proofOfIdentification &&
                formik.errors.proofOfIdentification ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.proofOfIdentification}
                  </div>
                ) : null}
              </div>

              <button
                className="mt-3 bg-app-sblue border-2 border-app-sblue text-white py-2 px-5 cursor-pointer  rounded-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : "Proceed"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
