"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Pagination from '@/components/Pagination'
import { useSession } from 'next-auth/react'


interface Project {
  _id: string
  user: string
  projectName: string
  services: string[]
  callSchedule: string
  projectPercentage: number
  status: boolean
  paymentStatus: boolean
  createdAt: string
}

const FinishedProject: React.FC = () => {
  const { data: session } = useSession()
  const [projects, setProjects] = useState<Project[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

    useEffect(() => {
      const fetchUserProjects = async () => {
        try {
          const accessToken = session?.user?.accessToken ?? ''

          if (!accessToken) {
            console.error('Access token not available')
            return
          }

          const url =
            'https://nerdbuds.onrender.com/api/v1/projects/userProjects'

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })

          console.log('API Response:', response)

          if (response.ok) {
            const data = await response.json()
            const finishedProjects = data.data.projects.filter(
              (project: Project) => project.projectPercentage === 100
            )
            setProjects(finishedProjects)
          } else {
            console.error('Failed to fetch finished projects')
          }
        } catch (error) {
          console.error('An error occurred:', error)
        }
      }

      fetchUserProjects()
    }, [session])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='max-w-[1000px] '>
      <div className='flex gap-2 mb-8 items-center'>
        <p className='text-gray-500 text-xl font-semibold'>Project</p>
        <div className='h-2 w-2 bg-black rounded-full' />
        <p className='font-semibold text-2xl'>Finished projects</p>
      </div>

      {projects.length === 0 ? (
        <p>No finished projects to display. Tell me what to write!</p>
      ) : (
        <div className='mt-10 text-white list-decimal text-md'>
          {currentPosts.map((project) => (
            <div
              key={project._id}
              className='flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]'
            >
              <div className='flex items-center gap-4'>
                <p className='text-[18px]'>{project._id}.</p>
                <p className='text-[18px] border-r-2 border-black pr-4'>
                  {project.projectName}
                </p>
                <p className='text-[14px] font-semibold text-[#5583C3]'>
                  Finished
                </p>
              </div>
              <div className='flex gap-3 flex-wrap '>
                <Link
                  href={`/dashboard/projects/finished/${project._id}`}
                  className='flex gap-2 items-center bg-[#C8C8C8] py-2 px-2 rounded-lg'
                >
                  Submit review online
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <div className='mt-10 text-white list-decimal text-md'>
        {currentPosts.map((project) => (
          <div
            key={project._id}
            className='flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]'
          >
            <div className='flex items-center gap-4'>
              <p className='text-[18px]'>{project._id}.</p>
              <p className='text-[18px] border-r-2 border-black pr-4'>
                {project.projectName}
              </p>
              <p className='text-[14px] font-semibold text-[#5583C3]'>
                Finished
              </p>
            </div>
            <div className='flex gap-3 flex-wrap '>
              <Link
                href={`/dashboard/projects/finished/${project._id}`}
                className='flex gap-2 items-center bg-[#C8C8C8] py-2 px-2 rounded-lg'
              >
                Submit review online
              </Link>
            </div>
          </div>
        ))}
      </div> */}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={projects.length}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        paginate={paginate}
      />
    </div>
  )
}

export default FinishedProject
