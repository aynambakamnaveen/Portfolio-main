import forest from './forest.png'
import { RxAvatar } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import {useRef,useState} from 'react';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxCross2 } from "react-icons/rx";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Contact = () => {
  const btn = useRef()
  const contact = useRef()
  const pop = useRef();
  const open1 = useRef();
  const main1 = useRef();
  const [loading,Setloading] = useState(false)
  useGSAP(()=>{
    gsap.from(open1.current,{
      opacity:0,
      scale:1,
      y:40,
      duration:0.4,
      scrollTrigger:{
        trigger:main1.current,
        start:'top 30%',
        toggleActions: "play reverse play reverse"
      }
    })
  })
  useGSAP(() => {
    if (!loading) return;

    gsap.fromTo(
      pop.current,
      {
        opacity: 0,
        scale: 0.6,
        y: 40,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(2)" 
      }
    );
    }, [loading]);
  const front = ()=>{
    gsap.to(btn.current,{
      x:10,
      duration:0.4
    })
  }
  const back = ()=>{
    gsap.to(btn.current,{
      x:0,
      duration:0.4
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,        
      import.meta.env.VITE_TEMPLATE_ID,      
      contact.current,
      {
        publicKey:import.meta.env.VITE_PUBLIC_KEY,
      }
    )
    .then(() => {
      console.log('SUCCESS!')
      Setloading(true)
      contact.current.reset()
    })
    .catch((error) => {
      Setloading(false)
      console.log('FAILED...', error)
    })
  }
  return (
      <div
        ref={main1}
        style={{ backgroundImage: `url(${forest})` }}
        className="min-h-screen py-12 md:py-0 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div
              ref={pop}
              className="relative bg-white text-black rounded-2xl px-8 py-6 shadow-2xl flex flex-col items-center gap-2 animate-pop"
            >
              <span
                className="absolute top-2 right-3 text-2xl text-red-500 cursor-pointer"
                onClick={() => Setloading(false)}
              >
                <RxCross2 />
              </span>

              <h1 className="text-xl font-bold">
                Message Sent Successfully ❤️
              </h1>

              <p className="text-gray-600 text-sm">
                I will get back to you soon
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

        <div
          ref={open1}
          className="relative z-10 text-white/90 md:text-white flex flex-col md:flex-row items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl mx-4 md:mx-6 lg:mx-10 max-w-6xl w-full"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full">

            
            <div className="flex flex-col gap-3 p-6 md:p-10 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center md:text-left">
                Contact Me
              </h1>

              <p className="text-lg md:text-xl text-center md:text-left text-white/80">
                Feel free to reach out me!
              </p>

              <span className="flex gap-3 mt-3 items-center text-sm md:text-base break-all">
                <RxAvatar className="text-4xl bg-white/20 rounded-xl p-2 border border-white/50" />
                aynambakamnaveen@gmail.com
              </span>

              <span className="flex gap-3 mt-2 items-center text-sm md:text-base">
                <FaPhoneAlt className="text-4xl bg-white/20 rounded-xl p-2 border border-white/50" />
                91+9030424271
              </span>

              <span className="flex gap-3 mt-2 items-center text-sm md:text-base">
                <FaLocationDot className="text-4xl bg-white/20 rounded-xl p-2 border border-white/50" />
                AndhraPradesh, India
              </span>

              <div className="flex flex-wrap mt-6 gap-6">
                <a href='https://www.linkedin.com/in/naveen-kumar-755459342/' target='_blank'><span className="flex gap-2 items-center text-lg font-semibold hover:opacity-90 transition">
                  <FaLinkedinIn className="text-4xl bg-blue-500/70 rounded-xl p-2 transition-transform hover:scale-110 cursor-pointer" />
                  Linkedin
                </span></a>

                <a href='https://github.com/aynambakamnaveen' target='_blank'><span className="flex gap-2 items-center text-lg font-semibold hover:opacity-90 transition cursor-pointer">
                  <FiGithub className="text-4xl bg-black rounded-xl p-2 transition-transform hover:scale-110" />
                  GitHub
                </span></a>
              </div>
            </div>

            
            <div className="bg-gradient-to-br from-violet-500/30 to-pink-500/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 w-full md:w-1/2 relative">

              <h1 className="text-2xl md:text-4xl font-bold text-center pb-3">
                Get in touch
              </h1>

              <form
                ref={contact}
                onSubmit={sendEmail}
                className="flex flex-col items-center gap-4"
              >
                
                <div className="bg-white/90 focus-within:bg-white transition rounded-2xl border border-gray-300 w-full max-w-md relative shadow-sm">
                  <input
                    className="p-3 text-lg outline-none text-black w-full font-medium rounded-2xl"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    spellCheck="false"
                    required
                  />
                  <span className="absolute top-4 right-3 text-xl text-gray-600">
                    <CgProfile />
                  </span>
                </div>

                
                <div className="bg-white/90 focus-within:bg-white transition rounded-2xl border border-gray-300 w-full max-w-md relative shadow-sm">
                  <input
                    className="p-3 text-lg outline-none text-black w-full font-medium rounded-2xl"
                    name="email"
                    placeholder="test@gmail.com"
                    type="text"
                    spellCheck="false"
                    required
                  />
                  <span className="absolute top-4 right-3 text-xl text-gray-600">
                    <RiLockPasswordFill />
                  </span>
                </div>

                
                <div className="bg-white/90 focus-within:bg-white transition rounded-2xl border border-gray-300 w-full max-w-md relative shadow-sm">
                  <textarea
                    className="p-3 text-lg outline-none text-black w-full rounded-2xl"
                    name="message"
                    placeholder="Type Your Message"
                    rows={4}
                    spellCheck="false"
                    required
                  />
                  <span className="absolute top-4 right-3 text-xl text-gray-600">
                    <MdMessage />
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onMouseEnter={front}
                  onMouseLeave={back}
                  className="cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-3 rounded-full flex items-center justify-center gap-2 text-lg font-bold mt-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                  type="submit"
                >
                  Send <IoMdSend ref={btn} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Contact