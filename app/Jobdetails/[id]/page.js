"use client";
import Circle from "../../../public/Homeasset/Circle.png";
import AWT from "../../../public/Homeasset/AWT.png";
import Oursolution from "../../../public/Solutionasset/Oursolution.png";
import Image from "next/image";
import { motion } from "framer-motion";
import X from "../../../public/Homeasset/X.png";
import Insta from "../../../public/Homeasset/Insta.png";
import Linkdin from "../../../public/Homeasset/Linkdin.png";
import Facebook from "../../../public/Homeasset/Facebook.png";
import Jobicon from "../../../public/Solutionasset/Jobicon.png";
import Jobicon1 from "../../../public/Solutionasset/Jobicon1.png";
import Jobicon2 from "../../../public/Solutionasset/Jobicon2.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { Button, Divider } from "@nextui-org/react";

import { LuDot } from "react-icons/lu";

const Jobdetails = ({ params }) => {
  const { id } = params;

  const Jobs = [
    {
      jobid: 1,
      icons: Jobicon,
      Jobtitile: "UI UX Designer",
      jobtype: "In Office",
      time: "full time",
      location: "Hyderabad",
      openings: "12 Openings",
      anualpackage: "5.0 L/ year",
    },
    {
      jobid: 2,
      icons: Jobicon1,
      Jobtitile: "App Developer",
      jobtype: "In Office",
      time: "full time",
      location: "Hyderabad",
      openings: "12 Openings",
      anualpackage: "5.0 L/ year",
    },
    {
      jobid: 3,
      icons: Jobicon2,
      Jobtitile: "Business Analyst",
      jobtype: "In Office",
      time: "full time",
      location: "Hyderabad",
      openings: "12 Openings",
      anualpackage: "5.0 L/ year",
    },
    {
      jobid: 4,
      icons: Jobicon,
      Jobtitile: "Full-Stack Developer",
      jobtype: "In Office",
      time: "full time",
      location: "Hyderabad",
      openings: "12 Openings",
      anualpackage: "5.0 L/ year",
    },
  ];

  const responsiblity = [
    {
      ponts:
        " Working closely with User Research to ensure that the solutions are informed by data",
    },
    {
      ponts: " Taking an active role in implementation and feature delivery",
    },
    {
      ponts:
        " Contribute to and proactively seek solutions to technical or design challenges.",
    },
    {
      ponts: " Help implement design specifications to ship-able quality.",
    },
    {
      ponts:
        " Be able to take the high strategic view as well as dive deep and execute great game UX independently",
    },
    {
      ponts: " Experience in special effect, animation and rendering.",
    },
    {
      ponts: " Capable of adapting to a range of art styles and techniques",
    },
  ];

  const qualificatiins = [
    {
      points: "5+ years of design experience",
    },
    {
      points:
        "3+ years of delivering design solutions as a UX designer or interaction designer experience",
    },
    {
      points: "Have an available online portfolio",
    },
    {
      points: "Experience prototyping",
    },
  ];

  const PreferredQualifications = [
    {
      points: "2+ years of mass-market consumer web / mobile products",
    },
    {
      points: ` Experience working in a collaborative team and working directly with developers for implementation of designs`,
    },
  ];
  return (
    <>
      <header className="  relative w-full py-8">
        <Image
          className="z-0 w-[96%] h-36 object-fill -mt-4 md:h-auto lg:h-auto md:mt-0 lg:mt-0 mx-auto"
          src={Oursolution}
          alt="herogif"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white w-80 md:w-auto lg:w-auto md:text-4xl lg:text-4xl text-xl font-bold capitalize absolute flex justify-center items-center lg:top-[50%] md:top-[60%] top-[50%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <span className="text-[#FF7143] ml-2">{Jobs[id].Jobtitile}</span>
        </motion.h1>
        <div className="absolute md:bottom-12 lg:bottom-12 bottom-10 md:gap-4 lg:gap-4 gap-1 flex justify-center items-center md:right-12 lg:right-12 right-3  z-10">
          <Image
            className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
            src={Facebook}
            alt="Facebook"
          />
          <Image
            className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
            src={Insta}
            alt="Insta"
          />
          <Image
            className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
            src={Linkdin}
            alt="Linkdin"
          />
          <Image
            className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
            src={X}
            alt="X"
          />
        </div>
        <div className="absolute flex justify-center items-center lg:top-[91%] md:top-[90%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
          className="md:w-40 md:h-40 h-16 w-16 spin-animation ring-1 ring-white  rounded-full"
            src={Circle}
            alt="circle"
          />
          <Image
          className="absolute md:top-16 md:h-10 md:w-20 h-6 w-10 "
            src={AWT}
            alt="AWT"
          />
        </div>
      </header>

      <section className="w-full mx-auto py-12 flex flex-col justify-center items-center gap-8">
        <div className="w-11/12 mx-auto">
          <span className="text-sm font-bold flex justify-start items-center uppercase cursor-pointer gap-2">
            <IoIosArrowRoundBack size={40} /> to jobs
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center gap-8 md:gap-0 lg:gap-0 justify-between w-11/12 mx-auto">
          <div className="flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col justify-center items-start gap-2">
              <h6 className="text-3xl font-semibold tracking-wider">
                About the Job
              </h6>
              <h6 className="text-gray-400 font-bold">
                UI UX Designer -{" "}
                <span className="text-[#FF7143] font-medium">12 Openings</span>
              </h6>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h6 className="capitalize font-bold tracking-wider">
                Description
              </h6>
              <p className="text-justify text-sm font-medium leading-6">{`We are seeking an imaginative, skillful, and versatile designer who in addition to having a substantive hands-on experience of designing for exceptional customer experience for retail also has a good understanding of experience design for mobile games. This role requires you to work with other UX Leads and designers and lead conceptualization and realization of exceptional user experience for retail as well as new gamified experiences throughout the Journey.`}</p>
            </div>
          </div>
          <div className="flex md:justify-end lg:justify-end justify-center   items-start w-full">
            <div className="flex flex-col justify-center items-center md:w-2/3 lg:w-2/3 w-full">
              <div className="bg-[#FF7143] flex flex-col justify-center items-center w-full h-16">
                <h6 className="uppercase font-bold text-white text-sm">
                  job Details
                </h6>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-2 bg-gray-100 h-auto w-full ">
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8 ">
                  <div>
                    <FaLocationDot size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <sapn className="text-xs font-medium text-gray-400 uppercase">
                      Location
                    </sapn>
                    <span className="text-xs font-bold uppercase">
                      Hyderabad
                    </span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8 ">
                  <div>
                    <MdOutlineWork size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <sapn className="text-xs font-medium text-gray-400 uppercase">
                      job mode
                    </sapn>
                    <span className="text-xs font-bold uppercase">
                      work from office
                    </span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8 ">
                  <div>
                    <MdAccessTimeFilled size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <sapn className="text-xs font-medium text-gray-400 uppercase">
                      job type
                    </sapn>
                    <span className="text-xs font-bold uppercase">
                      full time
                    </span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8 ">
                  <div>
                    <FaCalendar size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <sapn className="text-xs font-medium text-gray-400 uppercase">
                      closes on
                    </sapn>
                    <span className="text-xs font-bold uppercase">
                      09 Jan, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-8">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">
              Key Responsibilities
            </h6>
          </div>

          <div className="w-full justify-center items-start gap-6 ">
            {responsiblity.map((value, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{value.ponts}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-4">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">
              Basic Qualifications
            </h6>
          </div>

          <div className="w-full justify-center items-start gap-6 ">
            {qualificatiins.map((value, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{value.points}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-4">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">
              Preferred Qualifications
            </h6>
          </div>

          <div className="w-full justify-center items-start gap-6 ">
            {PreferredQualifications.map((value, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{value.points}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full justify-center items-center text-center ">
          <Button className="text-white bg-[#FF7143] rounded-full text-center w-60">
            Apply
          </Button>
        </div>
      </section>
    </>
  );
};
export default Jobdetails;
