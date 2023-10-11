import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

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
  ];

  return (
    <div className="max-w-[1000px] ">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Finished projects</p>
      </div>

      <div className="mt-10  text-white list-decimal  text-md">
        {projectList.map((item) => (
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
                          
              <button className="flex gap-2 items-center bg-[#C8C8C8] py-2 px-2 rounded-lg">
                Submit review online
                {/* <MdOutlineKeyboardArrowDown /> */}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <Link href='#' className="flex gap-2 items-center bg-[#205584] text-white mt-8 w-fit py-3 px-4 rounded-lg">
        See more
        <MdOutlineKeyboardArrowDown />
      </Link> */}
    </div>
  );
};

export default Finished;
