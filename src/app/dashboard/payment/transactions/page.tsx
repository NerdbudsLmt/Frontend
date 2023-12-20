"use client";

import Pagination from "@/components/Pagination";
import Link from "next/link";
import React, { useState } from "react";

interface transactions {
  title: string;
  Amount: string;
  Date: string;
  status: "Finished" | "Pending";
  id: number;
}

const Finished: React.FC = () => {
  const transactionList: transactions[] = [
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 1,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 2,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 3,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 4,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 5,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 6,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 7,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 8,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 9,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 10,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 11,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 12,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 13,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 14,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 15,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 16,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 17,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 18,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 19,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 20,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 21,
    },
    {
      title: "Project Assistant",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 22,
    },
    {
      title: "Brand IT",
      status: "Finished",
      Amount: "N660,000",
      Date: "10th July 2022",
      id: 23,
    },
    {
      title: "Nerdburds Pro",
      status: "Pending",
      Amount: "N360,000",
      Date: "10th May 2022 ",
      id: 24,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = transactionList.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const tableHeader = (
    <tr className=" text-left">
      <th className="p-3">Product/Service Name</th>
      <th className="p-3">Amount</th>
      <th className="p-3">Date</th>
      <th className="p-3">Status</th>
    </tr>
  );

  // Table body for transactions
  const tableRows = currentPosts.map((item, index) => {
    const transactionIndex = indexOfFirstPost + index + 1;
    return (
      <tr
        key={item.id}
        className="border-b-[2rem] border-white rounded-lg gap-4 bg-[#F5F4F4]"
      >
        <td className="p-3">{`${transactionIndex}. ${item.title}`}</td>
        <td className="p-2">{item.Amount}</td>
        <td className="p-1">{item.Date}</td>
        <td
          className={`p-1 ${
            item.status === "Finished" ? "text-[#5583C3]" : "text-black"
          }`}
        >
          {item.status}
        </td>
      </tr>
    );
  });

  return (
    <div className="max-w-[1000px]">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Payment</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold text-2xl">Transactions</p>
      </div>

      <div className="mt-7 list-decimal  text-md">
        <table className="w-full border-collapse">
          <thead>{tableHeader}</thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={transactionList.length}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        paginate={paginate}
      />
    </div>
  );
};

export default Finished;
