"use client";
import React, { useState } from "react";
import UIUX from "../../../public/Solutionasset/Services/Services.gif";
import UIUX2 from "../../../public/Solutionasset/Websitedesigner.gif";
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Services/Digitalicon.png";
import Websiteicon from "../../../public/Solutionasset/Services/Cloudicon.png";
import Appwebicon from "../../../public/Solutionasset/Services/Graphicicon.png";
import { Divider } from "@nextui-org/react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const Component1 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const router = useRouter();

  const handleCardClick = (link) => {
    router.push(link);
  };

  const cardData = [
    {
      icon: Appdesignicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span className={hoverIndex===0?"text-white":"text-[#FF7143]"}>digital</span> <br></br>makeover
        </span>
      ),
      link: "/Oursolution/Services/DigitalMakeover",
    },
    {
      icon: Websiteicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span className={hoverIndex===1?"text-white":"text-[#FF7143]"}>cloud </span>
          <br></br> consultation
        </span>
      ),
      link: "/Oursolution/Services/CloudConsultation",
    },
    {
      icon: Appwebicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span className={hoverIndex===2?"text-white mr-2":"text-[#FF7143] mr-2"}>graphic</span>design
        </span>
      ),
      link: "/Oursolution/Services/GraphicDesign",
    },
  ];

  return (
    <div className="flex w-full  flex-col gap-8 items-center py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-center gap-12   w-11/12 mx-auto">
        <div className="w-full flex justify-center items-start">
          <Image className="" src={UIUX} alt="gif" />
        </div>
        <div className="w-full flex justify-center items-start  flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 auto-cols-auto	 gap-8 w-full">
            {cardData.slice(0, 2).map((value, index) => (
              <motion.div
                key={index}
                className="ring-1 w-full h-64 gap-4 p-2 ring-gray-400 flex flex-col justify-end items-start cursor-pointer"
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
                whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{duration:1,type:'spring'}}
                onClick={() => handleCardClick(value.link)}
                onMouseOver={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Image className="" src={value.icon} alt="icon" />
                {value.title}
                <Divider />
                  <span className="flex gap-2 justify-end w-full text-xs uppercase items-center text-right">
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
              onMouseOver={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleCardClick(cardData[2].link)}
              transition={{duration:1,type:'spring'}}

            >
              <Image className="" src={cardData[2].icon} alt="icon" />
              {cardData[2].title}
              <Divider />
                <span className="flex gap-2 justify-end w-full text-xs uppercase items-center text-right">
                  Learn more <HiArrowLongRight />
                </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-24 items-center w-11/12 mx-auto py-24">
        <div className="w-full flex flex-col justify-start items-start gap-8 order-2 md:order-1 lg:order-1">
          <div>
            <p className="text-justify text-sm font-medium leading-7">{`Our services are crafted to drive digital transformation, offering expert consultation in cloud adoption, graphic design, and more. We specialize in delivering scalable solutions that prioritize functionality, security, and user experience, empowering your business objectives with innovation and collaboration.`}</p>
          </div>
          <div className="relative border-s border-[#FF7143]">
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-lg font-semibold text-black">
                Strategic Branding                </h3>
              <p className="mb-4 text-sm font-medium leading-7">
                {`Develop a comprehensive branding strategy aligned with your business goals and target audience to enhance brand visibility and reputation.`}
              </p>
            </div>
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
              <h3 className="text-lg font-semibold text-black">
              {`Visually Stunning Creations`}
              </h3>
              <p className="text-sm font-medium leading-7">
               {`Craft captivating designs that grab attention, leave a lasting impression, and reflect the essence of your brand's identity and values.`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full justify-center items-start order-1 md:order-2 lg:order-2">
          <Image className="" src={UIUX2} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Component1;
