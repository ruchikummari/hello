import { createContext, useState } from 'react';
import { products as productsData } from '../data/productsData';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';
import img7 from '../assets/img7.avif';
import img8 from '../assets/img8.avif';
import img9 from '../assets/img9.avif';
import img10 from '../assets/img10.avif';
import img11 from '../assets/img11.avif';
import img12 from '../assets/img12.avif';
import img13 from '../assets/img13.avif';
import img14 from '../assets/img14.avif';
import img15 from '../assets/img15.avif';
import img16 from '../assets/img16.avif';
import img17 from '../assets/img17.avif';
import img18 from '../assets/img18.avif';
import img19 from '../assets/img19.avif';
import img20 from '../assets/img20.avif';
import img21 from '../assets/img21.avif';
import img22 from '../assets/img22.avif';
import img23 from '../assets/img23.avif';
import img24 from '../assets/img24.avif';
import img25 from '../assets/img25.avif';
import img26 from '../assets/img26.avif';
import img27 from '../assets/img27.avif';
import img28 from '../assets/img28.avif';
import img29 from '../assets/img29.avif';
import img30 from '../assets/img30.avif';
import img31 from '../assets/img31.avif';
import img32 from '../assets/img32.avif';
import img33 from '../assets/img33.avif';
import img34 from '../assets/img34.avif';
import img35 from '../assets/img35.avif';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Use imported products data
  const [products] = useState(productsData);

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch
  };

  return (
    <ShopContext.Provider value={{
      products,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      currency,
      delivery_fee
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
