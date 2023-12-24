'use client'

import React, { useState } from "react";


export default function ProjectReviewForm({
  params,
}: {
  params: { projectId: string };
}) {
  const [reviewContent, setReviewContent] = useState("");
 
  const id = params.projectId;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Log the content to the console
    console.log("Review Content:", reviewContent);
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
            <p className="text-[18px]">{id}.</p>
            <p className="text-[18px] border-r-2 border-black pr-4">
              Project Assistant
            </p>
            <p className="text-[14px] font-semibold text-[#5583C3]">Finished</p>
          </div>
        </div>

        <div className="rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]">
          <p className="font-semibold">Review</p>
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            required
            className="block w-full h-32 px-3 py-2 rounded-md my-1"
          />
          <button
            type="submit"
            className="bg-[#205584] mt-6 hover:bg-opacity-80 rounded-lg text-white font-bold py-2 px-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
