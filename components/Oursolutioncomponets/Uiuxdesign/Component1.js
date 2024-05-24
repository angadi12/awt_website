"use client";
import React, { useState } from "react";
import UIUX from "../../../public/Solutionasset/UIUX.gif";
import UIUX2 from "../../../public/Solutionasset/UIUX2.gif";
import Image from "next/image";
import Appdesignicon from "../../../public/Solutionasset/Appdesignicon.png";
import Websiteicon from "../../../public/Solutionasset/Websiteicon.png";
import Appwebicon from "../../../public/Solutionasset/Appwebicon.png";
import { Divider } from "@nextui-org/react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

const Component1 = () => {
  const router = useRouter()

  const [hoverindex, Sethoverindex] = useState(null);

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
          <span className={hoverindex === 2 ? "text-white mr-2" : "text-[#FF7143] mr-2"}>
            WEB APP
          </span>
           design
        </span>
      ),
      Redirect: (
        <span className="flex gap-2 justify-end text-xs uppercase items-center text-right">
          Learn more <HiArrowLongRight />
        </span>
      ),
      Link:`/Oursolution/Webappdesign`

    },
  ];

  return (
    <div className="flex w-full justify-center flex-col gap-8 items-center py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-24 place-content-center justify-between w-11/12 mx-auto">
        <div className="w-full flex justify-center items-start">
          <Image className="" src={UIUX} alt="gif" />
        </div>
        <div className="w-full flex justify-center items-start flex-col ">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 auto-cols-auto	 gap-8 w-full">
            {carddata.slice(0, 2).map((value, index) => (

              <motion.div
                onClick={()=>router.push(value.Link)}
                onMouseOver={() => Sethoverindex(index)}
                onMouseLeave={() => Sethoverindex(null)}
                whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
                whileHover={{ scale: 1.1, backgroundColor: "#FF7143" }}
                transition={{ duration: 1, type: "spring" }}
                key={index}
                className={
                  "ring-1 cursor-pointer w-full h-64 gap-4 p-2 ring-gray-400 flex flex-col justify-end items-start "
                }
              >
                <Image className="" src={value.icon} alt="icon" />
                {value.title}
                <Divider />
                <span className="w-full">{value.Redirect}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 w-full">
            <motion.div
              onClick={()=>router.push(carddata[2].Link)}
              whileTap={{ scale: 1.2, backgroundColor: "#FF7143" }}
                whileHover={{ scale: 1.05, backgroundColor: "#FF7143" }}
                transition={{ duration: 1, type: "spring" }}
              onMouseOver={() => Sethoverindex(2)}
              onMouseLeave={() => Sethoverindex(null)}
              className="w-full cursor-pointer h-48 gap-4 p-2 ring-1 ring-gray-400 flex flex-col justify-end items-start"
            >
              <Image className="" src={carddata[2].icon} alt="icon" />
              {carddata[2].title}
              <Divider />
              <span className="w-full">{carddata[2].Redirect}</span>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="grid py-16 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-24 place-content-center justify-between w-11/12 mx-auto">
        <div className="w-full flex flex-col justify-center items-start gap-8 md:order-1 lg:order-1 order-2">
          <div>
            <p className="text-justify text-sm leading-7 font-medium">{`Our UI/UX Designing service is tailored to elevate your digital presence and enhance user engagement. We specialize in crafting intuitive and visually captivating interfaces that seamlessly merge aesthetic appeal with functional efficiency.`}</p>
          </div>
          <div>
            <div class="relative border-s border-[#FF7143]">
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <h3 class="text-lg font-semibold text-black">
                  User Interface (UI) Design
                </h3>
                <p class="mb-4 text-sm font-medium leading-7">
                  {`Our UI designers focus on creating visually stunning interfaces that not only reflect your brand identity but also provide an exceptional user experience.`}
                </p>
              </div>
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 class="text-lg font-semibold text-black">
                  {`User Experience (UX) Design`}
                </h3>
                <p class="text-sm font-medium leading-7">
                  {`UX is at the core of everything we do. Our UX designers meticulously study user behavior and preferences to create an experience that is intuitive, seamless, and delightful.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start  md:order-2 lg:order-2 order-1">
          <Image className="md:px-8 " src={UIUX2} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Component1;
