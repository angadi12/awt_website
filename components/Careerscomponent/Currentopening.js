'use client'
import React from 'react'
import Image from 'next/image'
import Jobicon from '../../public/Solutionasset/Jobicon.png'
import Jobicon1 from '../../public/Solutionasset/Jobicon1.png'
import Jobicon2 from '../../public/Solutionasset/Jobicon2.png'
import { FaLocationDot } from "react-icons/fa6";
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Currentopening = () => {
  const router=useRouter()


const Jobs=[
    { jobid:0,
      icons:Jobicon,
      Jobtitile:"UI UX Designer",
      jobtype:'In Office',
      time:'full time',
      location:"Hyderabad",
      openings:'12 Openings',
      package:"5.0 L/ year"

},
    {
      jobid:1,
      icons:Jobicon1,
      Jobtitile:"App Developer",
      jobtype:'In Office',
      time:'full time',
      location:"Hyderabad",
      openings:'12 Openings',
      package:"5.0 L/ year"

},
    {
      jobid:2,
      icons:Jobicon2,
      Jobtitile:"Business Analyst",
      jobtype:'In Office',
      time:'full time',
      location:"Hyderabad",
      openings:'12 Openings',
      package:"5.0 L/ year"

},
    {
      jobid:3,
      icons:Jobicon,
      Jobtitile:"Full-Stack Developer",
      jobtype:'In Office',
      time:'full time',
      location:"Hyderabad",
      openings:'12 Openings',
      package:"5.0 L/ year"

},
]


  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 mx-auto py-12 bg-slate-100 overflow-hidden'>
       <div className='w-11/12 mx-auto md:text-2xl lg:text-2xl text-lg tracking-wider font-bold'>
        <h6 >Current Available Openings</h6>
       </div>

       <div className='flex flex-col w-11/12 mx-auto justify-center items-center gap-8'>
        {
          Jobs.map((value,index)=>(
            <motion.div
              onClick={()=>router.push(`/Jobdetails/${value.jobid}`)}
             whileTap={{scale:1.1}} transition={{duration:0.8}} key={index} className='bg-white w-full md:h-40 lg:h-40 h-auto px-4 py-4 flex flex-col md:flex-row lg:flex-row lg:items-center items-start justify-between gap-12 md:gap-0 lg:gap-0 md:items-center'>
              <div className='flex flex-col md:flex-row lg:flex-row justify-start items-start gap-4'>
                <div>
                  <Image className='w-14 h-14 object-contain' src={value.icons} alt='icons'/>
                </div>
                <div className='flex flex-col justify-start items-start md:gap-2 w-full'>
                  <h6 className='capitalize font-bold md:text-lg '>{value.Jobtitile}<span className='text-xs text-[#FF7143] ml-2'>. {value.openings}</span></h6>
                  <p className='flex justify-center items-center gap-2 text-gray-400 capitalize font-medium text-xs md:text-sm lg:text-sm'><FaLocationDot className='text-[#FF7143] text-xs md:text-base lg:text-base'/>{value.location}</p>
                  <div className='flex justify-start items-start gap-8 mt-4'>
                    <span className='text-xs ring-1 ring-black p-1 text-center rounded-full px-2 uppercase font-bold '>{value.jobtype}</span>
                    <span className='text-xs ring-1 ring-black p-1 text-center rounded-full px-2 uppercase font-bold '>{value.time}</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-4'>
                <span className='md:text-lg lg:text-lg text-xs font-extrabold '>₹ {value.package}</span>
              </div>
            </motion.div>
          ))
        }
       </div>
    </div>
  )
}

export default Currentopening