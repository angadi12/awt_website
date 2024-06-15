import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Counsult from "../../../../public/Solutionasset/Counsult.png";
import Ring from "../../../../public/Solutionasset/Marketing/Ring.png";

const Component1 = () => {
  const carddata = [
    {
      title: "Experienced Consultants",
      desc: "Our team of seasoned professionals brings extensive industry experience and deep technical knowledge to every project.",
      className:
        "ring-1 md:rounded-tl-[4rem] lg:rounded-tl-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col",
    },
    {
      title: "Risk Management",
      desc: "We identify potential risks early and provide actionable solutions to mitigate them, ensuring your project stays on track.",
      className:
        "ring-1 md:rounded-tr-[4rem] lg:rounded-tr-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col",
    },
    {
      title: "Strategic Planning",
      desc: "Our consultants help you develop effective strategies to achieve your project objectives, ensuring alignment with your overall business vision.",
      className:
        "ring-1 md:rounded-bl-[4rem] lg:rounded-bl-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col",
    },
    {
      title: "End-to-End Support",
      desc: "From initial concept to final implementation, we provide comprehensive support at every stage of your project.",
      className:
        "ring-1 md:rounded-br-[4rem] lg:rounded-br-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col",
    },
  ];

  return (
    <section className="flex flex-col justify-start items-start gap-8 w-full py-12">
      <div>
        <h6 className="text-3xl font-bold tracking-wider">
        Why Choose Our Project Consultation<br></br> Services?
        </h6>
      </div>
      <div className="w-full grid gap-8 place-content-center items-center md:grid-cols-2 relative">
        {carddata.map((value, index) => (
          <div key={index} className={value.className}>
            <h6 className="flex items-center gap-0 md:gap-2 lg:gap-2 text-justify  uppercase text-base font-bold">
              <GoDotFill className="" />
              {value.title}
            </h6>
            <p className="text-justify text-sm font-medium break-all">
              {value.desc}
            </p>
          </div>
        ))}
        <Image
          className="w-24 h-24 absolute hidden md:flex lg:flex justify-center items-center top-[50%] left-[50%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 object-contain"
          src={Ring}
          alt="Ring"
        />
        <Image
          className="w-10 h-10 absolute hidden md:flex lg:flex justify-center items-center top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 z-10 object-contain"
          src={Counsult}
          alt="Ring"
        />
      </div>
    </section>
  );
};

export default Component1;
