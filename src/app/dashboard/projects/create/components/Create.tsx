'use client'

import React, { FormEvent, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";


interface FormValues {
  projectName: string;
  description: string;
  services: string[];
  callSchedule: Date | null;
}


const servicesList: string[] = [
  "Cloud Engineering",
  "UI/UX",
  "Security",
  "Consultation",
  "Branding",
];

const validationSchema = Yup.object().shape({
  projectName: Yup.string().required("Project name is required"),
  description: Yup.string().required("Description is required"),
  services: Yup.array().min(1, "Select at least one item"),
  callSchedule: Yup.date().required("Select a fixed date and time"),
});

export default function CreateProject() {
  const { data: session }: any = useSession();
  const toast = useToast();

  const initialValues: FormValues = {
    projectName: "",
    description: "",
    services: [],
    callSchedule: null,
  };

  const handleFormSubmit = async (values: FormValues) => {
    console.log(values)
    try {
      const response = await fetch('https://nerdbuds.onrender.com/api/v1/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast({
          title: "Project created",
          description: responseData.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        console.log(responseData);
      } else {
        // toast({
        //   title: response,
        //   status: "error",
        //   duration: 5000,
        //   isClosable: true,
        //   position: "top-right",
        // });
        console.error(response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div className="flex flex-col gap-2">
              <Field
                className="bg-[#F5F4F4] py-3 px-4 mb-8 rounded-xl focus:outline-app-pblue focus:outline-1"
                placeholder="Project Name"
                as="input"
                name="projectName"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error text-red-500 italic text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
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
                {servicesList.map((item) => (
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

            <DatePicker
              selected={values.callSchedule}
              onChange={(date: Date | null) => setFieldValue('callSchedule', date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="Pp"
              placeholderText="Select Date and Time"
              className=" mt-2 border-2  rounded-lg w-fit py-3 px-3"
              required
            />

            <div>
              <button
                type="submit"
                className="flex gap-3 mt-4 items-center transition bg-[#205584] border-2 text-white border-[#205584] py-2 px-4 rounded-lg"
              >
                Create Project
                <FiArrowRight size={20} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

