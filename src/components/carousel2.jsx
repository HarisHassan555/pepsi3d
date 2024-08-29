import React from 'react'
import PL2 from '../assets/pepsilogo2.png'

export default function Carousel2() {
  return (
    <div className='flex flex-col py-4 bg-black'>
        <div className=' uppercase justify-center text-white text-center'>
            <img className='size-[8rem] md:size-[12rem] mx-auto' src={PL2} alt="" />
            <p className='text-6xl font-bold'>stay on the</p>
            <p className='text-[#0025FF] text-8xl font-extrabold'>Pulse</p>
        </div>
        <div>
            
        </div>
      
    </div>
  )
}
