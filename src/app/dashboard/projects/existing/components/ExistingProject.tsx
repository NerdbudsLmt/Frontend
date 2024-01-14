"use client";

import Pagination from "@/components/Pagination";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import ExistingModal from "./ExistingModal";

interface Project {
  projectName: string;
  paymentStatus: boolean;
  _id: number;
}

const ExistingProject: React.FC = () => {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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

        setLoading(true);
        console.log("API Response:", response);

        if (response.ok) {
          const data = await response.json();
          setProject(data?.data?.projects);
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = project?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="max-w-[1000px] ">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Project</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold  text-2xl">Existing project</p>
      </div>

      {loading ? (
        //  {project?.l/ength === 0 ? (
        // <p className="text-app-pblue py-4 text-center text-lg font-bold">
        //   Loading...
        // </p>
        <div className="text-app-pblue py-4 text-center text-lg font-bold">
          <Skeleton height={30} width={200} />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="mt-10  text-white list-decimal  text-md">
            {/* {loading ?  */}
            {project?.length === 0 ? (
              <p className="text-app-pblue py-4 text-center text-lg font-bold">
                No project available
              </p>
            ) : (
              <>
                {currentPosts?.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]"
                  >
                    <div className="flex items-center gap-4">
                      <p className="text-[18px] border-r-2 border-black pr-4">
                        {item.projectName}
                      </p>
                      <p
                        className={
                          item.paymentStatus === true
                            ? "text-[14px] font-semibold text-[#5583C3]"
                            : "text-[14px] font-semibold text-gray-400"
                        }
                      >
                        {item.paymentStatus === true ? "Active" : "Not Active"}
                      </p>
                    </div>
                    <div className="flex gap-3 flex-wrap ">
                      <button
                        onClick={onOpen}
                        className="flex gap-2 text-sm items-center bg-[#DFDFDF] py-2 px-2 rounded-lg"
                      >
                        Request delete
                        <RiDeleteBinLine />
                      </button>
                      {item.paymentStatus === true && (
                        <Link
                          href={`/dashboard/projects/progress/${item._id}`}
                          className="flex gap-2 text-sm items-center bg-[#F9D262] py-2 px-2 rounded-lg"
                        >
                          View progress
                        </Link>
                      )}
                      <Link
                        href="/dashboard/payment"
                        className="flex gap-2 text-sm items-center bg-[#5583C3] text-white py-2 px-3 rounded-lg"
                      >
                        Activate
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {project?.length >= 6 && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={project?.length}
              currentPage={currentPage}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              paginate={paginate}
            />
          )}
        </>
      )}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            {/* <ExistingModal Close={onClose} /> */}
            {loading ? (
              <Skeleton height={300} />
            ) : (
              <ExistingModal Close={onClose} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ExistingProject;
