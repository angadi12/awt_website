'use client'
import Customanimationslide from "@/components/Homecomponets/Customanimationslide";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Project1 from "../../../public/Solutionasset/Project1.png";
import Project2 from "../../../public/Solutionasset/Project2.png";
import Project3 from "../../../public/Solutionasset/Project3.png";
import Project4 from "../../../public/Solutionasset/Project4.png";

const Componets5 = () => {
  const carddata = [
    {
      image: Project1,
      backgroundcolor: "card1",
      titile: "90s Biriyani",
      chip: ["Branding", "web dev", "social media handling"],
    },
    {
      image: Project2,
      backgroundcolor: "card2",
      titile: "Wink Ads",
      chip: ["Branding", "web dev", "social media handling"],
    },
    {
      image: Project3,
      backgroundcolor: "card3",
      titile: "Vitamins & Me",
      chip: ["Branding", "web dev", "social media handling"],
    },
    {
      image: Project4,
      backgroundcolor: "card4",
      titile: "Pioneer Online",
      chip: ["Branding", "web dev", "social media handling"],
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full bg-black px-8 py-12 overflow-hidden">
      <div className="w-full mx-auto">
        <h6 className="text-3xl font-semibold text-white">
          Some Related{" "}
          <Customanimationslide
            text={"Projects."}
            width={150}
            style={"inline-block md:ml-2 lg:ml-2"}
          />
        </h6>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center w-full  justify-center items-center gap-8">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start md:gap-6 lg:gap-6 gap-4"
          >
            <div
              className={`${value.backgroundcolor} rounded-lg relative flex justify-center items-center w-full md:h-96 lg:h-96 h-60`}
            >
              <motion.div whileHover={{scale:1.2}} transition={{duration:0.5}} className="absolute">
                <Image src={value.image} alt="project" />
              </motion.div>
            </div>
            <h6 className="text-2xl font-semibold text-white">
              {value.titile}
            </h6>
            <div className="flex items-center gap-2">
              {value.chip.map((item, i) => (
                <div key={i} className={`${value.backgroundcolor} p-0.5 rounded-full w-auto  flex justify-center items-center `}>
                  <div className=" h-8  rounded-full bg-black w-auto flex justify-center items-center ">
                    <span className="px-2 text-white text-[0.6rem] md:text-sm lg:text-sm capitalize">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Componets5;
