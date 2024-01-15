import Link from "next/link";
import React from "react";
import { options } from "../../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"


export default async function PaymentComfirmation() {
  const session = await getServerSession(options)

  if (!session) {
      redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <div>
      <p className="text-3xl text-gray-500  ml-1 inline ">
        payments <img className="inline" src="/Dot.png" alt="Dot icon" />
      </p>
      <p className="ml-3 text-3xl inline font-semibold ">Price Comfirmation</p>
      <p className="text-1xl ml-1 mt-10">
      The displayed amount below reflects the agreed sum following the conclusion of the meeting. This sum is intended for payment, and adherence to the terms of the project agreement is expected.
      </p>
      <div className="bg-[#d9d8d8] h-20 w-fit mt-8 px-3 ml-1 flex align-middle justify-center rounded-md">
        <p className="text-[#676767] mt-10">Cost of Project</p>{" "}
        <p className="text-3xl text-[#2E8A1F] font-semibold ml-5 mt-8">
          N******
        </p>
      </div>
      <p className="text-1xl ml-1 mt-8">
      If the sum specified exceeds the agreed upon amount in the meeting or if any issues arise regarding the payment, kindly contact  
        <a
          href="https://example.com/customer-support"
          className="underline text-[#5583C3] ml-1"
        >
           Customer Support
        </a>
        .
      </p>

      <Link href="/dashboard/payment/paymethod">
        <button className="bg-[#205584] font-semibold text-white ml-1 mt-10 w-72 h-10 rounded-md">
          Proceed to Payment Methods
        </button>
      </Link>
      <Link href="/dashboard/payment/transactions">
        <button className="bg-[#205584] font-semibold text-white ml-1 mt-3 w-72 h-10 rounded-md">
          View Transactions History
        </button>
      </Link>
    </div>
  );
}
