"use client";

import { Loader } from "@/app/dashboard/projects/existing/components/Loader";
import Pagination from "@/components/Pagination";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

interface transactions {
  projectName: string;
  amount: string;
  userEmail: string;
  date: string;
  status: "Finished" | "Pending";
  _id: number;
}

const TransactionsList = () => {

 
  const { data: session } = useSession();

  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<transactions[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const accessToken = session?.user?.accessToken ?? "";

        if (!accessToken) {
          console.error("Access token not available");
          return;
        }

        const url = `${apiUrl}/payment/payment-history`;
        // const url = `${apiUrl}/projects/userProjects`
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        setLoading(false);
        setProject(data?.data?.paymentHistory);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUserProjects();
  }, [session]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = project?.slice(indexOfFirstPost, indexOfLastPost);

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

  function getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const suffix = getOrdinalSuffix(day);
  
    return `${day}${suffix} ${month} ${year}`;
  }
  
  
  

  return (
    <div className="max-w-[1000px]">
      <div className="flex gap-2 mb-8 items-center">
        <p className="text-gray-500 text-xl font-semibold">Payment</p>
        <div className="h-2 w-2 bg-black rounded-full" />
        <p className="font-semibold text-2xl">Transactions</p>
      </div>

      {loading ? (
       <>
        <Loader />
       </>
        
      ) : 
      project?.length === 0 ? (
        <p className="text-app-pblue py-4 text-center text-lg font-bold">
          No project available
        </p>
      ) : (
      <div className="mt-7 list-decimal  text-md">
        <table className="w-full border-collapse">
          <thead>{tableHeader}</thead>
          <tbody>
            {currentPosts?.map((item, index) => {
              const transactionIndex = indexOfFirstPost + index + 1;

              return (
                <tr
                  key={item._id}
                  className="border-b-[2rem] border-white rounded-lg gap-4 bg-[#F5F4F4]"
                >
                  <td className="p-3">{`${transactionIndex}. ${item.projectName}`}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-1">{formatDate(item.date)}</td>
                  <td
                    className={`p-1 ${
                      item.status === "Finished"
                        ? "text-[#5583C3]"
                        : "text-black"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
       )}

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
    </div>
  );
};

export default TransactionsList;