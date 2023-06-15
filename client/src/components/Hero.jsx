import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Hero = () => {
  

  return (
    <section className='flex justify-center md:items-start items-center w-full h-[100vh]' >
        <div className='flex w-screen justify-center items-center h-full'>
            <div className='w-full max-w-[80%] flex flex-col items-start justify-center h-full'>
                <img src="/HeroTxt.png" alt="" className='h-[100px] md:h-[240px] mr-auto '/>

                 <NavLink to={'/contact'} className='flex justify-center items-center mx-auto mt-10 min-w-[150px] md:ml-20 md:mt-24 z-10 relative'>
                      <p className='text-zinc-100 font-bold'>Contact</p>
                      <img src="/ThermalBTN.png" alt="" className='h-[90px] w-[200px] hover:scale-[105%] scale-100 transition-all duration-700 absolute' />
                 </NavLink>
              
            </div>
            <div>
           
            </div>

        
        </div>
    </section>
  )
}

export default Hero









