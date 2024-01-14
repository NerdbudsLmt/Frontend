import Link from "next/link";
import React from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

interface ProjectList {
  projectName: string;
  description: string;
  status: string;
  id: number;
  completedDate: string;
  projectPercentage: string;
}

interface ProjectProgressProps {
  item: ProjectList;
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ item }) => {
  const projectPercentage = parseInt(item.projectPercentage, 10);
  const {
    projectName,
    description,
    status,
    id,
    completedDate: deadlineDate,
    projectPercentage: percentage,
  } = item;
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
    return formattedDate;
  };

  return (
    <div className=" border-2 border-[#B1AFAF] rounded-lg py-4 px-4 tablet:px-8">
      <div className="flex gap-4 flex-wrap justify-between">
        <p className="font-bold text-2xl">{projectName}</p>
        <Link
          href="/dashboard/projects/projectdetails"
          className="underline font-semibold  text-gray-500"
        >
          View project progress
        </Link>
      </div>
      <div className="flex flex-col tablet:flex-row gap-5 flex-wrap justify-between">
        <div className="basis-2/4">
          <p className="my-3 font-semibold">
            {item.description.slice(0, 100)}...
          </p>

          <p className="font-bold text-lg">
            Deadline |{" "}
            <span className="text-[#676767] font-medium">
              {(status && status) || "To Be Reviewed"}
            </span>
          </p>
          {deadlineDate && (
            <div className="flex justify-between text-sm text-gray-600 font-semibold rounded-lg my-2 bg-[#F5F4F4] py-2 px-3">
              <p>{formatDate(deadlineDate)}</p>
            </div>
          )}
        </div>
        <div className="basis-1/4 flex flex-col items-center tablet:items-end">
          <Card
            aria-label={`Project progress ${percentage}%`}
            className="w-[120px] h-[120px] my-auto border-none bg-[#F5F4F4] rounded-full"
          >
            <CardBody className="justify-center items-center pb-0">
              <CircularProgress
                classNames={{
                  track: "stroke-white/10",
                  svg: `w-20 h-20 my-auto mb-5 drop-shadow-md ${
                    percentage === "100%"
                      ? "text-green-400"
                      : projectPercentage >= 50
                      ? "text-app-sblue"
                      : "text-red-500"
                  }`,
                  value: "text-xl font-semibold mb-5 text-black",
                }}
                value={projectPercentage}
                strokeWidth={4}
                showValueLabel={true}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
