// ShopContext.jsx
import { createContext, useState } from 'react';
// import { products as productsData } from '../data/productsData';
import axios from 'axios'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const backendUrl= import.meta.env.VITE_BACKEND_URL;
  console.log("backendUrl is:", backendUrl);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const[products,setProducts]=useState([])
  // const navigate = useNavigate();

  const addToCart = async (id, size) => {
    if (!size) {
      console.error('Select Product Size');
      return;
    }

    const cartData = structuredClone(cartItems);

    if (!cartData[id]) {
      cartData[id] = {};
    }

    if (!cartData[id][size]) {
      cartData[id][size] = 0;
    }

    cartData[id][size] += 1;
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        const count = cartItems[id][size];
        if (count > 0) {
          totalCount += count;
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = (id, size, quantity) => {
    const cartData = structuredClone(cartItems);
  
    if (!cartData[id] || !cartData[id][size]) return;
  
    if (quantity <= 0) {
      delete cartData[id][size];
      if (Object.keys(cartData[id]).length === 0) {
        delete cartData[id];
      }
    } else {
      cartData[id][size] = quantity;
    }
  
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const id in cartItems) {
      const itemInfo = products.find((product) => product.id.toString() === id.toString());
      if (!itemInfo) continue;
  
      for (const size in cartItems[id]) {
        const quantity = cartItems[id][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }
  
    return totalAmount;
  };
  
  const getProductsData=async()=>{
    try {
      const response=await axios.post(`${backendUrl}/api/product/list`)
      if(response.data.success){
        setProducts(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getProductsData()
  },[])
  
  const value = {
    products: products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,backendUrl
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

//  Clean and consistent export
export default ShopContextProvider;
