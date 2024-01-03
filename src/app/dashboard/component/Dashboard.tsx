"use client";

import DoughnutChart from "@/components/Dashbord/DoughnutChart";
import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";


interface Project {
  projectName: string;
  paymentStatus: number;
  callSchedule: string;
  status: boolean;
  projectPercentage: number;
  _id: number;
}

export default function DashboardCom() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";
        if (!accessToken) {
          console.error("Access token not available");
          return;
        }

        const url =
          "https://nerdbuds.onrender.com/api/v1/projects/userProjects";

        const response = await fetch(url, {
          method: "GET",
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // console.log("API Response:", response);
        if (response.ok) {
          setLoading(true);
          const data = await response.json();
          // console.log(data)
          setProjects(data?.data?.projects);
          setLoading(false);
        } else {
          console.error("Failed to fetch user projects");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUserProjects();
  }, [session]);

  const countStatusAndPercentage = projects.reduce(
    (acc, project) => {
      if (project.projectPercentage === 100) {
        acc.truePercentageCount += 1;
      } else {
        acc.falsePercentageCount += 1;
      }

      if (project.status === true) {
        acc.trueStatusCount += 1;
      } else {
        acc.falseStatusCount += 1;
      }

      return acc;
    },
    {
      truePercentageCount: 0,
      falsePercentageCount: 0,
      trueStatusCount: 0,
      falseStatusCount: 0,
    }
  );

  const running = countStatusAndPercentage.trueStatusCount
  const finished = countStatusAndPercentage.truePercentageCount
  const pending = countStatusAndPercentage.falseStatusCount


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
          <div className="flex flex-wrap justify-start gap-1">
            <ul className="text-left mt-4 font-semibold pl-5 w-[170px] text-md list-disc">
              <li className="text-[#2CB629]">
                {running} running{" "}
              </li>
              <li className="text-[#009CFF] my-2">
                {" "}
                {finished} finished
              </li>
              <li className="text-[#D69E00]">
                {" "}
                {pending} pending
              </li>
            </ul>       

            <DoughnutChart
              running={running}
              finished={finished}
              pending={pending}
            />

           
          </div>
        </div>
      </div>

      <Projects />
      <QuickSet />
    </div>
  );
}
