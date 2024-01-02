import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowDown, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFileText,
  AiFillLinkedin,
} from 'react-icons/ai'
import { BsFacebook, BsTelephone } from 'react-icons/bs'

function ProjectPal() {
  return (
    <>
      <header className='pt-10'>
        <div className='flex flex-col items-center space-y-5 mb-16'>
          <div>
            <Link
              href='/about'
              className='flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full'
            >
              <>
                <span>Get Started</span>
                <BsArrowDown className='text-lg' />
              </>
            </Link>
          </div>
          <div>
            <h1 className='text-8xl font-bold text-center text-app-sblue'>
              Project <span className='text-app-porange'>Pal</span>
            </h1>
          </div>
          <div className='text-center'>
            <p className='w-[85%] tablet_l:w-[520px] text-[18px] mx-auto text-center'>
              A product that solves all the worries associated with final year
              projects.
            </p>
          </div>
        </div>
      </header>
      {/* NEW UPDATES */}
      {/* <div className='flex justify-between mx-20'>
        <Image
          src='/images/Group 34.svg'
          alt='hand'
          width={106}
          height={106}
          priority
        />
        <Image
          src='/images/Vector 7.png'
          alt='hand'
          width={318}
          height={83}
          priority
        />
        <Image
          src='/images/Group 35.svg'
          alt='hand'
          width={106}
          height={106}
          priority
        />
        <Image
          src='/images/Vector 7.png'
          alt='hand'
          width={318}
          height={83}
          priority
        />
        <Image
          src='/images/Subtract.svg'
          alt='hand'
          width={36}
          height={36}
          priority
        />
      </div> */}
      <main className='flex justify-between mb-48'>
        <div className='flex flex-col items-center'>
          <Image
            src='/images/Group 34.svg'
            alt='hand'
            width={106}
            height={106}
            priority
          />
          <div className='text-center'>
            <h1 className='text-2xl my-2'>Book a project</h1>
            <p className='text-base'>
              Create a project by filling the necessary information and giving
              our programmers exact details through scheduled meetings.
            </p>
          </div>
        </div>
        <Image
          src='/images/Vector 7.png'
          alt='hand'
          width={100}
          height={83}
          priority
        />
        <div className='flex flex-col items-center'>
          <Image
            src='/images/Group 35.svg'
            alt='hand'
            width={106}
            height={106}
            priority
          />
          <div className='text-center'>
            <h1 className='text-2xl my-2'>Process</h1>
            <p>
              Our capable programmers work on your project, update you as the
              process goes on and give you relevant information needed.
            </p>
          </div>
        </div>
        <Image
          src='/images/Vector 7.png'
          alt='hand'
          width={100}
          height={3}
          priority
        />
        <div className='flex flex-col items-center'>
          <Image
            src='/images/Subtract.svg'
            alt='hand'
            width={36}
            height={36}
            priority
          />
          <div className='text-center'>
            <h1 className='text-2xl my-2'>Delivery</h1>
            <p>
              The agreed date will be met, your project will be available and
              ready to be delivered on any platform of your choice.
            </p>
          </div>
        </div>
      </main>
      <section className=' bg-[#D9E5EF] pt-10 pl-10 pr-10 pb-20'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-app-sblue text-5xl font-semibold mb-3'>
              The Ultimate Final Year Student Package
            </h1>
            <p className='text-lg  text-[#363939]'>
              The last year of school can be very demanding with students having
              to get everything right from courses to projects. Not all are up
              to this tasks and that’s where we come in. <br />
              <span className=' text-customBlue'>Let Us Help!</span>
            </p>
            <span className='flex gap-4'>
              <Link
                href='/contact'
                className='flex gap-3 px-5 py-2 mt-3 w-fit bg-[#FFFFFF] text-[18px] laptop:text[18px] text-customBlue rounded-3xl font-bold'
              >
                Book a project
              </Link>
              <Link
                href='/contact'
                className='flex gap-3 px-5 py-2 mt-3 w-fit bg-[#CBD3DE] text-[18px] laptop:text[18px] text-customBlue rounded-3xl font-bold'
              >
                Learn more
              </Link>
            </span>
          </div>
          <Image
            src='/images/Rectangle 23785.png'
            alt='graduation'
            width={568}
            height={300}
            priority
          />
        </div>
        <div className='bg-[#E6EFF6] p-3 '>
          <span className='flex gap-1 '>
            <Image
              src='/images/MapPinLine-d.svg'
              alt='graduation'
              width={20}
              height={22}
              priority
            />
            <h4 className='text-customBlue text-6 font-semibold'>
              Project Pal University Availability
            </h4>
          </span>
          <div className='flex justify-between '>
            <div className='flex justify-between gap-10'>
              <span>
                <h2 className='text-customBlue text-lg font-medium '>
                  Landmark University
                </h2>
                <p className='text-base text-[#363939]'>Kwara</p>
              </span>
              <p className='w-0.5 h-12 bg-[#486284]'></p>
            </div>
            <div className='flex justify-between gap-10'>
              <span>
                <h2 className='text-customBlue text-lg font-medium '>
                  Covenant University
                </h2>
                <p className='text-base text-[#363939]'>Ogun</p>
              </span>
              <p className='w-0.5 h-12 bg-[#486284]'></p>
            </div>
            <div className='flex justify-between gap-10'>
              <span>
                <h2 className='text-customBlue text-lg font-medium '>
                  Babcock University
                </h2>
                <p className='text-base text-[#363939]'>Lagos</p>
              </span>
              <p className='w-0.5 h-12 bg-[#486284]'></p>
            </div>
            <div className='flex justify-between gap-10'>
              <span>
                <h2 className='text-customBlue text-lg font-medium '>
                  Leeds University
                </h2>
                <p className='text-base text-[#363939]'>Ibadan</p>
              </span>
              <p className='w-0.5 h-12 bg-[#486284]'></p>
            </div>
            <Link
              href='/contact'
              className='flex gap-3 px-5 py-2 mt-3 w-fit bg-[#CBD3DE] text-[18px] laptop:text[16px] text-customBlue rounded-3xl font-bold'
            >
              and so much more
            </Link>
          </div>
        </div>
      </section>
      <div className='mt-20'>
        <div className='flex justify-between mx-10px gap-50 mb-20px' >
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/images/group4.png'
              alt='graduation'
              width={282}
              height={297}
              priority
            />
            <Image
              src='/images/group1.png'
              alt='graduation'
              width={282}
              height={297}
              priority
            />
            <Image
              src='/images/group3.png'
              alt='graduation'
              width={282}
              height={297}
              priority
            />
            <Image
              src='/images/group2.png'
              alt='graduation'
              width={282}
              height={297}
              priority
            />
          </div>
          {/* <h1 className='text-7xl font-bold text-center text-app-porange w-1/2 flex items-center'>
            Why Should You Use
            <span className='text-white'> Project Pal</span>
          </h1> */}
          <div className='flex items-center justify-center'>
            <h1 className='text-7xl font-bold text-app-porange '>
              Why Should You Use
              <span className='text-white'> Project Pal</span>
            </h1>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className=' font-bold text-5xl text-center text-app-porange w-[35%]'>
            Hear from fellow students
          </h1>
          <p className='text-xl w-1/3 mt-10 mb-20'>
            Before launching we released Project Pal to few students to tests
            it’s efficiency. As expected they went above and beyond in their
            reviews due to how well they did in their final year projects. Here
            are some of the reviews.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h1>Create a project</h1>
          <span>
            <h5>Briefly describe your project</h5>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </article>
            <h5>What services do you need</h5>
            <div></div>
            <Link
              href='/contact'
              className='flex gap-3 px-5 py-2 mt-3 w-fit bg-[#FFFFFF] text-[14px] laptop:text[16px] text-app-pblue rounded-3xl font-bold'
            >
              Book a project
            </Link>
            <h4>
              For assistance with booking a meeting reach out to
              <span className='text-app-porange'> Customer Support.</span>
            </h4>
          </span>
        </div>
      </div>
    </>
  )
}

export default ProjectPal
