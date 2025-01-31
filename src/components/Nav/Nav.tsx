"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { useTheme } from "next-themes";
import cn from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";
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
      restDelta: 2,
    },
  }),
  closed: () => ({
    clipPath: "circle(0px at 100% 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

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
};

const Nav = () => {
  const { data: session } = useSession();
  // const containerRef = useRef(null);
  // const { setTheme } = useTheme();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  // const { height } = useDimensions(containerRef);

  return (
    <nav className="py-4 mx-auto w-[100%] tablet:w-[95%] max-w-[1380px]">
      <div className="relative flex justify-between items-center">
        <div className="z-20 basis-full md:basis-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/GeekOps Logo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <NavToggler
            className="block md:hidden"
            isOpen={navOpen}
            toggle={() => setNavOpen((prevState) => !prevState)}
          />
        </div>
        {/* md:navbar */}
        <div className="hidden justify-between items-center space-x-8 lg:flex lg:justify-between lg:items-center lg:space-x-8 lg:ml-[5rem] lg:text-[1.2rem] md:flex md:justify-between md:items-center md:space-x-4 md:ml-[4rem] md:text-[0.9rem]">
          {links.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
        <div className="hidden md:flex justify-between items-center space-x-3">
          {session?.user ? (
            <>
              <div>
                <button
                  className="border-2 border-app-porange text-white py-2 px-3 rounded-md"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  className="border-1 border-white text-white py-2 px-3 rounded-md transition-transform hover:scale-110"
                  onClick={() => signIn()}
                >
                  Login
                </button>
              </div>

              <div>
                <Link href="/signup">
                  <button
                    className="bg-[#F9D262] border-app-porange
                    text-black py-2 px-3 rounded-md transition-transform
                    hover:scale-110"
                  >
                    {" "}
                    Sign up
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
        {/* TODO: try to resolve issue with z-position */}
      </div>
      {/* mobile nav for now */}
      <AnimatePresence>
        {navOpen && (
          <div className={" fixed top-[10vh] left-0 z-10 h-[90vh] w-full pb-4"}>
            {/* <div className="h-full w-full"> */}
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              variants={mobileNavVariants}
              className={`bg-app-pblue border-2 border-white/10
                            h-full w-[95%] mx-auto p-6 flex flex-col justify-center space-y-6 
                            rounded-md overflow-hidden shadow-xl`}
            >
              {links?.map((link, index) => (
                <MobileNavLink
                  key={index}
                  className="text-[1.2rem] sm:text-[1.3rem] uppercase cursor-pointer font-semibold"
                  onClick={() => setNavOpen(false)}
                  isOpen={navOpen}
                  {...link}
                />
              ))}
              <div className="flex flex-col gap-8 px-5 ">
                {session?.user ? (
                  <div>
                    <button
                      className="border-2 border-app-porange text-[1.2rem]  text-white py-2 px-3 rounded-md"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <Link
                        href="/login"
                        className="border-2 border-white text-[1.2rem]  text-white py-2 px-3 rounded-md"
                      >
                        Login
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/signup"
                        className="bg-app-porange text-[1.2rem]  border-2 border-app-porange text-white py-2 px-3 rounded-md"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
        {/* </div> */}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
