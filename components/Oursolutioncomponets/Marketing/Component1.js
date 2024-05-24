"use client";
import React, { useState } from "react";
import UIUX2 from "../../../public/Solutionasset/Marketing.gif";
import UIUX from "../../../public/Solutionasset/Marketing/Marketing2.gif";
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Marketing/Digital.png";
import Websiteicon from "../../../public/Solutionasset/Marketing/SEO.png";
import Appwebicon from "../../../public/Solutionasset/Marketing/Digitalbrand.png";
import { Divider } from "@nextui-org/react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

const Component1 = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState(null);



  const handleCardClick = (link) => {
    router.push(link);
  };

  const cardData = [
    {
      icon: Appdesignicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span className={hoverIndex==0?"text-white":"text-[#FF7143]"}>digital</span> <br></br>marketing
        </span>
      ),
      link: "/Oursolution/Marketing/DigitalMarketing",
    },
    {
      icon: Websiteicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span  className={hoverIndex==1?"text-white":"text-[#FF7143]"}>search engine </span>
          <br></br> optimization
        </span>
      ),
      link: "/Oursolution/Marketing/Seo",
    },
    {
      icon: Appwebicon,
      title: (
        <span className="uppercase text-sm font-bold">
          <span  className={hoverIndex==2?"text-white mr-2":"text-[#FF7143] mr-2"}>digital</span>branding
        </span>
      ),
      link: "/Oursolution/Marketing/DigitalBranding",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-8 items-center py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-start w-11/12 mx-auto">
        <div className="w-full flex justify-center items-start">
          <Image className="" src={UIUX} alt="gif" />
        </div>
        <div className="w-full flex justify-center items-start flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 auto-cols-auto gap-8 w-full">
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
                <span className="flex gap-2 w-full justify-end text-xs uppercase items-center text-right">
                  Learn more <HiArrowLongRight />
                </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-24 lg:gap-24 place-content-center justify-between items-center w-11/12 mx-auto md:py-24 lg:py-24 py-10">
        <div className="w-full flex flex-col justify-center items-start gap-8 order-2 md:order-1 lg:order-1">
          <div>
            <p className="text-justify text-sm font-medium leading-7">
              {`Our marketing services are tailored to propel your brand forward in the ever-evolving digital landscape. With a focus on driving results, we offer expert consultation in various areas, including search engine optimization (SEO), social media marketing, content creation, and more.`}
            </p>
          </div>
          <div className="relative border-s border-[#FF7143]">
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h3 className="text-lg font-semibold text-black">
                Advanced Marketing Technologies{" "}
              </h3>
              <p className="mb-4 text-sm font-medium leading-7">
                {`Leverage cutting-edge marketing technologies and tools to streamline campaign management, automate processes, and enhance targeting capabilities.`}
              </p>
            </div>
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
              <h3 className="text-lg font-semibold text-black">
                {`Strategic Planning & Consultation`}
              </h3>
              <p className="text-sm font-medium leading-7">
                {`Develop tailored digital marketing strategies aligned with your business goals and objectives.
                Provide expert consultation on various digital marketing channels and tactics, including SEO, PPC, social media, and content marketing`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
          <Image className="" src={UIUX2} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Component1;
