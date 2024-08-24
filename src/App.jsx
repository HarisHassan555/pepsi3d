import React from "react";
import HS from "./components/herosection";
import pepsilogo from './assets/pepsilogo.png'

const App = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#07090F] from-10% via-[#050507] via-50% to-[#07090F] to-90%">
          <img className='w-[4rem] md:w-[8rem]' src={pepsilogo} alt="" />
      <HS />
    </div>
  );
};

export default App;

// bg-gradient-to-r from-[#07090F] from-10% via-[#050507] via-50% to-[#07090F] to-90%