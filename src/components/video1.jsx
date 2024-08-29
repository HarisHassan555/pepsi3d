import React from "react";
import Pvideo from "../assets/pepsivideo.mp4";
import VI1 from '../assets/videoimg1.png'

export default function Video1() {
  return (
    <div className="video-container justify-items-center flex flex-col-reverse lg:flex-row overflow-hidden relative mt-4">
      <video
        src={Pvideo}
        autoPlay
        loop
        muted
        controls
        preload="auto"
        className=" justify-self-center mx-auto w-[90%] lg:w-full h-auto z-10"
      >
        Your browser does not support the video tag.
      </video>
      <img src={VI1} className="w-[14rem] mx-auto my-[2rem]" alt="" />

      <button className="absolute z-20 text-white uppercase tracking-tight rounded-3xl leading-4 font-black text-xl py-[1rem] px-[1.5rem] lg:text-2xl lg:py-[1.5rem] lg:px-[2rem] bg-[#0025FF] top-[85%] left-1/2 transform -translate-x-1/2">
        learn more
      </button>
    </div>
  );
}
