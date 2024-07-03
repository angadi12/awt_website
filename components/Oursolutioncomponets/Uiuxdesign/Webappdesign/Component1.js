"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Webappservice from "../../../../public/Solutionasset/Webappservice.gif";

import Thumbicon from "../../../../public/Solutionasset/Thumbicon.png";
import Settingicon from "../../../../public/Solutionasset/Settingicon.png";
import Costicon from "../../../../public/Solutionasset/Costicon.png";

import Eyeicon from "../../../../public/Solutionasset/Eyeicon.png";
import { motion } from "framer-motion";

const Component1 = () => {
  const carddata = [
    {
      image: Eyeicon,
      titile: "First Impression",
      subtitle:
        "First Impression A well-designed app creates a positive first impression, capturing users' attention & encouraging them to explore further.",
    },
    {
      image: Thumbicon,
      titile: "User Satisfaction",
      subtitle:
        "User Satisfaction A well-designed app that meets users' needs and expectations leads to higher satisfaction levels and promotes user loyalty and advocacy.",
    },
    {
      image: Settingicon,
      titile: "Ease of Use",
      subtitle:
        "Ease of Use Good design improves usability by making it easier for users to navigate the app, find information, and complete tasks efficiently.",
    },
    {
      image: Costicon,
      titile: "Reduced Costs",
      subtitle:
        "Reduced Costs Investing in design early in the process can help identify & address usability issues, reducing the need for costly redesigns & iterations later on.",
    },
  ];

  return (
    <section className="flex flex-col w-full mx-auto justify-center items-start py-16">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Why do you need a Design for your Web App?{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between items-center w-11/12 mx-auto py-12">
        <div className="w-full justify-center items-start">
          <Image className="px-8" src={Webappservice} alt="gif" />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8 mt-8">
          {carddata.map((value, index) => (
            <div key={index} className="flex items-start gap-8 justify-between">
              <div className="relative">
                <span className="h-12 w-12 absolute top-0 right-0 bg-[#FF7143] z-0"></span>
                <Image
                  className="w-44 h-24 z-10 relative object-contain"
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
