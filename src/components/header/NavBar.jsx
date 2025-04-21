import React, { useState } from "react";
import ajiologo from "../../assets/ajiologo.svg"
import search from "../../assets/search.webp"
import profile from "../../assets/profile.jpeg"
import cart from "../../assets/cart.jpg"
import menu from "../../assets/menu.jpg"
import { Link, NavLink } from "react-router-dom"
const NavBar=()=>{

    const [visible,setvisible]=useState(false);

    return (
        <div className=" flex items-center justify-between px-28 py-5 border">
            <img src={ajiologo} className="w-30 " alt="logo"/>
            <ul className="flex gap-5 text-sm text-grey-700">
                <NavLink to='/' className=' flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='hidden w-3/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/about' className=' flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='hidden w-3/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='hidden w-3/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                
            </ul>
            <div className="flex items-center gap-4">
                <img src={search} className="w-12"/>
                <div className="group-relative">
                    <img src={profile} className="py-5 w-4 cursor-pointer"/>
                    <div className="hidden absolute group-hover:block dropdown-menu right-0 pt-2">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className="relative">
                    <img src={cart} className="w-7 " />
                    <p className="absolute right-[-5px] bottom-[-10px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>
                <img onClick={()=>setvisible(true)} src={menu} className="w-7 cursor-pointer sm:hidden"/>
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transitio-all ${visible ? 'w-full':'w-0'}` }>

            </div>
        </div>
    )
}
export default NavBar
