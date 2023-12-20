import Link from "next/link";
import React from "react";

export default function PaymentComfirmation() {
  return (
    <div>
      <p className="text-3xl text-gray-500  ml-1 inline ">
        payments <img className="inline" src="/Dot.png" alt="Dot icon" />
      </p>
      <p className="ml-3 text-3xl inline font-semibold ">Price Comfirmation</p>
      <p className="text-1xl ml-1 mt-10">
        The amount displayed below is the agreed amount upon conclusion of the
        meeting. This <br /> amount is meant to be paid, and the condition of
        the project agreement is meant to be adhered <br /> to.
      </p>
      <div className="bg-[#d9d8d8] h-20 w-80 mt-8 ml-1 flex align-middle justify-center rounded-md">
        <p className="text-[#676767] mt-10">Cost of Project</p>{" "}
        <p className="text-3xl text-[#2E8A1F] font-semibold ml-5 mt-8">
          N100,000
        </p>
      </div>
      <p className="text-1xl ml-1 mt-8">
        If the amount above is not the same as agreed in the meeting or there is
        any problem with <br /> payment, please reach out to{" "}
        <a
          href="https://example.com/customer-support"
          className="underline text-[#5583C3]"
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
