import React from 'react'

const Contact = () => {
  return (
    <section>
         <div>
         <h1>Contact</h1>
         <form action="">
         <div className="flex flex-col mb-4">
              <label htmlFor="email" className="font-extrabold mb-2">Email</label>
              <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="font-extrabold mb-2">Email</label>
              <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
         </form>
        </div>
    </section>
   
  )
}

export default Contact