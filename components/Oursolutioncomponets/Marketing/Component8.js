"use client";
import React,{useState} from 'react'
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Marketing/Digital.png";
import Websiteicon from "../../../public/Solutionasset/Marketing/SEO.png";
import Appwebicon from "../../../public/Solutionasset/Marketing/Digitalbrand.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

const Component8 = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleCardClick = (link) => {
    router.push(link);
  };
    const carddata = [
        {
            icon: Appdesignicon,
            title: (
              <span className="uppercase text-sm font-bold">
                <span className={hoverIndex==0?"text-white":"text-[#FF7143]"}>digital</span> <br></br>marketing
              </span>
            ),
            Redirect: (
              <span className="flex gap-2 justify-end text-xs uppercase items-center text-right">
                Learn more <HiArrowLongRight />
              </span>
            ),
            link: "/Oursolution/Marketing/DigitalMarketing",
          },
          {
            icon: Websiteicon,
            title: (
              <span className="uppercase text-sm font-bold">
                <span className={hoverIndex==1?"text-white":"text-[#FF7143]"}>search engine </span>
                <br></br> optimization
              </span>
            ),
            Redirect: (
              <span className="flex gap-2 justify-end text-xs uppercase items-center text-right">
                Learn more <HiArrowLongRight />
              </span>
            ),
            link: "/Oursolution/Marketing/Seo",
          },
        {
          icon: Appwebicon,
          title: (
            <span className="uppercase text-sm font-bold">
              <span className={hoverIndex==2?"text-white mr-2":"text-[#FF7143] mr-2"}>digital</span><br></br> branding
            </span>
          ),
          Redirect: (
            <span className="flex gap-2 justify-end text-xs ml-auto w-full uppercase items-center text-right">
              Learn more <HiArrowLongRight />
            </span>
          ),
          link: "/Oursolution/Marketing/DigitalBranding",
        },
      ];
  return (
    <section className='w-full mt-16'>
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold'>Our Development Solutions!</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-center auto-cols-auto py-10	 gap-8 w-11/12 mx-auto">
            {carddata.map((value, index) => (
              <motion.div
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
                whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{duration:1,type:'spring'}}
                onClick={() => handleCardClick(value.link)}
                onMouseOver={() => setHoverIndex(index)}
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