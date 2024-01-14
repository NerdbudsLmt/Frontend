"use client";
import React, { useState } from "react";
import { LuClock3 } from "react-icons/lu";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCustomToast from "@/components/Toast";
import { useSession } from "next-auth/react";
import { Spinner } from "@chakra-ui/react";

interface SupportForm {
  message: string;
  callSchedule: Date | null;
}
export default function Support() {
  const { data: session }: any = useSession();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const toast = useCustomToast();
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
    callSchedule: Yup.date().required("Select a fixed time and date"),
  });
  const formik = useFormik<SupportForm>({
    initialValues: {
      message: "",
      callSchedule: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res: any = await fetch(`${apiUrl}/contacted/support`, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            authorization: `Bearer ${session?.user.accessToken}`,
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
          setLoading(false);
          formik.resetForm();
        } else if (res.status === 401) {
          toast("Error", "error", true, 2000, data.message, "top-right");
          setLoading(false);
        }
      } catch (error: any) {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <span className="flex items-center gap-2">
        <h2 className="text-[#676767] md:text-[30px] text-[20px] font-[600]">
          support
        </h2>
        <span className="bg-[#363939] p-[6px] w-1 h-1 rounded-full"></span>
        <h3 className="font-[600] text-[#363939] md:text-[30px] text-[20px]">
          Schedule a meeting
        </h3>
      </span>

      <div className="mt-8 bg-[#F5F4F4] md:w-[90%] w-full h-fit p-4 rounded-[8px] space-y-2">
        <h2 className="text-[20px] text-[#363939] font-[600]">
          What is the meeting about?
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <textarea
              className="bg-white mt-4 md:w-[466px] w-full h-[170px] rounded-[8px] p-5 border-[#DBD9D9] border-solid shadow-md outline-none"
              defaultValue={""}
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-[red] text-[14px] italic">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="space-y-4 md:w-[438px] w-full mt-5">
            <div>
              <DatePicker
                selected={formik.values.callSchedule}
                onChange={(date) => formik.setFieldValue("callSchedule", date)}
                className="rounded-[12px] text-black outline-none w-fit md:p-[12px] p-[6px] text-[15px]"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="Pp"
                placeholderText="Schedule Meeting"
              />
              {formik.touched.callSchedule && formik.errors.callSchedule ? (
                <div className="text-[red] text-[14px] italic">
                  {formik.errors.callSchedule}
                </div>
              ) : null}
            </div>
            <h2 className="text-[#676767] md:text-[20px] text-[15px]">
              Note: Always come back to your account and click on{" "}
              <span className="text-[#205584]">“Confirm”</span> to verify your
              meeting
            </h2>
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-[#205584] py-[8px] px-[24px] rounded-[12px] h-[42px] font-[600] w-[80px]]"
            >
              {loading ? <Spinner /> : " Confirm"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-[20px]">You can contact us through</h2>
        <div className="flex gap-5 mt-3">
          <a
            href=""
            target="_blank"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiWhatsappLine style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href="https://www.instagram.com/nerdbudsltd"
            target="_blank"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiInstagramLine
              width={40}
              style={{ width: "100%", height: "100%" }}
            />
          </a>

          <a
            href="https://x.com/nerdbudsoffice"
            target="_blank"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiTwitterXLine style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href=""
            target="_blank"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiFacebookFill style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href="https://www.linkedin.com/company/nerdbuds-ltd/"
            target="_blank"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiLinkedinFill style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href="mailto:nerdbudsltd@gmail.com"
            className="p-2 rounded-full bg-[#132E40] text-white w-[35px] h-[35px]"
          >
            <RiMailLine style={{ width: "100%", height: "100%" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
