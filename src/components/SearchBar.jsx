import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import crossIcon from "../assets/cross_icon.png";
import searchIcon from "../assets/search.png";
import { useLocation, useNavigate } from 'react-router-dom';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch, products } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  useEffect(() => {
    // Filter products based on search query
    if (search.trim()) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.subCategory.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 5); // Limit to 5 results
      setSearchResults(results);
      setIsDropdownVisible(true);
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false);
    }
  }, [search, products]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setShowSearch(false);
    setSearch('');
    setIsDropdownVisible(false);
  };

  if (!showSearch) return null;

  return (
    <div className="border-b border-gray-300 p-4 flex items-center justify-center gap-2">
      <div className="relative flex items-center border rounded-full px-4 py-2 w-400 max-w-md bg-white" ref={searchRef}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-none bg-transparent text-sm"
          onFocus={() => setIsDropdownVisible(true)}
        />
        <img src={searchIcon} alt="Search" className="w-5 h-5" />
        
        {/* Search Results Dropdown */}
        {isDropdownVisible && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
            {searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <img
        src={crossIcon}
        alt="Close"
        className="w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => {
          setShowSearch(false);
          setSearch('');
          setIsDropdownVisible(false);
        }}
      />
    </div>
  );
}

export default SearchBar;
