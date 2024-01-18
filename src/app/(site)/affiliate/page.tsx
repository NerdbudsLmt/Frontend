"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { boolean } from "yup";
import Image from "next/image";

export default function ProjectPalAffiliate() {
  const [isStudent, setIsStudent] = useState<null | boolean>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (value: boolean) => {
    setIsStudent(value);
    setUniversity("");
  };

  const handleProceedClick = () => {
    if (isFormValid()) {
      setIsModalOpen(true);
    }
  };
  const isFormValid = () => {
    if (!username || !email) {
      return false;
    }

    if (isStudent === null) {
      return false;
    }

    if (isStudent && !university) {
      return false;
    }

    return true;
  };

  return (
    <section>
      <div className='flex flex-col items-center mt-8 space-y-5 mb-10'>
        <div>
          <Link
            href='#propalaffiliate'
            className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full transition-transform hover:scale-110'
          >
            <>
              <span>Sign up</span>
              <BsArrowDown className='text-lg' />
            </>
          </Link>
        </div>
        <div className='text-4xl font-bold text-center lg:text-7xl text-app-sblue'>
          ProjectPal <span className=' text-[#F9D262]'>Affiliate</span>
        </div>
        <p className=' w-[90%] sm:w-[75%] text-1xl lg:text-2xl text-center'>
          Unlock limitless earnings with Nerdbuds&apos; Affiliate Program for
          Project Pal! 🌟 Join our dynamic community of influencers and
          trendsetters who are turning their passion into profit. By referring
          friends to Project Pal, you&apos;re not just sharing a fantastic
          product – you&apos;re building your own revenue stream.
        </p>{' '}
        <p className=' w-[90%] sm:w-[75%] text-1xl lg:text-2xl text-center'>
          Earn generous commissions for every successful referral and watch your
          income soar. It&apos;s simple: the more you share, the more you earn.
          Join Nerdbuds&apos; Affiliate Program now and embark on a journey
          where your network becomes your net worth. Seize this opportunity to
          make money while spreading the word about the innovative Project Pal!
          💸🚀{' '}
        </p>
      </div>

      <div className='mx-auto max-w-3xl p-4 rounded-lg' id='propalaffiliate'>
        <h2 className='text-3xl font-bold text-center lg:text-7xl mb-3 text-app-sblue'>
          Start <span className=' text-[#F9D262]'>earning today!</span>
        </h2>
        <p className='ml-[1rem] sm:ml[5rem] mb-8'>
          The <span className=' text-[#E74242]'>*</span> indicates that field
          must be filled
        </p>
        <h5 className='text-lg font-semibold mb-2'>
          Username<span className=' text-[#E74242]'>*</span>
        </h5>
        <input
          className='w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-black'
          type='email'
          name=''
          placeholder='jonathandoe'
          id=''
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5 className='text-lg font-semibold mb-2'>
          Email<span className=' text-[#E74242]'>*</span>
        </h5>
        <input
          className='w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-black'
          type='email'
          name=''
          placeholder='johndoe@gmail.com'
          id=''
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <h5 className='text-lg font-semibold mb-2'>
            Are you a student?<span className=' text-[#E74242]'>*</span>
          </h5>

          {isStudent === null && (
            <>
              <button
                className='w-[47%] sm:w-[49%] bg-[#205584] text-white p-4 mb-4 rounded-md'
                type='button'
                onClick={() => handleButtonClick(true)}
              >
                Yes
              </button>

              <button
                className='w-[47%] sm:w-[49%] ml-3 bg-[#F9D262] text-black p-4 mb-4 rounded-md'
                type='button'
                onClick={() => handleButtonClick(false)}
              >
                No
              </button>
            </>
          )}

          {isStudent === true && (
            <>
              <button
                className='w-[100%] bg-[#205584] text-white p-4 mb-4 rounded-md'
                type='button'
                onClick={() => handleButtonClick(true)}
              >
                Yes
              </button>

              <h5 className='text-lg font-semibold mb-2'>
                What is the name of your University
                <span className=' text-[#E74242]'>*</span>
              </h5>
              <input
                className='w-[100%] sm:w-[100%] bg-[#F5F4F4] p-4 mb-4 rounded-md text-black'
                type='email'
                name=''
                placeholder='Landmark University'
                id=''
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </>
          )}

          {isStudent === false && (
            <button
              className='w-[100%] bg-[#F9D262] text-black p-4 mb-4 rounded-md'
              type='button'
              onClick={() => handleButtonClick(false)}
            >
              No
            </button>
          )}
        </div>
        <Link
          href=''
          className={`flex items-center gap-3 px-8 py-2 mb-20 mt-5 w-fit bg-[#3F9BD5] text-[18px] laptop:text-[16px] text-white rounded-3xl font-bold transition-transform hover:scale-110 mx-auto ${
            isFormValid() ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={(e) => {
            if (isFormValid()) {
              handleProceedClick()
            } else {
              e.preventDefault()
            }
          }}
        >
          Proceed
        </Link>
      </div>
      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
          <div className='bg-white p-8 rounded-md flex flex-col sm:flex-row'>
            <div className='mb-4 sm:mr-8'>
              <Image
                src='/svgs/CheckCircle.svg'
                alt='hand'
                width={180}
                height={180}
                priority
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold mb-4 text-black'>
                Account Created
              </h2>
              <p className='w-[17rem] sm:w-[35rem] text-2xl mb-4 text-[#7D8484]'>
                Congratulations! Your affiliate profile has been created. We’re
                glad to have you onboard
              </p>
              {/* <button
                className=" w-full mt-4 px-4 py-2 border-2 border-[#205584] bg-white text-[#205584] rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                View Leaderboard
              </button> */}
              <Link href='/leaderboard'>
                <p className='w-full mt-4 px-4 py-2 border-2 border-[#205584] bg-white text-[#205584] rounded-md flex justify-center items-center'>
                  View Leaderboard
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
