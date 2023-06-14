import React from 'react'
import { useState } from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
  const auth = useSelector((state) => state.user);

  const isAdmin = auth ? auth.admin : false;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try{

      await axios.get('https://double-depth.onrender.com/logout', {withCredentials:true})
      dispatch(logout());
      navigate('/');
    }catch(err){
      console.log(err);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`flex justify-center w-full items-center top-0 fixed p-2 z-30 backdrop-blur-[3px] ${isOpen ? 'flex-col':'flex-row'}`}>
       <nav className={`min-w-[80%] flex py-2 ${isOpen ? 'justify-end':'justify-between'} items-center`} >
      <NavLink to={'/'} className={`${isOpen ? 'hidden' : 'block'}`} >
      <div className="flex items-center justify-center">
         <img src="/pnglogo.png" alt="double depth logo" className='h-[50px] mr-2'/>
      </div>
      </NavLink>

      <div className="flex md:hidden">
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          onClick={toggleMenu}
        >
          <svg
            className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>


      <ul className='hidden md:block md:flex items-center justify-center'>
        <li className='ml-8'>

            <NavLink to={'/services'} className=" hover:cursor-pointer p-2"><p className='text-[14px] hover:text-[rgb(254,185,2)] hover:drop-shadow-[0_0_10px_rgb(241,116,46)] font-extrabold'>Services</p></NavLink>
            

        </li>
        <li className='ml-8'>
        <NavLink to={'/work'} className=" hover:cursor-pointer p-2"><p className='text-[14px] hover:text-[rgb(254,185,2)] hover:drop-shadow-[0_0_10px_rgb(241,116,46)] font-extrabold'>Work</p></NavLink>
       
        </li>
        <li className='ml-8'>
           {!auth ?          
              <NavLink to={'/auth'} className='group'>
            <button className='px-6 py-2 rounded-full group-hover:border-zinc-100/50 border-zinc-100 border-[1px] flex flex-row justify-center'>
                <p className="text-[14px] font-extrabold group-hover:text-zinc-100/50">Login</p>
                <TrendingFlatIcon className='ml-2 group-hover:text-zinc-100/50 group-hover:fill-zinc-100/50'/>
              </button>
             </NavLink>
             :

            <button onClick={handleLogout} className='group px-6 py-2 rounded-full bg-zinc-100 group-hover:bg-zinc-100/50 flex flex-row justify-center'>
                <p className="text-[14px] text-zinc-900 font-extrabold group-hover:text-zinc-900/50">Logout</p>
              </button>

}
          </li>
          {auth && isAdmin &&
            <li>
              <NavLink to={'/admin-projects'} className='group'>
            <button className='group bg-gradient-to-r from-[#42baff] to-[#0689d5] px-6 py-2 rounded-full flex flex-row justify-center'>
                <p className="text-[14px] font-extrabold group-hover:text-zinc-100/50">Admin</p>
              </button>
             </NavLink>
            </li>

          } 
         
      </ul>


    </nav>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col min-h-[30vh] justify-around backdrop-blur-3xl top-0 w-screen z-40`}>
        <aside>
          <ul className='flex flex-col justify-center items-center h-full'>
            <li className='mb-6 font-bold text-lg w-full'><NavLink to={'/'} className='flex flex-row items-center justify-center'>
              <p>Home</p>
              <svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg>
</NavLink>
</li>
            <li className='mb-6 font-bold text-lg w-full'><NavLink to={"/services"} className='flex flex-row items-center justify-center'><p>Services</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
            <li className='mb-6 font-bold text-lg flex'><NavLink to={'/work'} className='flex flex-row items-center justify-center'><p>Work</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
            <li className='mt-6 font-bold text-base flex'><NavLink href="/auth" className='flex flex-row items-center justify-center'><p>Login</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
          </ul>


        </aside>

      </div>
    </div>
      
      
      )
    }
    
    export default Navbar