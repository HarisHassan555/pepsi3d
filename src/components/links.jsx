import React from "react";
import Pvideo2 from "../assets/pepsivideo2.mp4";
import Pvideo3 from "../assets/pepsivideo3.mp4";

export default function Links() {
  return (
    <div className="flex flex-col">
      <div className="w-full relative mt-4">
        <video
          src={Pvideo2}
          autoPlay
          loop
          muted
          controls
          preload="auto"
          className=" justify-self-center mx-auto lg:w-full h-auto z-10"
        ></video>
        <button className="absolute z-20 text-white uppercase tracking-tight rounded-3xl leading-4 font-black text-xl py-[1rem] px-[1.5rem] lg:text-2xl lg:py-[1.5rem] lg:px-[2rem] bg-[#0025FF] top-[75%] lg:top-[85%] left-1/2 transform -translate-x-1/2">
        View products
      </button>
      </div>

      <div className="w-full relative mt-4">
        <video
          src={Pvideo3}
          autoPlay
          loop
          muted
          controls
          preload="auto"
          className=" justify-self-center mx-auto w-full z-10"
        ></video>
        <button className="absolute z-20 text-white uppercase tracking-tight rounded-3xl leading-4 font-black text-xl py-[1rem] px-[1.5rem] lg:text-2xl lg:py-[1.5rem] lg:px-[2rem] bg-[#0025FF] top-[75%] lg:top-[85%] left-1/2 transform -translate-x-1/2">
        View recipies
      </button>
      </div>
    </div>
  );
}
