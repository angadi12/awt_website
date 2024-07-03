"use client";
import React, { useState } from "react";
import Customanimationslide from "./Customanimationslide";
import Image from "next/image";
import { motion } from "framer-motion";

import Icon1 from "../../public/Homeasset/Icon1.png";
import Icon2 from "../../public/Homeasset/Icon2.png";
import Icon3 from "../../public/Homeasset/Icon3.png";

import Ellipse1 from "../../public/Homeasset/Ellipse1.png";
import Ellipse2 from "../../public/Homeasset/Ellipse2.png";
import Ellipse3 from "../../public/Homeasset/Ellipse3.png";

import Backimg1 from "../../public/Homeasset/Backimg1.png";
import Backimg2 from "../../public/Homeasset/Backimg2.png";
import Backimg3 from "../../public/Homeasset/Backimg3.png";
import { Divider } from "@nextui-org/react";

const Digitalsuccess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Datalist = [
    {
      icon: Icon1,
      Text: "Expertise Across Platforms",
      iconbackground: Ellipse1,
      des: "With expertise in web design, app development, and digital marketing, we offer comprehensive services under one roof, saving you time and ensuring seamless integration across all your digital platforms.",
      backimage: Backimg3,
    },
    {
      icon: Icon2,
      Text: "Proven Track Record",
      iconbackground: Ellipse2,
      des: "Our track record of delivering successful projects and driving tangible results speaks for itself. You can trust us to deliver high-quality solutions that elevate your digital presence and drive business growth.",
      backimage: Backimg2,
    },
    {
      icon: Icon3,
      Text: "continues support",
      iconbackground: Ellipse3,
      des: "Our track record of delivering successful projects and driving tangible results speaks for itself. You can trust us to deliver high-quality solutions that elevate your digital presence and drive business growth.",
      backimage: Backimg1,
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-4 w-11/12 mx-auto md:py-12 lg:py-12 -mt-24 md:mt-0 lg:mt-0">
      <div>
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-semibold capitalize w-full ">
          why <span className="text-white rounded-md bg-[#FF7143] px-2">Choose Us</span>{" "}
          for your<br></br> digital success?
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center py-8 gap-4 w-full">
        {Datalist.map((value, index) => (
          <div
            key={index}
            onMouseOver={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={index===2?'flex flex-col md:flex-row lg:flex-row justify-around gap-8 items-center  w-full py-4  md:h-28 lg:h-40':"flex flex-col md:flex-row lg:flex-row justify-around gap-8 items-center w-full py-4  md:h-28 lg:h-40 border-b border-gray-500"}
          >
            <div className="flex justify-center items-center relative ">
              {hoveredIndex === index ? (
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                <Image  className="h-16 w-16" src={value.iconbackground} alt="Ellipse" />

                </motion.div>
              ) : (
                <div className="w-16 h-16 bg-black rounded-full"> </div>
              )}
              <Image className="absolute w-10 h-10" src={value.icon} alt="icon"/>
            </div>

            <div>
              <p className="md:text-sm lg:text-sm text-[0.7rem] font-semibold leading-7 text-start md:w-[36rem] lg:w-[38rem]">{value.des}</p>
            </div>
            <div  className="flex justify-center items-center relative">
            {hoveredIndex === index ? (
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                <Image className="w-72 h-20 brightness-110 transition-all duration-700" src={value.backimage} alt="Ellipse" />
              </motion.div>

              ) : (
                <div className="w-72 h-16 bg-white ring-1 ring-black px-2 rounded-2xl"> </div>
              )}
              <span className={hoveredIndex===index?'absolute uppercase text-sm font-bold text-white':"absolute uppercase text-sm font-bold"}>{value.Text}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Digitalsuccess;
