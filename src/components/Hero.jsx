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
      rotate:360,
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
    })
    
    gsap.from(main1.current, {
      opacity: 0,
      y: 300,
      duration: 2,
      ease: "power2.out",
    });

  }, { scope: main1 });

  {/*useGSAP(() => {
    gsap.to(imgRef.current, {
      x: 20,
      rotation: 5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });*/}
  return (
      <>
      <div ref={main1} id='hero' className='relative text-white w-full h-screen overflow-hidden font-poppins'>

        <div className='relative w-full h-full flex items-center justify-between px-5 lg:px-8 md:px-10'>

          {/* TEXT AREA */}
          <div className='w-full lg:w-2/3 font-zalando font-semibold md:gap-3 lg:gap-2 gap-1 flex flex-col justify-center'>

            <div className='flex items-center lg:gap-3 md:gap-5 gap-2'>
              <span className='text-3xl md:text-6xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent'>
                Hi, I'm
              </span>
              <span className='text-3xl md:text-6xl bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent'>
                Naveen Kumar!
              </span>
            </div>

            <div className='flex flex-col lg:flex-row md:items-center gap-1 md:gap-5'>
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-3xl md:text-6xl">
                I'm a
              </span>
              <span className='text-3xl md:text-7xl bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent md:relative md:after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-emerald-400'>
                Full Stack Developer
              </span>
            </div>

            <p className="font-light md:text-center md:px-4 font-zalando-expanded">
              Full Stack Developer crafting modern web experiences with the MERN stack.
              From backend logic to pixel-perfect UI, I build complete products that feel fast, smooth, and reliable.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="cursor-scale w-fit mt-6 bg-gradient-to-br from-blue-200 to-pink-400 text-black font-semibold px-3 py-3 lg:px-8 lg:py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition shadow-lg shadow-blue-500/30">
                Download Resume
                <MdFileDownload className="text-lg" />
              </button>

              <a className="cursor-scale" href="#Projects">
                <button className="w-fit md:mt-6 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600 text-black font-semibold px-3 py-3 lg:px-8 lg:py-3 rounded-full hover:scale-105 active:scale-95 transition shadow-lg shadow-green-500/50 tracking-wider flex items-center gap-2">
                  View Projects
                  <FaFreeCodeCamp className="text-lg"/>
                </button>
              </a>
            </div>
          </div>
          <img
            className='hidden md:block absolute right-6 bottom-0 object-contain
            max-h-[80vh] lg:max-h-[92vh] opacity-95 scale-x-[-1]'
            loading="lazy"
            src={profile2}
          />

        </div>
        <img
          ref={imgRef}
          src={space6}
          loading="lazy"
          className="absolute bottom-0 left-1/2 
                    max-h-[22vh] object-contain opacity-90 pointer-events-none"
        />
      </div>
      </>
  )
}

export default Hero