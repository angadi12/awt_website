import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';

const Contactform = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start gap-8 mx-auto md:py-16 lg:py-16'>
      <div className='w-11/12 mx-auto flex flex-col justify-start items-start gap-4'>
        <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>All Great Achievements began with a<br></br> Simple “Hello”</h6>
        <p className='text-sm font-bold uppercase'>Fill out all the required details, our company will contact you within 48 hours!</p>
      </div>


      <div className="w-11/12 mx-auto flex justify-between  items-start  h-auto md:flex-row flex-col">
        <form className=" flex-[0.9] gap-12 text-black font-bold">
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-5 lg:gap-5 gap-8 my-5 py-4 flex-wrap">
            <input
              id="name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="FIRST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
            <input
              id="lastname"
            //   value={lastname}
            //   onChange={(e) => setlastName(e.target.value)}
              type="text"
              placeholder="LAST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
          </div>

          <input
            id="email"
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ID"
            className="placeholder:text-black pb-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />
          <input
            id="subject"
            type="text"
            // value={subject}
            // onChange={(e) => setSubject(e.target.value)}
            placeholder="SUBJECT"
            className="placeholder:text-black placeholder:font-bold border-b py-8 border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />

       
          <textarea
            type="message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            placeholder="MESSAGE"
            className="placeholder:text-black py-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full focus-visible:outline-none"
          />
          <Button variant='solid' className='ring-1 ring-black bg-white font-bold uppercase w-full rounded-full mt-8'>
            Submit
          </Button>
        </form>
        <div className="flex mt-8  h-auto md:pl-16 lg:pl-16 gap-8 flex-col  md:border-l lg:border-l border-gray-400">
             <div>
                <h6 className='uppercase font-bold '>call us</h6>
                <p className='text-gray-500 text-sm font-medium'>From Monday - Sunday we will be available<br></br> all week!</p>
                <h6 className='flex items-center gap-2 font-bold mt-2 text-[#FF7143]'><FaPhone/><Link href={'tel:+91-9110314465'}>+91-9110314465</Link></h6>
                <span className='text-gray-500 text-sm font-medium'>UK</span>
                <h6 className='flex items-center gap-2 font-bold mt-2 text-[#FF7143]'><FaPhone/><Link href="tel:+447918255464">+44 7918255464</Link></h6>
             </div> 
    
             <div>
                <h6 className='uppercase font-bold '>email us</h6>
                <p className='text-gray-500 text-sm font-medium'>From Monday - Sunday we will be available all week!</p>
                <h6 className='flex items-center gap-2 font-bold mt-2 text-[#FF7143] cursor-pointer'><MdEmail/><Link href={'mailto:info@angadiworldtech.com'}>info@angadiworldtech.com</Link></h6>
             </div> 
    
             <div>
                <h6 className='uppercase font-bold '>visit us</h6>
                <p className='text-gray-500 text-sm font-medium'>We have 3 locations globally!</p>
                <h6 className='flex items-center gap-2 font-bold mt-2 text-[#FF7143]'><FaLocationDot/>Hyderabad - Bangalore - London</h6>
             </div> 
    
        </div>
      </div>

    
    
    </div>
  )
}

export default Contactform