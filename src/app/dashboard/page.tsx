"use client";

import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";
// import Chart from "chart.js/auto";
// import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useRef } from "react";

// Chart.register(ArcElement, Tooltip, Legend, Title);
// Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
// Chart.defaults.plugins.legend.position = 'right';
// Chart.defaults.plugins.legend.title.display = true;
// Chart.defaults.plugins.legend.title.text = '60 of 100 Done';
// // Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
  datasets: [
    {
      label: "Attendance for Week 1",
      data: [25, 24, 25, 25, 3],
      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "#2CB629",
        "rgba(232,211,6,1)",
        "rgba(54,162,235,1)",
        "rgba(255,159,64,1)",
        "rgba(153,102,255,1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Doughnut Chart",
      color: "blue",
      font: {
        size: 34,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
  },
};
export default function Dashboard() {
  return (
    <div>
      <div className="text-[#265D80]  flex flex-wrap gap-4 justify-between items-start">
        <div className=" bg-[#F5F4F4] p-3 basis-full lg:basis-[48%]   text-center rounded-lg">
          <p className="text-lg font-bold underline ">Active Projects </p>
          <div className="flex justify-between">
            <div className="flex justify-between items-start gap-3 mt-3 h-fit">
              <p className="text-[5rem] text-[#132E40] -mt-8 h-fit font-extrabold">
                1
              </p>
              <p className=" px-3.5 py-1.5 h-fit rounded-full  border-dotted border-2 border-app-pblue">
                2
              </p>
              <p className="text-xl font-bold px-3.5 py-1.5 h-fit rounded-full  border-dotted border-2 border-app-pblue">
                +
              </p>
            </div>
            <ul className="text-left mt-4 pl-5 text-md list-disc">
              <li className="">Name: Project Assistant</li>
              <li>Status: 97% Complete</li>
              <li>Deadline: 10th August 2023</li>
            </ul>
          </div>
        </div>

        <div className=" bg-[#F5F4F4] p-4 basis-full lg:basis-[48%]  text-center rounded-lg">
          <p className="text-lg font-bold underline ">
            Overall Project Reports{" "}
          </p>
          <div className="flex justify-between gap-1">
            <ul className="text-left mt-4 font-semibold pl-5 w-[170px] text-md list-disc">
              <li className="text-[#2CB629]">3 running </li>
              <li className="text-[#009CFF] my-2">10 finished</li>
              <li className="text-[#D69E00]">1 pending</li>
            </ul>
            <div className=" w-full">
              {/* <Doughnut data={data} options={options} /> */}
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <QuickSet />
    </div>
  );
}
