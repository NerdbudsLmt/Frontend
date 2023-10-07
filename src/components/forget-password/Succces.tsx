import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function Succces() {
  return (
    <div className="my-6 mx-auto w-full">
     
    <div className="flex flex-row-reverse gap-8 my-4 ">
      <div className=" fp4 hidden laptop:block grow basis-[65%] h-[600px] rounded-lg overflow-hidden">
      </div>
      <div className="grow-[2] basis-[45%] my-auto">
        <h1 className="text-4xl font-bold text-app-sblue">
          Password
          <span className="text-app-porange"> changed</span>
        </h1>
        <p className="text-gray-400 my-3">
        You’re <span className="text-app-porange"> good  </span>
        to go!
        </p>
          <Link 
            href='/login'
            className="bg-[#5583C3] text-white py-2 px-8 mt-5 rounded-full"
            type="submit"
          >
            Proceed to login
          </Link>
      

      
      </div>
    </div>
      <div className="flex gap-3 mt-12 justify-center">
          <div className="w-[20%] max-w-[150px] h-[8px] rounded-lg bg-white"></div>
          <div className="w-[20%] max-w-[150px] h-[8px] rounded-lg bg-white"></div>
          <div className="w-[20%] max-w-[150px] h-[8px] rounded-lg bg-white"></div>
          <div className="w-[20%] max-w-[150px] h-[8px] rounded-lg bg-app-sblue"></div>
        </div>
  </div>
  )
}
