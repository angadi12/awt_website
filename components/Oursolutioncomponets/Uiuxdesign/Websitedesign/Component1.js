"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Withoutdesigner from "../../../../public/Solutionasset/Withoutdesignersite.png";
import Withdesigner from "../../../../public/Solutionasset/Withdesignersite.png";

import Thumbicon from "../../../../public/Solutionasset/Thumbicon.png";
import Settingicon from "../../../../public/Solutionasset/Settingicon.png";
import Costicon from "../../../../public/Solutionasset/Costicon.png";

import Eyeicon from "../../../../public/Solutionasset/Eyeicon.png";
import { motion } from "framer-motion";

const Component1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secoundanimate, setsecoundanimate] = useState(false);

  const carddata = [
    {
      image: Eyeicon,
      titile: "First Impression",
      subtitle:`First Impression A well-designed website creates a positive first impression, capturing users' attention & encouraging them to explore further.`
    },
    {
      image: Thumbicon,
      titile: "User Satisfaction",
      subtitle:"User Satisfaction A well-designed website that meets users' needs & expectations leads to higher satisfaction levels and promotes user loyalty and advocacy."
    },
    {
      image: Settingicon,
      titile: "Ease of Use",
      subtitle:"Ease of Use Good design improves usability by making it easier for users to navigate the site, find information, and complete tasks efficiently."
    },
    {
      image: Costicon,
      titile: "Reduced Costs",
      subtitle:"Reduced Costs Investing in design early in the process can help identify & address usability issues, reducing the need for costly redesigns & iterations later on."
    },
  ];

  const data = [
    {
      image: Withoutdesigner,
      text:<h1 className="font-bold text-center uppercase "><span className="text-[#FF7143] mr-2">without</span>a designer</h1>
    },
    {
      image: Withdesigner,
      text:<h1 className="font-bold text-center uppercase "><span className="text-[#FF7143] mr-2">with</span>a designer</h1>
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col  w-full mx-auto justify-center items-start py-16">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Why do you need a Design for your Site?
        </h1>
      </div>

      <div className="flex flex-col gap-8 justify-between items-center w-11/12 mx-auto py-12">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-center gap-4 items-center">
            {data.map(
              (value, index) =>
                currentIndex === index && (
                  <>
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 2, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    onAnimationComplete={() => setsecoundanimate(true)}
                    animate={secoundanimate ? { x: -50, opacity: 0 } : {}}
                    className="hidden md:block lg:block"
                  >
                    <Image className="px-8 mb-4" src={value.image} alt="gif" />
                    {value.text}
                  </motion.div>
                  <motion.div
                    key={index}
                    initial={{  opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    onAnimationComplete={() => setsecoundanimate(true)}
                    animate={secoundanimate ? { opacity: 0 } : {}}
                  >
                    <Image className="px-8 mb-4" src={value.image} alt="gif" />
                    {value.text}
                  </motion.div>

                  </>
                )
            )}
          </div>
        </div>
        <div className="w-11/12 mx-auto justify-items-center grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {carddata.map((value, index) => (
            <div key={index} className="flex items-start gap-8 justify-between">
              <div className="relative">
                <span className="h-12 w-12 absolute top-4 right-0 bg-[#FF7143] z-0"></span>
                <Image
                  className="w-72 h-32 z-10 relative object-contain"
                  src={value.image}
                  alt="image"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold uppercase">{value.titile}</h1>
                <p className="text-justify font-medium text-sm leading-7">
                  {value.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Component1;
