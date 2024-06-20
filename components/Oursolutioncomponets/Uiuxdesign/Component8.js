'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Appdesignicon.png";
import Websiteicon from "../../../public/Solutionasset/Websiteicon.png";
import Appwebicon from "../../../public/Solutionasset/Appwebicon.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'
import Link from "next/link";


const Component8 = () => {
  const [hoverindex, Sethoverindex] = useState(null);
  const router = useRouter()



    const carddata = [
      {
        icon: Appdesignicon,
        title: (
          <span className="uppercase text-sm font-bold">
            <span className={hoverindex === 0 ? "text-white" : "text-[#FF7143]"}>
              Mobile
            </span>{" "}
            <br></br>App design
          </span>
        ),
        Redirect: (
          <Link href={"/Oursolution/Mobileappdesign"}>
            <span className="flex gap-2 justify-end text-xs uppercase items-center text-right">
              Learn more <HiArrowLongRight />
            </span>
          </Link>
        ),
        Link:`/Oursolution/Mobileappdesign`
      },
      {
        icon: Websiteicon,
        title: (
          <span className="uppercase text-sm font-bold">
            <span className={hoverindex === 1 ? "text-white" : "text-[#FF7143]"}>
              Website{" "}
            </span>
            <br></br> design
          </span>
        ),
        Redirect: (
          <span className="flex gap-2 justify-end text-xs uppercase items-center text-right">
            Learn more <HiArrowLongRight />
          </span>
        ),
        Link:`/Oursolution/Websitedesign`
  
      },
        {
          icon: Appwebicon,
          title: (
            <span className="uppercase text-sm font-bold">
              <span className={hoverindex === 2 ? "text-white mr-2" : "text-[#FF7143] mr-2"}>WEB APP</span><br></br>design
            </span>
          ),
          Redirect: (
            <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
              Learn more <HiArrowLongRight />
            </span>
          ),
          Link:`/Oursolution/Webappdesign`
        },
      ];
  return (
    <section className='w-full mt-16'>
        <div className='w-11/12 mx-auto'>
            <h6 className='text-3xl font-bold'>Our UI/UX Design Solutions!</h6>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-center auto-cols-auto py-10	 gap-8 w-11/12 mx-auto">
            {carddata.map((value, index) => (
              <motion.div
                onClick={()=>router.push(value.Link)}
                onMouseOver={() => Sethoverindex(index)}
                onMouseLeave={() => Sethoverindex(null)}
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
                whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{ duration: 1, type: "spring" }}
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