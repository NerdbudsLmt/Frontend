import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Package from "./components/Packages";

export default function Pricing() {
  return (
    <>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <Link
              href="/about"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full transition-transform hover:scale-110"
            >
              <>
                <span>Learn About Us</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center lg:text-7xl text-app-sblue">
              Serv<span className="text-[#F9D262]">ices</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center">
              Unlock top-notch software solutions at unbeatable prices.
              Experience affordability without compromising quality.
            </p>
          </div>
        </div>
      </header>

      <Package />

      <div className="blue_gradient tablet_l:py-16 py-7 rounded-[28px] tablet_l:w-[75%] w-[95%] mx-auto">
        <div className="w-[90%] mx-auto">
          <h1 className="text-4xl tablet_l:text-6xl font-bold text-[#FFE393]">
            GeekOps <span className="text-[#3F9BD5]">Support</span>
          </h1>
          <div className="flex flex-col tablet_l:flex-row justify-between items-start mt-3 mb-8">
            <p className="tablet_l:w-[65%] text-justify">
              Contact our dedicated sales support team for a personalized
              consultation and experience the transformative power of our
              tailored software solutions. Don&apos;t miss out!
            </p>
            <Link
              href="/contact"
              className=" border-[#3F9BD5] bg-[#3F9BD5] text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit mt-6 tablet_l:mt-0 py-2 px-6 rounded-full transition-transform hover:scale-110"
            >
              Contact sales
              <Image
                src="/images/phone.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-2 w-[170%] tablet_l:w-[110%]">
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Design and Implementation
              <Image
                src="/images/star.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              For Our Academics
              <Image
                src="/images/book.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Round the clock support
              <Image
                src="/images/clock.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2  items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Simplicity for Everyone
              <Image
                src="/images/profile.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
          </div>
          <div className="flex gap-2 w-[170%] tablet_l:w-[110%] mt-4">
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Security Services
              <Image
                src="/images/security.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Maintenance and Support
              <Image
                src="/images/settings.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Customer Analytics
              <Image
                src="/images/analysis.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
            <Link
              href="/"
              className="border-white text-white text-[12px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
            >
              Free Consultancy
              <Image
                src="/images/smile.svg"
                alt="lang"
                width={10}
                height={10}
                //   priority
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-[10rem]">
        <div>
          <p className="text-4xl tablet_l:text-6xl font-bold text-center text-[#F9D262]">
            Create an account today!
          </p>
          <p className="text-4xl tablet_l:text-6xl mt-2 font-bold text-center text-app-sblue">
            Unlock our features.
          </p>
        </div>
        <div className="text-center">
          <p className="w-[85%] tablet_l:w-[520px] text-sm tablet_l:text-[16px] mx-auto mt-3 text-center">
            Experience the power of tailored software solutions. Create an
            account with us today and unlock a world of efficiency, innovation,
            and growth for your business.
          </p>
        </div>
        <Link
          href="/signup"
          className="border-app-sblue bg-app-sblue text-white text-[14px] mx-auto flex gap-2 items-center border-2 mt-8 mb-0 w-fit py-2 px-5 rounded-full transition-transform hover:scale-110"
        >
          Get Started
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
    </>
  );
}
