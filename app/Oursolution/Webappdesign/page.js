"use client";
import React, { useEffect } from "react";
import Component1 from "../../../components/Oursolutioncomponets/Uiuxdesign/Webappdesign/Component1";
import Component2 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component2";
import Component3 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component3";
import Component4 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component4";
import Componets5 from "../../../components/Oursolutioncomponets/Uiuxdesign/Componets5";
import Component6 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../components/Oursolutioncomponets/Uiuxdesign/Component8";
import UIUX from "../../../public/Solutionasset/Webappdesign.gif";
import Image from "next/image";
import Technologiesused from "@/components/Oursolutioncomponets/Uiuxdesign/Mobileappdesign/Component3";
import Webappservices from "@/components/Oursolutioncomponets/Uiuxdesign/Webappdesign/Component2";

const Page = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <section className="w-full flex-col  md:mt-14 lg:mt-14 mt-4 ">
      <div className="w-full flex-col flex justify-center items-center mx-auto ">
        <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold capitalize">Web app Design</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between md:gap-16 lg:gap-16 gap-4 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 lg:order-1 md:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">{`we specialize in crafting dynamic web app designs that captivate audiences and drive results. Experience the power of dynamic web app design And transform your digital vision into reality.`}</p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                    User Interface (UI) Design{" "}
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                    {`Our UI designers focus on creating visually stunning interfaces that not only reflect your brand identity but also provide an exceptional user experience.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`User Experience (UX) Design`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                    {`UX is at the core of everything we do. Our UX designers meticulously study user behavior and preferences to create an experience that is intuitive, seamless, and delightful.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={UIUX} alt="gif" />
          </div>
        </div>
        <Component2 />
        <Component1/>
        <Webappservices/>
        <Technologiesused/>
        
        <div className="overflow-hidden">
          <Component4 />
        </div>
        <Componets5 />
        <Component6 />
        <Divider />
        <Component7 />
        <Divider />
        <Component8 />
      </div>
    </section>
  );
};

export default Page;
