import React from "react";
import Image from "next/image";

import Angular from "../../../public/Solutionasset/Angular.png";
import Reactimag from "../../../public/Solutionasset/React.png";
import Js from "../../../public/Solutionasset/Js.png";
import Java from "../../../public/Solutionasset/Java.png";
import Wordpress from "../../../public/Solutionasset/Wordpress.png";
import Woo from "../../../public/Solutionasset/Woo.png";
import Vue from "../../../public/Solutionasset/Vue.png";
import Code from "../../../public/Solutionasset/Code.png";


import UXicon from "../../../public/Solutionasset/UXicon.png";
import Responsive from "../../../public/Solutionasset/Responsive.png";
import Training from "../../../public/Solutionasset/Training.png";
import Customizesolution from "../../../public/Solutionasset/Customizesolution.png";

const Component3 = () => {
  const branddata = [
    {
      image: Angular,
      text: "Angular",
    },
    {
      image: Js,
      text: "Js",
    },
    {
      image: Java,
      text: "Java",
    },
    {
      image: Reactimag,
      text: "React",
    },
    {
      image: Wordpress,
      text: "Wordpress",
    },
    {
      image: Woo,
      text: "WooCommerce",
    },
    {
      image: Vue,
      text: "Vue",
    },
    {
      image: Code,
      text: "code igniter",
    },
  ];

  const cardadata =[
    {
    icon:UXicon,
    title:'Intuitive UI/UX Design',
    subtitle:' User-centric design captivates with intuitive interfaces, ensuring engagement and satisfaction.'
  },
    {
    icon:Responsive,
    title:'Responsive design',
    subtitle:'User-centric design captivates with intuitive interfaces, ensuring engagement and satisfaction.'
  },
    {
    icon:Customizesolution,
    title:'Customized Solutions',
    subtitle:'User-centric design captivates with intuitive interfaces, ensuring engagement and satisfaction.'
  },
    {
    icon:Training,
    title:'trainings after delivery',
    subtitle:' User-centric design captivates with intuitive interfaces, ensuring engagement and satisfaction.'
  },
]

  return (
    <section className="py-16">
      <div>
        <div className="py-12">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
            What Technologies we use for your Project?
          </h1>
        </div>

        <div className="w-full mt-4 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 md:gap-12 mx-auto place-content-center justify-center items-center">
          {branddata.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center ring-1 ring-gray-300  p-4"
            >
              <Image className="w-16 h-16" src={value.image} alt="icons" />
              <span className="uppercase font-medium text-sm">
                {value.text}
              </span>
            </div>
          ))}
        </div>

        <div>
          <div className="py-12">
            <h1 className="text-3xl font-bold tracking-wider">
              What you will receive from us?
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-center">
                {
                  cardadata.map((value,index)=>(
                    <div key={index} className="ring-1 ring-gray-300 p-3 flex items-center justify-center gap-4">
                      <div className="p-3 rounded-full">
                      <Image className="w-44 h-24" src={value.icon} alt="icons"/>
                      </div>
                      <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="uppercase text-base font-bold">{value.title}</h1>
                        <p className="font-medium text-sm text-black">{value.subtitle}</p>
                      </div>
                    </div>
                  ))
                }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
