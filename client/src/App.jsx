import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Login, Navbar } from './components/index.js'
import { Home, Services, Work, Auth, AuthProject } from './components/pages'
import { Navigate, Route, Routes} from 'react-router-dom'
import { login, setAuthStatus } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import AuthChecker from './components/AuthChecker.jsx'

const App = () => {

  const [admin,setAdmin] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    // Perform user authentication check on component mount
    authenticateUser()
  })

  const authenticateUser = async () => {
    try {
      const response = await axios.get('https://double-depth.onrender.com/authStatus', { withCredentials: true })
      const userPayload = response.data.token.id;
      const isAdmin = response.data.user.isAdmin;

      if(userPayload){

        console.log(userPayload)
        setAdmin(true);
        dispatch(setAuthStatus({id:userPayload, admin: isAdmin}))
      }else{

      }

    } catch (error) {
      // Handle the error
      console.log('Error:', error)
    }
  }

  return (
    <>
    <div className='w-screen h-[400vh] backdrop-blur-[10px] fixed -z-20'></div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/auth' element={<Auth/>} />
          <Route
        path="/admin-projects"
        element={ admin ? <AuthProject/> : <Navigate to='/work'/>}/>
        <Route path="*" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

