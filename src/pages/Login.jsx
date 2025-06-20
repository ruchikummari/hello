import React, { useState } from 'react'
import Title from '../components/Title';
function Login() {
    // const[currentState,setCurrentState]=useState('Sign Up');
  return (
    <form className='flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
        <div className='text-2xl inline flex items-center gap-2 mt-10 mb-2'>
            <Title text1={'SIGN'} text2={' UP'}/>
            {/* <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800'/> */}
        </div>
        <input type='text' className='px-3 py-2 border rounded border-gray-800' placeholder='Name' required/>
        <input type='email' className='px-3 py-2 border rounded border-gray-800' placeholder='Email'required/>
        <input type='password' className='px-3 py-2 border rounded border-gray-800' placeholder='Password'required/>
    </form>
  )
}

export default Login
