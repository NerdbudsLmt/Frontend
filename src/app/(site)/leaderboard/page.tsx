import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight, BsArrowDownShort } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

export default function LeaderBoard() {
  return (
    <>
      <header className='pt-10'>
        <div className='flex flex-col items-center space-y-5 mb-16'>
          <div className='flex '>
            <Link
              href='/terms-conditions'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>See more</span>
                <BsArrowDown className='text-lg' />
              </>
            </Link>
            <div className='border-r border-gray-400 h-full mx-8'></div>
            <Link
              href='/terms-conditions'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>Become an Affiliate</span>
                <BsArrowRight className='text-lg' />
              </>
            </Link>
          </div>
          <div>
            <h1 className='text-8xl font-bold text-center text-app-sblue'>
              Leader<span className='text-[#F9D262]'>Board</span>
            </h1>
          </div>
          <div className='text-center'>
            <p className='w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center'>
              This dashboard contains the list of affiliates and their earnings.
              Their username and details have been kept confidential for
              security purposes.
            </p>
          </div>
        </div>
      </header>
      <div className=' flex items-center justify-center mx-auto'>
        <div className='bg-white rounded-md p-4'>
          <span className='flex items-end mb-4'>
            <div className='bg-[#D9D9D9] rounded-full p-2 relative'>
              <Image
                alt=''
                src='./images/userProfile.svg'
                width={100}
                height={100}
                priority
                className='rounded-full'
              />
              <p className='bg-[#132E40] rounded-full text-sm absolute bottom-[0.5] right-10 px-3 py-1 font-bold w-6 h-6 flex items-center justify-center'>
                2
              </p>
            </div>
          </span>
          <h1 className='text-[#132E40] font-bold'>N34,000,000</h1>
          <p className='text-[#132E40] font-bold'>300,000 referrals</p>
          <p className='text-[#132E40] font-normal'>@jondoe</p>
        </div>
        <div className='bg-white rounded-md p-4'>
          <span className='flex flex-col mb-4 items-center'>
            <div className='bg-[#D9D9D9] rounded-full p-2 '>
              <Image
                alt=''
                src='./images/userProfile.svg'
                width={100}
                height={100}
                priority
                className='rounded-full'
              />
            </div>
            <p className='bg-[#132E40] rounded-full text-2xl  p-3 font-bold mt-2 mb-2 w-10 h-10 flex items-center justify-center'>
              1
            </p>
          </span>
          <h1 className='text-[#132E40] font-bold'>N44,000,000</h1>
          <p className='text-[#132E40] font-bold'>300,000 referrals</p>
          <p className='text-[#132E40] font-normal'>@jondoe</p>
        </div>
        <div className='bg-white rounded-md p-4'>
          <span className='flex items-end mb-4'>
            <div className='bg-[#D9D9D9] rounded-full p-2 relative'>
              <Image
                alt=''
                src='./images/userProfile.svg'
                width={100}
                height={100}
                priority
                className='rounded-full'
              />
              <p className='bg-[#132E40] rounded-full text-sm absolute bottom-[-0.5] right-10 px-3 py-1 font-bold w-6 h-6 flex items-center justify-center'>
                3
              </p>
              {/* <p className='bg-[#132E40] rounded-full text-sm absolute bottom-[0] right-10 px-2 py-1 font-bold'>
                3
              </p> */}
            </div>
          </span>
          <h1 className='text-[#132E40] font-bold'>N34,000,000</h1>
          <p className='text-[#132E40] font-bold'>300,000 referrals</p>
          <p className='text-[#132E40] font-normal'>@jondoe</p>
        </div>
      </div>
      <section>
        <div className='bg-white rounded p-4 mt-20 mb-20'>
          <div className='flex items-left mb-4'>
            <span className='flex justify-between gap-2 items-center'>
              <div className='relative flex items-center'>
                <input
                  type='text'
                  className='border border-[#717A8C] p-1 pl-8 text-[#717A8C]  rounded-md'
                  placeholder='search'
                />
                <div className='absolute left-2 top-2'>
                  <AiOutlineSearch className='text-[#717A8C]' />
                </div>
              </div>
              <p className=' font-medium text-[#205584] text-base'>
                44,8684 affiliates{' '}
              </p>
            </span>
          </div>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>
                  Username
                </th>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>Number</th>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className={index % 2 === 0 ? '' : ''}>
                  <td className='py-2 px-4 text-#205584'>{`User${
                    index + 1
                  }`}</td>
                  <td className='py-2 px-4 text-#205584'>{index + 1}</td>
                  <td className='py-2 px-4 text-#205584'>{`$${
                    (index + 1) * 1000
                  }`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
