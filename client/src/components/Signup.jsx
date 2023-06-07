import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthStatus } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { email, password, username } = inputValue;

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
        "https://double-depth.onrender.com/register",
        {
          ...inputValue,
        },{
          withCredentials: true
        }
      );
      dispatch(setAuthStatus({id: data._id, admin: data.isAdmin}))
        navigate('/');
      console.log(data);

    } catch (error) {
      console.log(error);
    }
    setInputValue({
        ...inputValue,
        username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-[40px] font-black mb-8">Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-extrabold mb-2">Email</label>
          <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-sm"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-extrabold mb-2">Username</label>
          <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-sm"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="font-extrabold mb-2">Password</label>
          <input className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-sm"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="bg-zinc-100/30 mt-4 px-6 py-2 rounded-full hover:bg-zinc-100 hover:text-zinc-800">Register</button>
      </form>
    </div>
  );
};

export default Signup;