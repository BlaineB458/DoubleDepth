import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Hero = () => {
  

  return (
    <section className='flex justify-center md:items-start items-center w-full h-[110vh]' >
        <div className='flex w-screen mt-40 justify-center items-center'>
            <div className='w-full max-w-[80%]'>
                <img src="/HeroTxt.png" alt="" className='h-[100px] md:h-[200px] mx-auto md:-ml-8'/>
                 <p className='mt-2 font-black text-center md:text-left text-zinc-100'>Develop. Deploy. Detonate.</p>

                 <a href="" className='flex justify-center items-center max-w-[150px] md:mx-0 mx-auto mt-16 -z-10'>
                      <p className='text-zinc-100 font-bold'>Contact</p>
                      <img src="/ThermalBTN.png" alt="" className='h-[90px] w-[120px] hover:scale-[105%] scale-100 transition-all duration-700 absolute' />
                 </a>
                  <p className='mt-8 font-bold text-zinc-100/80 mx-auto md:mx-0 text-center md:text-left max-w-screen pr-[40%] py-20 text-md'>At Double Depth ,we offer an all in one solution
to your digital marketing needs. Specialising in both custom
digital products and professional marketing services; we are
fully equipped to service entire Ad-campaigns from GFX,
scripting, cinematography and VFX all the way to website
design, hosting, SEO and analytics.</p>
            </div>
            <div>
           
            </div>

        
        </div>
    </section>
  )
}

export default Hero









