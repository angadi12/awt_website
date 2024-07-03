"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import SME from "../../public/Homeasset/SME.png";
import ENT from "../../public/Homeasset/ENT.png";
import Start from "../../public/Homeasset/START.png";
import Mobile1 from "../../public/Solutionasset/Mobile1.png";
import Mobile2 from "../../public/Solutionasset/Mobile2.png";
import Mobile3 from "../../public/Solutionasset/Mobile3.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Whoworkmobile = () => {
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
      banner: Mobile1,
    },
    {
      tag: "enterprises",
      title: "We work with large & high scale enterprises.",
      subtitile: `We specialize in collaborating with large-scale enterprises to provide tailored solutions that drive efficiency, innovation, and growth.`,
      icon: ENT,
      color: "#FFE790",
      darkcolor: "#FFC700",
      banner: Mobile2,
    },
    {
      tag: "startups",
      title: "We work with startups & small business as well.",
      subtitile: `We partner with startups and small businesses, offering tailored solutions to drive growth and success. We provides expertise across all stages of development.`,
      icon: Start,
      color: "#C497FF",
      darkcolor: "#9747FF",
      banner: Mobile3,
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
    <div className="py-12 mb-8 flex flex-col relative  justify-center gap-8 items-start w-11/12 mx-auto">
      {datalist.map(
        (value, index) =>
          setindex === index && (
            <>
                <h1 className="text-3xl tracking-widest  capitalize font-semibold text-black w-full left-0">
                  who<br></br> we
                  <motion.span className="bg-[#FF7143] pl-1 rounded-md text-white ml-2">
                    work with?
                  </motion.span>
                </h1>
              <div key={index} className="w-full flex  justify-center items-center  ">
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image className=" " src={value.banner} alt="banner" />
                </motion.div>
                <div className="absolute md:hidden lg:hidden md:static lg:static flex justify-center items-center   -bottom-10 gap-2 left-[50%]  rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span
                    onClick={handlePrev}
                    className="flex justify-center cursor-pointer hover:bg-gray-100 items-center h-12 w-12 rounded-full text-white bg-black"
                  >
                    <IoIosArrowBack />
                  </span>
                  <span
                    onClick={handleNext}
                    className="flex justify-center cursor-pointer hover:bg-gray-100 items-center h-12 w-12 rounded-full text-white bg-black"
                  >
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2  justify-center items-center relative ">
                <div className="w-full flex ">
                  {datalist.map((_, index) => (
                    <div
                      key={index}
                      className="flex w-full justify-center gap-8  items-center"
                    >
                      <span
                        className={
                          setindex === index
                            ? "text-black bg-black h-2 animate-appearance-in rounded-full transition-all duration-1000 w-24 text-[0.1rem] mr-2"
                            : "text-gray-300 rounded-full bg-gray-300 h-2 w-24 text-[0.1rem] mr-2"
                        }
                      >
                        {_.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center w-full py-4 ">
                  <div
                    style={{ backgroundColor: value.color }}
                    className={`flex justify-center items-center bg-[${value.color}] w-20 h-20 rounded-full`}
                  >
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        className="w-16 h-16"
                        src={value.icon}
                        alt="icon"
                      />
                    </motion.div>
                  </div>
                  <div
                    style={{ backgroundColor: value.color }}
                    className="rounded-[2rem] w-60 p-4 -ml-2 flex flex-col justify-start items-start gap-4"
                  >
                    <motion.h1
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="uppercase font-bold"
                    >
                      {value.tag}
                    </motion.h1>
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

export default Whoworkmobile