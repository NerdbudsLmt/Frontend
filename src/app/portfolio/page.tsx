"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { Web } from "@/components/Pricing/Web";
import { Mobile } from "@/components/Pricing/Mobile";

export default function Home() {
  const [isWeb, setIsWeb] = useState<boolean>(true);
  return (
    <section>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full"
            >
              <>
                <span>Offers & Pricing</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-center text-app-sblue">
              Our <span className="text-app-porange">Build</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center">
              {`"Experience innovation at its finest with us. We craft exceptional software solutions that redefine excellence and elevate your business."`}
            </p>
          </div>
        </div>
      </header>

      <section className="mb-8 w-[95%] max-w-[1100px] mx-auto">
        <div className="flex gap-5 w-fit mx-auto mb-16">
          <button
          className={isWeb ? 'flex gap-2 items-center transition bg-app-sblue border-2 border-app-sblue py-2 px-5 rounded-full'
        : 'flex gap-2 items-center  border-2 border-app-sblue transition py-2 px-5 rounded-full'
        }
            onClick={() => setIsWeb(true)}
          >
            Web
            <Image src="/images/web.svg" alt="web" width={15} height={15} />
          </button>
          <button
            onClick={() => setIsWeb(false)}
            className={!isWeb ? 'flex gap-2 items-center transition bg-app-sblue border-2 border-app-sblue py-2 px-5 rounded-full'
        : 'flex gap-2 items-center  border-2 border-app-sblue transition py-2 px-5 rounded-full'
        }
          >
            Mobile
            <BiMobileAlt />
          </button>
        </div>
        {isWeb ? <Web /> : <Mobile />}
      </section>

      <div>
        <h1 className="text-4xl laptop:text-6xl font-bold text-center text-app-sblue">
          Our <span className="text-app-porange">Partners</span>
        </h1>

        <div className="my-10 flex gap-3 flex-wrap justify-around mx-auto ">
          <Image
            className=""
            src="/images/sec.svg"
            alt="web"
            width={120}
            height={120}
          />
          <Image
            className=""
            src="/images/web3ladies.svg"
            alt="web"
            width={120}
            height={120}
          />
          <Image
            className=""
            src="/images/cert.svg"
            alt="web"
            width={120}
            height={120}
          />
        </div>

        <div
          className="py-6 px-6 flex flex-col laptop:flex-row laptop:gap-4 gap-5 justify-center rounded-3xl my-16 h-fit"
          style={{
            background:
              "linear-gradient(180deg, #151515 57.81%, rgba(21, 21, 21, 0) 100%)",
          }}
        >
          <Image
            className="grow  mx-auto"
            src="/images/man.svg"
            alt="web"
            width={156}
            height={165}
          />
          <div className=" grow w-[90%] ml-auto laptop:w-[46%] my-auto ">
            <div>
              <p className="text-[20px] tablet_l:text-[24px] laptop_L:text-[30px] font-bold leading[24px] laptop_l:leading-[48px]">
                Get in touch with us to learn more.
              </p>
              <p className="mt-4 mb-5 text-[14px] laptop:text[16px] ">
                Unlock the full potential of your digital presence. Reach out to
                us today and elevate your business with our software expertise.
              </p>
              <Link
                href="/"
                // style={{
                //   background: "#",
                // }}
                className="flex gap-3 px-5 py-2 mt-3 w-fit bg-[#151719] text-[14px] laptop:text[16px]  rounded-3xl"
              >
                Contact us
                <BsArrowRight className="text-md" />
              </Link>
            </div>
          </div>
        </div>

        {/* <div
          key={img}
          className="py-6 px-6 flex flex-col-reverse laptop:flex-row laptop:gap-[1%] gap-5 justify-center rounded-3xl mt-8 h-fit"
          style={{
            background: bg,
          }}
        >
          <Image
            className="grow w-[90%] mx-auto laptop:w-[47%]"
            src={img}
            alt="web"
            width={786}
            height={545}
          />
          <div className=" grow w-[90%] mx-auto laptop:w-[47%] my-auto ">
            <div>
              <p className="text-[20px] tablet_l:text-[24px] laptop_L:text-[30px] font-bold leading[24px] laptop_l:leading-[48px]">
                {title}
              </p>
              <p className="mt-4 mb-5 text-[14px] laptop:text[16px] ">
                {content}
              </p>
              <Link
                href="/"
                style={{
                  background: btn,
                }}
                className="px-5 py-2 text-[14px] laptop:text[16px]  rounded-3xl"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
