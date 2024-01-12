import Image from "next/image";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Support() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div>
      <span className="flex items-center gap-2">
        <h2 className="text-[#676767] md:text-[30px] text-[20px] font-[600]">
          support
        </h2>
        <span className="bg-[#363939] p-[6px] w-1 h-1 rounded-full"></span>
        <h3 className="font-[600] text-[#363939] md:text-[30px] text-[20px]">
          Schedule a meeting
        </h3>
      </span>

      <div className="mt-8 bg-[#F5F4F4] md:w-[90%] w-full h-[435px] p-4 rounded-[8px] space-y-2">
        <h2 className="text-[20px] text-[#363939] font-[600]">
          What is the meeting about?
        </h2>
        <textarea
          className="bg-white mt-4 md:w-[466px] w-full h-[170px] rounded-[8px] p-5 border-[#DBD9D9] border-solid shadow-md outline-none"
          defaultValue={""}
        ></textarea>

        <div className="space-y-4 md:w-[438px] w-full mt-5">
          <button className="flex items-center gap-2 text-white h-[50px]  bg-[#3F9BD5] rounded-[12px] md:px-[24px] px-[20px] md:py-[12px] py-[9px] text-[15px]">
            Schedule meeting with Calendy
            <LuClock3 />
          </button>
          <h2 className="text-[#676767] md:text-[20px] text-[15px]">
            Note: Always come back to your account and click on{" "}
            <span className="text-[#205584]">“Confirm”</span> to verify your
            meeting
          </h2>
          <button className="text-white bg-[#205584] py-[8px] px-[24px] rounded-[12px] h-[42px] font-[600] w-[80px]]">
            Confirm
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-[20px]">You can contact us through</h2>

        <div
          className="flex gap-5
         mt-3"
        >
          <a href="">
            <Image
              src="/images/whatsapp.png"
              alt="icon"
              width={35}
              height={35}
            />
          </a>
          <a href="">
            {" "}
            <Image
              src="/images/instagram.png"
              alt="icon"
              width={35}
              height={35}
            />
          </a>
          <a href="">
            <Image src="/images/x.png" alt="icon" width={35} height={35} />
          </a>
          <a href="">
            <Image
              src="/images/facebook.png"
              alt="icon"
              width={35}
              height={35}
            />
          </a>
          <a href="">
            <Image src="/images/tiktok.png" alt="icon" width={35} height={35} />
          </a>
          <a href="">
            <Image
              src="/images/telegram.png"
              alt="icon"
              width={35}
              height={35}
            />
          </a>
          <a href="">
            <Image
              src="/images/linkedin.png"
              alt="icon"
              width={35}
              height={35}
            />
          </a>
          <a href="">
            <Image src="/images/gmail.png" alt="icon" width={35} height={35} />
          </a>
        </div>
      </div>
    </div>
  );
}
