import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function joinTeam() {
  return (
    <section>
      <div className="flex flex-col items-center mt-8 space-y-5 mb-10">
        <div>
          <Link
            href="/about"
            className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full transition-transform hover:scale-110"
          >
            <>
              <span>Go Back</span>
              <BsArrowLeft className="text-lg" />
            </>
          </Link>
        </div>
        <div className="text-5xl font-bold text-center lg:text-7xl text-app-sblue">
          Join <span className=" text-white">Our</span>{" "}
          <span className=" text-[#F9D262]">Team</span>
        </div>
        <p className=" w-[100%] sm:w-[70%] text-1xl lg:text-2xl text-center">
          Sorry, there are currently no jobs available at Nerdbuds at the
          moment. You can leave your name, email, and the position you can work
          in down below and when there is an opening you will be the first to
          know.{" "}
        </p>
      </div>

      <div className="mx-auto max-w-3xl p-4 rounded-lg">
        <h5 className="text-lg font-semibold mb-2">Email</h5>
        <input
          className="w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-customBlue"
          type="email"
          name=""
          placeholder="johndoe@gmail.com"
          id=""
        />
        <h5 className="text-lg font-semibold mb-2">Name</h5>
        <input
          className="w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-customBlue"
          type="email"
          name=""
          placeholder="John Doe"
          id=""
        />
        <h5 className="text-lg font-semibold mb-2">Position</h5>
        <input
          className="w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-customBlue"
          type="email"
          name=""
          placeholder="Frontend Developer"
          id=""
        />

        <Link
          href=""
          className="flex items-center gap-3 px-8 py-2 mb-20 mt-5 w-fit bg-[#3F9BD5] text-[18px] laptop:text-[16px] text-white rounded-3xl font-bold transition-transform hover:scale-110 mx-auto"
        >
          Submit
        </Link>
      </div>
    </section>
  );
}
