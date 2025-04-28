import React, { use, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import crossIcon from "../assets/cross_icon.png";
import searchIcon from "../assets/search.png";
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible]=useState(false)
  const location=useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
  },[location])

  if (!showSearch) return null;

  return (
    <div className="border-b border-gray-300 p-4 flex items-center justify-center gap-2">
      <div className="flex items-center border rounded-full px-4 py-2 w-400 max-w-md bg-white">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className="flex-1 outline-none bg-transparent text-sm"
        />
        <img src={searchIcon} alt="Search" className="w-5 h-5" />
      </div>
      <img
        src={crossIcon}
        alt="Close"
        className="w-4 h-4 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  );
}

export default SearchBar;
