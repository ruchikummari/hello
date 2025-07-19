import React from 'react'
import Title from '../components/Title'
import about from "../assets/about_img.png"

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-12'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>


      <div className='flex flex-row md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={about} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
          <p>Forever was born out of a passion for innovation and a desire revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception we've worked tirelessly to curate a diverse selection of high-quality products that cater to evey taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience and confidence. We're dedicated to providing a seamess shopping experience that exceeds expectations from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-2xl py-8 pt-18'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-row md-flex-col text-sm mb-20'>

        <div className='border border-gray-300 px-20 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality expectations.</p>
        </div>

        <div className='border border-gray-300 px-20 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p>With out user-friendly interface and hassle-free order process, shopping has never been easier.</p>
        </div>

        <div className='border border-gray-300 px-20 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p>Our team of dedicated professionals is here to assist you the way ,ensuring your satisfaction is our top priority.</p>
        </div>

      </div>
    </div>
  )
}

export default About
