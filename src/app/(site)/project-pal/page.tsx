"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
// import { BiUser } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import {
//   AiFillInstagram,
//   AiOutlineTwitter,
//   AiOutlineFileText,
//   AiFillLinkedin,
// } from "react-icons/ai";
// import { BsFacebook, BsTelephone } from "react-icons/bs";

function ProjectPal() {
  interface ProjectData {
    description: string;
    services: string[];
  }
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [projectData, setProjectData] = useState<ProjectData>({
    description: "",
    services: [],
  });

  const handleServices = (service: string) => {
    const updatedServices = projectData.services.includes(service)
      ? projectData.services.filter((s) => s !== service)
      : [...projectData.services, service];

    setProjectData({
      ...projectData,
      services: updatedServices,
    });
  };

  const handleBookProject = async () => {
    try {
      const url = `${apiUrl}/projects`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Project booked successfully:", data);

        setProjectData({
          description: "",
          services: [],
        });
      } else {
        console.error("Failed to book the project");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <header className='pt-10'>
        <div className='flex flex-col items-center space-y-5 mb-16'>
          <div>
            <Link
              href='/login'
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
              Project <span className='text-[#F9D262]'>Pal</span>
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

      <main className='flex flex-col lg:flex-row mb-20'>
        <div className='flex flex-col items-center mb-8 lg:mb-0 max-w-[80%] mx-auto'>
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
        <div className='hidden lg:block'>
          <Image
            src='/images/Vector 6.svg'
            alt='hand'
            width={800}
            height={100}
            priority
          />
        </div>
        <div className='flex flex-col items-center mb-8 lg:mb-0 max-w-[80%] mx-auto'>
          <div className='p-25 bg-[#344C5B] rounded-[25px]'>
            <Image
              src='/images/Group 35.svg'
              alt='hand'
              width={106}
              height={106}
              priority
            />
          </div>
          <div className='text-center'>
            <h1 className='text-2xl my-2'>Process</h1>
            <p className='text-base'>
              Our capable programmers work on your project, update you as the
              process goes on and give you relevant information needed.
            </p>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image
            src='/images/Vector 6.svg'
            alt='hand'
            width={800}
            height={100}
            priority
          />
        </div>

        <div className='flex flex-col items-center mb-8 lg:mb-0 max-w-[80%] mx-auto'>
          <div className='p-25 bg-[#344C5B] rounded-[25px]'>
            <Image
              src='/images/Send_fill.svg'
              alt='hand'
              width={106}
              height={106}
              priority
            />
          </div>
          <div className='text-center'>
            <h1 className='text-2xl my-2'>Delivery</h1>
            <p className='text-base'>
              The agreed date will be met, your project will be available and
              ready to be delivered on any platform of your choice.
            </p>
          </div>
        </div>
      </main>
      <section className=' bg-[#D9E5EF] pt-10 pl-10 pr-10 pb-20'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 relative'>
          <div className='lg:w-1/2'>
            <h1 className='text-[#205584] text-3xl lg:text-5xl font-semibold mb-3'>
              The Ultimate Final Year Student Package
            </h1>
            <p className='text-base lg:text-lg text-[#363939] '>
              The last year of school can be very demanding with students having
              to get everything right from courses to projects. Not all are up
              to these tasks, and that’s where we come in.
              <br />
              <span className='text-customBlue'>Let Us Help</span>
            </p>
            <span className='flex gap-4 mt-3'>
              <Link
                href='/signup'
                className='flex gap-3 px-5 py-2 w-fit bg-[#FFFFFF] text-[14px] lg:text-[18px] text-customBlue rounded-3xl font-bold transition-transform hover:scale-110'
              >
                Book a project
              </Link>
              <Link
                href='/contact'
                className='flex gap-3 px-5 py-2 w-fit bg-[#CBD3DE] text-[14px] lg:text-[18px] text-customBlue rounded-3xl font-bold transition-transform hover:scale-110'
              >
                Learn more
              </Link>
            </span>
          </div>
          <Image
            src='/images/Rectangle 23785.png'
            alt='graduation'
            width={568}
            height={680}
            priority
            className='lg:w-1/2 mt-5 lg:mt-0'
          />
          <div className='lg:absolute bottom-0 left-0 w-full bg-[#E6EFF6] p-3 mt-2 lg:mt-0'>
            <span className='flex gap-1'>
              <Image
                src='/images/MapPinLine-d.svg'
                alt='graduation'
                width={20}
                height={22}
                priority
              />
              <h4 className='text-customBlue text-4 lg:text-6 font-semibold'>
                Project Pal University Availability
              </h4>
            </span>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex justify-between lg:gap-10'>
              <div className='flex justify-between gap-10'>
                <span>
                  <h2 className='text-customBlue text-lg lg:text-base font-medium '>
                    Landmark University
                  </h2>
                  <p className='text-base text-[#363939]'>Kwara</p>
                </span>
                <p className='w-0.5 h-12 bg-[#486284] lg:block'></p>
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
                className='flex gap-3 px-5 py-2 mt-3 w-fit bg-[#CBD3DE] text-[14px] lg:text-[16px] text-customBlue rounded-3xl font-bold transition-transform hover:scale-110'
              >
                <div className='flex items-center'>
                  <span className='mr-3 text-[14px]'>and so much more</span>
                  <Image
                    src='/images/Bank-r.svg'
                    alt='comments'
                    width={15}
                    height={15}
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-20'>
        <div className='flex flex-col lg:flex-row  mx-0 lg:mx-20 gap-20 mb-20px '>
          <div className='grid grid-cols-2 gap-4 '>
            <Image
              src='/images/efficiency.png'
              alt='comments'
              width={271}
              height={256}
              priority
            />
            <Image
              src='/images/timeliness.png'
              alt='comments'
              width={271}
              height={256}
              priority
            />
            <Image
              src='/images/versatility.png'
              alt='comments'
              width={271}
              height={256}
              priority
            />
            <Image
              src='/images/quickedit.png'
              alt='comments'
              width={271}
              height={256}
              priority
            />
          </div>

          <div className='flex items-center justify-center lg:w-[50%] order-first lg:order-last'>
            <h1 className='text-7xl font-bold text-[#F9D262] '>
              Why Should You Use
              <span className='text-white'> Project Pal</span>
            </h1>
          </div>
        </div>

        <div className='mx-0 lg:mx-20 flex flex-col lg:flex-row justify-between items-center'>
          <h1 className='font-bold text-4xl lg:text-5xl text-[#F9D262] lg:w-[35%] text-center lg:text-left mt-6 lg:mt-0'>
            Hear from fellow students
          </h1>
          <p className='text-lg lg:text-xl w-full lg:w-[50%] mt-5 lg:mt-10 mb-10 lg:mb-20'>
            Before launching, we released Project Pal to a few students to test
            its efficiency. As expected, they went above and beyond in their
            reviews due to how well they did in their final year projects. Here
            are some of the reviews.
          </p>
        </div>

        <div className='flex items-center justify-between mx-4 lg:mx-20 mb-8 lg:mb-20'>
          <Image
            src='/images/Group 100888.png'
            alt='comments'
            width={271}
            height={256}
            priority
            className='max-w-[30%] lg:max-w-none'
          />
          <Image
            src='/images/Group 100890.png'
            alt='comments'
            width={271}
            height={256}
            priority
            className='max-w-[30%] lg:max-w-none'
          />
          <Image
            src='/images/Group 100892.png'
            alt='comments'
            width={271}
            height={256}
            priority
            className='max-w-[30%] lg:max-w-none'
          />
        </div>
      </div>
      <div className='mx-auto max-w-3xl p-4 rounded-lg'>
        <h1 className='text-6xl font-bold mb-4 text-center'>
          Create a project
        </h1>
        <span>
          <h5 className='text-lg font-semibold mb-2'>Email</h5>
          <input
            className='w-full bg-[#F5F4F4] p-4 mb-4 rounded-md text-customBlue'
            type='email'
            name=''
            placeholder='seanchinedu@gmail.com'
            id=''
          />
          <h5 className='text-lg font-semibold mb-2'>
            Briefly describe your project
          </h5>
          <textarea
            className='w-full bg-[#F5F4F4] p-4 mb-4 rounded-md text-customBlue'
            placeholder='Enter a brief description of your project.'
            onClick={handleBookProject}
          ></textarea>
          <h5 className='text-lg font-semibold mb-2'>
            What services do you need?
          </h5>
          <div className='flex flex-wrap gap-4 bg-[#F5F4F4] p-4 mb-4 rounded-md'>
            <label className='flex items-center '>
              <span className='p-3 border rounded-full bg-white flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  onChange={() => handleServices('Cloud Engineering')}
                />
                <span className='text-customBlue font-semibold'>
                  Cloud Engineering
                </span>
              </span>
            </label>

            <label className='flex items-center '>
              <span className='p-3 border rounded-full bg-white flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  onChange={() => handleServices('UI/UX')}
                />
                <span className='text-customBlue font-semibold'>UI/UX</span>
              </span>
            </label>

            <label className='flex items-center '>
              <span className='p-3 border rounded-full bg-white flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  onChange={() => handleServices('Security')}
                />
                <span className='text-customBlue font-semibold'>Security</span>
              </span>
            </label>

            <label className='flex items-center '>
              <span className='p-3 border rounded-full bg-white flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  onChange={() => handleServices('Consultation')}
                />
                <span className='text-customBlue font-semibold'>
                  Consultation
                </span>
              </span>
            </label>

            <label className='flex items-center '>
              <span className='p-3 border rounded-full bg-white flex items-center'>
                <input type='checkbox' className='mr-2' />
                <span className='text-customBlue font-semibold'>Branding</span>
              </span>
            </label>
          </div>
          <Link
            href=''
            onClick={handleBookProject}
            className='flex items-center gap-3 px-5 py-3 mb-5 mt-5 w-fit bg-[#3F9BD5] text-[18px] laptop:text-[16px] text-white rounded-3xl font-bold transition-transform hover:scale-110 mx-auto'
          >
            Book a project
            <BsArrowRight className='text-lg' />
          </Link>
          {/*<h4 className="text-lg text-center">
            For assistance with booking a meeting reach out to
            <span className="text-[#F9D262] underline"> Customer Support.</span>
          </h4> */}
        </span>
      </div>
    </>
  )
}

export default ProjectPal;
