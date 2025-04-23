import React, { createContext } from 'react'
export const shopContext = createContext();
const ShopContextProvider=(props)=>{

    const currency = '$';
    const delivery_fee=10;

    const value={
        currency , delivery_fee
    }

  return (
    <ShopContextProvider value={value}>
        {props.children}
    </ShopContextProvider>
  )
}
export default ShopContextProvider