"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import SME from "../../public/Homeasset/SME.png";
import ENT from "../../public/Homeasset/ENT.png";
import Start from "../../public/Homeasset/START.png";
import Banner1 from "../../public/Homeasset/Banner1.png";
import Banner2 from "../../public/Homeasset/Banner2.png";
import Banner3 from "../../public/Homeasset/Banner3.png";
import Customanimationslide from "./Customanimationslide";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Workwith = () => {
  const [setindex, Setindex] = useState(0);

  const datalist = [
    {
      tag: "SME",
      title: "We work with small & medium enterprises.",
      subtitile:
        "We collaborate with agencies to work on projects from start to finish or as an expanded team to ensure the success of their client’s projects",
      icon: SME,
      color: "#A1CAFF",
      darkcolor: "#1877F2",
      banner: Banner1,
    },
    {
      tag: "enterprises",
      title: "We work with large & high scale enterprises.",
      subtitile: `We specialize in collaborating with large-scale enterprises to provide tailored solutions that drive efficiency, innovation, and growth.`,
      icon: ENT,
      color: "#FFE790",
      darkcolor: "#FFC700",
      banner: Banner2,
    },
    {
      tag: "startups",
      title: "We work with startups & small business as well.",
      subtitile: `We partner with startups and small businesses, offering tailored solutions to drive growth and success. We provides expertise across all stages of development.`,
      icon: Start,
      color: "#C497FF",
      darkcolor: "#9747FF",
      banner: Banner3,
    },
  ];

  const handleNext = () => {
    Setindex((prevIndex) =>
      prevIndex === datalist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    Setindex((prevIndex) =>
      prevIndex === 0 ? datalist.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-12 flex   justify-center gap-8 items-start w-11/12 mx-auto">
      {datalist.map(
        (value, index) =>
          setindex === index && (
            <>
              <div key={index} className="w-1/2 flex  justify-center items-center relative ">
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image className=" " src={value.banner} alt="banner" />
                </motion.div>
                <h6 className="text-4xl tracking-widest  capitalize font-semibold text-black  absolute top-2 w-full left-0">
                  who<br></br> we
                <Customanimationslide text={<span>work&nbsp;with?</span>} width={260} style={'inline-block ml-2'}/>
                </h6>
               
                <div className="absolute hidden md:flex bottom-8 gap-4 right-8 lg:flex">
                  <span
                    onClick={handlePrev}
                    className="flex justify-center cursor-pointer hover:bg-gray-100 items-center h-12 w-12 rounded-full text-black bg-gray-300"
                  >
                    <IoIosArrowBack />
                  </span>
                  <span
                    onClick={handleNext}
                    className="flex justify-center cursor-pointer hover:bg-gray-100 items-center h-12 w-12 rounded-full text-black bg-gray-300"
                  >
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-6 mt-12 justify-center items-center relative ">
                <div className="w-full flex ">
                  {datalist.map((_, index) => (
                    <div
                      key={index}
                      className="flex w-full justify-around gap-4 items-center"
                    >
                      <span
                        className={
                          setindex === index
                            ? "text-black bg-black h-2 animate-appearance-in rounded-full transition-all duration-1000 w-40 text-[0.1rem]"
                            : "text-gray-300 rounded-full bg-gray-300 h-2 w-40 text-[0.1rem]"
                        }
                      >
                        {_.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex py-4 ">
                  <div
                    style={{ backgroundColor: value.color }}
                    className={`flex justify-center items-center bg-[${value.color}] w-32 h-32 rounded-full`}
                  >
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        className="w-28 h-28"
                        src={value.icon}
                        alt="icon"
                      />
                    </motion.div>
                  </div>
                  <div
                    style={{ backgroundColor: value.color }}
                    className="rounded-[2rem] w-96 p-4 -ml-2 flex flex-col justify-start items-start gap-4"
                  >
                    <motion.h6
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="uppercase font-bold"
                    >
                      {value.tag}
                    </motion.h6>
                    <motion.p
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm font-medium"
                    >
                      {value.title}
                    </motion.p>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: value.darkcolor }}
                  className="p-4 w-11/12 mx-auto  h-32 rounded-[2rem] flex justify-center items-center"
                >
                  <motion.p
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-start font-medium text-sm "
                  >
                    {value.subtitile}
                  </motion.p>
                </div>
              </div>
            </>
          )
      )}
    </div>
  );
};

export default Workwith;
