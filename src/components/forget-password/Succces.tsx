import React from 'react'
import Image from "next/image";


export default function Succces() {
  return (
    <div className="my-6 mx-auto w-[90%] max-w-[900px] ">
     
    <div className="flex flex-row-reverse gap-8 my-4 ">
      <div className=" basis-[65%] h-[500px] rounded-lg overflow-hidden">
        <Image
          src="/images/businessload.svg"
          alt="Vercel Logo"
          className="h-[800px] w-full relative -top-16 "
          width={600}
          height={500}
          quality={100}
        />
      </div>
      <div className="basis-[45%] my-auto">
        <h1 className="text-4xl font-bold text-app-sblue">
          Password
          <span className="text-app-porange"> changed</span>
        </h1>
        <p className="text-gray-400 my-3">
        You’re <span className="text-app-porange"> good  </span>
        to go!
        </p>
          <button
            className="bg-[#5583C3] text-white py-2 px-8 mt-5 rounded-full"
            type="submit"
          >
            Proceed to login
          </button>
      

      
      </div>
    </div>
  </div>
  )
}
