import Link from 'next/link'
import Image from 'next/image'
import { Tools } from '@/components/Home/Tools';
import { Offer } from '@/components/Home/Offer';
import { Choose } from '@/components/Home/Choose';
import { BsArrowRight } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";


export default function Home() {
    return (
        <section className="">
            {/* header section */}
            <header className="py-10">
                <div className="flex flex-col items-center space-y-5 mb-20">
                    <div>
                        <Link 
                            href="/"
                            className="flex items-center space-x-2 border-2 border-app-sblue text-app-sblue py-1 px-3 rounded-full"
                        >
                            <>
                                <span>Introducing: Student Galore</span>
                                <BsArrowRight className="text-lg" />
                            </>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-9xl font-bold text-center text-neutral-900 dark:text-white">You <span className="text-app-sblue">Think.</span></h1>
                        <h1 className="text-9xl font-bold text-center text-neutral-900 dark:text-white">We <span className="text-app-porange">Build.</span></h1>
                    </div>
                    <div className="text-center">
                        <p className="w-8/12 mx-auto text-center mb-8">
                            {`"Experience innovation at its finest with us. We craft exceptional software solutions that redefine excellence and elevate your business."`}
                        </p>
                        <Link href="/" className="bg-app-porange border-2 border-app-porange text-white py-3 px-4 rounded-full">Get Started</Link>
                    </div>
                </div>
                <Image
                    className="relative h-[700px] w-full object-cover rounded-xl"
                    src="/images/nerdbuds-banner.jpg"
                    alt="nerdbud's banner"
                    width={1400}
                    height={1400}
                    priority
                />
            </header>
            <Offer />
            <Choose />
            {/* drive & determination section */}
            <section className="">
                <div className="mb-14">
                    <p className="text-app-sblue text-[20px] font-[500]">
                        The drive and determination.
                    </p>
                    <p className="text-[32px] font-[600] my-2 text-neutral-900 dark:text-white">
                        Our Mission
                    </p>
                    <p className="text-app-sblue text-[16px] font-[500] w-full tablet:w-[80%]  laptop:w-[550px]">
                        Crafting remarkable software, empowering brands to conquer their goals with digital innovation.
                    </p>
                </div>
                <div className="h-auto md:h-[350px] relative overflow-hidden">
                    <Image
                        className="relative h-full w-full object-cover rounded-xl"
                        src="/images/mission-banner.jpg"
                        alt="nerdbud's banner"
                        width={1400}
                        height={1400}
                    />
                    <div className="absolute top-0 h-full w-full">
                        <div className="h-full flex flex-col md:flex-row md:items-center justify-center md:justify-normal">
                            <div className="flex flex-col justify-center spacey-3 p-4">
                                <GiArcheryTarget className="text-white text-5xl" />
                                <h3 className="text-app-porange text-[30px] lg:text-[32px] font-bold">Our Drive</h3>
                                <p className="text-white text-[17px] lg:text-[20px]">
                                    At Nerdbuds, we{`'`}re on a mission to create extraordinary software solutions that empower brands to reach new heights. 
                                    With our expertise and passion for innovation. 
                                </p>
                            </div>
                            <div className="flex flex-col justify-center spacey-3 p-4">
                                <MdRocketLaunch className="text-white text-5xl" />
                                <h3 className="text-app-sblue text-[30px] lg:text-[32px] font-bold">Our Determination</h3>
                                <p className="text-white text-[17px] lg:text-[20px]">
                                    We collaborate closely with clients to craft tailor-made digital experiences that drive success. 
                                    Together, let{`'`}s conquer your goals and unlock boundless possibilities. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>               
            </section>
            {/* our tools */}
            <Tools />
            {/* get started section */}
            <section className="my-32">
                <div className="flex flex-col items-center space-y-5 mb-12">
                    <div>
                        <h1 className="text-6xl font-bold text-center text-app-sblue">Get started with Nerdbuds.</h1>
                        <h1 className="text-6xl font-bold text-center text-app-porange">Explore our offers today.</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="w-8/12 mx-auto text-center mb-5">
                            {`"Experience innovation at its finest with us. We craft exceptional software solutions that redefine excellence and elevate your business."`}
                        </p>
                        <Link 
                            href="/"
                            className="flex items-center space-x-2 border-2 border-app-sblue bg-app-sblue text-white py-1 px-3 rounded-full"
                        >
                            <>
                                <span>Get Started</span>
                                <BsArrowRight className="text-lg" />
                            </>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}
