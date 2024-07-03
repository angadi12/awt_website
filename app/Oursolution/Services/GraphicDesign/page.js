'use client'
import React, { useEffect } from 'react'
import Component2 from "../../../../components/Oursolutioncomponets/Services/Component2";
import Component4 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component4";
import Componets5 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Componets5";
import Component6 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../../components/Oursolutioncomponets/Services/Component8";
import rebranding from "../../../../public/Solutionasset/Designer.gif";
import Image from "next/image";
import Graphicdesignpage from '@/components/Oursolutioncomponets/Services/Graphicdesign/Component1';
import Techstack from '@/components/Oursolutioncomponets/Development/Mobiledevelopment/Component2';
import Graphicdesignservices from '@/components/Oursolutioncomponets/Services/Graphicdesign/Component2';

const Graphicdesign = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full flex-col gap-8 ">
    <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
    <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold">Graphic design</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-content-center justify-between gap-4 md:gap-16 lg:gap-16 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 lg:order-1 md:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">{`we breathe life into your vision through stunning visual storytelling. Our team of passionate designers is dedicated to creating captivating graphics that resonate with your audience and elevate your brand. From logo design to marketing collateral, we're here to bring your ideas to life with style and flair.`}</p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Visual Communication
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                  {`Graphic design communicates messages visually using typography, imagery, color, and layout. Designers ensure clarity and ease of navigation by mastering visual hierarchy, composition, and readability principles.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Brand Identity`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                  {`Graphic design shapes brand identity through logos, color schemes, and typography, distinguishing it from competitors. Consistent brand elements build trust and loyalty, aligning visuals with values and audience.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={rebranding} alt="gif" />
          </div>
        </div>



      <Graphicdesignpage/>
      <Graphicdesignservices/>
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

export default Graphicdesign