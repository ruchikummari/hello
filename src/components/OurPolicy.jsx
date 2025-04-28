import React from 'react'
import exchange_icon from '../assets/exchange_icon.png'
import quality_icon from '../assets/quality_icon.png'
import support_img from '../assets/support_img.png'
function OurPolicy() {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 text-center pt-70 pb-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div>
        <img className='w-12 mb-5 m-auto' src={exchange_icon}/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className='w-12 mb-5 m-auto' src={quality_icon}/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img className='w-9 mt-2 mb-5 m-auto' src={support_img}/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We offer 24/7 customer support</p>
      </div>
    </div>
        <div>
        {/* <p className='font-medium text-sm md:text-base'>Popular Search</p> */}
        </div>
    </div>
    
  )
}

export default OurPolicy
