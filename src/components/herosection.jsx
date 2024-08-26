import React from "react";
import Pepsi from "../components/pepsi";
import TL from "../components/topleft";
import TR from "../components/topright";

export default function Herosection() {
  return (
    <div className="flex w-full relative flex-col combined-gradient">
      <div className="flex items-center flex-col lg:flex-row h-screen text-white">
        <TL className="basis-1/4" />
        <Pepsi className="basis-2/4"/>
        <TR className="basis-1/4" />
      </div>
    </div>
  );
}
