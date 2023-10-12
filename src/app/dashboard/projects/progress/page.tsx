"use client"

import ProjectProgress from "@/components/Dashbord/ProjectProgress";
import React from "react";


export default function progress() {
  const projectList = [
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '90%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 1,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '100%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 2,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '40%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 3,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '10%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 4,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '90%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 5,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '100%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 6,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '40%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 7,
    },
    {
      title: "Tech Bot Project",
      // status: "Finished",
      date: 'Thursday, 2nd July 2023',
      time:'9:00AM',
      percentage: '10%',
      content:
        "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
      id: 8,
    },
  ];

  return (
    <div className="max-w-[900px] ">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Project in progress</p>
      </div>
      <p className=" my-3 font-semibold">
        Numbers of project in progress{" "}
        <span className="text-[#676767]">“{projectList.length}”</span>
      </p>
      <div className="flex flex-col gap-8">
        {projectList.map((item) => (
          <ProjectProgress key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
