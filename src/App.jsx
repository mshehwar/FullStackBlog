import { useState ,useEffect} from 'react'
import {useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import './App.css'
import { logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/footer/Footer'
import React from 'react'
import { login } from './store/authSlice'
import Hero from './component/Hero'


function App() {
  const [loading,setloading] = useState (true)
  const dispatch =useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  },[])

  return  !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
       <Header />
       
        <main>
          <Outlet /> 
        </main>
        
        <Footer />
      </div>
    </div>
  
  ):null
}

export default App
