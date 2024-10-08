"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '@/public/logo.png';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // const [openedStyle, setOpenedStyle] = useState(0.95);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="w-full bg-white/30 backdrop-blur-sm fixed top-0 z-20">
            <div className="w-11/12 mx-auto flex justify-between items-center py-3 overflow-hidden">
                <Link href={'#'} className="text-orange-500 font-bold text-3xl"><Image src={logo} className="h-16 w-36" alt="" /> </Link>
                <div className="md:flex gap-8 items-center hidden">
                    <Link href={'#'} className="hover:text-orange-500 duration-700">Home</Link>
                    <Link href={'#aboutus'} className="hover:text-orange-500 duration-700">About</Link>
                    <Link href={'#gallery'} className="hover:text-orange-500 duration-700">Gallery</Link>
                    <Link href={'#services'} className="hover:text-orange-500 duration-700">Services</Link>
                    <Link href={'https://wa.link/d00m0e'} className="py-2 px-4 bg-orange-500 hover:bg-orange-400 text-white duration-700 rounded-full border border-black">Book Appointment</Link>    
                </div>
                <button onClick={toggleMenu} className="bg-orange-500 text-white py-1 px-4 md:hidden rounded-full border border-black">Menu</button>
            </div>
            {open && (
                <div className="block md:hidden bg-white h-screen fixed top-0 z-40 w-full">
                    <div className="w-11/12 mx-auto flex justify-between items-center py-3 border-b">
                        <Link href={'#'} className="text-orange-500 font-bold text-3xl"><Image src={logo} className="h-16 w-36" alt="" /> </Link>
                        
                        <button onClick={toggleMenu} className="border border-orange-500 text-orange-500 
                        px-4 py-1 hover:bg-orange-500 hover:text-white md:hidden rounded-full">Close</button>
                    </div>

                    <div className="flex flex-col md:hidden w-11/12 mx-auto">
                        <Link href={'/'} onClick={toggleMenu} className="hover:text-orange-500 py-6 border-b">Home</Link>
                        <Link href={'#aboutus'} onClick={toggleMenu} className="hover:text-orange-500 py-6 border-b">About Us</Link>
                        <Link href={'#gallery'} onClick={toggleMenu} className="hover:text-orange-500 py-6 border-b">Gallery</Link>
                        <Link href={'#services'} onClick={toggleMenu} className="hover:text-orange-500 py-6 border-b">Services</Link>
                        <Link href={'https://wa.link/d00m0e'} onClick={toggleMenu} className="bg-orange-500 hover:bg-orange-400 
                        text-white mt-6 py-2 flex items-center text-center justify-center duration-700 rounded-full border border-black">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}