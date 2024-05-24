'use client'
import React, { useEffect } from 'react'
import Component2 from "../../../../components/Oursolutioncomponets/Marketing/Component2";
import Component3 from "../../../../components/Oursolutioncomponets/Marketing/Component3";
import Component4 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component4";
import Componets5 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Componets5";
import Component6 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../../components/Oursolutioncomponets/Marketing/Component8";

import UIUX from "../../../../public/Solutionasset/Digitalmarketing.gif";
import Image from "next/image";
import Digitalbussiness from '@/components/Oursolutioncomponets/Marketing/Digitalmarketing/Component1';
import Digitalmarketingservice from '@/components/Oursolutioncomponets/Marketing/Digitalmarketing/Component2';

const DigitalMarketing = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full flex-col gap-8 ">   
    <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
    <div className="w-11/12 mx-auto">
          <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold capitalize">Digital Marketing</h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between gap-4 md:gap-16 lg:gap-16 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 md:order-1 lg:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">
              {`Our digital marketing solutions designed to elevate your brand, engage your audience, and drive results. From search engine optimization to pay-per-click advertising, social media marketing, content creation, email campaigns, and beyond, we harness the power of best strategies & industry-leading expertise to propel your business forward.`}
              </p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Targeted Audience Engagement
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                  {`Digital marketing targets specific audience segments, leveraging segmentation and data insights for precise messaging, enhancing campaign effectiveness and ROI.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Data-Driven Decision Making`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                  {`Digital marketing offers rich data and analytics for informed decision-making. Tracking KPIs and analyzing customer behavior provide valuable insights, enhancing marketing strategies and driving better outcomes.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={UIUX} alt="gif" />
          </div>
        </div>
     
      <Component2/>
      <Digitalbussiness/>
      <Digitalmarketingservice/>
     
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


export default DigitalMarketing