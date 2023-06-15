import React from 'react'
import {motion} from 'framer-motion'

const HomeServices = () => {
  return (
    <section className='flex items-center justify-center w-full py-6' >
        <div className='flex max-w-[80%] flex-col w-full md:items-start items-center'>
        <h1 className='font-extrabold text-[40px] mb-16'>How We Work</h1>
    <div className='grid w-full grid-rows-3 md:grid-cols-3 md:min-h-[30vh] min-h-[80vh]'>
        
   
    <motion.div className='flex flex-col items-start justify-center w-full md:h-full h-[80%]  bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm' whileHover={{ scale: [null, 1.05] }}
      transition={{ duration: 0.3 }}>
                    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>01</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DEVELOP</h1>
                </motion.div>
    <motion.div className='flex flex-col items-start justify-center w-full md:h-full h-[80%] bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm'  whileHover={{ scale: [null, 1.05] }}
      transition={{ duration: 0.3 }}>
    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>02</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DEPLOY</h1>
                </motion.div>
    <motion.div className='flex flex-col items-start justify-center w-full md:h-full h-[80%] bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm' whileHover={{ scale: [null, 1.05] }}
      transition={{ duration: 0.3 }}>
    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>03</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DETONATE</h1>
                </motion.div>
    </div>

        </div>
</section>
  )
}

export default HomeServices