import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const lang = [
  {
    img: "/images/comp.svg",
    title: "1. Software creation",
    desc: "Your go-to software company for cutting-edge solutions. We specialize in software creation, crafting innovative and tailor-made applications for your business needs. Our talented team of tech-savvy nerds will transform your ideas into sleek, efficient software products that propel your company to new heights.",
  },
  {
    img: "/images/cloud.svg",
    title: "2. Cloud services",
    desc: "Experience the power of the cloud with our exceptional cloud services. Seamlessly store, access, and collaborate on your data from anywhere, with utmost security and reliability. Embrace efficiency and scalability with Nerdbuds' cloud products, revolutionizing the way you do business. Unlock the full potential of the cloud today!",
  },
  {
    img: "/images/r.svg",
    title: "3. Brand consultation",
    desc: "Your go-to software company for cutting-edge solutions. We specialize in software creation, crafting innovative and tailor-made applications for your business needs. Our talented team of tech-savvy nerds will transform your ideas into sleek, efficient software products that propel your company to new heights.",
  },
  {
    img: "/images/settings.svg",
    title: "4. Engineering services",
    desc: "With our cutting-edge technology and skilled team, we provide top-notch software engineering services. From crafting efficient code to developing innovative solutions, our experts deliver tailor-made software products to meet your business needs.",
  },
];

export const Offer = () => {
  return (
      <div className="mt-0 md:mt-10 mb-10 md:mb-24 lg:mb-32">
        <div>
          <p className="text-app-sblue text-[20px] font-[500]">
            Open For Business.
          </p>
          <p className="text-[32px] font-[600] my-2  text-white">
            What we offer
          </p>
          <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
            We craft tailored software solutions that perfectly match your
            vision. Your satisfaction is our code.
          </p>
        </div>

        <div className="mt-5 md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-6 xl:gap-y-0">
            {lang.map((item) => (
              <div key={item.img} className="w-full md:w-[270px] mx-auto">
                <Image
                  src={item.img}
                  alt="lang"
                  width={25}
                  height={20}
                  //   priority
                />
                <div className="ml-1.5">

                  <p className="font-[500] my-2 text-[17px] text-white">
                    {item.title}
                  </p>
                  <p className="text-[12px] md:text-[15px]  text-white">

                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 md:mt-20 flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <div className="relative flex-grow bg-center bg-cover bg-no-repeat bg-[url('/images/help.svg')] rounded-md">
            <div className="h-full w-full flex flex-col justify-between space-y-6 md:space-y-28 mx-auto p-5">
              <p className="text-black w-full lg:w-[280px] ml-0 md:ml-auto font-[500]">
                Get ahead with your final year programming projects! Our expert
                team handles the coding while you focus on success.
              </p>
              <div className="">
                <div>
                  <h1 className="text-4xl laptop:text-5xl font-bold text-white">
                    <span className="text-app-sblue">Help Us </span>to
                  </h1>
                  <h1 className="text-4xl laptop:text-5xl font-bold text-white">
                    {" "}
                    <span className="text-app-porange">Help You</span>
                    <span className="text-app-sblue">.</span>
                  </h1>
                </div>
                <Link
                  href="/pricing"
                  className="border-app-sblue flex gap-2 items-center bg-app-sblue border-2 w-fit mt-6 text-white py-3 px-4 rounded-full"
                >
                  Get Started
                  <BsArrowRight className="text-lg" />
                </Link>
                <p></p>
              </div>
            </div>
          </div>
          <div className="relative h-[350px] md:h-auto w-full md:basis-[29%] bg-[url('/images/money.svg')] bg-center bg-cover bg-no-repeat rounded-md overflow-hidden">
            <div className="h-full w-full flex flex-col justify-between space-y-28 py-3">
              <div className="">
                <div
                  
                  className="text-yellow text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-4 rounded-full"
                >
                  Brand Building & Management
                  {/* <BsArrowRight className="text-lg" /> */}
                  <Image
                    src='/images/cube.svg'
                    alt="lang"
                    width={10}
                    height={15}
                    //   priority
                  />
                </div>
                <p className="mt-3 text-yellow text-2xl font-[600] text-center w-fit mx-auto">Mastering brands with precision.</p>
              </div>
              <Link
                href="/pricing"
                className="border-yellow text-yellow text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-2 px-4 rounded-full"
              >
                Get Started
                <BsArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
