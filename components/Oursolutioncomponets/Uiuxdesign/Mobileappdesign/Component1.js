"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Withoutdesigner from "../../../../public/Solutionasset/Withoutdesigner.png";
import Withdesigner from "../../../../public/Solutionasset/Withdesigner.png";


import Thumbicon from "../../../../public/Solutionasset/Thumbicon.png";
import Settingicon from "../../../../public/Solutionasset/Settingicon.png";
import Costicon from "../../../../public/Solutionasset/Costicon.png";

import Eyeicon from "../../../../public/Solutionasset/Eyeicon.png";
import { motion } from "framer-motion";

const Component1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secoundanimate, setsecoundanimate] = useState(false);


  const carddata=[
    {
    image:Eyeicon,
    titile:'First Impression',
    subtitle:"A well-designed app creates a positive first impression, capturing users' attention & encouraging them to explore further."
  },
    {
    image:Thumbicon,
    titile:'User Satisfaction',
    subtitle:"A well-designed app that meets users' needs and expectations leads to higher satisfaction levels and promotes user loyalty and advocacy."
  },
    {
    image:Settingicon,
    titile:'Ease of Use',
    subtitle:"Good design improves usability by making it easier for users to navigate the app, find information, and complete tasks efficiently."
  },
    {
    image:Costicon,
    titile:'Reduced Costs',
    subtitle:"Investing in design early in the process can help identify & address usability issues, reducing the need for costly redesigns & iterations later on."
  },
]

  const data = [
    {
      image: Withoutdesigner,
    },
    {
      image: Withdesigner,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col w-full mx-auto justify-center items-start py-16">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Why do you need a Design for your App?
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between gap-8 items-center w-11/12 mx-auto py-12">
        <div className="w-full flex justify-center items-center">
          <div>
            {data.map(
              (value, index) =>
                currentIndex === index && (
                  <>
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 2, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    onAnimationComplete={()=>setsecoundanimate(true)}
                    animate={secoundanimate?{x:-50,opacity:0}:{}}
                    className="hidden md:block lg:block"
                   
                  >
                    <Image className="" src={value.image} alt="gif" />
                  </motion.div>
                  
                   <motion.div 
                    key={index}
                    initial={{  opacity: 0 }}
                    whileInView={{  opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    onAnimationComplete={()=>setsecoundanimate(true)}
                    animate={secoundanimate?{opacity:0}:{}}
                    className="grid md:hidden lg:hidden grid-cols-1 place-content-center justify-between w-full gap-8">
                   <Image className="" src={value.image} alt="gif" />
   
                   </motion.div>
                  </>
                )
            )}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8 mt-8">
          {
            carddata.map((value,index)=>(
                <div key={index} className="flex items-start gap-8 justify-between">
                    <div className="relative">
                        <span className="h-12 w-12 absolute top-0 right-0 bg-[#FF7143] z-0"></span>
                        <Image className="w-60 h-28 z-10 relative object-contain" src={value.image} alt="image"/>
                    </div>
                    <div>
                        <h1 className="text-base font-bold uppercase">{value.titile}</h1>
                        <p className="text-justify font-medium text-sm leading-7">{value.subtitle}</p>
                    </div>
                </div> 
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Component1;
