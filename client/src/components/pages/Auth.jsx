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
    <main className='flex flex-col justify-center items-center'>
        <section className='flex justify-center items-center min-h-[80vh] max-w-3xl mx-auto pb-[30vh] pt-[20vh]'>
        <img src="/bgservice.webp" alt="" className='absolute -z-20 cover blur-[5px]' />
            <div className='flex flex-col justify-center items-center w-full h-[50%]'>
        {!isLogin ? <Signup/> : <Login/>}
        <span className='font-semibold font-xs py-1 px-2'>{!isLogin ? 'Already have an account? ' : 'Don\'t have an account? '}<button className='my-16 mr-auto font-bold text-xs bg-[#8CCD6F]/[.3] hover:bg-[#8CCD6F]/[.6] px-2 py-1 rounded-full hover:text-[#4f733f] text-[#8CCD6F]' onClick={toggle}>{!isLogin ?   "Login" : "Singup"}</button></span>
       

            </div>
        </section>
    </main>
    )
}

export default Auth