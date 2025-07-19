import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import razorpay from "../assets/razorpay_logo.png";
import stripe from "../assets/stripe_logo.png";
// import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {

    const [method,setMethod]=useState('cod');
    // const {navigate}=useContext(ShopContext);
    const navigate = useNavigate();
    
  return (
    <div className='flex flex-row sm:flex-col justify-between gap-4 pt-5 sm:pt-14 min-h-[80-vh] border-top mx-10'>
        {/* ----------left half---------- */}
      <div className='flex flex-col gap-4 w-1/2 sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={' INFORMATION'}/>
        </div>

        <div className='flex gap-3'>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='First Name' type='text'/>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='Last Name' type='text'/>
        </div>
        <input className='border border-gray-300 w-full py-1.5 px-2 rounded' placeholder='Email Address'/>
        <input className='border border-gray-300 w-full py-1.5 px-2 rounded' placeholder='Street'/>
        <div className='flex gap-3'>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='City' type='text'/>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='State' type='text'/>
        </div><div className='flex gap-3'>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='Pincode' type='text'/>
            <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='Country' type='text'/>
        </div>
        <input className='border border-gray-300 py-1.5 px-2 rounded text:sm w-full' placeholder='Phone number' type='Number'/>
      </div>
        {/* ----------right half---------- */}
        <div className='mt-8'>
            <div className='w-8 min-w-80'>
                <CartTotal/>
            </div>
            <div className='mt-12'>
                <Title text1={'PAYMENT'} text2={' METHOD'}/>
                <div className='flex flex-row lg:flex-col gap-3'>
                <div onClick={()=>setMethod('stripe')} className='flex items-center border p-2 px-3 cursor-pointer gap-3'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4 'src={stripe}/>
                </div>
                <div onClick={()=>setMethod('razorpay')} className='flex items-center border p-2 px-3 cursor-pointer gap-3'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4 'src={razorpay}/>
                </div>
                <div onClick={()=>setMethod('cod')} className='flex items-center border p-2 px-3 cursor-pointer gap-3'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ? 'bg-green-400' : ''}`}></p>
                    <p className='text-gray-800'>Cash On Delivery</p>
                </div>
                </div>
                <div className='w-full mt-8 text-end'>
                    <button onClick={()=>navigate('/orders')} className='bg-black text-white px-12 py-3 my-8 text-sm rounded'>PLACE ORDER</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder
