import React from 'react'
import Image from "next/image";
import { FiPlus, FiClock } from 'react-icons/fi'

export default function Projects() {
  const project = [
    {
      title: 'Project Assistant',
      status: 'Finished',
      id: 1
    },
    {
      title: 'Brand IT',
      status: 'Finished',
      id:2
    },
    {
      title: 'Nerdburds Pro',
      status: 'In Progress',
      id: 3
    },
  ]

  const meeting = [
    {
      title: 'Project assistant meeting',
      link: '12.03.2023 (Zoom meeting) ',
      host: 'Nerdbuds Ltd',
      id: 1
    },
    {
      title: 'Project assistant meeting',
      link: '12.03.2023 (Zoom meeting) ',
      host: 'Nerdbuds Ltd',
      id: 1
    },
  ]
  
  return (
    <div className='my-7'>
      <div className="text-[#265D80]  grid grid-cols-1 laptop_l:grid-cols-2 gap-5 ">
          <div className=" bg-[#F5F4F4] p-4 rounded-lg">
            <p className="text-lg font-bold">Projects </p>
           
            <ul className="mt-4  text-white list-decimal  text-md" >
              {project?.map((item) => (
                <li key={item.id} className='flex items-center rounded-lg py-3 px-3 gap-4 my-3 bg-app-pblue'>
                    <p className='text-[18px]'>{item.id}</p>
                    <p className='text-[18px] border-r-2 pr-4'>{item.title}</p>
                    <p className={item.status === 'Finished' ? 'text-[12px] text-green-600' : 'text-[12px] text-yellow'}>{item.status}</p>
                </li>
              ))}
            </ul>

            <button
          className='flex gap-2 items-center transition text-app-pblue bg-yellow border-2 border-yellow py-2 px-4 rounded-full'      
          >
            <FiPlus size={20} />
            Create new project
          </button>
          </div>

          <div className=" bg-[#F5F4F4] p-4 rounded-lg">
            <p className="text-lg font-bold underline ">Scheduled meetings</p>
            <div className="mt-4 text-white list-decimal  text-md" >
              {meeting?.map((item) => (
                <div key={item.id} className='rounded-lg py-3.5 px-3 my-2 bg-app-pblue'>
                    <p className=' text-app-sblue'>{item.title}</p>
                    <p className='text-[.8rem] '>{item.link}</p>
                    <p className='text-[.8rem]'>Host: {item.host}</p>
                </div>
              ))}
            </div>

            <button
          className='flex gap-2 items-center text-app-pblue transition bg-yellow border-2 border-yellow mt-2 py-2 px-4 rounded-full'      
          >
            Schedule meeting 
            <FiClock size={20} />
          </button>
          </div>

        </div>
    </div>
  )
}
