import React, { useState } from "react";
import pepsilogo from "../assets/pepsilogo.png";
export default function Logo() {
  return (
    <img className='w-[8rem] md:w-[12rem] absolute top-1 left-0 rounded-[60rem]' src={pepsilogo} alt="" />
);
}
