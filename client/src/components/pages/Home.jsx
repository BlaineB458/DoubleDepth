import React from 'react';
import Hero from '../Hero';
import HomeServices from '../HomeServices';
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-0%', '-63%']);
  const mobileY = useTransform(scrollYProgress, [0, 1], ['-30%', '-67%']);

  return (
    <section className='flex flex-col pb-[30vh] md:pb-0 h-[250vh] md:h-[250vh]'>
      <motion.img
        src="/bgblue.webp"
        alt=""
        className='absolute -z-20 hidden md:block md:min-h-[700vh] blur-[14px]'
        style={{ y: y }}
      />
      <motion.img
        src="/bgblue.webp"
        alt=""
        className='absolute block md:hidden min-h-[800vh] -z-20 blur-[14px]'
        style={{ y: mobileY}}
      />
      <Hero />
      <HomeServices />
    </section>
  );
};

export default Home;
