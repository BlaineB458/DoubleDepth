import React from 'react'
import { useState, useEffect } from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <nav className={`flex flex-col justify-center top-0 items-center fixed left-0 transition-all w-full duration-700 ease-in-out ${
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none -top-[100px]'
    } p-2 z-30 backdrop-blur-[3px]`}>
       <div className={`min-w-[80%] flex py-2 justify-between items-center`} >
      <NavLink to={'/'} onClick={() => setIsOpen(false)}>
      <div className="flex items-center justify-center">
         <img src="/pnglogo.webp" alt="double depth logo" className='h-[50px] mr-2'/>
      </div>
      </NavLink>

      <div className="flex md:hidden">
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        >
        <span
          className={`block w-6 h-[2px] my-[2px] transition-all bg-zinc-50 transform ${
            isOpen ? 'rotate-45 translate-y-[4px]' : '-translate-y-1'
          }`}
          ></span>
        <span
          className={`block w-6 h-[2px] my-[2px] transition-all bg-zinc-50 ${
            isOpen ? 'opacity-0' : ''
          }`}
          ></span>
        <span
          className={`block w-6 h-[2px] my-[2px] transition-all bg-zinc-50 transform ${
            isOpen ? '-rotate-45 -translate-y-[4px]' : 'translate-y-1'
          }`}
          ></span>
          </button>
      </div>


      <ul className='hidden md:flex items-center justify-center'>
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


    </div>
      <div className={`md:hidden ${isOpen ? 'opacity-100 top-20' : 'opacity-0 pointer-events-none -top-[500px]'} absolute flex flex-col min-h-[30vh] backdrop-blur-md justify-around duration-300 ease-in-out w-screen`}>
        <aside>
          <ul className='flex flex-col justify-start items-center h-full'>
            <li className='mb-6 font-bold text-lg w-full'><NavLink onClick={() => setIsOpen(!isOpen)}  to={"/contact"} className='flex flex-row items-center justify-center'><p>Contact</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
            <li className='mb-6 font-bold text-lg w-full'><NavLink onClick={() => setIsOpen(!isOpen)}  to={"/services"} className='flex flex-row items-center justify-center'><p>Services</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
            <li className='mb-6 font-bold text-lg flex'><NavLink onClick={() => setIsOpen(!isOpen)}  to={'/work'} className='flex flex-row items-center justify-center'><p>Work</p><svg className='mt-[5px] ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 16l8-8-8-8" />
</svg></NavLink></li>
            <li className='mt-6 font-bold text-base flex'><NavLink onClick={() => setIsOpen(!isOpen)}  to={'/auth'} className='flex flex-row items-center justify-center'>   <button className='px-6 py-2 rounded-full group-hover:border-zinc-100/50 border-zinc-100 border-[1px] flex flex-row justify-center'>
                <p className="text-[14px] font-extrabold group-hover:text-zinc-100/50">Login</p>
                <TrendingFlatIcon className='ml-2 group-hover:text-zinc-100/50 group-hover:fill-zinc-100/50'/>
              </button></NavLink></li>
          </ul>


        </aside>

      </div>
    </nav>
      
      
      )
    }
    
    export default Navbar