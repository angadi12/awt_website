"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Qrcodegif2 from "../../../../public/Solutionasset/Qrcodegif2.gif";

import Custintra from "../../../../public/Solutionasset/Custintra.png";
import Professnet from "../../../../public/Solutionasset/Professnet.png";
import Userexp from "../../../../public/Solutionasset/Userexp.png";

import Markadv from "../../../../public/Solutionasset/Markadv.png";
import { motion } from "framer-motion";

const Component3 = () => {
  const carddata = [
    {
      image: Markadv,
      titile: "Marketing & Advertising",
      subtitle:
        "QR codes embedded in posters, flyers, and business cards drive traffic to websites, share promotional messages, and facilitate easy contact detail storage.",
    },
    {
      image: Custintra,
      titile: "Customer Interaction",
      subtitle:
        "They enhance product packaging with additional information and promotional offers, facilitate event participation through discounts and contest entries.",
    },
    {
      image: Professnet,
      titile: "Professional Networking",
      subtitle:
        "QR codes act as virtual business cards, seamlessly sharing contact details and social media profiles during networking events.",
    },
    {
      image: Userexp,
      titile: "Enhanced User Experience",
      subtitle:
        "QR codes provide instant access to interactive content like videos and tutorials, and simplify feedback collection via linked online surveys.",
    },
  ];

  return (
    <section className="flex flex-col w-full mx-auto justify-center items-start py-16">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        How QR Code Technology is used in<br></br> your Business?{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between items-center w-11/12 mx-auto py-12">
        <div className="w-full justify-center items-start">
          <Image className="px-8" src={Qrcodegif2} alt="gif" />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8 mt-8">
          {carddata.map((value, index) => (
            <div key={index} className="flex items-start gap-8 justify-between">
              <div className="relative">
                <span className="h-8 w-8 absolute top-2 right-0 bg-[#FF7143] z-0"></span>
                <Image
                  className=" h-24 z-10 relative object-contain"
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

export default Component3;
