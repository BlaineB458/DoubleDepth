import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, setAuthStatus } from '../redux/userSlice.js';


const Login = () => {

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
              withCredentials: true
            }
          );
          console.log(data);
          dispatch(setAuthStatus({id: data._id, admin: data.isAdmin}))
          navigate('/');
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
              <label htmlFor="password" className="font-extrabold mb-2">Password</label>
              <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="bg-zinc-100/30 mt-4 px-6 py-2 rounded-full hover:bg-zinc-100 hover:text-zinc-800">Login</button>
          </form>
        </div>
      );
}

export default Login