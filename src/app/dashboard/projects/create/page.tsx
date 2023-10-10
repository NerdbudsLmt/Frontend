"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from 'react-icons/fi'

interface FormValues {
  description: string;
  items: string[];
  dayOfWeek: string;
  time: string;
  meredian: string;
}

const itemsList: string[] = [
  "Devops",
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
});

export default function Create() {
  const handleSubmit = (values: FormValues) => {
    console.log(values); // Log form values to console
  };

  return (
    <div className="max-w-[800px]">
      <div className="flex gap-3 items-center">
        <p className="text-gray-500 font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold">Create a project</p>
      </div>

      <p className="font-bold text-2xl my-6">Create a project</p>

      <Formik
        initialValues={{
          description: "",
          items: [],
          dayOfWeek: "",
          time: '',
          meredian: '',
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
            <ErrorMessage name="items" component="div" className="error" />
          </div>

          <div className="flex flex-col gap-2 border-2 border-[#DBD9D9] rounded-xl py-4 px-3">
              <p className="font-semibold mb-2">
                When are you free to get on a call?
              </p>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <label className="text-sm mb-2">Day of the week</label>
                <Field
                  as="select"
                  name="dayOfWeek"
                  className="bg-[#F5F4F4] min-w-[200px] w-[350px] p-3 rounded-xl"
                >
                  <option value="">Select</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  {/* ... (add options for other days) ... */}
                </Field>
                <ErrorMessage
                  name="dayOfWeek"
                  component="div"
                  className="error"
                />
              </div>
            <div className="flex flex-col">
              <label className="text-sm mb-2 ">Time</label>
              <Field
                as="select"
                name="time"
                className="bg-[#F5F4F4] max-w-[200px] p-3 rounded-xl"
              >
                <option value="">Time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 ">meredian</label>
              <Field
                as="select"
                name="meredian"
                className="bg-[#F5F4F4] max-w-[200px] p-3 rounded-xl"
              >
                <option value="">Option</option>
                {meredian.map((meredian) => (
                  <option key={meredian} value={meredian}>
                    {meredian}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="meredian" component="div" className="error" />
            </div>
            </div>
          </div>

          <div>
            <button
            type="submit"
          className='flex gap-4 mt-8 items-center transition bg-[#205584] border-2 text-white border-[#205584] py-2 px-4 rounded-lg'      
          >
            Book Project
            <FiArrowRight size={20} />
          </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
