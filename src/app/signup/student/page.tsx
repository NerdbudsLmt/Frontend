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

interface CompanyFormValues {
  firstname: string;
  username: string;
  lastname: string;
  universityName: string;
  level: string;
  universityEmail: string;
  universityRegNo: string;
  semester: string;
  howDidYouHear: string;
  refId: string | null;
  socialMedia: string | null;
  proofOfIdentification: File | null;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  username: Yup.string().required("User Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  universityName: Yup.string().required("University Name is required"),
  level: Yup.string().required("Level is required"),
  universityEmail: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  universityRegNo: Yup.string().required("University Reg No is required"),
  semester: Yup.string().required("Semester is required"),
  howDidYouHear: Yup.string().required("Choose one"),
  socialMedia: Yup.string().required("Choose one"),
    proofOfIdentification: Yup.object()
    .shape({
      preview: Yup.string().required("Image is required"),
    })
    .required("At least one image is required"),
});

export default function Student() {
  const toast = useCustomToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const storedRefId =
  typeof window !== "undefined" ? sessionStorage.getItem("refId") : null;

  
  // console.log(parsedToken);

  useEffect(() => {
    const storedRefId = sessionStorage.getItem("refId");

    if (storedRefId) {
      formik.setFieldValue("howDidYouHear", "An affiliate");
      formik.setFieldValue("refId", storedRefId);
    }

    // Store refId in local storage for future use
    localStorage.setItem("refId", storedRefId || "");
  }, []);

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
      howDidYouHear: "",
      refId: storedRefId,
      socialMedia: "",
      proofOfIdentification: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem("token");
        const parsedToken = token?.replace(/"/g, "") || null;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
          if (key === "proofOfIdentification" && value === null) {
            return;
          }
          if (key === "howDidYouHear") {
            formData.append("refId", value.refId || "");
            formData.append("socialMedia", value.socialMedia || "");
            formData.append("howDidYouHear", value || "");
          } else {
            formData.append(key, value);
          }
        });

        const res = await fetch(`${apiUrl}/users/student`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
          body: formData,
        });

        setIsLoading(true);

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
        } else {
          toast("Error", "error", true, 2000, data.message, "top-right");
        }

        setIsLoading(false);
      } catch (error: any) {
        console.error("Error:", (error as Error).message);
        toast("Error", "error", true, 2000, error, "top-right");
        setIsLoading(false);
      }
    },
  });

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
              priority
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
                    placeholder="Universiy Name"
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
               
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
                    className="border-[1.5px] w-full text-[16px] rounded-md text-black bg-white px-3 py-2 mt-1"
                  />
                 
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
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                 
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
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
              
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
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                
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
                    placeholder="example@edu.ng"
                    {...formik.getFieldProps("universityEmail")}
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  
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
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                  
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
                    className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                  />
                </div>
              </div>
              <div className="">
                <div className="my-3">
                  <label htmlFor="howDidYouHear" className="block text-gray-300 text-[16px]">
                    How did you hear about us (optional)
                  </label>
                </div>
                <select
                id="howDidYouHear"
                  {...formik.getFieldProps("howDidYouHear")}
                  className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                >
                  <option value="">Select an option</option>
                  <option value={"An affiliate"}>An Affiliate</option>
                  <option value={"socialMedia"}>Social Media</option>
                  <option value={"friend"}>A friend</option>
                </select>
                {formik.touched.howDidYouHear && formik.errors.howDidYouHear ? (
                  <div className="text-[red] text-[14px] italic">
                    {formik.errors.howDidYouHear}
                  </div>
                ) : null}

                {formik.values.howDidYouHear === "An affiliate" && (
                  <div className="my-3">
                    <label
                      htmlFor="refId"
                      className="block text-gray-300 text-[16px]"
                    >
                      Referral Id
                    </label>
                    <input
                      type="text"
                      id="refId"
                      placeholder="Ref Id"
                      value={formik.values.refId || ""}
                      readOnly={!!storedRefId} // Set to read-only if retrieved from storedRefId
                      onChange={formik.handleChange}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                    />
                    {formik.touched.refId && formik.errors.refId ? (
                      <div className="text-[red] text-[14px] italic">
                        {formik.errors.refId}
                      </div>
                    ) : null}
                  </div>
                )}

                {formik.values.howDidYouHear === "socialMedia" && (
                  <div className="my-3">
                    <label
                      htmlFor="socialMedia"
                      className="block text-gray-300 text-[16px]"
                    >
                      Social Media
                    </label>
                    <select
                      {...formik.getFieldProps("socialMedia")}
                      className="border-[1.5px] w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1"
                    >
                      <option>Select an option</option>
                      <option value={"Twitter"}>Twitter</option>
                      <option value={"Instagram"}>Instagram</option>
                      <option value={"Snapchat"}>Snapchat</option>
                    </select>
                    {formik.touched.socialMedia && formik.errors.socialMedia ? (
                      <div className="text-[red] text-[14px] italic">
                        {formik.errors.socialMedia}
                      </div>
                    ) : null}
                  </div>
                )}

                <div className="my-3 relative">
                  <label
                    htmlFor="proofOfIdentification"
                    className="block text-gray-300 text-[16px]"
                  >
                    Upload ID Card
                  </label>
                  {imagePreview && (
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={100}
                      height={100}
                      className="relative rounded-xl mb-2"
                    />
                  )}
                  <Image
                    src="/images/upload.svg"
                    alt="Upload Icon"
                    width={100}
                    height={100}
                    priority
                  />
                  <input
                    type="file"
                    id="proofOfIdentification"
                    name="proofOfIdentification"
                    onChange={(event) => {
                      const selectedFile = event.currentTarget.files
                        ? event.currentTarget.files[0]
                        : null;
                      formik.setFieldValue(
                        "proofOfIdentification",
                        selectedFile
                      );

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
                  className="border-[1.5px] absolute top-7 opacity-0 z-10 w-[100px] bg-white h-[100px] text-[16px] rounded-md text-black px-3 py-1 -mt-1"

                  />
                  {formik.touched.proofOfIdentification &&
                  formik.errors.proofOfIdentification ? (
                    <div className="text-[red] text-[14px] italic">
                      {formik.errors.proofOfIdentification}
                    </div>
                  ) : null}
                </div>

                <button
                  className="bg-app-sblue cursor-pointer border-2 border-app-sblue text-white py-2 px-5 mt-3 rounded-full"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : "Proceed"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
