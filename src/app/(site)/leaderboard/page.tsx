"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowDown, BsArrowLeft } from "react-icons/bs";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "@/components/Pagination";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

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
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

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
        // const sortedAffiliates = data?.data.affiliates.sort(
        //   (a: any, b: any) => b.earnings - a.earnings
        // );
        // setDisplayedItems(sortedAffiliates);
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

  const filteredItems = displayedItems.filter((item) =>
    item.username.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filteredItems);
  const currentFilteredPost = filteredItems?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div className="flex flex-col lg:flex-row  items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full"
            >
              <>
                <span>See more</span>
                <BsArrowDown className="text-lg" />
              </>
            </Link>

            <div className="lg:border-r lg:border-gray-400 h-10 lg:mx-8"></div>

            <Link
              href="/affiliate"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full"
            >
              <>
                <span>Become an Affiliate</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center text-app-sblue lg:text-7xl">
              Leader<span className="text-[#F9D262]">Board</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center">
              This dashboard contains the list of affiliates and their earnings.
              Their username and details have been kept confidential for
              security purposes.
            </p>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center mx-auto">
        {displayedItems.slice(0, 3).map((user: any, index) => (
          <div className="bg-white rounded-md py-4 px-8 m-4" key={index}>
            <span className="flex items-end mb-4">
              <div className="bg-[#D9D9D9] rounded-full p-2 relative">
                <Image
                  alt=""
                  src="./images/userProfile.svg"
                  width={80}
                  height={80}
                  priority
                  className="rounded-full"
                />
                {/* <p className='bg-[#132E40] rounded-full text-2xl p-3 font-bold mt-2 mb-2 w-10 h-10 flex items-center justify-center'> */}
                <p className="bg-[#132E40] rounded-full text-sm absolute bottom-0 left-0 px-2 py-1 font-bold w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </p>
              </div>
            </span>
            <h1 className="text-[#132E40] font-bold">{`N${
              user?.earnings !== undefined ? user.earnings : "0.00"
            }`}</h1>
            <p className="text-[#132E40] font-bold">{`${
              user?.numberOfReferrals || 0
            } referrals`}</p>
            <p className="text-[#132E40] font-normal">
              @{user?.username || "N/A"}
            </p>
          </div>
        ))}
      </div>

      <section>
        <div className="bg-white rounded p-4 mt-20 mb-20">
          <div className="flex items-left mb-4">
            <span className="flex justify-between gap-2 items-center">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="border border-[#717A8C] p-1 pl-8 text-[#717A8C]  rounded-md"
                  placeholder="search"
                  onChange={handleFilterChange}
                />
                <div className="absolute left-2 top-2">
                  <AiOutlineSearch className="text-[#717A8C]" />
                </div>
              </div>
              <p className=" font-medium text-[#205584] text-base">
                {displayedItems.length} affiliates{" "}
              </p>
            </span>
          </div>

          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr className="bg-gray-200">
                  {/* <Th className="text-[1rem] capitalize text-[#717A8C] font-semibold">
                    S/N
                  </Th> */}
                  <Th className="text-[1rem] capitalize text-[#717A8C] font-semibold">
                    User Name
                  </Th>
                  <Th className="text-[1rem] capitalize text-[#717A8C] font-semibold">
                    Number of Referrals
                  </Th>
                  <Th className="text-[1rem] capitalize text-[#717A8C] font-semibold">
                    Earnings
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentFilteredPost.slice(3).map((user, index) => {
                  const serialNumber = indexOfFirstPost + index + 4;
                  return (
                    <Tr key={index}>
                      {/* <Td className="text-[#205584]">{serialNumber}</Td> */}
                      <Td className="text-[#205584]">{user.username}</Td>
                      <Td className="text-[#205584]">
                        {user?.numberOfReferrals || 0}
                      </Td>
                      <Td className="text-[#205584]">
                        {`N${(user?.earnings && user.earnings) || "0.00"}`}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          {filteredItems.length > postsPerPage && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filteredItems.length}
              currentPage={currentPage}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              paginate={paginate}
            />
          )}
        </div>
      </section>
    </>
  );
}
