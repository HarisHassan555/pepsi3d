import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import PL2 from '../assets/pepsilogo2.png';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.img
        className="size-[12rem]"
        src={PL2}
        alt="Loading..."
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Preloader;
