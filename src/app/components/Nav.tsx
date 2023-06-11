"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from 'next-themes'
import NavLink from "@/app/components/NavLink";


const Nav = () => {
    const { theme, setTheme, systemTheme } = useTheme();

    console.log("Current theme: ", theme, systemTheme);

    return (
        <nav className="py-4">
            <div className="app-container flex justify-between items-center">
                <div>
                    <Link href="/">
                        <Image
                            src="/images/nerdbuds-logo.png"
                            alt="Vercel Logo"
                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex justify-between items-center space-x-8">
                    <NavLink path="/" text="Home" />
                    <NavLink path="/portfolio" text="Portfolio" />
                    <NavLink path="/pricing" text="Pricing" />
                    <NavLink path="/about" text="About Us" />
                    <NavLink path="/contact" text="Contact Us" />
                </div>
                <div className="flex justify-between items-center space-x-2">
                    <button onClick={e => { setTheme("light") }}>Light</button>
                    <button onClick={e => { setTheme("dark") }}>Dark</button>
                    <div>
                        <Link href="/" className="border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white py-2 px-3 rounded-md">Login</Link>
                    </div>
                    <div>
                        <Link href="/" className="bg-app-porange border-2 border-app-porange text-white py-2 px-3 rounded-md">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
