
import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="text-[#265D80]  grid tablet:grid-cols-2 laptop_l:grid-cols-3 gap-5 xl:grid-cols-4">
        <div className=" bg-[#F5F4F4] flex justify-center items-center pl-3 rounded-lg">
          <div className="">
            <div className="relative w-fit h-fit m-auto">
              <p className="cur-date text-8xl font-bold ">10</p>
              <sup className="absolute top-0 -right-3 cur-date text-xl font-bold">
                th
              </sup>
            </div>
            <p className="font-semibold text-[15px] w-fit mx-auto">July 2023</p>
          </div>
        </div>

        <div className=" bg-[#F5F4F4] p-4  text-center rounded-lg">
          <p className="text-lg font-bold underline ">Active Projects </p>
          <div className="flex justify-between gap-3 mt-3 h-fit mx-auto">
            <p className="bg-app-pblue px-3.5 py-1.5 text-white rounded-full border-1 border-app-pblue">
              1
            </p>
            <p className=" px-3.5 py-1.5 rounded-full border-1 border-dotted border-2 border-app-pblue">
              2
            </p>
            <p className=" px-3.5 py-1.5 rounded-full border-1 border-dotted border-2 border-app-pblue">
              3
            </p>
          </div>
          <ul className="text-left mt-4 pl-5 text-md list-disc" >
            <li className="">Name: Project Assistant</li>
            <li>Status: 97% Complete</li>
            <li>Deadline: 10th August 2023</li>
          </ul>
        </div>

        <div className=" bg-[#F5F4F4] p-4  text-center rounded-lg">
          <p className="text-lg font-bold underline ">Overall Project Reports </p>
          <div className="flex justify-between gap-3">
            <ul className="text-left mt-4 font-semibold pl-5 text-md list-disc" >
              <li className="text-[#2CB629]">3 running </li>
              <li className="text-[#009CFF] my-1">10 finished</li>
              <li className="text-[#D69E00]">1 pending</li>
            </ul>
            <div>

            </div>
          </div>
        </div>

        <div className=" bg-[#F5F4F4] p-4 text-center rounded-lg">
        <p className="text-lg font-bold underline ">Card </p>

          <div className="bank-card text-white px-4 py-3 w-[90%] mt-2 h- mx-auto">
           <div className="flex opacity-50 justify-between gap-4">
            <p>Current Balance</p>
            <Image
            src="/images/masterCard.svg"
            alt="master"
            width={33}
            height={33}
          />
           </div>
           <p className="text-3xl my-3 text-left">N*******</p>
           <div className="flex mt-4 mb-2 text-left justify-between">
            <p className="text-[10px]">5294 2436 4780 2468</p>
            <p className="text-[10px]">12/24</p>
           </div>
          </div>
        </div>
      </div>

      <Projects />
      <QuickSet />
    </div>
  );
}
