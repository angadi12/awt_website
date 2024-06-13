'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Appdev.png";
import Websiteicon from "../../../public/Solutionasset/Webdev.png";
import Appwebicon from "../../../public/Solutionasset/Softdev.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; 
import Qrtech from "../../../public/Solutionasset/Qrtech.png";

const Component8 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const router = useRouter(); 

  const handleCardClick = (link) => {
    router.push(link);
  };
    const carddata = [
      {
        icon: Appdesignicon,
        title: (
          <span className={`uppercase text-sm font-bold`}>
            <span className={hoverIndex === 0 ? "text-white" : "text-[#FF7143]"}>Mobile App </span> <br /> Development
          </span>
        ),
        Redirect: (
          <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
            Learn more <HiArrowLongRight />
          </span>
        ),
        link: "/Oursolution/Development/Mobileappdev"
      },
      {
        icon: Websiteicon,
        title: (
          <span className={`uppercase text-sm font-bold`}>
            <span className={hoverIndex === 1 ? "text-white" : "text-[#FF7143]"}>Website</span> <br /> Development
          </span>
        ),
        Redirect: (
          <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
            Learn more <HiArrowLongRight />
          </span>
        ),
        link: "/Oursolution/Development/Websitedev"
      },
        {
          icon: Appwebicon,
          title: (
            <span className="uppercase text-sm font-bold">
              <span className={hoverIndex === 2 ? "text-white" : "text-[#FF7143] mr-2"}>Software</span><br></br>Development
            </span>
          ),
          Redirect: (
            <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
              Learn more <HiArrowLongRight />
            </span>
          ),
          link: "/Oursolution/Development/Softwaredev"
        },
        {
          icon: Qrtech,
          title: (
            <span className={`uppercase text-sm font-bold`}>
               <span className={hoverIndex === 3 ? "text-white mr-2" : "text-[#FF7143] mr-2"} >qr code</span><br></br> technology
            </span>
          ),
          Redirect: (
            <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
              Learn more <HiArrowLongRight />
            </span>
          ),
          link: "/Oursolution/Development/qr-code-technology"
        },
      ];
  return (
    <section className='w-full mt-16'>
        <div className='w-11/12 mx-auto'>
            <h6 className='text-3xl font-bold'>Our Development Solutions!</h6>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 justify-center auto-cols-auto py-10	 gap-8 w-11/12 mx-auto">
            {carddata.map((value, index) => (
              <motion.div
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
              whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{duration:1,type:"spring"}}
                onClick={() => handleCardClick(value.link)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                key={index}
                className={
                  "ring-1 w-full h-60 gap-4 p-4 ring-gray-400 flex flex-col justify-start items-start "
                }
              >
                <Image className="mb-6" src={value.icon} alt="icon" />
                {value.title}
                <Divider />
                <span className='justify-end flex w-full font-medium'>{value.Redirect}</span>
              </motion.div>
            ))}
          </div>
    </section>
  )
}

export default Component8