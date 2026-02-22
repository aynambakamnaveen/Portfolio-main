import React from 'react'
import { useEffect,useRef,useState } from 'react'
import gsap from "gsap";

const Particles = () => {
    const ref = useRef();
    useEffect(()=>{
        const container = ref.current;
        const count = Math.floor(Math.random()*60)
        for (let i=0;i<count;i++){
            const dot = document.createElement('div');
            dot.className = 'particle';
            const size = Math.random()*4 + 2;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = Math.random()*100 + 'vw';
            dot.style.top = Math.random()*100 + 'vh';
            dot.style.animationDelay = Math.random()*3+'s';
            dot.style.animationDuration=Math.random()*3+'s';
            container.appendChild(dot);
        }
    },[]) 
    return (
        <div ref={ref} className='particle-container'></div>
    )
}

export default Particles