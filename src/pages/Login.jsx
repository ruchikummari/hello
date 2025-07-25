import React, { useState } from 'react'
import Title from '../components/Title';
const Login=()=> {
  const[currentState,setCurrentState]=useState('Sign Up');
  const onSubmitHandler = async(event)=>{
    event.preventDefault();
  }
  return (
    <form  onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
        <div className='text-2xl inline flex items-center gap-2 mt-10 mb-2'>
            <Title text1={''} text2={currentState}/>
        </div>
        {currentState ==='Login' ? '' : <input type='text' className='w-[90%]  px-3 py-2 border rounded border-gray-800' placeholder='Name' required/>}
        <input type='email' className='w-[90%] px-3 py-2 border rounded border-gray-800' placeholder='Email'required/>
        <input type='password' className='w-[90%] px-3 py-2 border rounded border-gray-800' placeholder='Password'required/>
        <div className='w-full flex justify-between text-sm mt-[-8px] '>
          <p className='cursor-pointer'>Forgot Password ?</p>
          {
            currentState ==='Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          }
        </div>
        <button className='text-white bg-black font-light px-8 py-2 mt-4'>{currentState ==='Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
