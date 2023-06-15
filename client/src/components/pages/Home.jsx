import React from 'react'
import Hero from '../Hero';
import HomeServices from '../HomeServices';
import { motion, useScroll, useTransform } from "framer-motion"

const Home = () => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ['-0%','-60%']);

  return (
    <div className='pb-80'>
     <motion.img src="/thermfat.png" alt="" className='absolute -z-20 hidden md:block md:min-h-[600vh] w-full blur-[5px]'  style={{y}} />
     <motion.img src="/MobileDDBG.png" alt="" className='absolute block md:hidden min-w-[1000px] -right-20 -z-20 min-h-[600vh] md:min-h-[600vh] w-full blur-[5px]'  style={{y}} />
    <Hero/>
    <HomeServices/>
    </div>
  )
}

export default Home