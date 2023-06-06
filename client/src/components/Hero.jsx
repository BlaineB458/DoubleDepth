import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Hero = () => {
  

  return (
    <section className='flex justify-center items-start w-full h-[110vh]' >
        <div className='flex mt-40 min-w-[80%] justify-between'>
            <div className='w-full'>
                 <h1 className='text-[80px] font-black '>The Full Suite</h1>
                 <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#42baff] to-[#0689d5] inline-block text-[60px] font-black -mt-4 drop-shadow-[#42baff]'>Digital Arsenal</h1>
                 <p className='mt-4 font-medium text-zinc-100/75'>Poise yourself for any business venture with our digital solutions</p>

                 <a href="">
                    <button className='bg-[#0689d5] hover:bg-[#0689d5]/[.75] rounded-full px-6 py-2 font-bold text-white mt-16'>Get Started</button>
                 </a>

            </div>
            <div>
           
            </div>

        
        </div>
    </section>
  )
}

export default Hero









