"use client";

import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { log } from "console";

export default function About() {
  return (
    <>
      <header className="pt-10">
        <div className="flex flex-col items-center space-y-5 mb-16">
          <div>
            <a
              href="/contact"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full transition-transform hover:scale-110"
            >
              <>
                <span>Contact Us</span>
                <BsArrowRight className="text-lg" />
              </>
            </a>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center lg:text-7xl text-app-sblue">
              About <span className="text-[#F9D262]">Us</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center">
              Get ready to meet the brilliant minds behind our products and
              services, driving innovation and exceeding expectations.
            </p>
          </div>
        </div>
      </header>

      <div className="my-16 flex tablet_l:flex-row flex-col gap-6 tablet_l:gap-10 justify-between  laptop:w-[770px] laptop_l:w-[90%] mx-auto ">
        <p className="text-3xl font-bold  text-[#F9D262]">
          We are a team of creatives that bring your{" "}
          <span className="text-app-sblue"> ideas </span>to
          <span className="text-app-sblue"> reality.</span>
        </p>
        <p>
          Unlock your vision with our creative team, turning your ideas into
          reality and driving sales success.
        </p>
      </div>
      <Image
        src="/images/hand.svg"
        alt="hand"
        width={1400}
        height={1200}
        priority
      />
      <div className="mt-16  flex  tablet_l:flex-row flex-col gap-6 tablet_l:gap-10 justify-between w-[95%] laptop:w-[90%] mx-auto ">
        <p className="text-3xl w-full tablet_l:w-[45%] font-bold  text-app-sblue">
          Innovate,
          <span className="text-[#F9D262]"> Collaborate, Achieve, </span>
          Together,
          <span className="text-white"> unstoppable.</span>
        </p>
        <p className="w-full tablet_l:w-[45%] text-sm tablet_l:text-[15px]">
          Unleash the power of collaboration with our dynamic software agency!
          <br />
          <br />
          Together, we craft innovative solutions tailored to your needs. Our
          talented team excels in web and mobile app development, UI/UX design,
          and cutting-edge technologies. Experience seamless integration,
          enhanced efficiency, and remarkable user experiences that elevate your
          business to new heights
        </p>
      </div>
      <div className="mt-12 pb-20 flex items-start tablet_l:flex-row flex-col gap-6 tablet_l:gap-10 justify-between w-[95%] laptop:w-[90%] mx-auto border-b-2  ">
        <div className="flex items-center gap-2 w-full tablet_l:w-[45%] ">
          <Image
            src="/images/ceo.svg"
            alt="hand"
            width={50}
            height={50}
            priority
          />
          <div className="h-fit">
            <p className=" text-app-sblue font-bold text-[1.15rem]">
              Sean Stevens
            </p>
            <p className="font-semibold">CEO and Founder</p>
          </div>
        </div>
        <p className="w-full tablet_l:w-[45%] text-[#F9D262] font-semibold leading-9 text-[1.75rem]">
          <span className="text-app-sblue">“</span>Our goal is to turn dreams to
          ideas and ideas to companies through innovative software solutions, we
          plan to bring your vision to life, one line of code at a time.{" "}
          <span className="text-app-sblue">”</span>
        </p>
      </div>

      <div className="flex justify-around gap-x-4  gap-y-10 my-20 flex-wrap w-[95%] laptop:w-[90%] mx-auto ">
        <div className="flex gap-2 w-[250px]">
          <p className="text-app-sblue font-[500] text-4xl">100k+</p>
          <p className="text-sm">projected users at the end of 2023</p>
        </div>
        <div className="flex gap-2 w-[250px]">
          <p className="text-[#fff] font-[500] text-4xl">2k+</p>
          <p className="text-sm">companies and startups reached</p>
        </div>
        <div className="flex gap-2 w-[250px]">
          <p className="text-[#F9D262] font-[500] text-4xl">18+</p>
          <p className="text-sm">registered students across Nigeria.</p>
        </div>
      </div>

      {/* <div id="team" className="mt-20 mb-10 pb-20 border-b-2 border-[#fff]">
        <p className="mb-8 text-center border-b-2 mx-auto w-fit border-[#fff] text-3xl font-bold  text-app-sblue">
          Meet
          <span className='text-[#fff]'> the</span>
          <span className='text-app-porange'> Nerds </span>
        </p>
        <div className='flex justify-around mx-auto gap-x-8 flex-wrap'>
          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/sean.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className='relative '>
              <p className=' text-app-sblue font-bold text-[1.15rem]'>
                Sean Chinedu
              </p>
              <p className="">Founder & CEO</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/benard.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className="relative ">
              <p className=" text-app-sblue font-bold text-[1.15rem]">
                Joshua Chidi-Bernard
              </p>
              <p className="">Product Manager & UI/UX Designer</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/muhammod.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className="relative ">
              <p className=" text-app-sblue font-bold text-[1.15rem]">
                Muhammoud Ajibade
              </p>
              <p className="">Front End Developer</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/enoch.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className="relative ">
              <p className=" text-app-sblue font-bold text-[1.15rem]">
                Enoch Olasinde
              </p>
              <p className="">Full Stack Developer</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/john.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className="relative ">
              <p className=" text-app-sblue font-bold text-[1.15rem]">
                John Alafiatayo
              </p>
              <p className="">Back End Developer</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className='mt-9 w-[30%]'>
            <Image
              src='/images/samuel.svg'
              className='h-[300px] w-[250px]'
              alt='hand'
              width={400}
              height={200}
              priority
            />
            <div className="relative ">
              <p className=" text-app-sblue font-bold text-[1.15rem]">
                Olutekunbi Samuel
              </p>
              <p className="">Head of Marketing</p>
              <div className="flex gap-3 mt-3">
                <AiFillInstagram className="text-[#fff] w-[20px] h-[20px]" />
                <BsFacebook className="text-[#fff] w-[20px] h-[20px]" />
                <AiOutlineTwitter className="text-[#fff] w-[20px] h-[20px]" />
                <MdEmail className="text-[#fff] w-[20px] h-[20px]" />
                <AiFillLinkedin className="text-[#fff] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="my-16 flex tablet_l:flex-row flex-col gap-6 tablet_l:gap-10 justify-between  laptop:w-[770px] laptop_l:w-[90%] mx-auto ">
        <p className="w-full tablet_l:w-[50%] text-3xl font-bold  text-app-sblue">
          Join
          <span className="text-[#fff]"> our</span>
          <span className="text-[#F9D262]"> team </span>
        </p>
        <p className="w-full tablet_l:w-[50%] text-1xl">
          we believe it takes great people to make great product. That is why we
          hire not only professional fits but, people who embody our company
          values.
          <Link
            href="/jointeam"
            className=" underline flex items-center gap-1 px-4 sm:px-4 py-2 w-fit ml-[-1rem] mt-4 text-[14px] laptop:text-[16px] transition-transform hover:scale-110"
          >
            See open positions
            <BsArrowRight className="text-md" />
          </Link>
        </p>
      </div>

      <div className="py-6 blue_gradient px-6 flex flex-col laptop:flex-row-reverse laptop:gap-4 gap-5 justify-center rounded-3xl my-16 h-fit">
        <Image
          className="grow  mx-auto"
          src="/images/aboutq.svg"
          alt="web"
          width={156}
          height={165}
        />
        <div className=" grow w-[90%] ml-auto laptop:w-[46%] my-auto ">
          <div className="w-full tablet_l:w-[85%]">
            <p className="text-4xl font-bold leading[24px] laptop_l:leading-[48px]">
              Have a question? Our team is happy to assist you.
            </p>
            <p className="mt-4 mb-5 pb-5 text-[14px] laptop:text[16px] border-b-2  ">
              Ask about Nerdbuds services, pricing, implementation or anything
              else. Our highly trained reps are standing by, ready to help.
            </p>
            <div className="flex items-center">
              <Link
                href="/contact"
                className="flex items-center gap-1 px-4 sm:px-4 py-2 w-fit bg-app-sblue text-[14px] laptop:text-[16px] rounded-3xl transition-transform hover:scale-110"
              >
                Contact us
                <BsArrowRight className="text-md" />
              </Link>
              <a href="#" className="ml-4 hidden sm:inline">
                or call <span className="underline">+234 907 442 5813</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
