import React from "react";
import Image from "next/image";
import Innovation from "../../../public/Solutionasset/Innovation.gif";

const Component6 = () => {
  return (
    <section className="flex justify-start items-start flex-col w-full py-16">
     <div className="w-11/12 mx-auto" >
      <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">What can you expect from us?</h1>
     </div>
     <div className="grid py-16 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-24 place-content-center justify-between w-11/12 mx-auto">
        <div className="w-full flex flex-col justify-center items-start gap-8 order-2 ">
          <div>
            <div class="relative border-s border-[#FF7143]">
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1 -start-1.5 border border-white"></div>
                <h3 class="text-lg font-semibold text-black">
                  User-Centric Approach
                </h3>
                <p class="mb-4 text-sm font-medium leading-7">
                  {` We prioritize understanding your users' needs, behaviors, and preferences to create designs that resonate with them and enhance their experience.`}
                </p>
              </div>
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 class="text-lg font-semibold text-black">
                  {`Creativity and Innovation`}
                </h3>
                <p class="text-sm font-medium leading-7">
                  {` We bring fresh ideas and innovative solutions to the table, pushing boundaries to create designs that are not only functional but also visually stunning and memorable.`}
                </p>
              </div>
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 class="text-lg font-semibold text-black">
                  {`Timely Delivery`}
                </h3>
                <p class="text-sm font-medium leading-7">
                  {`We understand the importance of meeting deadlines and strive to deliver high-quality designs on time and within budget.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start order-1 ">
          <Image className="md:px-10 lg:px-10" src={Innovation} alt="gif" />
        </div>
      </div>
    </section>
  );
};

export default Component6;
