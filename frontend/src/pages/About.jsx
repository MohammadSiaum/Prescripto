import React from 'react'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] md:max-h-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h6 className='font-bold text-gray-800'>Our Vision</h6>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* --------- why choose us ---------- */}
      <div className='text-xl my-6'>
        <p className='text-gray-600'>WHY <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        {/* ----- 1st ----- */}
        <div className='flex flex-col text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <h6 className='font-bold uppercase text-lg'>Efficiency</h6>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        {/* ------- 2nd ------- */}
        <div className='flex flex-col text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <h6 className='font-bold uppercase text-lg'>Convenience</h6>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        {/* ------ 3rd -------- */}
        <div className='flex flex-col text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <h6 className='font-bold uppercase text-lg'>Personalization</h6>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About