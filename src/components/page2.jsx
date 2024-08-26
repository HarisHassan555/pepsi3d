import React from "react";
import CS from "../components/carousel";

export default function Page2() {
  return (
    <div id="scroll-target" className="h-screen mt-[2rem] pt-[3rem]">
      <div className="flex relative flex-col lg:flex-row-reverse  ">
      <div className="relative uppercase lg:basis-1/2 text-white tracking-tighter mb-[14rem]">
          <div className="absolute top-[8rem] text-center lg:text-start left-1/2 w-max transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-3xl lg:text-5xl font-black">score big with</p>
            <p className="text-7xl lg:text-9xl font-black">Pepsi</p>
            <p className="text-5xl lg:text-7xl font-black">drops</p>
          </div>
        </div>
        <CS />
      </div>
    </div>
  );
}
