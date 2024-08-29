import React from "react";
import HS from "./components/herosection";
import L from './components/logo'
import P2 from "./components/page2";
import V1 from './components/video1';
import Links from './components/links';
import Carousel2 from "./components/carousel2";
import Footer from "./components/footer";



const App = () => {
  return (
    <div className="flex flex-col relative combined-gradient">
      <HS/>
      <P2/>
      <V1/>
      <Links/>
      <Carousel2/>
      <Footer/>
       <L/>
    </div>
  );
};

export default App;
