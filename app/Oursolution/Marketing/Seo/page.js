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

import UIUX from "../../../../public/Solutionasset/SEO.gif";
import Image from "next/image";
import Searchoptimization from '@/components/Oursolutioncomponets/Marketing/SEO/Component1';

const Seo = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full flex-col gap-8 ">   
    <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
    <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-xl font-bold capitalize">Search Engine Optimization</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between gap-4 md:gap-16 lg:gap-16 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 md:order-1 lg:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">
              {`Welcome to our SEO services – your ticket to online visibility! We're here to make sure your website shines bright in search results, drawing in the right crowd who's ready to engage with your brand. Let's join forces and bring your online presence to life.`}
              </p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Enhanced Visibility                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                  {`SEO boosts your website's visibility on search engines like Google, ensuring that your target audience can easily find you when they're searching for products or services related to your business.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Increased Credibility`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                  {`By appearing at the top of search results, your website gains credibility and trustworthiness in the eyes of potential customers. This can lead to higher click-through rates and more conversions, ultimately driving business growth.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={UIUX} alt="gif" />
          </div>
        </div>
     
      <Component2/>
      <Searchoptimization/>
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


export default Seo