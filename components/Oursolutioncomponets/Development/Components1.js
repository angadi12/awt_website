'use client'
import React, { useState } from "react";
import UIUX from "../../../public/Solutionasset/Development.gif";
import UIUX2 from "../../../public/Solutionasset/Websitedesigner.gif";
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Appdev.png";
import Websiteicon from "../../../public/Solutionasset/Webdev.png";
import Appwebicon from "../../../public/Solutionasset/Softdev.png";
import { Divider } from "@nextui-org/react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; 

const Component1 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const router = useRouter(); 

  const carddata = [
    {
      icon: Appdesignicon,
      title: (
        <span className={`uppercase text-sm font-bold`}>
          <span className={hoverIndex === 0 ? "text-white" : "text-[#FF7143]"}>Mobile App </span> <br /> Development
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
      link: "/Oursolution/Development/Websitedev"
    },
    {
      icon: Appwebicon,
      title: (
        <span className={`uppercase text-sm font-bold`}>
           <span className={hoverIndex === 2 ? "text-white mr-2" : "text-[#FF7143] mr-2"} >Software</span> Development
        </span>
      ),
      link: "/Oursolution/Development/Softwaredev"
    },
  ];

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <div className="flex w-full justify-center flex-col gap-8 items-center py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-12 place-content-center justify-between items-center w-11/12 mx-auto">
        <div className="w-full flex justify-center items-start">
          <Image className="px-8" src={UIUX} alt="gif" />
        </div>
        <div className="w-full flex justify-center items-start flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 auto-cols-auto	 gap-8 w-full">
            {carddata.slice(0, 2).map((value, index) => (
              <motion.div
                key={index}
                className={
                  "ring-1 w-full h-64 gap-4 p-2 ring-gray-400 flex flex-col justify-end items-start cursor-pointer"
                }
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
              whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{duration:1,type:"spring"}}
                onClick={() => handleCardClick(value.link)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Image className="" src={value.icon} alt="icon" />
                {value.title}
                <Divider />

                  <span className="flex gap-2 justify-end w-full ml-auto text-xs uppercase items-center text-right">
                    Learn more <HiArrowLongRight />
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 w-full">
            <motion.div
              className="w-full h-48 gap-4 p-2 ring-1 ring-gray-400 flex flex-col justify-end items-start cursor-pointer"
              whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
              whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
              transition={{duration:1,type:"spring"}}
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleCardClick(carddata[2].link)}
            >
              <Image className="" src={carddata[2].icon} alt="icon" />
              {carddata[2].title}
              <Divider />
                <span className="flex gap-2 justify-end text-xs uppercase w-full items-center text-right">
                  Learn more <HiArrowLongRight />
                </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between items-center gap-24 w-11/12 mx-auto py-24">
        <div className="w-full flex flex-col justify-center items-start gap-8 order-2 lg:order-1 md:order-1">
          <div>
            <p className="text-justify text-sm font-medium leading-7">Our development service is dedicated to translating your vision into robust digital solutions that empower your business objectives. We specialize in building scalable, high-performance software applications that prioritize functionality, security, and user experience.</p>
          </div>
          <div>
            <div className="relative border-s border-[#FF7143]">
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <h3 className="text-lg font-semibold text-black">Tailored Solutions for Unique Needs</h3>
                <p className="mb-4 text-sm font-medium leading-7">We understand that every business is different, which is why we offer personalized development services tailored to your specific requirements.</p>
              </div>
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 className="text-lg font-semibold text-black">Cutting-Edge Technologies</h3>
                <p className="text-sm font-medium leading-7">We stay at the forefront of technological advancements, leveraging the latest tools and frameworks to build innovative solutions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full order-1 md:order-2 lg:order-2 flex justify-center items-center">
          <Image className="md:px-10 lg:px-4" src={UIUX2} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Component1;
