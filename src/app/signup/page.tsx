import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <header className="pt-4">
        <div className="flex flex-col items-center mb-4">
          <div>
            <h1 className="text-3xl tablet:text-4xl w-[98%]  tablet:w-[400px] font-bold text-center text-app-sblue">
              What type of <span className="text-app-porange">account</span> do
              you need?
            </h1>
          </div>
        </div>
      </header>
      <div className="py-10 bg-app-pblue ">
        <div className="flex justify-around gap-y-12 gap-x-3 flex-wrap">
          <Link href='/signup/company' className="relative w-[85%] tablet_l:w-[272px] rounded-3xl">
            <Image
              src="/images/company.svg"
              className="min-h-fit tablet_l:w-[272px] h-fit max-h-[400px]"
              alt="Vercel Logo"
              width={400}
              height={400}
              priority
            />
            <div className="bg-sign mt-6 p-4 rounded-md">
              <h1 className="text-3xl font-bold text-app-sblue">
                For<span className="text-app-porange"> Companies</span>
              </h1>
              <p className="text-[17px] mt-2">
                We help companies with their branding and other services such as
                creation of products. A company account will give you access to
                these services and so much more.
              </p>
            </div>
          </Link>
          <Link href='/signup/projectPal' className="relative w-[85%] tablet_l:max-w-[272px] rounded-3xl">
            <Image
              src="/images/student.svg"
              className="min-h-fit h-fit max-h-[400px]"
              alt="Vercel Logo"
              width={400}
              height={400}
              priority
            />
            <div className="bg-sign mt-6 p-4 rounded-md">
              <h1 className="text-3xl font-bold text-app-sblue">
                For<span className="text-app-porange"> Syudents</span>
              </h1>
              <p className="text-[17px] mt-2">
                Investing in the youth is one of our drive so this account is
                for students who wants to being their idea to life. Don’t feel
                left out. Let us help you with your dreams.
              </p>
            </div>
          </Link>
          <Link href='/signup/business' className="relative w-[85%] tablet_l:max-w-[272px] rounded-3xl">
            <Image
              src="/images/buisness.svg"
              className="min-h-fit h-fit max-h-[400px]"
              alt="Vercel Logo"
              width={400}
              height={400}
              priority
            />
            <div className="bg-sign mt-6 p-4 rounded-md">
              <h1 className="text-3xl font-bold text-app-sblue">
                For<span className="text-app-porange"> Individuals</span>
              </h1>
              <p className="text-[17px] mt-2">
                Starting a business can be scary and tasking. Let us help the
                process easier for you while making you profit at the same time.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
