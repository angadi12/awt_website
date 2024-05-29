'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Pacifico  } from "next/font/google";
import Reviewcrousel from './Reviewcrousel';
import Customanimationslide from './Customanimationslide';

const inter = Pacifico({ subsets: ["latin"],weight: ['400'] });

const Quotes = () => {
  return (
    <div className='flex flex-col relative  justify-center items-center w-full md:h-[80vh] lg:h-[80vh] h-[60vh] bg-black mt-52 '>
        <div className='w-11/12 mx-auto absolute -top-44 '>
          <h6 className='text-3xl font-bold tracking-wider '>Client&nbsp;<Customanimationslide text={'Testimonials.'} width={240} style={'inline-block md:ml-2 lg:ml-2'}/></h6>
        </div>

         <Reviewcrousel/> 
        <motion.h6 className={`${inter.className} text-white md:text-4xl lg:text-4xl  md:mt-44 lg:mt-44 mt-72 font-medium  text-center fpnt-[Pacifico]`} initial={{y:200,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:2,type:'spring'}} >
        {`“Experience the satisfaction of success. Start your`}<br></br> {`journey with us today, and let's achieve greatness`}<br></br>{` together.”`}
        </motion.h6>
    </div>
  )
}

export default Quotes