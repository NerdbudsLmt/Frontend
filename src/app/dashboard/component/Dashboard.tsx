"use client";

import DoughnutChart from "@/components/Dashbord/DoughnutChart";
import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";
import { useState, useEffect, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

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

export default function DashboardCom() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState(null); // New state to keep track of selected project
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  useEffect(() => {
    const fetchActiveProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";
        const url = `https://nerdbuds.onrender.com/api/v1/projects/activeuserProjects`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          setLoading(true);
          const data = await response.json();
          const filteredProjects = data?.data?.projects.filter(
            (project: { status: boolean }) => !project.status
          );
          setActiveProjects(filteredProjects);

          console.log(filteredProjects);
          setLoading(false);
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

  const running = countStatusAndPercentage.trueStatusCount;
  const finished = countStatusAndPercentage.truePercentageCount;
  const pending = countStatusAndPercentage.falseStatusCount;

  const handleProjectClick = (index: SetStateAction<number>) => {
    // setSelectedProject(activeProjects[index]);
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
      <div className="text-[#265D80]  flex flex-wrap gap-4 justify-between items-start">
        <div className=" bg-[#F5F4F4] p-3 basis-full lg:basis-[48%]   text-center rounded-lg">
          <p className="text-lg font-bold underline ">Active Projects </p>
          <div className="flex justify-between gap-4 flex-wrap">
            {loading ? (
              <p className="text-app-pblue py-4 text-center text-lg font-bold">
                Loading...
              </p>
            ) : (
              <div>
                {activeProjects.length === 0 ? (
                  <>
                    <p className="text-app-pblue py-4 text-center text-lg font-bold">
                      No active projects
                    </p>
                  </>
                ) : (
                  <div className="flex justify-between">
                    {activeProjects.slice(0, 2).map((item, index) => (
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

        <div className=" bg-[#F5F4F4] p-4 basis-full lg:basis-[48%]  text-center rounded-lg">
          <p className="text-lg font-bold underline ">
            Overall Project Reports{" "}
          </p>
          <div className="flex flex-wrap justify-start gap-1">
            {loading ? (
              <p className="text-app-pblue py-4 text-center text-lg font-bold">
                Loading...
              </p>
            ) : (
              <>
                {projects.length === 0 ? (
                  <p className="text-app-pblue py-4 text-center text-lg font-bold">
                    Create a project to see your report
                  </p>
                ) : (
                  <>
                    <ul className="text-left mt-4 font-semibold pl-5 w-[170px] text-md list-disc">
                      <li className="text-[#2CB629]">{running} running </li>
                      <li className="text-[#009CFF] my-2">
                        {" "}
                        {finished} finished
                      </li>
                      <li className="text-[#D69E00]"> {pending} pending</li>
                    </ul>

                    <DoughnutChart
                      running={running}
                      finished={finished}
                      pending={pending}
                    />
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
