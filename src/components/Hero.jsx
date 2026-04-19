import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import logo from './image1.png'
import space5 from './space5.png'
import space6 from './space6.png'
import { MdFileDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaAnglesDown } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa";
import profile2 from './profile2.png'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const imgRef = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();
  const main1 = useRef();

  useGSAP(() => {
    gsap.to(imgRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: main1.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });
    gsap.to(imgRef.current, {
      y: 15,
      duration: 1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.from(main1.current, {
      opacity: 0,
      y: 300,
      duration: 2,
      ease: "power2.out",
    });
  }, { scope: main1 });

  return (
    <>
      <div
        ref={main1}
        id='hero'
        className='relative text-white w-full h-screen overflow-hidden font-poppins'
      >
        <div className='relative w-full h-full flex items-center justify-between px-5 md:px-10 lg:px-8'>

          {/* TEXT AREA */}
          <div className='w-full lg:w-2/3 font-zalando font-semibold flex flex-col gap-2 md:gap-3 items-start justify-center'>

            {/* Hi, I'm Naveen Kumar! */}
            <div className='flex flex-wrap items-center gap-x-2 gap-y-0'>
              <span className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent whitespace-nowrap'>
                Hi, I'm
              </span>
              <span className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent whitespace-nowrap'>
                Naveen Kumar!
              </span>
            </div>

            {/* I'm a Full Stack Developer */}
            <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0'>
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                I'm a
              </span>
              <span className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent relative md:after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-emerald-400 whitespace-nowrap'>
                Full Stack Developer
              </span>
            </div>

            {/* Description */}
            <p className="font-light text-sm md:text-base font-zalando-expanded text-left max-w-xs sm:max-w-sm md:max-w-lg">
              Full Stack Developer crafting modern web experiences with the MERN stack.
              From backend logic to pixel-perfect UI, I build complete products that feel fast, smooth, and reliable.
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-3 mt-3 md:mt-6">
              <button className="cursor-scale bg-gradient-to-br from-blue-200 to-pink-400 text-black font-semibold px-4 py-2.5 lg:px-8 lg:py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition shadow-lg shadow-blue-500/30 text-sm lg:text-base">
                <a href="/Resume.pdf" download="Naveen_Kumar_Resume.pdf">Download Resume</a>
                <MdFileDownload className="text-base" />
              </button>

              <a className="cursor-scale" href="#Projects">
                <button className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600 text-black font-semibold px-4 py-2.5 lg:px-8 lg:py-3 rounded-full hover:scale-105 active:scale-95 transition shadow-lg shadow-green-500/50 tracking-wider flex items-center gap-2 text-sm lg:text-base">
                  View Projects
                  <FaFreeCodeCamp className="text-base" />
                </button>
              </a>
            </div>
          </div>
          <img
            className='hidden md:block absolute right-0 bottom-0 object-contain max-h-[75vh] lg:max-h-[92vh] opacity-95 scale-x-[-1]'
            loading="lazy"
            src={profile2}
          />
        </div>
        <img
          ref={imgRef}
          src={space6}
          loading="lazy"
          className="absolute bottom-0 left-4 md:left-1/2 max-h-[16vh] md:max-h-[22vh] object-contain opacity-90 pointer-events-none"
        />

      </div>
    </>
  );
};

export default Hero;