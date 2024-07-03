import React from 'react'
import Angular from "../../../../public/Solutionasset/Angular.png";
import Reactimag from "../../../../public/Solutionasset/React.png";
import Js from "../../../../public/Solutionasset/Js.png";
import Java from "../../../../public/Solutionasset/Java.png";
import Wordpress from "../../../../public/Solutionasset/Wordpress.png";
import Woo from "../../../../public/Solutionasset/Woo.png";
import Vue from "../../../../public/Solutionasset/Vue.png";
import Code from "../../../../public/Solutionasset/Code.png";
import Image from 'next/image';

const Techstack = () => {

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
    
  return (
    <section className='w-full flex flex-col gap-4 justify-center items-start mx-auto'>
         <div className=" w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
            What Technologies we use for your Project?
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-4 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 md:gap-12 lg:gap-12 py-12 place-content-center justify-center items-center">
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
    </section>
  )
}

export default Techstack