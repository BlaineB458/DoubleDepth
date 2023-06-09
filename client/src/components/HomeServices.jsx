import React from 'react'

const HomeServices = () => {
  return (
    <section className='flex items-center justify-center w-full py-6' >
        <div className='flex max-w-[80%] flex-col w-full md:items-start items-center'>
        <h1 className='font-extrabold text-[40px] mb-8'>How We Work</h1>
    <div className='grid w-full grid-rows-3 md:grid-cols-3 gap-8 md:min-h-[30vh] h-screen'>
        
   
    <div className='flex flex-col items-start justify-center w-full h-full  bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-[105%] scale-100 transition-all duration-300'>
                    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>01</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DEVELOP</h1>
                </div>
    <div className='flex flex-col items-start justify-center w-full h-full bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-[105%] scale-100 transition-all duration-300'>
    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>02</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DEPLOY</h1>
                </div>
    <div className='flex flex-col items-start justify-center w-full h-full bg-zinc-700/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-[105%] scale-100 transition-all duration-300'>
    <div className="flex justify-between items-center w-full ">
                    <h1 className='text-[60px] select-none font-black text-zinc-100/10'>03</h1>
                    </div>
                    <h1 className='text-md font-extrabold'>DETONATE</h1>
                </div>
    </div>

        </div>
</section>
  )
}

export default HomeServices