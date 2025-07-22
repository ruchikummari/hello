import React from 'react'
import logo from "../assets/admin_assets/logo.png"
const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'> 
      <img className='w-[max(10%,80px)]' src={logo} alt=''/>
      <button className='bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
