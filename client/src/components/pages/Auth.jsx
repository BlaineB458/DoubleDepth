import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import  Login  from '../Login'
import Signup from '../Signup'

const Auth = () => {

    const [isLogin,setIsLogin] = useState(false);
const toggle = () => {
    setIsLogin(!isLogin);
}
    return(
    <main className='flex flex-col justify-center itemscenter'>
        <section className='flex justify-center items-center h-screen max-w-3xl mx-auto'>
            <div className='flex flex-col justify-center items-center w-full h-[50%]'>
        {!isLogin ? <Signup/> : <Login/>}
        <span className='font-semibold font-xs py-1 px-2'>Already have an account?  <button className='my-16 mr-auto font-bold text-xs hover:bg-[#0689d5]/[.3] px-2 py-1 hover:rounded-full text-[#0689d5]' onClick={toggle}>{!isLogin ?   "Login" : "Singup"}</button></span>
       

            </div>
        </section>
    </main>
    )
}

export default Auth