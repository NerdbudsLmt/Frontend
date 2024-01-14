"use client";

import React, { useEffect, useState } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
// @ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { DashLoader } from "@/app/dashboard/component/DashLoader";

interface transactions {
  projectName: string;
  amount: string;
  userEmail: string;
  date: string;
  status: "Finished" | "Pending";
  _id: number;
}
export default function QuickSet() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState<transactions[]>([]);

  const storedData =
    typeof window !== "undefined" ? localStorage.getItem("data") : null;
  const parsedData = storedData ? JSON.parse(storedData) : {};

  const bankName = [
    {
      title: "Ecobank Plc",
      name: "Nerdburds Ltd",
      number: "0998712345",
      id: 1,
    },
  ];

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
        setTransactions(data?.data?.paymentHistory);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUserProjects();
  }, [session]);

  return (
    <div className="grid text-app-pblue grid-col-1  tablet:grid-col-4 laptop_l:grid-cols-8 gap-4">
      <div className="col-span-1  laptop_l:col-span-2 bg-[#F5F4F4] p-4 rounded-lg">
        <p className="text-lg font-bold text-[#265D80]  w-[80%] ">
          Transactions
        </p>

        <div className="mt-4 text-white list-decimal  text-md">
        {loading ? (
       <>
        <DashLoader />
       </>
        
      ) :
          transactions?.length === 0 ? (
            <p className="text-[#205584] py-4 font-semibold text-lg text-center">
              You have no transactions.
            </p>
          ) : (
            <>
              {transactions?.slice(-3)?.map((item, index) => {
                const transactionIndex = index + 1;
                return (
                  <div
                    key={item._id}
                    className="flex gap-2 rounded-lg py-2 px-3 my-2 bg-app-pblue"
                  >
                    <p className=" ">{transactionIndex}.</p>
                    <div>
                      <p className=" ">{item.projectName}</p>
                      <p className="text-[.8rem] text-app-sblue">
                        N{item.amount}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}

        </div>
      </div>

      <div className="col-span-1 tablet:col-span-2 laptop_l:col-span-3 bg-[#F5F4F4] p-3 rounded-lg">
        <p className="text-lg font-bold underline text-center ">
          Bank Transfer Details{" "}
        </p>

        <div className="mt-4 text-white list-decimal  text-md">
          {bankName?.map((item) => (
            <div key={item.id} className=" py-2 px-3 my-2">
              <p className=" text-app-pblue font-semibold">
                <span className="text-app-sblue">Bank Name: </span>
                {item.title}.
              </p>
              <p className=" text-app-pblue font-semibold my-2">
                <span className="text-app-sblue">Account Name: </span>
                {item.name}
              </p>
              <p className=" text-app-pblue font-semibold">
                <span className="text-app-sblue">Account Number: </span>
                {item.number}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="fixed bottom-4 shadow-xl right-3 mt-auto mx-auto bg-[#F5F4F4] p-5 rounded-full">
        <BiSolidMessageDetail size={40} />
      </div> */}

      <div className="fixed bottom-4 right-3 ">
        <TawkMessengerReact
          propertyId="658beb0670c9f2407f83a50e"
          widgetId="1hil8s5jb"
        />
      </div>
    </div>
  );
}
