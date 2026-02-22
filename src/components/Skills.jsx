import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef,useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const Skills = () => {
  const sectionRef = useRef();
  const [more,setMore] = useState(false);
  const toogle = (()=>{
    setMore((prev)=>!prev)
  })
  useGSAP(() => {
  gsap.from('.skill-card', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 30%',
      toggleActions: "play reverse play reverse"
    }
  },{scope:"#skills"});
  gsap.from('.skill2-card', {
    opacity: 0,
    x: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 30%',
      toggleActions: "play reverse play reverse"
    }
  },{scope:"#skills"});
});
  return (
        <div
          ref={sectionRef}
          id='skills'
          className='text-white w-full min-h-screen flex md:flex-row flex-col justify-center gap-8 px-4 md:px-10'
        >

          {/* Mobile Title */}
          <span className="md:hidden block text-center font-bold text-3xl font-poppins">
            Skills
          </span>

          {/* SKILL CARDS SIDE */}
          <div className='md:w-1/2 w-full flex items-center justify-center'>

            <div className='flex gap-6 flex-wrap items-center justify-center md:border-r-2 border-white/30 pr-0 md:pr-10'>

              {/* FRONTEND */}
              <div className='skill-card flex flex-col border border-gray-300/30 bg-blue-900/20 backdrop-blur-xl rounded-xl p-4 md:p-6 gap-4 cursor-scale shadow-lg'>
                <span className='text-xl text-center font-bold text-blue-500 md:text-white'>
                  Front-end skills
                </span>

                <div className='grid grid-cols-3 gap-3 text-center font-semibold'>
                  {["HTML","CSS","React","Tailwind","GSAP"].map(skill=>(
                    <span key={skill}
                      className='px-3 py-1 border border-sky-400 rounded-full transition hover:scale-105'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKEND */}
              <div className='skill-card flex flex-col border border-gray-300/30 bg-blue-900/20 backdrop-blur-xl rounded-xl p-4 md:p-6 gap-4 cursor-scale shadow-lg'>
                <span className='text-xl text-center font-bold text-blue-500 md:text-white'>
                  Back-end skills
                </span>

                <div className='grid grid-cols-3 gap-3 text-center font-semibold'>
                  {["Node.js","Express","MongoDB","Mongoose","REST API"].map(skill=>(
                    <span key={skill}
                      className='px-3 py-1 border border-sky-400 rounded-full transition hover:scale-105'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* LANGUAGES */}
              <div className='skill-card flex flex-col border border-gray-300/30 bg-blue-900/20 backdrop-blur-xl rounded-xl p-4 md:p-6 gap-4 cursor-scale shadow-lg'>
                <span className='text-xl text-center font-bold text-blue-500 md:text-white'>
                  Programming Languages
                </span>

                <div className='grid grid-cols-3 gap-3 text-center font-semibold'>
                  {["Python","JavaScript","C"].map(skill=>(
                    <span key={skill}
                      className='px-3 py-1 border border-sky-400 rounded-full transition hover:scale-105'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ABOUT SIDE */}
          <div className='md:w-1/2 w-full flex flex-col items-center justify-center md:p-10 gap-4 relative'>

            <h1 className='skill2-card text-3xl font-medium tracking-widest text-center mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-5 py-1 rounded-full'>
              About Me
            </h1>

            <div className="skill2-card max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-8 leading-relaxed space-y-4 shadow-xl">

              <p className="font-light text-lg md:text-xl">
                I’m a <span className="font-medium bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Full stack web Developer</span> and online BCA student at Manipal University Jaipur.
              </p>

              <p className="font-light text-lg md:text-xl">
                I build responsive web apps using <span className="font-medium text-emerald-300">React.js & Tailwind CSS</span>,
                and <span className="font-medium text-cyan-300">GSAP</span> on the frontend,
                with <span className="font-medium text-sky-300">Node.js & MongoDB</span> on the backend.
              </p>

              <p className="font-light text-lg md:text-xl">
                I develop REST APIs, handle database design, implement authentication,
                and deploy complete <span className="font-medium text-pink-400">MERN stack</span> projects.
              </p>

              {more && (
                <p className="font-light text-lg md:text-xl">
                  I focus on clean code, performance, and real-world problem solving,
                  and I’m actively seeking opportunities to contribute and grow.
                </p>
              )}

              <button
                onClick={toogle}
                className="absolute bottom-2 right-3 text-red-400 hover:text-red-300 text-sm"
              >
                {more ? 'show less' : 'show more...'}
              </button>

            </div>
          </div>
        </div>
  )
}

export default Skills