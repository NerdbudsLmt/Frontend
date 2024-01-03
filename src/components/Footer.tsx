import Link from "next/link";
import NLForm from "@/components/NLForm";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t-2 border-white/10">
      <div className="mx-auto w-full">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start">
            <div className="ml-5 mt-5">
              <p className=" text-[#F9D262] text-lg font-bold">
                Sign up to our{" "}
                <span className=" text-[#3F9BD5]">newsletter</span>
              </p>
              <p className="text-neutral-300">
                Stay up to date with the latest news, announcements and <br />
                articles.
              </p>
            </div>
            <div>
              <NLForm />
            </div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-y-4 lg:gap-y-4 xl:gap-y-0">
          <div>
            <img src="images/footer logo.png" alt="" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#3F9BD5] text-lg font-bold">Products</p>
            <Link href="/" className="text-neutral-300">
              Features
            </Link>
            <Link href="/" className="text-neutral-300">
              Pricing
            </Link>
            <Link href="/" className="text-white">
              ProjectPal
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
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
            <Link href="/" className="text-neutral-300">
              Media Kit
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#3F9BD5] text-lg font-bold">Resources</p>
            <Link href="/" className="text-neutral-300">
              Contact
            </Link>
            <Link href="/" className="text-neutral-300">
              Terms Of Service
            </Link>
            <Link href="/" className="text-neutral-300">
              Help Center
            </Link>
          </div>
        </div>
        <hr className="h-[1px] w-full bg-white/10 border-none" />
        <div className="flex justify-between items-center py-4">
          <p className="text-white">&copy;2023 Nerdbuds. All rights reserved</p>
          <div className="flex space-x-3">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
