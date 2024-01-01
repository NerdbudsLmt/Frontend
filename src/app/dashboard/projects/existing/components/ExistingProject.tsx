'use client'

import Pagination from '@/components/Pagination'
import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useSession } from 'next-auth/react'

interface Project {
  title: string
  status: 'Active' | 'Not Active' | 'Finished'
  id: number
}


const ExistingProject: React.FC = () => {
  const { data: session } = useSession()
  const [projects, setProjects] = useState<Project[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const accessToken = session?.user?.accessToken ?? ''

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
          const data = await response.json()
          setProjects(data.projects)
        } else {
          console.error('Failed to fetch user projects')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    fetchUserProjects()
  }, [session])


  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = projects?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='max-w-[1000px] '>
      <div className='flex gap-2 mb-8 items-center'>
        <p className='text-gray-500 text-xl font-semibold'>Project</p>
        <div className='h-2 w-2 bg-black rounded-full' />
        <p className='font-semibold  text-2xl'>Existing project</p>
      </div>
      {projects?.length === 0 ? (
        <p>No project Available</p>
      ) : (
        <>
          <div className='mt-10  text-white list-decimal  text-md'>
            {currentPosts?.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]'
              >
                {/* <p className="text-[18px]">{item.id}</p> */}
                <div className='flex items-center gap-4'>
                  <p className='text-[18px] border-r-2 border-black pr-4'>
                    {item.title}
                  </p>
                  <p
                    className={
                      item.status === 'Active'
                        ? 'text-[14px] font-semibold text-[#5583C3]'
                        : 'text-[14px] font-semibold text-gray-400'
                    }
                  >
                    {item.status}
                  </p>
                </div>
                <div className='flex gap-3 flex-wrap '>
                  <button className='flex gap-2 items-center bg-[#DFDFDF] py-2 px-2 rounded-lg'>
                    Request delete
                    <RiDeleteBinLine />
                  </button>
                  {item.status === 'Not Active' && (
                    <button className='flex gap-2 items-center bg-[#5583C3] text-white py-2 px-3 rounded-lg'>
                      Activate
                    </button>
                  )}
                  <button className='flex gap-2 items-center bg-[#C8C8C8] py-2 px-2 rounded-lg'>
                    See more
                    <MdOutlineKeyboardArrowDown />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={projects?.length}
            currentPage={currentPage}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            paginate={paginate}
          />
        </>
      )}

      {/* <Link href='#' className="flex gap-2 items-center bg-[#205584] text-white mt-8 w-fit py-3 px-4 rounded-lg">
        See more
        <MdOutlineKeyboardArrowDown />
      </Link> */}
    </div>
  )
}

export default ExistingProject
























