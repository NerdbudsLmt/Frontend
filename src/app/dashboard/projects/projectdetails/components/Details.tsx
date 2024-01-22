"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import useFormattedDate from "@/hooks/useFormattedDate";

interface ProjectProgressProps {
  params: any;
}
interface ProjectDetails {
  _id: string | number;
  user: string | number;
  projectName: string;
  services: string[];
  milestones: string[];
  completedDate: string;
  callSchedule: Date | null;
  projectPercentage: string | any;
  status: boolean;
  paymentStatus: boolean;
  description: string;
}

export const ProjectDetails: React.FC<ProjectProgressProps> = ({ params }) => {
  const id = params.projectId;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { data: session }: any = useSession();
  const [details, setDetails] = useState<ProjectDetails>();

  const { completedDate, projectName, description, milestones } = details || {};

  const projectPercentage = parseInt(details?.projectPercentage, 10);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`${apiUrl}/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error("error");
        }
        console.log(data);
        setDetails(data.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [session, apiUrl, id]);

  return (
    <div className="" aria-label="Project progress information">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold text-2xl">Project in progress</p>
      </div>

      <div className="md:w-[50rem] w-full h-[60rem] border-3 border-[#B1AFAF] rounded-[1.5rem]">
        <div className="md:w-[50rem] w-full h-[13rem] bg-[#205584] rounded-t-[1.5rem]">
          <p className="sm:text-[2.5rem] text-[1.5rem] text-center text-[#fff] font-semibold pt-[2.5rem] ">
            {details?.projectName}
          </p>
          <div className="flex items-start w-[15rem] h-[4.1rem] bg-[#FAFAFA] sm:ml-9 ml-4 mt-7 rounded-[0.5rem] ">
            <Image
              src="/images/Avatar.png"
              alt="Description of the image"
              width={40}
              height={40}
              className="ml-3 mt-3"
            />
            <div className="flex flex-col justify-between">
              <span className="flex justify-between items-start md:items-center">
                <h2 className="text-[#205584] text-[1.1rem] md:text-xl ml-4 mt-3 font-medium">
                  Owner:
                </h2>
              </span>
              <p className="text-[1.1rem] md:text-base ml-4 mt-[-0.5rem] text-[#205584]">
                Nerdbuds
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between sm:px-8 px-4  mt-7">
          <div>
            <p className="text-[#205584] sm:text-[2rem] text-[1rem] font-semibold">
              Project Description
            </p>
            <p className="md:w-[35rem] sm:w-1/2 w-full mt-2">
              {details?.description}
            </p>
          </div>

          <div className="sm:mt-[2.3rem] mt-[1.2rem]">
            <Card
              aria-label={`Project progress ${details?.projectPercentage}%`}
              className="sm:w-[120px] w-[85px] sm:h-[120px] h-[85px] my-auto border-none bg-[#F5F4F4] rounded-[1rem]"
            >
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    track: "stroke-white/10",
                    svg: `sm:w-20 w-10 sm:h-20 h-10 my-auto mb-5 drop-shadow-sm ${
                      details?.projectPercentage === "100%"
                        ? "text-green-400"
                        : projectPercentage >= 50
                        ? "text-app-sblue"
                        : "text-red-500"
                    }`,
                    value: "sm:text-xl text-sm font-semibold mb-5 text-black",
                  }}
                  value={projectPercentage}
                  strokeWidth={4}
                  showValueLabel={true}
                />
              </CardBody>
            </Card>
          </div>
        </div>

        <p className="font-bold text-lg mt-4 sm:pl-9 pl-3">Deadline</p>
        <div className="flex justify-between gap-7 text-sm sm:ml-8 ml-3 w-[18rem] text-black font-semibold rounded-lg my-2 bg-[#F5F4F4] py-2 px-3">
          {useFormattedDate(completedDate)}
        </div>

        <p className="text-[#205584] ml-8 mt-7 text-[2rem] font-semibold">
          Milestones
        </p>
        <div className="flex flex-col items-center mx-auto  w-full px-2">
          {milestones?.map((item: any, index) => (
            <>
              <div className="flex justify-between w-full text-sm text-black font-semibold rounded-lg my-2 bg-[#F5F4F4] py-4 px-3">
                <div className="flex-1">
                  <p>{item.name}</p>
                </div>
                <div className="static">|</div>
                <div className="flex-1 text-center">
                  <p>{item.status}</p>
                </div>
                <div className="static">|</div>
                <div className="flex-1 text-center">
                  <p>{item.percentage}%</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
