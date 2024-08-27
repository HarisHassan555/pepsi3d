import React from "react";
import Pvideo from "../assets/pepsivideo.mp4";

export default function Video1() {
  return (
    <div className="video-container relative mt-4">
      <video
        src={Pvideo}
        autoPlay
        loop
        muted
        controls
        preload="auto"
        className="w-[80%] mx-auto lg:w-full h-auto z-10"
      >
        Your browser does not support the video tag.
      </video>
      <button className="absolute z-20 text-white uppercase tracking-tight rounded-3xl leading-4 font-black text-2xl py-[1.5rem] px-[2rem] bg-[#0025FF] top-[80%] left-1/2 transform -translate-x-1/2">
        learn more
      </button>
    </div>
  );
}
