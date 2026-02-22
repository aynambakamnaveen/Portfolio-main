import React from 'react'
import portfolio from './portfolio.png'
import project2 from './project2.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef,useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import space5 from './space5.png'
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
const left = useRef(null);
const right = useRef(null);
const heading = useRef(null);
const imgRef2 = useRef(null);

useGSAP(() => {

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {

    gsap.from(left.current, {
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#main",
        start: "top 85%",
        toggleActions: "play none none reverse",
    },
    });

    gsap.from(right.current, {
    x: 120,
    opacity: 0,
    duration: 1,
    delay: 0.15,   
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#main",
        start: "top 85%",
        toggleActions: "play none none reverse",
    },
    });
    gsap.from(heading.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    gsap.to(imgRef2.current, {
      y: -250, 
      x: 250,
      rotation: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#main",
        start: "top 60%",
        end: "bottom top",
        scrub: 1, 
      },
    });

  });
  return () => mm.revert();
});
    return (
            <div id='main' className='min-h-screen w-full text-white flex flex-col items-center gap-4 md:gap-6 relative px-4'>

               
                <h1 className='text-lg md:text-3xl font-medium tracking-wide text-center bg-white text-black inline-block px-5 py-2 rounded-full shadow'>
                    Projects
                </h1>

                
                <span
                    ref={heading}
                    className='bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-3xl md:text-6xl font-bold font-poppins text-center leading-tight'
                >
                    Check out my latest work
                </span>

                
                <p className='md:text-xl text-base font-light tracking-wide max-w-2xl text-center text-white/80'>
                    I've worked on a variety of projects, from simple websites to complex applications,
                    Some are getting ready — these are a few completed projects.
                </p>

                
                <div className='flex flex-col md:flex-row gap-6 md:gap-8 py-4'>

                    {/* CARD 1 */}
                    <div
                        ref={left}
                        className='flex flex-col gap-2 w-full max-w-sm md:max-w-none md:w-[350px] border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition shadow-lg'
                    >
                        <img className='object-cover w-full h-[220px]' src={portfolio} alt="cover_page" />

                        <span className='px-3 text-lg md:text-xl font-semibold font-poppins'>
                            Modern Portfolio 🐎
                        </span>

                        <p className='px-3 text-left font-medium text-sm md:text-base text-white/80'>
                            A stunning modern portfolio with unique animations and smooth transitions.
                            Built with React, TailwindCSS and GSAP.
                        </p>

                        <div className='flex flex-wrap gap-2 mt-3 px-3'>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>React</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>Tailwind</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>GSAP</span>
                        </div>

                        <div className='px-3 flex gap-3 mt-4 mb-4'>
                            <a href='https://portfolio-main1-two.vercel.app/' target='_blank'><button className='bg-white text-black rounded-lg px-4 py-2 text-sm font-medium hover:scale-105 transition'>
                                🌐 Live Demo
                            </button></a>
                            <button className='bg-white text-black rounded-lg px-4 py-2 text-sm font-medium hover:scale-105 transition'>
                                🔗 Source
                            </button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div
                        ref={right}
                        className='flex flex-col gap-2 w-full max-w-sm md:max-w-none md:w-[350px] border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition shadow-lg'
                    >
                        <img className='object-cover w-full h-[220px]' src={project2} alt="cover_page" />

                        <span className='px-3 text-lg md:text-xl font-semibold font-poppins'>
                            Find It 🐎
                        </span>

                        <p className='px-3 text-left font-medium text-sm md:text-base text-white/80'>
                            A simple modern job portal helping students discover jobs and internships easily.
                        </p>

                        <div className='flex flex-wrap gap-2 mt-3 px-3'>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>React</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>Tailwind</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>Node</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>Express</span>
                            <span className='border border-white/90 rounded-full px-3 py-1 text-sm'>MongoDB</span>
                        </div>

                        <div className='px-3 flex gap-3 mt-4 mb-4'>
                            <button className='bg-white text-black rounded-lg px-4 py-2 text-sm font-medium opacity-80 cursor-default'>
                                ❤️ Coming soon...
                            </button>
                        </div>
                    </div>

                </div>

                
                <img
                    ref={imgRef2}
                    loading="lazy"
                    className='absolute max-h-[28vh] w-auto object-contain bottom-0 left-0 rotate-45 hidden md:block opacity-80'
                    src={space5}
                />
            </div>
    )
}

export default Projects