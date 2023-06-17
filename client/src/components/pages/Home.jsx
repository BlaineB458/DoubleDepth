import React from 'react'
import Hero from '../Hero';
import HomeServices from '../HomeServices';
import { motion, useScroll, useTransform } from "framer-motion"

const Home = () => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ['-30%','-70%']);

  return (
    <section className='flex flex-col pb-[30vh]'>
     <motion.img src="/thermfat.png" alt="" className='absolute -z-20 hidden md:block md:min-h-[650vh] blur-[5px]'  style={{y}} />
     <motion.img src="/mobilebg.jpeg" alt="" className='absolute md:hidden min-h-[700vh] -z-20 blur-[5px]'  style={{y}} />
    <Hero/>
    <HomeServices/>
    </section>
  )
}

export default Home