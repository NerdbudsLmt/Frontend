"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useMemo } from "react";
import { useTheme } from 'next-themes'
import cn from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import NavLink from "@/components/Nav/NavLink";
import NavToggler from "@/components/Nav/NavToggler";
import MobileNavLink from "@/components/Nav/MobileNavLink";
import { Navigation } from "@/components/Nav/Navigation";
import { links } from "@/components/Nav/links";
import styles from "@/components/Nav/Nav.module.css";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: () => ({
        clipPath: "circle(0px at 100% 0)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    })
}

const mobileNavVariants = {
    visible: {
        ...{ y: 0, opacity: 1 },
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        ...{ y: 200, opacity: 0 },
        transition: {
            when: "afterChildren",
        },
    },
  }

const Nav = () => {
    // const containerRef = useRef(null);
    const { setTheme } = useTheme();
    const [navOpen, setNavOpen] = useState<boolean>(false);
    // const { height } = useDimensions(containerRef);
    
    return (
        <nav className="py-4 w-[95%] mx-auto">
            <div className="relative flex justify-between items-center">
                <div className='z-20 basis-full md:basis-auto flex items-center justify-between'>
                    <Link href="/">
                        <Image
                            src="/images/nav-logo.png"
                            alt="Vercel Logo"
                            width={33}
                            height={33}
                            priority
                        />
                    </Link>
                    <NavToggler
                        className="block md:hidden" 
                        isOpen={navOpen}
                        toggle={() => setNavOpen(prevState => !prevState)} 
                    />
                    {/* <NavToggler 
                        isOpen={navOpen}
                        toggle={() => setNavOpen(prevState => !prevState)} 
                    /> */}
                </div>
                {/* md:navbar */}
                <div className="hidden md:flex justify-between items-center space-x-8">
                    {links.map((link, index) => (<NavLink key={index} {...link} />))}
                </div>
                <div className="hidden md:flex justify-between items-center space-x-3">
                    <button onClick={e => { setTheme("light") }}>Light</button>
                    <button onClick={e => { setTheme("dark") }}>Dark</button>
                    <div>
                        <Link href="/" className="border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white py-2 px-3 rounded-md">Login</Link>
                    </div>
                    <div>
                        <Link href="/" className="bg-app-porange border-2 border-app-porange text-white py-2 px-3 rounded-md">Sign Up</Link>
                    </div>
                </div>

                {/* TODO: try to resolve issue with z-position */}
                {/* <motion.nav
                    className={`absolute top-14 left-0 h-[90vh] w-full z-30`}
                    initial={false}
                    animate={navOpen ? "open" : "closed"}
                    exit={"closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <motion.div
                        animate={navOpen ? "open" : "closed"} 
                        className={`h-full w-full mx-auto p-6 
                            bg-white dark:bg-app-pblue border-2 border-neutral-700/20 dark:border-white/10
                            flex flex-col justify-center space-y-6 
                            rounded-md overflow-hidden shadow-xl`}
                        variants={sidebar} 
                    >
                        <Navigation isOpen={navOpen} closeNav={() => setNavOpen(false)} />
                    </motion.div>
                </motion.nav> */}
            </div>
            {/* mobile nav for now */}
            <AnimatePresence>
                {navOpen && (
                <div className={"fixed top-[10vh] left-0 z-10 h-[90vh] w-full pb-4"}> 
                    <motion.div 
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        variants={mobileNavVariants}
                        className={`bg-white dark:bg-app-pblue border-2 border-neutral-700/20 dark:border-white/10
                            h-full w-[95%] mx-auto p-6 flex flex-col justify-center space-y-6 
                            rounded-md overflow-hidden shadow-xl`}
                    >
                        {links?.map((link, index) => (
                            <MobileNavLink 
                                key={index} 
                                className="text-[3.2rem] sm:text-[3.7rem] uppercase cursor-pointer font-semibold"
                                onClick={() => setNavOpen(false)}
                                isOpen={navOpen}
                                {...link} 
                            />
                        ))}
                    </motion.div>
                </div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Nav
