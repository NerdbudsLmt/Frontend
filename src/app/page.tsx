import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import { Tools } from '@/components/Home/Tools';


export default function Home() {
    return (
        <section className="">
        <header className="py-10">
            <div className="flex flex-col items-center space-y-5 mb-12">
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
        {/* <main className="bg-app-pblue flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Home::Get started by editing&nbsp;
                    <code className="font-mono font-bold">src/app/page.tsx</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                        src="/images/nerdbuds-logo.png"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Docs{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Find in-depth information about Next.js features and API.
                </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Learn{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Templates{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Explore the Next.js 13 playground.
                </p>
                </a>

                <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Deploy{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
                </a>
            </div>
        </main> */}
        <section className="">
            <div>
                <p>The drive and determination.</p>
                <h3>Our Mission</h3>
                <p>Crafting remarkable software, empowering brands to conquer their goals with digital innovation.</p>
            </div> 
            <div className="h-[350px]">
                <Image
                    className="relative h-full w-full object-cover rounded-xl"
                    src="/images/mission-banner.jpg"
                    alt="nerdbud's banner"
                    width={180}
                    height={180}
                />
            </div>               
        </section>

        <Tools />

        <section className="py-10">
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
