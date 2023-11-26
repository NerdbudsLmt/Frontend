'use client'

import Pagination from "@/components/Pagination";
import Link from "next/link";
import React, { useState } from "react";

interface Project {
  title: string;
  status: "Finished";
  id: number;
}

const Finished: React.FC = () => {
  
  const projectList: Project[] = [
    {
      title: "Project Assistant",
      status: "Finished",
      id: 1,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 2,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 3,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 4,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 5,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 6,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 7,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 8,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 9,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 10,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 11,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 12,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 13,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 14,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 15,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 16,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 17,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 18,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 19,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 20,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 21,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      id: 22,
    },
    {
      title: "Brand IT",
      status: "Finished",
      id: 23,
    },
    {
      title: "Nerdburds Pro",
      status: "Finished",
      id: 24,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projectList.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () =>{ 
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="max-w-[1000px] ">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Finished projects</p>
      </div>

      <div className="mt-10  text-white list-decimal  text-md">
        {currentPosts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]"
          >
            <div className="flex items-center gap-4">
            <p className="text-[18px]">{item.id}.</p>
              <p className="text-[18px] border-r-2 border-black pr-4">
                {item.title}
              </p>
              <p
                className= "text-[14px] font-semibold text-[#5583C3]"
              >
                {item.status}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap ">
                          
              <Link href={`/dashboard/projects/finished/${item.id}`} className="flex gap-2 items-center bg-[#C8C8C8] py-2 px-2 rounded-lg">
                Submit review online
                {/* <MdOutlineKeyboardArrowDown /> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

   
        <Pagination
        postsPerPage={postsPerPage} 
        totalPosts={projectList.length} 
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        paginate={paginate} 
      />
    </div>
  );
};

export default Finished;
