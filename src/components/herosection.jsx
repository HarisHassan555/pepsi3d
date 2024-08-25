import React from "react";
import Pepsi from "../components/pepsi";
import TL from "../components/topleft";
import TR from "../components/topright";
import P2 from "../components/page2";

export default function Herosection() {
  return (
    <div className="flex w-full relative flex-col combined-gradient">
      <div className="flex items-center flex-col lg:flex-row h-screen text-white">
        <TL className="basis-1/4" />
        <Pepsi className="basis-2/4"/>
        <TR className="basis-1/4" />
      </div>
      <div 
        id="scroll-target" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1.15/2 h-[2rem] bg-white"
      >
        why not meri jaan
      </div>
      <P2 />
    </div>
  );
}
