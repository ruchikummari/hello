import React, { useEffect, useState } from 'react'
import AdminLogin from './components/AdminLogin.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

useEffect(()=>{
  localStorage.setItem('token',token)
},[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ''
      ? <AdminLogin setToken={setToken}/>
      :<>
      <Navbar/>
      <hr/>
      <div className='flex w-full'>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vp,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/orders' element={<Orders/>}/>
          </Routes>
        </div>
      </div>
      </>
      }
      
    </div>
  )
}

export default App
