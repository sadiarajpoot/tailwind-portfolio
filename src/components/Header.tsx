"use client";

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="fixed w-full h-24 shadow-xl bg-[#01455E] z-10">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 ">
                        Sadia <span className="text-[#E1aD01] font-extrabold text-2xl">Khan
                            <span className="bg-[#E1aD01]"></span>
                        </span>
                    </h2>

                    <div>
                        <ul className="hidden sm:flex ">
                            <Link href="/">
                                <li className="ml-10 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]">Home</li>
                            </Link >
                            <Link href="/about">
                                <li className="ml-10 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]">About</li>
                            </Link >

                            <Link href="/projects">
                                <li className="ml-10 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]">Projects</li>
                            </Link >
                            <Link href="/skills">
                                <li className="ml-10 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]">Skills</li>
                            </Link >
                            <Link href="/contact-us">
                                <li className="ml-10 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]">Contact</li>
                            </Link >

                        </ul>
                    </div>
                    <div
                        onClick={handleNav}
                        className="md:hidden cursor-pointer pl-24"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <AiOutlineMenu size={30} />
                    </div>
                    <div
                        id="mobile-menu"
                        className={`fixed left-0 top-0 w-[80%] sm:hidden h-screen bg-[#015A6B] p-10 ease-in duration-500 z-10 ${menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
                            }`}
                    >
                        <ul className="flex flex-col items-start">
                        <h2 className=" pt-[5px] pb-9 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 ">
                        Sadia <span className="text-[#E1aD01] font-extrabold text-2xl">Khan
                            <span className="bg-[#E1aD01]"></span>
                        </span>
                    </h2>
                            <Link href="/">
                                <li className="py-5 ml-5 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]" onClick={handleNav}>Home</li>
                            </Link>
                            <Link href="/about">
                                <li className="py-5 ml-5 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]" onClick={handleNav}>About</li>
                            </Link>
                            <Link href="/projects">
                                <li className="py-5 ml-5 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]" onClick={handleNav}>Projects</li>
                            </Link>
                            <Link href="/skills">
                                <li className="py-5 ml-5 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]" onClick={handleNav}>Skills</li>
                            </Link>
                            <Link href="/contact-us">
                                <li className="py-5 ml-5 uppercase hover:border-b text-[20px] text-white font-bold hover:active  hover:text-[#5AACCF]" onClick={handleNav}>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;