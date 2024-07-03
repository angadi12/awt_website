'use client'
import React from 'react'
import Component2 from "../../../../components/Oursolutioncomponets/Development/Component2";
import Component3 from "../../../../components/Oursolutioncomponets/Development/Component3";
import Component4 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component4";
import Componets5 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Componets5";
import Component6 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../../components/Oursolutioncomponets/Development/Component8";
import Mobiledevelopment from '../../../../public/Solutionasset/Mobile development.gif'
import Image from 'next/image'; 
import Techstack from '@/components/Oursolutioncomponets/Development/Mobiledevelopment/Component2';
import Websitedev from '@/components/Oursolutioncomponets/Development/Websitedevelopment/Component1';

const Development = () => {
  return (
    <section className="w-full flex-col gap-8 ">
    <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
    <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold capitalize">Website Development</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-16 lg:gap-16 gap-4 place-content-center justify-between items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 md:order-1 lg:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">{`Transform your digital vision into reality with our expert mobile app development services. Whether you're a startup, SME, or enterprise, our team is here to help you build innovative and impactful mobile apps tailored to your unique needs and objectives.`}</p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Tailored Solutions for Unique Needs
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                    {`We understand that every business is different, which is why we offer personalized development services tailored to your specific requirements.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Cutting-Edge Technologies`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                    {`We stay at the forefront of technological advancements, leveraging the latest tools and frameworks to build innovative solutions.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={Mobiledevelopment} alt="gif" />
          </div>
        </div>
      
      <Component2/>
     
      <Websitedev/>
      <Techstack/>
      <div className="overflow-hidden">
      <Component4/>

      </div>
      <Componets5/>
      <Component6/>
      <Divider/>
      <Component7/>
      <Divider/>
      <Component8/>

    </div>
  </section>
  )
}

export default Development