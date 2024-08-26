import React from "react";
import { motion } from "framer-motion";
import DA from '../assets/downarrow.svg';

export default function Topright() {
  const scrollToTarget = () => {
    const target = document.getElementById('scroll-target');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="basis-1/4 self-center flex-col text-center uppercase relative cursor-pointer"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-blue-500 text-6xl lg:text-4xl xl:text-6xl font-extrabold">welcome</p>
        <p className="text-4xl lg:text-2xl xl:text-4xl font-bold">let's get started</p>
        <div onClick={scrollToTarget} className="mt-[1rem] text-xl flex flex-col content-center">
          <p>check out the latest drop</p>
          <motion.img
            className="size-[2rem] self-center mt-[1rem]"
            src={DA}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity, 
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
    </div>
  );
}
