import Link from "next/link";
import Image from "next/image";
import NLForm from "@/components/NLForm";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t-2 border-white/10">
      <div className="mx-auto w-full">
        <div className=" flex flex-col space-y-2 ">
          <div className=" sm:flex flex-col lg:flex flex-col-2 lg:space-x-[28rem] md:flex-row items-start ">
            <div className=" ml-2 mt-5">
              <p className=" w-[30rem] text-[#F9D262] text-lg font-bold">
                Sign up to our{" "}
                <span className="text-[#3F9BD5]">newsletter</span>
              </p>
              <p className="text-neutral-300">
                Stay up to date with the latest news, announcements and <br />{" "}
                articles.
              </p>
            </div>
            <div>
              <NLForm />
            </div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 ml-5 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-y-4 lg:gap-y-4 xl:gap-y-0">
          <div>
            <Image
              className=" sm:w-[8rem] sm:ml-[4rem] sm:mt-[-2rem] mt-[0.3rem] md:sm:ml-[0rem] inline "
              src="/images/footer logo.png"
              alt=""
              width={60}
              height={60}
            />
            <div className=" ml-[-0.5rem] inline-block">
              <h1 className="text-[0.7rem] font-bold text-center text-white lg:text-[1.1rem]">
                You <span className="text-app-sblue">Dream.</span>
              </h1>
              <h1 className="text-[0.7rem] font-bold text-center text-white lg:text-[1.1rem]">
                We <span className="text-[#F9D262]">Build.</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:ml-[3rem]  ">
            <p className="text-[#3F9BD5] text-lg font-bold">Products</p>
            <Link href="/" className="text-neutral-300">
              Pricing
            </Link>
            <Link href="/" className="text-white">
              ProjectPal
            </Link>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className="text-[#3F9BD5] text-lg font-bold">Company</p>
            <Link href="/about" className="text-neutral-300">
              About Us
            </Link>
            <Link href="/" className="text-neutral-300">
              Customers
            </Link>
            <Link href="/" className="text-neutral-300">
              Brand
            </Link>
          </div>
          <div className="flex flex-col space-y-2  ">
            <p className="text-[#3F9BD5] text-lg font-bold">Resources</p>
            <Link href="/" className="text-neutral-300">
              Contact
            </Link>
            <Link href="/" className="text-neutral-300">
              Terms Of Service
            </Link>
            <Link href="/" className="text-neutral-300">
              Private Policy
            </Link>
          </div>
        </div>
        <hr className="h-[1px] w-full bg-white/10 border-none" />
        <div className="flex justify-between items-center py-4 flex-col sm:flex-row">
          {" "}
          {/* Updated container */}
          <div className="flex space-x-3 mb-4 sm:mb-0">
            {" "}
            {/* Updated div for social icons */}
            <Link href="/" className="text-white text-3xl">
              <FaLinkedin />
            </Link>
            <Link href="/" className="text-white text-3xl">
              <AiFillInstagram />
            </Link>
            <Link href="/" className="text-white text-3xl">
              <AiFillFacebook />
            </Link>
            <Link href="/" className="text-white text-3xl">
              <FaTwitterSquare />
            </Link>
            <Link href="/" className="text-white text-[2.1rem]">
              <MdEmail />
            </Link>
          </div>
          <p className="text-white">&copy;2023 Nerdbuds. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
