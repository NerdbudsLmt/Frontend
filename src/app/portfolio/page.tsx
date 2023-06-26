import Link from "next/link";
import Image from "next/image";
import { Tools } from "@/components/Home/Tools";
import { Offer } from "@/components/Home/Offer";
import { Choose } from "@/components/Home/Choose";
import { BsArrowRight } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import web from "../../../public/images/web.svg";
import mobile from "../../../public/images/mobile.svg";
import { MdRocketLaunch } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import { Work } from "@/components/Pricing/Work";

export default function Home() {
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
          <button className=" flex gap-2 items-center bg-app-sblue border-2 border-app-sblue py-2 px-5 rounded-full">
            Web
            <Image src="/images/web.svg" alt="web" width={15} height={15} />
          </button>
          <button className=" flex gap-2 items-center  border-2 border-app-sblue  py-2 px-5 rounded-full">
            Mobile
            <BiMobileAlt />
          </button>
        </div>
        <div className="w-full my-20 ">
          <Work
            title="Focused, Active Management of High-Growth Digital Asset"
            bg="linear-gradient(180deg, #16181D 3.12%, #4C515F 56.25%)"
            content="Trade Bitcoin with confidence. Our secure software company ensures a safe and reliable platform for seamless Bitcoin transactions."
            img="/images/bit.svg"
            btn="#1A1C22"
            name="Crypto & Mining"
          />
          <Work
            title="Discover your perfect read with secure AI"
            bg="linear-gradient(180deg, #C29D4C 0%, #463E2C 61.46%)"
            content="Unlock the world of knowledge with our secure software. Discover your next great read with our powerful AI book recommendation engine."
            img="/images/seAi.svg"
            btn="#B89649"
            name="Artificial Intelligence"
          />

          <Work
            title="Simplify HR tasks with our secure app"
            bg="linear-gradient(180deg, #8D8BFA 0%, #373650 61.46%)"
            content="Revolutionize your HR management with our secure software. Streamline tasks, automate processes, and maximize efficiency with HRIS."
            btn="#807EDF"
            img="/images/hr.svg"
            name="Human Resources"
          />

          <Work
            title="Simplify HR tasks with our secure app"
            bg="linear-gradient(180deg, #6A2A86 0%, #271A2D 61.46%)"
            content="Transforming payment security. Our website empowers businesses and individuals to manage payments securely. Experience peace of mind today!"
            btn="#5D2775"
            img="/images/payRec.svg"
            name="Commerce & Payments"
          />

          <Work
            title="Simplify healthcare management with MSC"
            bg="linear-gradient(180deg, #4CA1C8 0%, #0F2D3C 71.87%)"
            content="Revolutionize your medical management with our cutting-edge website. Simplify and streamline your healthcare journey effortlessly, all in one place."
            btn="#4799BE"
            img="/images/msc.svg"
            name="Healthcare"
          />
        </div>
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
          className="py-6 px-6 flex flex-col laptop:flex-row laptop:gap-[1%] gap-5 justify-center rounded-3xl mt-8 h-fit"
          style={{
            background:
              "linear-gradient(180deg, #151515 57.81%, rgba(21, 21, 21, 0) 100%)",
          }}
        >
          <Image
            className="grow w-[90%] mx-auto laptop:w-[47%]"
            src="/images/man.svg"
            alt="web"
            width={786}
            height={545}
          />
          <div className=" grow w-[90%] mx-auto laptop:w-[47%] my-auto ">
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
