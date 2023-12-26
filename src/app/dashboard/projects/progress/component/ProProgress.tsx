"use client";

import ProjectProgress from "@/components/Dashbord/ProjectProgress";
import React, { useState } from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import Pagination from "@/components/Pagination";


interface projectList {
  title: string;
  date: string;
  time: string;
  content: string;
  status: string;
  id: number;
  percentage: string;
}


const projectList = [
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "90%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 1,
  },
  {
    title: "Tech Bot Project",
    status: "Completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "100%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 2,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "40%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 3,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "10%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 4,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "90%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 5,
  },
  {
    title: "Tech Bot Project",
    status: "Completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "100%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 6,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "40%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 7,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "10%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 8,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "90%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 1,
  },
  {
    title: "Tech Bot Project",
    status: "Completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "100%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 2,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "40%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 3,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "10%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 4,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "90%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 5,
  },
  {
    title: "Tech Bot Project",
    status: "Completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "100%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 6,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "40%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 7,
  },
  {
    title: "Tech Bot Project",
    status: "Not completed",
    date: "Thursday, 2nd July 2023",
    time: "9:00AM",
    percentage: "10%",
    content:
      "The double equals performs type coercion, meaning it converts the operands to the same type before making the comparison. The triple equals (===) performs a strict comparison without type coercion. Choose the appropriate one based on your use case. If you want to ensure both the value and the data type are the same, use  for comparison.",
    id: 8,
  },
];
export default function ProProgress() {
  

  
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const uniqueStatuses = [...new Set<string>(projectList.map((project) => project.status))];

  const filteredProjects = projectList.filter((project) => {
    if (filter === "All") {
      return true; // Show all projects
    }
    return project.status === filter; // Show projects based on selected status
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

   // Extract unique statuses from projectList
 

  return (
    <div className="max-w-[900px] ">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Project in progress</p>
      </div>
      <div className="flex justify-between items-center gap-y-2 gap-x-4 flex-wrap mb-3 ">
        <p className=" text-[14px] tablet:text-[16px] font-semibold">
          Numbers of project in progress{" "}
          <span className="text-[#676767]">“{projectList.length}”</span>
        </p>
        
        <Menu>
          <MenuButton className="bg-app-pblue text-white hover:bg-opacity-90" as={Button} rightIcon={<BsSliders2Vertical />}>
            filter
          </MenuButton>
          
           <MenuList>
          {/* Dynamically generate menu items based on unique statuses */}
          <MenuItem onClick={() => setFilter("All")}>All</MenuItem>
          {uniqueStatuses.map((status) => (
            <MenuItem key={status} onClick={() => setFilter(status)}>
              {status}
            </MenuItem>
          ))}
        </MenuList>
        </Menu>
      </div>
      
      <div className="flex flex-col gap-8">
        {currentPosts.map((item) => (
          <ProjectProgress key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredProjects.length}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        paginate={paginate}
      />
    </div>
  );
}
