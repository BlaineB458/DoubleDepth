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


  return (
    <div className='flex justify-center w-full backdrop-blur-sm top-0 fixed z-10'>
       <nav className='min-w-[80%] flex py-6 justify-between items-center '>
      <NavLink to={'/'} >
      <div className="flex items-center justify-center">
         <img src="/logo.png" alt="double depth logo" className='h-[50px] w-[50px] mr-2'/>
      </div>

        </NavLink>
      <ul className='flex flex-row items-center justify-center'>
        <li className='ml-8'>

            <NavLink to={'/services'} className="text-[14px] font-extrabold hover:text-gray-600 hover:cursor-pointer">Services</NavLink>

        </li>
        <li className='ml-8'>
        <NavLink to={'/work'} className="text-[14px] font-extrabold hover:text-gray-600 hover:cursor-pointer">Work</NavLink>
        </li>
        <li className='ml-8'>  
        <NavLink to={'/about'} className="text-[14px] font-extrabold hover:text-gray-600 hover:cursor-pointer">About</NavLink>

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
    </div>
      
      
      )
    }
    
    export default Navbar