import React from "react";
import HS from "./components/herosection";
import L from './components/logo'
import P2 from "./components/page2";
import V1 from './components/video1'



const App = () => {
  return (
    <div className="flex flex-col relative combined-gradient">
      <HS/>
      <P2/>
      <V1/>
       <L/>
    </div>
  );
};

export default App;
