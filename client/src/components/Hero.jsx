import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Hero = () => {
  

  return (
    <section className='flex justify-center items-start w-full h-[110vh]' >
        <div className='flex mt-40 min-w-[80%] justify-between'>
            <div className='w-full'>
                <img src="/doubledepth6.png" alt="" className='h-[200px] -ml-4'/>
                 <h1 className='text-[40px] font-black -mt-4 drop-shadow-[#42baff] text-zinc-100'>Multimedia Specialists</h1>
                 <p className='mt-2 font-extralight text-zinc-100/75'>Develop. Deploy. Detonate.</p>

                 <a href="" className='flex justify-center items-center max-w-[150px] mt-16 -z-10'>
                      <p className='text-zinc-100 font-bold'>Contact</p>
                      <img src="/bestbubble.png" alt="" className='h-20 w-[150px] hover:scale-[105%] scale-100 transition-all duration-700 absolute' />
                 </a>

            </div>
            <div>
           
            </div>

        
        </div>
    </section>
  )
}

export default Hero









