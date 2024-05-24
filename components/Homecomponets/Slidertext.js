import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { Divider } from '@nextui-org/react';
import { CiStar } from "react-icons/ci";


const Slidertext = () => {


  

  const Textdata=[
    {
    text:`The Company for your every need `
  },
    {
    text:`High Customer Satisfaction Quality`
  },
    {
    text:`Project Delivery`
  },
    {
    text:`Daily Status Updating`
  },
    {
    text:`Transparent Dev Process`
  },
   
]
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center gap-8 py-12 w-full mx-auto'>
    <div className="flex justify-evenly  items-center w-[2200px] slideranimation  overflow-hidden">
      {
        Textdata.map((value,i)=>(

          <div key={i} className='flex justify-center  items-center gap-2'>
          <FaStar/>
          <span className='text-3xl flex justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]   font-bold leading-10'>{value.text}</span>
          </div>


        ))
      }
      </div>
      <Divider className='bg-black'/>
       <div className="flex justify-evenly  items-center w-[2200px] slideranimation2 overflow-hidden">
      {
        Textdata.map((value,i)=>(

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