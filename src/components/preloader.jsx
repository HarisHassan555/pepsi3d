import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import PL from '../assets/pepsilogo.png';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.img
        className="w-[24rem]"
        src={PL}
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
