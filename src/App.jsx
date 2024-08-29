import React from "react";
import HS from "./components/herosection";
import L from './components/logo'
import P2 from "./components/page2";
import V1 from './components/video1';
import Links from './components/links';
import Carousel2 from "./components/carousel2";
import Footer from "./components/footer";
import { useState, useEffect } from 'react';
import Preloader from './components/preloader';

const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data Loaded');
    }, 3000);
  });
};

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch or initialize your client-side data
    loadData().then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <Preloader isLoading={isLoading} />
    {!isLoading && (
    <div className="flex flex-col relative combined-gradient">
      <HS/>
      <P2/>
      <V1/>
      <Links/>
      <Carousel2/>
      <Footer/>
       <L/>
    </div>
    )}
    </>
  );
};

export default App;
