import Link from "next/link";
import Image from "next/image";
import { Tools } from "./components/Tools";
import { Offer } from "./components/Offer";
import { Choose } from "./components/Choose";
import { BsArrowRight } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";

export default function Home() {
  return (
    <>
      {/* header section */}
      <header className="py-10">
        <div className="flex flex-col items-center space-y-5 mb-16 md:mb-20">
          <div>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-10 rounded-full"
            >
              <>
                <span>Introducing: Student Galore</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
          <div>
            <h1 className="text-7xl font-bold text-center text-white">
              You <span className="text-app-sblue">Dream.</span>
            </h1>
            <h1 className="text-7xl font-bold text-center text-white">
              We <span className="text-app-porange">Build.</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="w-[85%] text-white tablet_l:w-[520px] text-[18px] mx-auto text-center mb-8">
              {`"Experience innovation at its finest with us. We craft exceptional software solutions that redefine excellence and elevate your business."`}
            </p>
            <Link href="/signup">
              <button className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-4 rounded-full transition-transform hover:scale-110">
                Get Started
                <BsArrowRight className="text-lg inline ml-1" />
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="relative h-[450px] md:h-[700px] w-full object-cover rounded-xl"
          src="/images/nerdbuds-banner.jpg"
          alt="nerdbud's banner"
          width={1400}
          height={1400}
          priority
        />
      </header>
      {/* our tools */}
      <Tools />

      <div className=" text-center my-20">
        <p className=" my-5 ">
          <span className="text-white font-[600] text-lg leading-6 tracking-tight ">
            Welcome to
          </span>
          <span className="text-[#3F9BD5]  font-[600] text-[32px] leading-6 tracking-tighter">
            {" "}
            Nerd
          </span>
          <span className=" text-[#F9D262]  font-[600] text-[32px] leading-6 tracking-tighter">
            buds
          </span>
        </p>
        <p className="text-white text-center font-medium">
          Explore the prestige of Nerdbuds, a leading software company shaped by
          the expertise and <br /> dedication of founding partners. Our
          meticulously skilled team transforms your ideas into reality <br />{" "}
          with unparalleled precision and innovation, nurturing the startup of
          your dreams.
        </p>
        <Link href="/about">
          <button className="bg-app-sblue border-2 border-app-sblue text-white py-2 px-4 rounded-full transition-transform hover:scale-110 my-8">
            Learn more about us <BsArrowRight className="text-lg inline" />
          </button>
        </Link>
      </div>

      <Offer />
      <Choose />
      {/* drive & determination section */}
      <section className="">
        <div className="mb-5 md:mb-14">
          <p className="text-app-sblue text-[20px] font-[500]">
            The drive and determination.
          </p>
          <p className="text-[32px] font-[600] my-2 text-white">Our Mission</p>
          <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
            Crafting remarkable software, empowering brands to conquer their
            goals with digital innovation.
          </p>
        </div>
        <div className="h-auto md:h-[350px] relative bg-[url('/images/mission-banner.jpg')] bg-center bg-cover bg-no-repeat overflow-hidden">
          <div className="h-full w-full">
            <div className="h-full flex flex-col md:flex-row md:items-center justify-center md:justify-normal">
              <div className="flex flex-col justify-center spacey-3 p-4">
                <GiArcheryTarget className="text-white text-5xl" />
                <h3 className="text-app-porange text-[30px] lg:text-[32px] font-bold">
                  Our Drive
                </h3>
                <p className="text-white text-[17px] lg:text-[20px]">
                  At Nerdbuds, we{`'`}re on a mission to create extraordinary
                  software solutions that empower brands to reach new heights.
                  With our expertise and passion for innovation.
                </p>
              </div>
              <div className="flex flex-col justify-center spacey-3 p-4">
                <MdRocketLaunch className="text-white text-5xl" />
                <h3 className="text-app-sblue text-[30px] lg:text-[32px] font-bold">
                  Our Determination
                </h3>
                <p className="text-white text-[17px] lg:text-[20px]">
                  We collaborate closely with clients to craft tailor-made
                  digital experiences that drive success. Together, let{`'`}s
                  conquer your goals and unlock boundless possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between my-16">
        <div className="w-1/3 p-4">
          <p>
            &quot;As a company there are different projects that may not be
            possible to get done due to various factors. But one can always
            delegate projects to Nerdbuds and trust them to deliver&quot;
          </p>
          <div className="mt-5 flex items-center">
            <Image
              src="/images/profile 1.png"
              alt="Profile 1"
              className="w-12 h-12 rounded-full mr-2 inline"
              width={50}
              height={50}
              priority
            />
            <div>
              <span className="text-[#3F9BD5] inline-block">
                Jonathan Ayomide
              </span>
              <span className="block">Senior VP | Tritech</span>
            </div>
          </div>
        </div>
        <div className="w-1/3  p-4">
          <p>
            &quot;My final year saw my best result in my project and
            performance. Project Pal is the best thing that a final year student
            can rely on for maximum success, take it from a graduate.&quot;
          </p>
          <div className="mt-5 flex items-center">
            <Image
              src="/images/profile 2.png"
              alt="Profile 2"
              className="w-12 h-12 rounded-full mr-2 inline"
              width={50}
              height={50}
            />
            <div>
              <span className="text-[#3F9BD5] inline-block">Rita Eze</span>
              <span className="block">400L Computer Science Student</span>
            </div>
          </div>
        </div>
        <div className="w-1/3  p-4">
          <p>
            &quot;Starting a business can be very tricky. There is a lot
            involved which can seem overwhelming but thanks to Nerdbuds I was
            able to get my business up and running within a week.&quot;
          </p>
          <div className="mt-5 flex items-center">
            <Image
              src="/images/profile 3.png"
              alt="Profile 3"
              className="w-12 h-12 rounded-full mr-2 inline"
              width={50}
              height={50}
            />
            <div>
              <span className="text-[#3F9BD5] inline-block">Anita Bassey</span>
              <span className="block">Entrepreneur</span>
            </div>
          </div>
        </div>
      </div>
      {/* get started section */}
      <section className="my-14 md:my-24 lg:my-32">
        <div className="flex flex-col items-center space-y-5 mb-12">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-center text-app-sblue">
              Get started with Nerdbuds.
            </h1>
            <h1 className="text-3xl md:text-6xl font-bold text-center text-app-porange">
              Explore our offers today.
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="w-8/12 mx-auto text-white text-center mb-5">
              {`"Bring Your Dreams to Life with Nerdbuds. Join us and revolutionize your software experience. Get started today!"`}
            </p>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 border-2 border-app-sblue bg-app-sblue text-white py-1 px-3 rounded-full transition-transform hover:scale-110"
            >
              <>
                <span>Get Started</span>
                <BsArrowRight className="text-lg" />
              </>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
