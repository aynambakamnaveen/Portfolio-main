import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const container = useRef();
  const cursorRef = useRef();
const colors = [
  "#a855f7", 
  "#c084fc", 
  "#d946ef", 
  "#ec4899", 
  "#f472b6",
  "#22d3ee", 
  "#06b6d4", 
  "#818cf8", 
  "#fb7185", 
  "#e879f9"  
];
  useGSAP(() => {
    const cursor = cursorRef.current;
    const q = gsap.utils.selector(container);
    const move = (e) => {
      gsap.to(cursor, {
        x: e.clientX+10,
        y: e.clientY+10,
        duration: 1,
        ease: "power3.out",
      });
    };

    const scaleUp = () => {
      gsap.to(cursor, { scale: 3, duration: 0.4,backgroundColor:gsap.utils.random(colors), });
    };

    const scaleDown = () => {
      gsap.to(cursor, { scale: 1, duration: 0.4,backgroundColor:'white',});
    };

    window.addEventListener("mousemove", move);

    q(".cursor-scale").forEach((el) => {
      el.addEventListener("mouseenter", scaleUp);
      el.addEventListener("mouseleave", scaleDown);
    });

  return () => {
    window.removeEventListener("mousemove", move);

    q(".cursor-scale").forEach((el) => {
      el.removeEventListener("mouseenter", scaleUp);
      el.removeEventListener("mouseleave", scaleDown);
    });
  };
}, { scope: container });
  return (
    <main
      ref={container}
      className="min-h-screen bg-gradient-to-b from-zinc-900 to-black relative isolate"
    >
      <div className="relative min-h-screen">
        <span
          ref={cursorRef}
            className="w-5 h-5 md:w-3 md:h-3 bg-white rounded-full fixed top-0 left-0 pointer-events-none z-999 hidden md:block"
        ></span>
        <Particles/>
        <Header />
      <section id='Home' className='min-h-screen snap-start'><Hero/></section>
      <section id='Skills' className='min-h-screen snap-start'><Skills/></section>
      <section id='Projects' className='min-h-screen snap-start pt-16'><Projects/></section>
      <section id='contact' className='min-h-screen snap-start'><Contact/></section>
      </div>
    </main>
  );
}


export default App;
