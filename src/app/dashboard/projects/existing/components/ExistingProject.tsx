'use client'

import Pagination from '@/components/Pagination'
import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useSession } from 'next-auth/react'
import { BeatLoader } from 'react-spinners'
import '..//..//styles/styles.css'





interface Project {
  projectName: string
  paymentStatus: boolean
  _id: number
}


const ExistingProject: React.FC = () => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project[]>([])
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
          setLoading(true)

          const data = await response.json()
          setProject(data?.data?.projects)
          // console.log(data)
          // console.log(data.data.projects)
        setLoading(false)

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
  const currentPosts = project?.slice(indexOfFirstPost, indexOfLastPost)

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

      {project?.length === 0 ? (
        // <p className="text-app-pblue py-4 text-center text-lg font-bold">Loading...</p>
        <div className='text-app-pblue py-4 text-center text-lg font-bold'>
          {loading ? (
            <>
              {/* <BeatLoader color='#3F9BD5' css={override} size={10} /> */}
              <p className='skeleton-loading'>Loading...</p>
            </>
          ) : (
            'No project available'
          )}
        </div>
      ) : (
        <>
          <div className='mt-10  text-white list-decimal  text-md'>
            {loading ? (
              <p className='text-app-pblue py-4 text-center text-lg font-bold'>
                No project available
              </p>
            ) : (
              <>
                {currentPosts?.map((item) => (
                  <div
                    key={item._id}
                    className='flex items-center justify-between flex-wrap rounded-lg py-2 px-4 gap-4 my-5 bg-[#F5F4F4]'
                  >
                    {/* <p className="text-[18px]">{item.id}</p> */}
                    <div className='flex items-center gap-4'>
                      <p className='text-[18px] border-r-2 border-black pr-4'>
                        {item.projectName}
                      </p>
                      <p
                        className={
                          item.paymentStatus === true
                            ? 'text-[14px] font-semibold text-[#5583C3]'
                            : 'text-[14px] font-semibold text-gray-400'
                        }
                      >
                        {item.paymentStatus === true ? 'Active' : 'Not Active'}
                      </p>
                    </div>
                    <div className='flex gap-3 flex-wrap '>
                      <button className='flex gap-2 items-center bg-[#DFDFDF] py-2 px-2 rounded-lg'>
                        Request delete
                        <RiDeleteBinLine />
                      </button>
                      {item.paymentStatus === true && (
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
              </>
            )}
          </div>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={project?.length}
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
























