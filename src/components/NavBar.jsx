import React, { useState, useContext } from "react";
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import profile from "../assets/profile.png"
import cart from "../assets/cart.png"
import menu from "../assets/menu.png"
import dropdown from "../assets/dropdown.png"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from '../context/ShopContext';
import SearchBar from './SearchBar';  

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, showSearch } = useContext(ShopContext);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-3 md:px-6 lg:px-25 pt-5">

            <Link to='/'><img src={logo} className="w-35" alt="logo"/></Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-5 text-sm text-grey-700">
                <NavLink to='/' className={({ isActive }) => `flex flex-col items-center gap-1 group ${isActive ? 'active' : ''}`}>
                    <p className="pt-4">HOME</p>
                    <hr className='w-0 group-hover:w-3/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/collection' className={({ isActive }) => `flex flex-col items-center gap-1 group ${isActive ? 'active' : ''}`}>
                    <p className="pt-4">COLLECTION</p>
                    <hr className='w-0 group-hover:w-3/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => `flex flex-col items-center gap-1 group ${isActive ? 'active' : ''}`}>
                    <p className="pt-4">ABOUT</p>
                    <hr className='w-0 group-hover:w-3/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => `flex flex-col items-center gap-1 group ${isActive ? 'active' : ''}`}>
                    <p className="pt-4">CONTACT</p>
                    <hr className='w-0 group-hover:w-3/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
            </ul>

            {showSearch && <SearchBar />}

            {/* Icons Section */}
            <div className="flex items-center gap-2 md:gap-4">
                <img onClick={() => setShowSearch(true)} src={search} className="w-4 md:w-4 cursor-pointer hover:opacity-80 transition-opacity"/>
                <div className="relative group">
                    <img src={profile} className="py-5 w-4 cursor-pointer hover:opacity-80 transition-opacity"/>
                    <div className="hidden group-hover:block absolute right-0 pt-2 z-50">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white shadow-lg text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black transition-colors">My Profile</p>
                            <p className="cursor-pointer hover:text-black transition-colors">Orders</p>
                            <p className="cursor-pointer hover:text-black transition-colors">Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className="relative">
                    <img src={cart} className="w-4 md:w-4 cursor-pointer hover:opacity-80 transition-opacity" />
                    <p className="absolute right-[-5px] bottom-[-10px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={menu} className="w-5 md:w-5 cursor-pointer md:hidden"/>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 bottom-0 w-full md:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
                <div className="flex flex-col text-gray-600 h-full">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b"> 
                        <img className="h-4" src={dropdown}/>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-3 px-6 border-b hover:bg-gray-50 transition-colors ${isActive ? 'active' : ''}`} to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-3 px-6 border-b hover:bg-gray-50 transition-colors ${isActive ? 'active' : ''}`} to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-3 px-6 border-b hover:bg-gray-50 transition-colors ${isActive ? 'active' : ''}`} to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-3 px-6 border-b hover:bg-gray-50 transition-colors ${isActive ? 'active' : ''}`} to='/about'>ABOUT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;