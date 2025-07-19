import React from 'react';
import Title from '../components/Title'

function Contact() {
  return (
    <div className="text-center pt-12 text-2xl px-20">
      <Title text1={'CONTACT'} text2={' US'}/>

      <div className="flex flex-col gap-10 mt-8">
        {/* ---------- Contact Form ---------- */}
        <div className="w-full flex flex-row">
          <div className="w-1/2 flex flex-col bg-gray-50 p-6 rounded-xl shadow-md">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 font-medium text-sm">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"/>
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"/>
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm">Message</label>
                <textarea placeholder="Type your message..." className="w-full border rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"/>
              </div>

              <button type="submit" className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 text-sm">Send Message</button>
            </form>
          </div>
          <div className='pt-12 flex flex-col text-sm text-gray-500 md:w-3/4 px-10 text-base text-justify leading-relaxed'>
              Let us know how we can best serve you. Use the contact form to email us directly, or select from the topics below that best fit your needs. Whether you have questions, need guidance, or are looking for personalized support, we're here to listen and respond with care. Our team is dedicated to providing you with the resources, information, and assistance you need to feel confident and supported. It’s an honor to be part of your journey towards better health and well-being, and we are committed to walking alongside you every step of the way. No matter the concern—big or small—we're here to help you find the answers and support you deserve. Reach out today and let us know how we can assist you.
          </div>
          </div>

        {/*---------- Contact Info ---------- */}
         <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md text-sm text-gray-700">
          <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have a question, concern, or just want to say hi? Fill out the form or contact us using the details below.
          </p>

          <div className="space-y-3">
            <p><strong>Email:</strong> support@foreverstore.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p><strong>Address:</strong> 123 Fashion Ave, New York, NY 10001, USA</p>
            <p><strong>Hours:</strong> Mon – Fri: 9AM – 6PM</p>
            <p className="mt-6 font-medium mb-2 text-lg">Follow Us</p>
            <p className='flex justify-center gap-4 text-lg'>Instagram | Facebook | Twitter | Pinterest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
