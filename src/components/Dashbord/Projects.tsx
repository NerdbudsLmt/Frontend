"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPlus, FiClock } from "react-icons/fi";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { DashLoader } from "@/app/dashboard/component/DashLoader";



const meeting = [
  {
    title: "Project assistant meeting",
    link: "12.03.2023 (Zoom meeting) ",
    host: "GeekOps Ltd",
    id: 1,
  },
  {
    title: "Project assistant meeting",
    link: "12.03.2023 (Zoom meeting) ",
    host: "GeekOps Ltd",
    id: 1,
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Project {
  projectName: string;
  paymentStatus: number;
  callSchedule: string;
  status: boolean;
  projectPercentage: number;
  _id: number;
}

export default function Projects() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        // if (!accessToken) {
        //   // console.error("Access token not available");
        //   return;
        // }

        const url = `${apiUrl}/projects/userProjects`;
        // const url = `${apiUrl}/projects/userProjects`

        const response = await fetch(url, {
          method: "GET",
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // console.log("API Response:", response);

        const data = await response.json();
        setLoading(false);
        setProjects(data?.data?.projects);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUserProjects();
  }, [session]);

  return (
    <div className="my-7">
      <div className="text-[#265D80]  grid grid-cols-1 laptop_l:grid-cols-2 gap-5 ">
        <div className=" bg-[#F5F4F4] p-4 rounded-lg">
          <p className="text-lg font-bold">Projects </p>

          {loading ? (
            <DashLoader />
          ) : (
            <ul className="mt-4  text-white list-decimal  text-md">
              {projects?.length === 0 ? (
                // {loading ? (
                <p className="text-[#265D80] pb-4 pt-2 font-semibold">
                  Create a project to see your report
                </p>
              ) : (
                <>
                  {" "}
                  {projects
                    ?.slice(-3)
                    ?.reverse()
                    ?.map((item, index) => (
                      <li
                        key={item._id}
                        className="flex items-center rounded-lg py-3 px-3 gap-4 my-3 bg-app-pblue"
                      >
                        <p className="">{index + 1}.</p>
                        <p className=" border-r-2 pr-4">{item.projectName}</p>
                        <p
                          className={
                            item.paymentStatus === 100
                              ? "text-[12px] text-green-600"
                              : "text-[12px] text-yellow"
                          }
                        >
                          {item.paymentStatus === 100
                            ? "Finished"
                            : "In Progress"}
                        </p>
                      </li>
                    ))}
                </>
              )}
            </ul>
          )}

          <Link
            href="/dashboard/projects/create"
            className="flex gap-2 items-center transition text-app-pblue bg-yellow border-2 border-yellow py-2 px-4 w-fit rounded-full"
          >
            <FiPlus size={20} />
            Create new project
          </Link>
        </div>

        <div className=" bg-[#F5F4F4] p-4 rounded-lg">
          <p className="text-lg font-bold underline ">Scheduled meetings</p>
          <div className="mt-4 text-white list-decimal  text-md">
            {/* {meeting?.map((item) => (
              <div
                key={item.id}
                className="rounded-lg py-3.5 px-3 my-2 bg-app-pblue"
              >
                <p className=" text-app-sblue">{item.title}</p>
                <p className="text-[.8rem] ">{item.link}</p>
                <p className="text-[.8rem]">Host: {item.host}</p>
              </div>
            ))} */}
            {loading ? (
              <DashLoader />
            ) : (
              <ul className="mt-4  text-white list-decimal  text-md">
                {projects?.length === 0 ? (
                  <p className="text-[#205584] py-4 font-semibold">
                    You currently don’t have a meeting scheduled right now, to
                    create a meeting click below or contact
                    <Link
                      href="/dashboard/support"
                      className="underline ml-1 text-black"
                    >
                      Customer Support.{" "}
                    </Link>
                  </p>
                ) : (
                  <>
                    {" "}
                    {projects
                      ?.slice(-3)
                      ?.reverse()
                      ?.map((item, index) => (
                        <div
                          key={item._id}
                          className="rounded-lg py-3.5 px-3 my-2 bg-app-pblue"
                        >
                          <p className=" text-app-sblue">{item.projectName}</p>
                          <p className="text-[.8rem] ">{item.callSchedule}</p>
                          <p className="text-[.8rem]">Host: GeekOps Ltd</p>
                        </div>
                      ))}
                  </>
                )}
              </ul>
            )}
          </div>

          <Link
            href="/dashboard/support"
            className="flex gap-2 items-center transition text-app-pblue bg-yellow border-2 border-yellow py-2 px-4 w-fit rounded-full"
          >
            Schedule meeting
            <FiClock size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
