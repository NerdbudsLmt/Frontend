"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";

interface FormValues {
  description: string;
  items: string[];
  dayOfWeek: string;
  time: string;
  meredian: string;
}

const itemsList: string[] = [
  "Cloud Engineering",
  "UI/UX",
  "Security",
  "Consultation",
  "Branding",
]; // Your list of items

const timeOptions = [
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
];

const meredian = ["AM", "PM"];

const validationSchema = Yup.object().shape({
  description: Yup.string().required("Description is required"),
  items: Yup.array().min(1, "Select at least one item"),
  dayOfWeek: Yup.string().required("Day of the week is required"),
  time: Yup.string().required("Time is required"),
  meredian: Yup.string().required("Meredian is required"),
});


export default function CreateProject() {
  const { data: session }: any = useSession();
  const toast = useToast();
  const handleSubmit = (values: FormValues) => {
    console.log(values); // Log form values to console
  };

  async function createProject() {
    const url = "https://nerdbuds.onrender.com/api/v1/projects";
    // const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    console.log("Access Token:", session?.user?.accessToken);

    const requestData = {
      projectName: "IT",
      services: ["Commerce", "Marine"],
      callSchedule: "2023-10-27 21:20:09.431",
      description: "I want my app in 3 months",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`, // Include the bearer token here
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast({
          title: "Project created ",
          description: responseData.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        console.log(responseData);
      } else {
        toast({
          title: "UNABLE TO CREATE NEW PROJECT, PLS CONTACT THE SUPPORT TEAM",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        console.log("Create project error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const handleButtonClick = () => {
    createProject();
  };

  return (
    <div className="max-w-[800px]">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Create a project</p>
      </div>

      <p className="font-bold text-2xl my-6">Create a project</p>

      <Formik
        initialValues={{
          description: "",
          items: [],
          dayOfWeek: "",
          time: "",
          meredian: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col gap-2">
            {/* <label>Description</label> */}
            <Field
              className="bg-[#F5F4F4] py-3 px-4 min-h-[130px] rounded-xl focus:outline-app-pblue focus:outline-1"
              placeholder="Briefly describe your project."
              as="textarea"
              name="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error text-red-500 italic text-sm"
            />
          </div>

          <div className="my-6 bg-[#F5F4F4] py-4 px-4 rounded-xl">
            <label className="font-semibold mb-4">
              What services do you need?
            </label>
            <div className="flex gap-5 flex-wrap mt-4">
              {itemsList.map((item) => (
                <div
                  key={item}
                  className="flex bg-[#DCEBFF] py-2 px-4 rounded-xl gap-2 accent-app-pblue"
                >
                  <Field type="checkbox" name="items" value={item} />
                  <label>{item}</label>
                </div>
              ))}
            </div>
            <ErrorMessage
              name="items"
              component="div"
              className="error text-red-500 italic text-sm"
            />
          </div>

          <p className="my-4 text-[18px] ">
            Schedule a meeting through our Calendly to give us more information
            about what project you have in mind.
          </p>
          <div>
            <button
              type="submit"
              className="flex gap-3 items-center transition bg-[#3F9BD5] border-2 text-white py-3 px-4 rounded-lg"
            >
              Schedule a meeting with Calendly
              <LuClock3 size={20} className="font-bold" />
            </button>
          </div>
          <p className="my-4 text-[18px] ">Schedule a meeting with Calendly</p>

          <div>
            <button
              type="submit"
              className="flex gap-3 mt-4 items-center transition bg-[#205584] border-2 text-white border-[#205584] py-2 px-4 rounded-lg"
              onClick={handleButtonClick}
            >
              Create Project
              <FiArrowRight size={20} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
