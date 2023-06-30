import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, setAuthStatus } from '../redux/userSlice.js';
import UseAnimations from 'react-useanimations'
import checkmark from 'react-useanimations/lib/checkmark';


const Login = () => {

  const [ username, setUsername ] = useState();
  const [ success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
      });
    
      const dispatch = useDispatch();

      const { email, password } = inputValue;
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
          ...inputValue,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://double-depth.onrender.com/login",
            { ...inputValue },{
              withCredentials: true,
            }
          );
          console.log(data);
          dispatch(setAuthStatus({id: data._id, admin: data.isAdmin}))

          setUsername(data.username);

          setSuccess(true);
          setTimeout(() => {
            navigate('/');
          }, 3000);
          
        } catch (error) {
          console.log(error);
        }
      
        setInputValue({
          ...inputValue,
          email: "",
          password: "",
        });
      };
    
      return (
        <div className="flex flex-col">
          <h2 className="text-[40px] font-black mb-8">Login Account</h2>
          <form onSubmit={handleSubmit}>
            {!success && 
            <><div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-extrabold mb-2">Email</label>
                <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange} />
              </div><div className="flex flex-col mb-4">
                  <label htmlFor="password" className="font-extrabold mb-2">Password</label>
                  <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange} />
                </div><button type="submit" className="bg-zinc-100/30 mt-4 px-6 py-2 rounded-full hover:bg-zinc-100 hover:text-zinc-800">Login</button></>
              }

            {success && 
                <div className='h-full w-full flex flex-col justify-center items-center '> 
                    <svg className='h-[40px] w-[40px] mb-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <h1 className=' text-[28px] font-bold'>Welcome back <span>{username}</span></h1>
                </div>
            }
          </form>
        </div>
      );
}

export default Login