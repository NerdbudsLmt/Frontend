"use client";

import ProjectProgress from "@/components/Dashbord/ProjectProgress";
import React, { useEffect, useState } from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Pagination from "@/components/Pagination";
import { useSession } from "next-auth/react";
import { ProjectLoader } from "./projectsLoader";

interface projectList {
  projectName: string;
  description: string;
  status: string;
  id: number;
  completedDate: string;
  projectPercentage: string;
}

export default function ProProgress() {
  const { data: session } = useSession();
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [projectList, setProjectList] = useState<projectList[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? "";

        if (!accessToken) {
          console.error("Access token not available");
          return;
        }
        const res = await fetch(`${apiUrl}/projects/userProjects`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await res.json();
        
        data && setLoading(false);
        setProjectList(data.data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session]);

  const uniqueStatuses = [
    ...new Set<string>(projectList.map((project) => project.status)),
  ];

  const filteredProjects = projectList.filter((project) => {
    if (filter === "All") {
      return true; // Show all projects
    }
    return project.status === filter; // Show projects based on selected status
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProjects?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  // Extract unique statuses from projectList

  return (
    <div className="max-w-[900px]" aria-label="Project progress information">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold text-2xl">Project in progress</p>
      </div>
      <div className="flex justify-between items-center gap-y-2 gap-x-4 flex-wrap mb-3 ">
        <p className=" text-[14px] tablet:text-[16px] font-semibold">
          Numbers of project in progress{" "}
          <span className="text-[#676767]">“{projectList.length}”</span>
        </p>

        <Menu>
          <MenuButton
            className="bg-app-pblue text-white hover:bg-opacity-90"
            as={Button}
            rightIcon={<BsSliders2Vertical />}
          >
            filter
          </MenuButton>

          <MenuList>
            {/* Dynamically generate menu items based on unique statuses */}
            <MenuItem onClick={() => setFilter("All")}>All</MenuItem>
            {uniqueStatuses.map((status, index) => (
              <MenuItem key={index} onClick={() => setFilter(status)}>
                {status}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      {loading ? (
        <ProjectLoader />
      ) : projectList.length === 0 ? (
        <p>No available data.</p>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {currentPosts.map((item, index) => (
              <ProjectProgress key={index} item={item} />
            ))}
          </div>
          {projectList?.length >= 6 && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filteredProjects.length}
              currentPage={currentPage}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              paginate={paginate}
            />
          )}
        </>
      )}
    </div>
  );
}
