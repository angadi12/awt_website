import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { Divider } from '@nextui-org/react';
import { CiStar } from "react-icons/ci";


const Slidertext = () => {


  

  const Textdata=[
    {
    text:`Empowering Your Business with Innovative IT Solutions `
  },
    {
    text:` Cutting-Edge Technology for Modern Enterprises`
  },
    {
    text:`Delivering Excellence in Web and Mobile App Development`
  },
    {
    text:`Seamless Integration of QR Code Tech for Your Business`
  },
    {
    text:` Expert Digital Marketing Strategies for Maximum Impact`
  },
   
]

const Textdata2=[
  {
    text:'Transforming Ideas into Reality with Advanced Tech'
  },
  {
    text:' Delivering High-Quality IT Solutions'
  },
  {
    text:'Affordable Prices, Top Talent - Your Recipe for Success'
  },
  {
    text:'Your Projects Delivered on Time, Every Time, Secure, Reliable, and Affordable IT Solutions'
  },
]


  return (
    <div className='overflow-hidden flex flex-col justify-center items-center gap-8 py-12 w-full mx-auto'>
    <div className="flex justify-evenly  items-center w-[4000px] slideranimation  overflow-hidden">
      {
        Textdata.map((value,i)=>(

          <div key={i} className='flex justify-center  items-center gap-2'>
          <FaStar/>
          <span className='text-2xl flex justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]   font-bold leading-10'>{value.text}</span>
          </div>


        ))
      }
      </div>
      <Divider className='bg-black'/>
       <div className="flex justify-evenly  items-center w-[4000px] slideranimation2 overflow-hidden">
      {
        Textdata2.map((value,i)=>(

          <div key={i} className='flex justify-center  items-center gap-2'>
          <CiStar/>
          <span className='stroketext'>{value.text}</span>
          </div>


        ))
      }
      </div>
    </div>
  )
}

export default Slidertext