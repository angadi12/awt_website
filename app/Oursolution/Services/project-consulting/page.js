"use client";
import React from "react";
import Component6 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "../../../../components/Oursolutioncomponets/Uiuxdesign/Component7";
import Component8 from "../../../../components/Oursolutioncomponets/Services/Component8";
import Consulting from "../../../../public/Solutionasset/Consulting.gif";
import Image from "next/image";
import Component1 from "@/components/Oursolutioncomponets/Services/Projectconsultant/Component1";
import Component2 from "@/components/Oursolutioncomponets/Services/Projectconsultant/Component2";
import Component3 from "@/components/Oursolutioncomponets/Development/Qrtechnology/Component3";
import Component4 from "@/components/Oursolutioncomponets/Services/Projectconsultant/Component4";
import Component5 from "@/components/Oursolutioncomponets/Development/Qrtechnology/Component5";


const Development = () => {
  return (
    <section className="w-full flex-col gap-8 ">
      <div className="w-full flex-col flex justify-center items-center mx-auto md:py-12 lg:py-12 py-4">
        <div className="w-11/12 mx-auto">
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold capitalize">
          Project Consultation
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between md:gap-16 lg:gap-16 gap-4 items-center w-11/12 mx-auto  ">
          <div className="w-full flex flex-col justify-center items-start gap-4 order-2 md:order-1 lg:order-1">
            <div>
              <p className="text-justify text-sm font-medium leading-7">{`At Angadi World Technologies, we provide comprehensive project consultation services designed to guide your business through every stage of project development. Whether you're launching a new product, implementing new software, or optimizing existing processes, our expert consultants are here to ensure your project's success.`}</p>
            </div>
            <div>
              <div class="relative border-s border-[#FF7143]">
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <h3 class="text-lg font-semibold text-black">
                  Expert Guidance and Support
                  </h3>
                  <p class="mb-4 text-sm font-medium leading-7">
                    {`Our consultants offer expert advice and hands-on support to navigate complex project challenges, ensuring efficient planning, execution, and completion of your projects.`}
                  </p>
                </div>
                <div class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                  <h3 class="text-lg font-semibold text-black">
                    {`Customized Strategies & Solutions`}
                  </h3>
                  <p class="text-sm font-medium leading-7">
                    {`We develop tailored strategies & solutions that align with your specific business goals, helping you maximize efficiency, improve processes, & achieve sustainable growth.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start order-1 md:order-2 lg:order-2">
            <Image className="" src={Consulting} alt="gif" />
          </div>
        </div>
       <div className="w-11/12 mx-auto">
        <Component1/>

       </div>
       <Component2/>
       {/* <Component3/> */}
       <Component4/>
       <Component5/>
        <Component6 />
        <Divider />
        <Component7 />
        <Divider />
        <Component8 />
      </div>
    </section>
  );
};

export default Development;
