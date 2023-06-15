import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Footer, Login, Navbar, EmailContactForm } from './components/index.js'
import { Home, Services, Work, Auth, AuthProject } from './components/pages'
import { Navigate, Route, Routes, useLocation} from 'react-router-dom'
import { login, setAuthStatus } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

const App = () => {

  const [admin,setAdmin] = useState(false);

  const dispatch = useDispatch()

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page instantly when the route changes
    scroll.scrollToTop({ duration: 0 });
  }, [pathname]);

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
    <div className='overflow-hidden relative'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<EmailContactForm/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/auth' element={<Auth/>} />
          <Route
        path="/admin-projects"
        element={ admin ? <AuthProject/> : <Navigate to='/work'/>}/>
        <Route path="*" element={<Home />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

