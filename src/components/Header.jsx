import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useState,useRef} from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";

gsap.registerPlugin(useGSAP);
const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
    setOpen(prev => !prev);
    };

    return (
    <div className='fixed top-0 left-0 w-full z-50
    backdrop-blur-md bg-black/30 border-b border-white/10
    shadow-lg shadow-black/20
    flex justify-between items-center px-4 py-3'>

        
        <span className='text-3xl md:text-4xl font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600 relative inline-block'>
            Portfolio
        </span>

        
        <div className='hidden md:flex gap-10 items-center
        bg-white/10 backdrop-blur-lg px-4 lg:px-8 py-2 rounded-full
        border border-white/20 shadow-lg text-white text-lg font-light'>

            <span className='cursor-scale relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                <a href='#Home'>Home</a>
            </span>

            <span className='cursor-scale relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                <a href='#Skills'>Skills</a>
            </span>

            <span className='cursor-scale relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'>
                <a href='#Projects'>Projects</a>
            </span>
        </div>

        
        <a href='#contact'>
            <span className='cursor-scale text-black font-bold tracking-wide uppercase
            bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600
            px-6 py-2 rounded-full hidden md:flex items-center gap-2
            hover:scale-105 active:scale-90 transition shadow-lg shadow-emerald-500/30'>
                Contact <IoMdContact className='text-xl'/>
            </span>
        </a>

        
        {open ? (
            <RxCross2 onClick={toggleMenu} className='text-white text-4xl md:hidden cursor-pointer'/>
        ) : (
            <IoMdMenu onClick={toggleMenu} className='text-white text-4xl md:hidden cursor-pointer'/>
        )}

    
        <div
            className={`
            fixed top-0 right-0 h-screen w-64
            bg-black/95 backdrop-blur-lg text-white
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
            md:hidden flex flex-col gap-8 p-8 shadow-2xl
            `}
        >
            <RxCross2 onClick={toggleMenu} className='text-white text-4xl absolute top-6 right-4 bg-white/20 rounded-full p-1 cursor-pointer'/>

            <span onClick={toggleMenu}><a href='#Home'>Home</a></span>
            <span onClick={toggleMenu}><a href='#Skills'>Skills</a></span>
            <span onClick={toggleMenu}><a href='#Projects'>Projects</a></span>
            <span onClick={toggleMenu}><a href='#contact'>Contact</a></span>

            <span className='text-black font-bold uppercase
            bg-gradient-to-br from-blue-200 to-pink-400 py-2 rounded-full
            flex items-center justify-center cursor-pointer active:scale-90'>
                Resume
            </span>
        </div>
    </div>
    )
}

export default Header