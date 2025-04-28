import React from 'react'
function Footer() {
  return (
    <div>
        <div className='flex flex-small sm:grid grid-cols-4 gap-14 my-10 mt-20 text-sm'>
        <div>
        <p className='text-xl font-medium mb-5'>FOREVER</p>
            <p className='w-full md:w-2/3 text-gray-600'></p>
            <ul>
                <li>Who We Are</li>
                <li>Join Our Team</li>
                <li>Terms & Conditions</li>
                <li>Returns & Refunds Policy</li>
                <li>Fees & Payments</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>CONTACT US</p>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>FOLLOW US</p>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
            </ul>
        </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@forever.com-All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
