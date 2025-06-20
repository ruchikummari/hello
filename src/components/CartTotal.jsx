import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

function CartTotal() {
  const { currency, delivery_fee, getCartAmount, cartItems } = useContext(ShopContext);
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    setCartAmount(getCartAmount());
  }, [cartItems]); 

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={' TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{cartAmount}.00</p>
        </div>
        <hr className='border-t border-gray-200' />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr className='border-t border-gray-200'/>
        <div className='flex justify-between'>
          <p>Total</p>
          <p>{currency}{cartAmount === 0 ? 0 : cartAmount + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
