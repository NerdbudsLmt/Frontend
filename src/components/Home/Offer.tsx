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
    <div>
      <div className="my-32">
        <div>
          <p className="text-app-sblue text-[20px] font-[500]">
            Open For Business.
          </p>
          <p className="text-[32px] font-[600] my-2  text-neutral-900 dark:text-white">
            What we offer
          </p>
          <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
            We craft tailored software solutions that perfectly match your
            vision. Your satisfaction is our code.
          </p>
        </div>

        <div className="mt-14">
          <div className="flex tablet_l:flex-row flex-col justify-between tablet_l:gap-x-4 gap-y-10 flex-wrap">
            {lang.map((item) => (
              <div key={item.img} className="w-full tablet_l:w-[270px] mx-auto">
                <Image
                  src={item.img}
                  alt="lang"
                  width={25}
                  height={20}
                  //   priority
                />
                <div className="ml-1.5">
                  <p className="font-[600] my-2 text-[18px]  text-neutral-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-justify text-neutral-900 dark:text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-col tablet_l:flex-row gap-9 mt-20 h-fit ">
          <div className="relative w-full tablet_l:w-[65%] h-[410px] rounded-3xl bg-center bg-cover bg-no-repeat bg-[url('/images/help.svg')] ">
            <div className="absolute h-full top-0 w-full mx-auto">
              <p className="text-black w-[280px] ml-auto  mt-8 font-[500]">
                Get ahead with your final year programming projects! Our expert
                team handles the coding while you focus on success.
              </p>
              <div className=" w-fit ml-4 mt-16">
                <h1 className="text-4xl laptop:text-5xl font-bold text-center text-neutral-900 dark:text-white">
                  <span className="text-app-sblue">Help Us </span>to
                </h1>
                <h1 className="text-4xl laptop:text-5xl font-bold text-center text-neutral-900 dark:text-white">
                  {" "}
                  <span className="text-app-porange">Help You</span>
                  <span className="text-app-sblue">.</span>
                </h1>
                <Link
                  href="/"
                  className="border-app-sblue flex gap-2 items-center bg-app-sblue border-2 w-fit mt-6 text-white py-3 px-4 rounded-full"
                >
                  Get Started
                  <BsArrowRight className="text-lg" />
                </Link>
                <p></p>
              </div>
            </div>
          </div>
          <div className="relative w-full tablet_l:w-[30%] h-[410px] bg-center bg-cover bg-no-repeat bg-[url('/images/money.svg')]">
            <div className="absolute h-full w-full flex flex-col justify-between">
              <div className="pt-5 pb-2">
                <Link
                  href="/"
                  className="border-yellow text-yellow text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-4 rounded-full"
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
                </Link>
                <p className="text-yellow text-2xl font-[600] text-center w-fit mx-auto">Mastering brands with precision.</p>
              </div>
              <Link
                  href="/"
                  className="border-yellow text-yellow text-[14px] mx-auto flex gap-2 items-center border-2 mb-6 w-fit py-2 px-4 rounded-full"
                >
                 Get Started
                  <BsArrowRight className="text-lg" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
