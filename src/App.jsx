import React from "react";
import HS from "./components/herosection";
import pepsilogo from './assets/pepsilogo.png'

const App = () => {
  return (
    <div className="flex flex-col relative">
      <HS/>
      <img className='w-[8rem] md:w-[12rem] absolute top-1 left-1' src={pepsilogo} alt="" />
    </div>
  );
};

export default App;
