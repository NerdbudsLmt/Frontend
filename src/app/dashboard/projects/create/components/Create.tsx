"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { useSession } from "next-auth/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCustomToast from "@/components/Toast";
import { Spinner } from "@chakra-ui/react";

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

export default function CreateProject() {
  const { data: session }: any = useSession();
  const toast = useCustomToast();
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("Project name is required"),
    description: Yup.string().required("Description is required"),
    services: Yup.array().min(1, "Select at least one item"),
    callSchedule: Yup.date().required("Select a fixed date and time"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      projectName: "",
      description: "",
      services: [],
      callSchedule: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res: any = await fetch(`${apiUrl}/projects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (res.status === 200) {
          toast(
            "Project created",
            "success",
            true,
            2000,
            data.data.message,
            "top-right"
          );
          setLoading(false);
          formik.resetForm();
        } else {
          toast("Failed", "error", true, 2000, data.message, "top-right");
          console.error(res);
          setLoading(false);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    },
  });

  return (
    <div className="max-w-[800px]">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Create a project</p>
      </div>

      <p className="font-bold text-2xl my-6">Create a project</p>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2 mb-5">
          <input
            className="bg-[#F5F4F4] border border-[#DBD9D9] outline-none py-3 px-4  rounded-xl"
            placeholder="Project Name"
            {...formik.getFieldProps("projectName")}
            name="projectName"
          />
          {formik.touched.projectName && formik.errors.projectName ? (
            <div className="text-[red] text-[14px] italic">
              {formik.errors.projectName}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <textarea
            className="bg-[#F5F4F4] border border-[#DBD9D9] py-3 outline-none px-4 min-h-[130px] rounded-xl"
            placeholder="Briefly describe your project."
            {...formik.getFieldProps("description")}
            name="description"
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-[red] text-[14px] italic">
              {formik.errors.description}
            </div>
          ) : null}
        </div>

        <div className="my-6 bg-[#F5F4F4] py-4 px-4 rounded-xl">
          <label className="font-semibold mb-4">
            What services do you need?
          </label>
          <div className="flex gap-5 flex-wrap mt-4">
            {servicesList.map((item) => (
              <div
                key={item}
                className="flex bg-[#DCEBFF] py-2 px-4 rounded-full gap-2 accent-app-pblue"
              >
                <input
                  type="checkbox"
                  name="items"
                  value={item}
                  checked={formik.values.services.includes(item)}
                  onChange={() => {
                    const services = [...formik.values.services];
                    if (services.includes(item)) {
                      services.splice(services.indexOf(item), 1);
                    } else {
                      services.push(item);
                    }
                    formik.setFieldValue("services", services);
                  }}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
          {formik.touched.services && formik.errors.services ? (
            <div className="text-[red] text-[14px] italic">
              {formik.errors.services}
            </div>
          ) : null}
        </div>

        <p className="my-4 text-[18px] ">
          Schedule a meeting through our Calendly to give us more information
          about what project you have in mind.
        </p>
        <div>
          <DatePicker
            selected={formik.values.callSchedule}
            onChange={(date) => formik.setFieldValue("callSchedule", date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Select Date and Time"
            className={`mt-2 border-2 rounded-lg w-fit py-3 px-3 ${
              formik.touched.callSchedule && formik.errors.callSchedule
                ? "border-red-500"
                : "outline-none"
            }`}
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="flex gap-3 mt-4 items-center transition bg-[#205584] border-2 text-white border-[#205584] py-2 px-4 rounded-lg"
          >
            {loading ? (
              <Spinner />
            ) : (
              <span className="flex items-center gap-2">
                Create Project <FiArrowRight size={20} />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
