import React from 'react'
import Pepsi from '../components/pepsi';
import TL from '../components/topleft';
import TR from '../components/topright'
import P2 from '../components/page2'

export default function Herosection() {
  return (
    <div className='flex relative flex-col combined-gradient'>
    <div className="flex flex-col lg:flex-row h-screen w-full text-white">
      <TL className='flex basis-1/4'/>
      <Pepsi className='flex basis-2/4'/>
      <TR className='flex z--10 basis-1/4'/>
    </div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1.15/2 h-[2rem] bg-white w-full'> why not meri jaan</div>
    <P2/>
    </div>
  )
}
