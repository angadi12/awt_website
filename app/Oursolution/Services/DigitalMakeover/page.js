'use client'
import React, { useEffect } from 'react'
import Component2 from "../../../../components/Oursolutioncomponets/Services/Component2";
import Component4 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component4";
import Componets5 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Componets5";
import Component6 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../../components/Oursolutioncomponets/Services/Component8";
import rebranding from "../../../../public/Solutionasset/rebranding.gif";
import Image from "next/image";

const Digitalmakeover = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full flex-col gap-8 ">
    <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
    <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold">Digital Makeover</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between gap-4 md:gap-16 lg:gap-16 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 lg:order-1 md:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">{`In today's fast-paced digital landscape, staying ahead means transforming your online presence. At AWT, we specialize in catapulting businesses into the digital age, redefining their brand image and revolutionizing their online strategies.`}</p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Rebranding
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                    {`Rebranding involves redesigning and refreshing elements of a company's identity, such as its logo, colors, and messaging. This process aims to modernize the brand's image, attract new customers, and stay relevant in a changing market.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Trend-Conscious Makeover`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                    {`This involves revamping a company's image and strategies to align with current market trends, mirroring the adaptive nature of digital transformation.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={rebranding} alt="gif" />
          </div>
        </div>



      <Component2/>
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

export default Digitalmakeover