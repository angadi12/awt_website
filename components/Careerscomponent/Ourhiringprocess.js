import React from "react";
import Image from "next/image";
import Interview from "../../public/Solutionasset/Interview.gif";
import HRround from "../../public/Solutionasset/HRround.png";
import { GrTechnology } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Ourhiringprocess = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full mx-auto py-12">
      <div className="w-11/12 mx-auto ">
        <h1 className="text-3xl font-bold tracking-wider">
          Our Hiring Process
        </h1>
      </div>
      <div className="w-11/12 py-8 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  items-start place-content-center md:gap-48 lg:gap-40 gap-8">
        <div className="flex justify-center items-center">
          <Image src={Interview} alt="gif" />
        </div>
        <div className="flex justify-center items-start gap-8 flex-col">
          <div className="flex justify-between items-start gap-8">
            <div className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16 rounded-md bg-[#FF7143] relative text-white flex justify-center items-center">
              <FaPhoneAlt size={30} className="absolute" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold uppercase">Screening Call</h1>
              <p className="text-xs md:text-sm lg:text-sm font-medium text-gray-500">
                Initial discussion with HR to assess <br></br>qualifications.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start gap-8">
          <div className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16 rounded-md bg-[#FF7143] relative text-white flex justify-center items-center">
              <GrTechnology size={30} className="absolute" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold uppercase">Technical Round</h1>
              <p className="text-xs md:text-sm lg:text-sm font-medium text-gray-500">
              Evaluation of technical skills and<br></br> problem-solving abilities.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start gap-8">
          <div className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16 rounded-md bg-[#FF7143] relative text-white flex justify-center items-center">
              <GrTechnology size={30} className="absolute" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold uppercase">HR Round</h1>
              <p className="text-xs md:text-sm lg:text-sm font-medium text-gray-500">
              Final assessment for cultural fit and <br></br> alignment with company values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourhiringprocess;
