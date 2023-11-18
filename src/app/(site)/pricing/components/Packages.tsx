import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Pakage = () => {
  return (
    <div className="flex justify-around gap-y-12 gap-x-3 flex-wrap my-16">
      <div className="relative blue_gradient w-[85%] tablet_l:max-w-[350px] rounded-3xl">
        <div className="pt-3 pb-2">
          <div
            className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
          >
            Design and Implementation
            <Image
              src="/images/star.svg"
              alt="lang"
              width={15}
              height={15}
              //   priority
            />
          </div>
          <p className="text-white text-3xl font-[600] text-center w-fit mt-2 mx-auto">
            For Companies
          </p>
          <p className="text-white mt-4 text-center w-fit mx-auto pb-12 mb-12 border-b-2">
            Some features on our company package
          </p>
          <ul className="flex flex-col gap-5 w-[85%] text-[15px] mx-auto">
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              1 Year Warranty Digital Marketing Service
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              Data Analytics
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              Maintenance and Support
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              6 months free consultancy
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              IT Security Services
            </li>
          </ul>
        </div>
        <Link
          href="/signup"
          className="border-[#265D80] bg-[#265D80] text-white text-[14px] mx-auto flex gap-2 items-center border-2 mt-8 mb-0 w-fit py-2 px-3 rounded-full"
        >
          Get Started
          <BsArrowRight className="text-lg" />
        </Link>
        <Link href='/contact' 
          className="border-b-2 text-white text-[14px] mx-auto flex mt-2 mb-4 w-fit"
        
        // className="text-white  mt-2 border-b-2 mb-9 text-center w-fit mx-auto"
        >
          or contact sales
        </Link>
      </div>
      <div className="relative black_graident w-[85%] tablet_l:max-w-[350px] rounded-3xl">
        <div className="pt-3 pb-2">
          <div
            className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
          >
            For Our Academics
            <Image
              src="/images/book.svg"
              alt="lang"
              width={15}
              height={15}
              //   priority
            />
          </div>
          <p className="text-white text-3xl font-[600] text-center w-fit mt-2 mx-auto">
          Student Galore
          </p>
          <p className="text-white mt-4 text-center w-fit mx-auto pb-12 mb-12 border-b-2">
          10% discount with a free e-book on coding
          </p>
          <ul className="flex flex-col gap-5 w-[85%] text-[15px] mx-auto">
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              1 Year Warranty Digital Marketing Service
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
             1 on 1 access to our developers
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              Tailor made project
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
             24-Hour Support
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              Early delivery of project 
            </li>
          </ul>
        </div>
        <Link
          href="/signup"
          className="border-[#ffffff] bg-[#ffffff] text-[#151515] text-[14px] mx-auto flex gap-2 items-center border-2 mt-8 mb-0 w-fit py-2 px-3 rounded-full"
        >
          Get Started with Student Galore 
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
      <div className="relative yellow_gradient w-[85%] tablet_l:max-w-[350px] rounded-3xl pb-9">
        <div className="pt-3 pb-2">
          <div
            className="border-white text-white text-[14px] mx-auto flex gap-2 items-center border-2 w-fit py-1 px-5 rounded-full"
          >
            Simplicity for Everyone
            <Image
              src="/images/user.svg"
              alt="lang"
              width={15}
              height={15}
              //   priority
            />
          </div>
          <p className="text-white text-3xl font-[600] text-center w-fit mt-2 mx-auto">
          For Individuals
          </p>
          <p className="text-white mt-4 text-center w-fit mx-auto pb-12 mb-12 border-b-2">
          Features on our individual package
          </p>
          <ul className="flex flex-col gap-5 w-[85%] text-[15px] mx-auto">
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              6 months free maintenance and support
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
              Tailor made project
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
             Custom software and designs
            </li>
            <li className="flex gap-2">
              <Image
                src="/images/check.svg"
                alt="lang"
                width={20}
                height={20}
                //   priority
              />
             Personal customer care rep.
            </li>
          </ul>
        </div>
        <Link
          href="/signup"
          className="border-[#B09334] bg-[#B09334] text-[#fff] text-[14px] mx-auto flex gap-2 items-center border-2 mt-8 mb-0 w-fit py-2 px-3 rounded-full"
        >
          Get Started
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Pakage;
