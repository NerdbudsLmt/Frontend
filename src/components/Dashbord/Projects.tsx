'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FiPlus, FiClock } from "react-icons/fi";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import axios from 'axios';
import Link from "next/link";


const project = [
  {
    title: "Project Assistant",
    status: "Finished",
    id: 1,
  },
  {
    title: "Brand IT",
    status: "Finished",
    id: 2,
  },
  {
    title: "Nerdburds Pro",
    status: "In Progress",
    id: 3,
  },
];

const meeting = [
  {
    title: "Project assistant meeting",
    link: "12.03.2023 (Zoom meeting) ",
    host: "Nerdbuds Ltd",
    id: 1,
  },
  {
    title: "Project assistant meeting",
    link: "12.03.2023 (Zoom meeting) ",
    host: "Nerdbuds Ltd",
    id: 1,
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Project {
  projectName: string
  paymentStatus: boolean
  _id: number
}

export default function Projects() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? ''
        console.log(accessToken)
        if (!accessToken) {
          console.error('Access token not available')
          return
        }

        const url = 'https://nerdbuds.onrender.com/api/v1/projects/userProjects'

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })

        console.log('API Response:', response)
        if (response.ok) {
          setLoading(true)
          const data = await response.json()
          console.log(data)
          setProjects(data?.data?.projects)
        setLoading(false)

        } else {
          console.error('Failed to fetch user projects')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }
    // setLoading(false)

    fetchUserProjects()
  }, [session])


  return (
    <div className="my-7">
      <div className="text-[#265D80]  grid grid-cols-1 laptop_l:grid-cols-2 gap-5 ">
        <div className=" bg-[#F5F4F4] p-4 rounded-lg">
          <p className="text-lg font-bold">Projects </p>

         {/* {loading ? */}
         {projects?.length === 0 ? 
         (
          <p className="text-app-pblue py-4 text-center text-lg font-bold">Loading...</p> 
          )
          :
          (

         <ul className="mt-4  text-white list-decimal  text-md">
           {loading ?
            <p className="text-app-pblue py-4 text-center text-lg font-bold">No project available</p> 
            :
          <>  {projects?.map((item) => (
              <li
                key={item._id}
                className="flex items-center rounded-lg py-3 px-3 gap-4 my-3 bg-app-pblue"
              >
                <p className="text-[18px]">{item._id}</p>
                <p className="text-[18px] border-r-2 pr-4">{item.projectName}</p>
                <p
                  className={
                    item.paymentStatus === true
                      ? "text-[12px] text-green-600"
                      : "text-[12px] text-yellow"
                  }
                >
                  {item.paymentStatus === true ? 'Finished'  : 'In Progress'}
                </p>
              </li>
            ))}
            </>
          }
          </ul>
          )
          }


          <Link href='/dashboard/projects/create' className="flex gap-2 items-center transition text-app-pblue bg-yellow border-2 border-yellow py-2 px-4 w-fit rounded-full">
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
          </div>

          <button className="flex gap-2 items-center text-app-pblue transition bg-yellow border-2 border-yellow mt-2 py-2 px-4 rounded-full">
            Schedule meeting
            <FiClock size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

