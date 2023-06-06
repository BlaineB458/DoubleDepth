import React from 'react'

const HomeServices = () => {
  return (
    <section className='flex items-center justify-center w-full py-6' >
        <div className='flex max-w-[80%] flex-col w-full'>
        <h1 className='font-extrabold text-[40px] mb-8'>How We Work</h1>
    <div className='grid grid-cols-3 gap-8 h-[30vh]'>
        
   
    <div className='flex flex-col items-start justify-between w-full h-full bg-zinc-900/40 rounded-3xl p-8'>
                    <div className="flex justify-between items-center w-full">
                    <img src="/DoubleDepthLogo.png" alt="" className='h-[60px] w-[60px]'/>
                    <h1 className='text-[60px] select-none font-black text-zinc-500/5'>01</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>Consultation</h1>
                    <p className='text-sm text-zinc-100/50'>Meet with us to discuss your goal and we'll take you there!</p>
                </div>
    <div className='flex flex-col items-start justify-between w-full h-full bg-zinc-900/40 rounded-3xl p-8'>
    <div className="flex justify-between items-center w-full">
                    <img src="/DoubleDepthLogo.png" alt="" className='h-[60px] w-[60px]'/>
                    <h1 className='text-[60px] select-none font-black text-zinc-500/5'>02</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>Implementation</h1>
                    <p className='text-sm text-zinc-100/50'>Using our own proprietary systems,</p>
                </div>
    <div className='flex flex-col items-start justify-between w-full h-full bg-zinc-900/40 rounded-3xl p-8'>
    <div className="flex justify-between items-center w-full">
                    <img src="/DoubleDepthLogo.png" alt="" className='h-[60px] w-[60px]'/>
                    <h1 className='text-[60px] select-none font-black text-zinc-500/5'>03</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>Service</h1>
                    <p className='text-sm text-zinc-100/50'>Meet with us to discuss your goal and we'll advise you how to get there!</p>
                </div>
    </div>

        </div>
</section>
  )
}

export default HomeServices