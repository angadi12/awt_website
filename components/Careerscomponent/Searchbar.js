'use client'
import React from 'react'
import Customanimationslide from '../Homecomponets/Customanimationslide'
import { IoSearch } from "react-icons/io5";
import { Button } from '@nextui-org/react';



const Searchbar = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-8 md:py-12 lg:py-12 mt-8'>
           <div className='w-full flex justify-center items-center gap-4 text-center flex-col'>
            <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>{`Let’s Work`} <Customanimationslide text={'Together!'} width={170} style={'inline-block '}/></h6>
            <p className='md:text-sm lg:text-sm font-medium md:leading-8 text-gray-500'>Start your career with Angadi World Technologies!</p>
           </div>

           <div className='md:w-3/4 lg:w-3/4 w-11/12 gap-4 mx-auto flex justify-between items-center px-2 rounded-full boxshadow h-12'>
                <div className='flex justify-center items-center md:gap-4 lg:gap-4 gap-2 w-full'>
                    <IoSearch size={24} className='text-[#FF7143]'/>
                    <input placeholder='Search for your designation' className='w-full font-medium text-xs md:text-sm lg:text-sm capitalize outline-none'/>
                </div>
                <div>
                    <Button variant='solid' className='bg-[#FF7143] md:w-60 lg:w-60 text-white rounded-full uppercase font-semibold text-center'>
                    Search
                    </Button>
                </div>
           </div>
    </div>
  )
}

export default Searchbar