import React from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Skillsimage from '../../public/Solutionasset/Skillsimage.png'

const Skillsbar = () => {
  return (
    <div className="flex justify-center items-center gap-8 flex-col w-full mx-auto">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-items-center place-content-center items-center gap-12">
        <div className="flex justify-center items-start gap-6  flex-col">
          <h6 className="text-2xl font-bold tracking-wider">
            We take care of<br></br>
            {` your business’s success`}
          </h6>
          <p className="text-justify  text-base font-medium leading-7 w-11/12">{`When you entrust us with your solutions, consider it accomplished. With us, your success is not just a promise, it's our responsibility. Rest assured, you're in capable hands.`}</p>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <Progress
              size="md"
              radius="sm"
              classNames={{
                base: "w-11/12",
                track: "drop-shadow-md border border-default",
                indicator: "bg-[#FF7143]",
                label: " font-semibold text-black uppercase text-sm",
                value: "text-[#FF7143]",
              }}
              label="Technical Proficiency"
              value={91}
              showValueLabel={true}
            />
            <Progress
              size="md"
              radius="sm"
              classNames={{
                base: "w-11/12",
                track: "drop-shadow-md border border-default",
                indicator: "bg-[#FF7143]",
                label: " font-semibold text-black uppercase text-sm",
                value: "text-[#FF7143]",
              }}
              label="Project Management"
              value={95}
              showValueLabel={true}
            />
            <Progress
              size="md"
              radius="sm"
              classNames={{
                base: "w-11/12",
                track: "drop-shadow-md border border-default",
                indicator: "bg-[#FF7143]",
                label: " font-semibold text-black uppercase text-sm",
                value: "text-[#FF7143]",
              }}
              label="Problem-Solving Abilities"
              value={89}
              showValueLabel={true}
            />
            <Progress
              size="md"
              radius="sm"
              classNames={{
                base: "w-11/12",
                track: "drop-shadow-md border border-default",
                indicator: "bg-[#FF7143]",
                label: " font-semibold text-black uppercase text-sm",
                value: "text-[#FF7143]",
              }}
              label="creativity"
              value={97}
              showValueLabel={true}
            />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center  relative mt-12">
             <div className="flex flex-col w-96 justify-center items-center ">

             <div className="bg-[#FFB300] w-full h-48"></div>
             <div className="bg-[#FF7143] w-full h-48"></div>
             </div>
            <Image className=" absolute w-[32rem] h-[32rem] -top-32" src={Skillsimage} alt="Skillsimage"/>
        </div>
      </div>
    </div>
  );
};

export default Skillsbar;
