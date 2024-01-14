"use client";

import useCustomToast from "@/components/Toast";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function ProjectReviewForm({
  params,
}: {
  params: { projectId: string };
}) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { data: session }: any = useSession();
  const id = params.projectId;
  const toast = useCustomToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Log the content to the console
    console.log("Review Content:", content);
    try {
      setLoading(true);
      const res: any = await fetch(`${apiUrl}/projectreview/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast("Success", "success", true, 2000, data.data.message, "top-right");
        setLoading(false);
        setContent("");
      } else if (res.status === 401 || res.status === 400) {
        toast(
          "Error",
          "error",
          true,
          2000,
          data.message || "An error occurred",
          "top-right"
        );
        setLoading(false);
        console.log(res);
      }
    } catch (error: any) {
      toast(
        "Error",
        "error",
        true,
        2000,
        error.message || "An unexpected error occurred",
        "top-right"
      );
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold text-2xl">Submit a review</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]">
          <div className="flex items-center gap-4">
            {/* <p className="text-[18px]">{id}.</p> */}
            <p className="text-[18px] border-r-2 border-black pr-4">
              Project Assistant
            </p>
            <p className="text-[14px] font-semibold text-[#5583C3]">Finished</p>
          </div>
        </div>

        <div className="rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]">
          <p className="font-semibold">Review</p>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="block w-full h-32 px-3 py-2 rounded-md my-1"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#205584] mt-6 hover:bg-opacity-80 rounded-lg text-white font-bold py-2 px-4"
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
