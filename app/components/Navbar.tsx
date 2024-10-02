"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaRegUser } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        {
            id: 1,
            text: 'Home',
            content: "Content 1",
        },
        {
            id: 2,
            text: 'Company',
            content: "Content 2",
        },
        {
            id: 3,
            text: 'Resources',
            content: "Content 3",
        },
        {
            id: 4,
            text: 'About',
            content: "Content 4",
        },
        {
            id: 5,
            text: 'Contact',
            content: "Content 5",
        },
    ];


    return (
        <div className='welcome w-full flex justify-between items-center bg-white h-[4rem] px-4'>
            <div className="flex justify-start items-center">
                {/* Logo */}
                <Link href="/" className="pr-8 pt-3">
                    <Image src="/base_logo/wiki_ui_logo_white.png" alt="" width={70} height={70} />
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex md:gap-7'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='text-white font-medium hover:text-pink-200 hover:border-b-2 hover:border-pink-500 cursor-pointer transition-all ease-in duration-200'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:flex md:justify-end md:items-center md:gap-4">
                <Link href="/auth/login" className="px-2 py-3 font-semibold text-pink-400 rounded-md bg-pink-50 hover:bg-pink-100 transition-all ease-in duration-200 cursor-pointer">
                    Iniciar Sesión
                </Link>
                <Link href="/auth/signup" className="flex gap-2 px-2 py-3 font-semibold text-slate-100 bg-pink-400 rounded-md hover:bg-pink-500 transition-all ease-in duration-200 cursor-pointer">
                    <FaRegUser size={20} />Registrate
                </Link>
            </div>
            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden z-10'>
                {nav ? <AiOutlineClose size={25} className="text-pink-500" /> : <AiOutlineMenu size={25} className="text-white" />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-full h-full bg-white ease-in-out duration-500'
                        : 'ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <Link href="/" className="flex pl-5">
                    <Image src="/base_logo/wiki_ui_logo_bg_transparent.png" alt="" width={70} height={70} />
                </Link>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 rounded-xl cursor-pointer hover:bg-pink-100 transition-all ease-linear duration-200'
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-pink-900">{item.text}</AccordionTrigger>
                                <AccordionContent>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const Navbar = () => {
//     const path = usePathname();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const menuItem = [
//         {
//             name: "Home",
//             link: "/",
//         },
//         {
//             name: "About",
//             link: "/About",
//         },
//         {
//             name: "Contact",
//             link: "/Contact",
//         },
//     ];

//     const toggleMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <div className="welcome w-full flex justify-between items-center bg-white h-[4rem] px-4">
//             <Link href="/">
//                 <Image src="/base_logo/wiki_ui_logo_white.png" alt="" width={70} height={70} />
//             </Link>
//             <button
//                 className="md:hidden p-2"
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//             >
//                 {/* Hamburger icon */}
//                 <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16m-7 6h7"
//                     />
//                 </svg>
//             </button>
//             <div
//                 className={`flex-col md:flex-row ${isMobileMenuOpen ? "flex" : "hidden"
//                     } md:flex`}
//             >
//                 <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
//                     {menuItem.map((menu) => {
//                         const isActive = menu.link === path;
//                         return (
//                             <li key={menu.name}>
//                                 <Link
//                                     href={menu.link}
//                                     className={`block p-2 ${isActive ? "text-red-300" : "text-blue-300"
//                                         }`}
//                                 >
//                                     {menu.name}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;