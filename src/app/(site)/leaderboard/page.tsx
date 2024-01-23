"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowDown, BsArrowLeft } from "react-icons/bs";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "@/components/Pagination";

interface User {
  username: string;
  numberOfReferrals: number;
  earnings: number;
}

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: any) => void;
  paginateFront: () => void;
  paginateBack: () => void;
}

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [displayedItems, setDisplayedItems] = useState<User[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/affiliates`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error("error");
        }
        console.log(data);
        setDisplayedItems(data?.data.affiliates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayedItems?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const { highestUser, secondHighestUser, thirdHighestUser } =
    displayedItems.reduce(
      (result, currentUser) => {
        if (
          currentUser.numberOfReferrals >= result.highestUser.numberOfReferrals
        ) {
          return {
            highestUser: currentUser,
            secondHighestUser: result.highestUser,
            thirdHighestUser: result.secondHighestUser,
          };
        } else if (
          currentUser.numberOfReferrals >=
          result.secondHighestUser.numberOfReferrals
        ) {
          return {
            highestUser: result.highestUser,
            secondHighestUser: currentUser,
            thirdHighestUser: result.secondHighestUser,
          };
        } else if (
          currentUser.numberOfReferrals >=
          result.thirdHighestUser.numberOfReferrals
        ) {
          return {
            highestUser: result.highestUser,
            secondHighestUser: result.secondHighestUser,
            thirdHighestUser: currentUser,
          };
        }
        return result;
      },
      {
        highestUser: { numberOfReferrals: -1 },
        secondHighestUser: { numberOfReferrals: -1 },
        thirdHighestUser: { numberOfReferrals: -1 },
      }
    );
  return (
    <>
      <header className='pt-10'>
        <div className='flex flex-col items-center space-y-5 mb-16'>
          <div className='flex flex-col lg:flex-row  items-center'>
            <Link
              href='/'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>See more</span>
                <BsArrowDown className='text-lg' />
              </>
            </Link>

            <div className='lg:border-r lg:border-gray-400 h-10 lg:mx-8'></div>

            <Link
              href='/affiliate'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>Become an Affiliate</span>
                <BsArrowRight className='text-lg' />
              </>
            </Link>
          </div>
          <div>
            <h1 className='text-5xl font-bold text-center text-app-sblue lg:text-7xl'>
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

      <div className='flex items-center justify-center mx-auto'>
        {[highestUser, secondHighestUser, thirdHighestUser].map(
          (user: any, index) => (
            <div className='bg-white rounded-md p-4' key={index}>
              <span className='flex items-end mb-4'>
                <div className='bg-[#D9D9D9] rounded-full p-2 relative'>
                  <Image
                    alt=''
                    src='./images/userProfile.svg'
                    width={80}
                    height={80}
                    priority
                    className='rounded-full'
                  />
                  {/* <p className='bg-[#132E40] rounded-full text-2xl p-3 font-bold mt-2 mb-2 w-10 h-10 flex items-center justify-center'> */}
                  <p className='bg-[#132E40] rounded-full text-sm absolute bottom-0 left-0 px-2 py-1 font-bold w-6 h-6 flex items-center justify-center'>
                    {index + 1}
                  </p>
                </div>
              </span>
              <h1 className='text-[#132E40] font-bold'>{`N${
                user?.earnings !== undefined ? user.earnings : '0.00'
              }`}</h1>
              <p className='text-[#132E40] font-bold'>{`${
                user?.numberOfReferrals || 0
              } referrals`}</p>
              <p className='text-[#132E40] font-normal'>
                @{user?.username || 'N/A'}
              </p>
            </div>
          )
        )}
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
                {currentPosts.length} affiliates{' '}
              </p>
            </span>
          </div>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>
                  Username
                </th>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>
                  Number of Referrals
                </th>
                <th className='py-2 px-4 text-[#717A8C] font-normal'>
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping through currentPosts */}
              {currentPosts.map((user, index) => (
                <tr key={index}>
                  <td className='py-2 px-4 text-[#205584] flex items-center'>
                    {user.username}
                  </td>
                  <td className='py-2 px-4 text-[#205584]'>
                    {user?.numberOfReferrals}
                  </td>
                  <td className='py-2 px-4 text-[#205584]'>
                    {`N${(user?.earnings && user.earnings) || '0.00'}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={displayedItems?.length}
            currentPage={currentPage}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  )
}
