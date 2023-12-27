"use client";
import React from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
// @ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { BsPerson } from "react-icons/bs";

export default function QuickSet() {
  const transaction = [
    {
      title: "Project Assistant",
      amount: "600, 000",
      id: 1,
    },
    {
      title: "Nerdbud pro",
      amount: "600, 000",
      id: 2,
    },
  ];

  const bankName = [
    {
      title: "Ecobank Plc",
      name: "Nerdburds Ltd",
      number: "0998712345",
      id: 1,
    },
  ];

  return (
    <div className="grid text-app-pblue grid-col-1  tablet:grid-col-4 laptop_l:grid-cols-8 gap-4">
      <div className="col-span-1  laptop_l:col-span-2 bg-[#F5F4F4] p-4  text-center rounded-lg">
        <p className="text-lg font-bold underline ">Quick Settings </p>
        <div className="flex w-fit justify-between gap-3 mt-3 h-fit mx-auto">
          Show side board
        </div>
        <p>Account type</p>
        <p>Company account</p>

        <button className="flex gap-2 items-center mx-auto text-app-pblue transition bg-yellow border-2 border-yellow mt-2 py-2 px-4 rounded-full">
          Edit profile
          <BsPerson size={20} />
        </button>
      </div>

      <div className="col-span-1 laptop_l:col-span-2 bg-[#F5F4F4] p-3 rounded-lg">
        <p className="text-lg text-center font-bold underline ">Transactions</p>
        <div className="mt-4 text-white list-decimal  text-md">
          {transaction?.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 rounded-lg py-2 px-3 my-2 bg-app-pblue"
            >
              <p className=" ">{item.id}.</p>
              <div>
                <p className=" ">{item.title}</p>
                <p className="text-[.9rem] text-app-sblue">N{item.amount}</p>
              </div>
            </div>
          ))}
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
      <TawkMessengerReact
        propertyId="658beb0670c9f2407f83a50e"
        widgetId="1hil8s5jb"
      />
    </div>
  );
}
