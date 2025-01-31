"use client";

import DoughnutChart from "@/components/Dashbord/DoughnutChart";
import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";
import { useState, useEffect, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { Progress } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

interface Project {
  _id: string;
  user: string;
  projectName: string;
  services: string[];
  callSchedule: string;
  projectPercentage: number;
  status: boolean;
  paymentStatus: boolean;
  createdAt: string;
  completedDate: string;
}
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function DashboardCom() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState(null); // New state to keep track of selected project
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  useEffect(() => {
    const fetchActiveProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";
        const url = `${apiUrl}/projects/activeuserProjects`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const filteredProjects = data?.data?.projects.filter(
            (project: { status: boolean }) => project.status
          );
          setActiveProjects(filteredProjects);

          setLoading(false);
          // console.log(filteredProjects);
        } else {
          console.error("Failed to fetch active");
          setError("Failed to fetch active");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred while fetching active projects");
      }
    };

    fetchActiveProjects();
  }, [session]);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";
        if (!accessToken) {
          console.error("Access token not available");
          return;
        }

        const url = `${apiUrl}/projects/userProjects`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          setLoading(true);
          const data = await response.json();
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

  const running = countStatusAndPercentage.trueStatusCount;
  const finished = countStatusAndPercentage.truePercentageCount;
  const pending = countStatusAndPercentage.falseStatusCount;

  const handleProjectClick = (index: SetStateAction<number>) => {
    setSelectedProjectIndex(index);
  };

  function formatDateString(dateString: string | number | Date) {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
      }

      const day = date.getDate();
      const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        date
      );
      const year = date.getFullYear();

      const suffix = getOrdinalSuffix(day);

      return `${day}${suffix} of ${month} ${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  }

  function getOrdinalSuffix(number: number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = number % 100;
    return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
  }

  return (
    <div>
      <div className="text-[#265D80] lg:h-[175px] flex flex-wrap gap-4 justify-between items-start">
        <div className=" bg-[#F5F4F4] p-3 basis-full h-full lg:basis-[48%] text-center rounded-lg">
          <p className="text-[1rem] md:text-lg font-bold underline ">
            Active Projects{" "}
          </p>
          <div className="flex justify-between gap-4 flex-wrap">
            {loading ? (
              <div className="text-app-pblue py-4 w-fit mx-auto">
                <Spinner />
              </div>
            ) : (
              <div>
                {activeProjects.length === 0 ? (
                    <div className="text-[#265D80] pb-4 pt-2 w-fit mx-auto font-semibold">
                      No project available
                    </div>
                ) : (
                  <div className="flex justify-between">
                    {activeProjects?.slice(0, 2)?.map((item, index) => (
                      <div
                        key={item._id}
                        className={`flex justify-between items-start gap-3 mt-3 h-fit cursor-pointer ${
                          selectedProject === item ? "bg-gray-300" : ""
                        }`}
                        onClick={() => handleProjectClick(index)}
                      >
                        <p
                          className={` ${
                            selectedProjectIndex === index
                              ? "text-[5rem] text-[#132E40] -mt-8 h-fit font-extrabold"
                              : " text-xl font-bold px-3.5 py-1.5 h-fit rounded-full  border-dotted border-2 border-app-pblue"
                          }`}
                        >
                          {index + 1}
                        </p>
                      </div>
                    ))}
                    <Link
                      href="/dashboard/projects/create"
                      className="text-xl ml-2 font-bold px-2.5 py-2.5 h-fit mt-3 rounded-full  border-dotted border-2 border-app-pblue"
                    >
                      <FiPlus size={20} />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeProjects.length > 0 && (
              <div className="mt-4 text-left pl-5 text-md">
                <ul className="list-disc">
                  <li>
                    Name: {activeProjects[selectedProjectIndex].projectName}
                  </li>
                  <li>
                    Status:{" "}
                    {activeProjects[selectedProjectIndex].projectPercentage}%
                    Complete
                  </li>
                  <li>
                    Deadline:{" "}
                    {formatDateString(
                      activeProjects[selectedProjectIndex].completedDate
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className=" bg-[#F5F4F4] p-4 basis-full h-full lg:basis-[48%]  text-center rounded-lg">
          <p className="text-[1rem] md:text-lg font-bold underline ">
            Overall Project Reports{" "}
          </p>
          <div className="">
            {loading ? (
              <div className="text-app-pblue py-4 text-center">
                <Spinner />
              </div>
            ) : (
              <>
                {activeProjects.length === 0 ? (
                  <p className="text-[#265D80] pb-4 pt-2 text-center font-semibold">
                    Create a project to see your report
                  </p>
                ) : (
                  <>
                    {activeProjects?.slice(0, 2)?.map((item, index) => (
                      <ul
                        key={item._id}
                        className="text-left mt-4 font-semibold text-md"
                      >
                        <li className="text-[#265D80] ">
                          <p className=" mb-1">{item.projectName}</p>
                          <Progress
                            hasStripe
                            value={item.projectPercentage}
                            className="bg-white"
                          />
                        </li>
                      </ul>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>


      <Projects />
      <QuickSet />
    </div>
  );
}
