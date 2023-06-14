import React from 'react'
import Hero from '../Hero';
import HomeServices from '../HomeServices';
import { motion, useScroll, useTransform } from "framer-motion"

const Home = () => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ['-0%','-60%']);

  return (
    <>
     <motion.img src="/thermfat.png" alt="" className='absolute -z-20 min-h-[850vh] md:min-h-[600vh] w-full blur-[5px]'  style={{y}} />
    <Hero/>
    <HomeServices/>
    </>
  )
}

export default Home