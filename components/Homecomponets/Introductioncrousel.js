"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Customanimationslide from "./Customanimationslide";
import { Button, Divider } from "@nextui-org/react";
import { FaCirclePlay } from "react-icons/fa6";
import { Pacifico } from "next/font/google";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Stepper from "react-stepper-horizontal";

const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });
const inter2 = Montserrat({ subsets: ["latin"] });

const Introductioncrousel = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const datalist = [{}];

  const Slide1 = () => {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start gap-4"
      >
        <p className="text-justify text-sm md:text-lg lg:text-lg leading-7 font-medium">
          <span className="text-sm md:text-lg lg:text-lg font-bold">
            Angadi World Technologies
          </span>{" "}
          {`is a top-tier provider of Web and App Design & Development, along with Digital Marketing services. Renowned for our innovative solutions, we excel in delivering cutting-edge mobile apps and digital experiences to a global clientele.`}
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button
            onPress={() => router.push("/Aboutus")}
            variant="solid"
            className="ring-1 bg-white uppercase ring-black rounded-full"
          >
            Learn More
          </Button>
          <div
            onClick={() => router.push("/Aboutus")}
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaCirclePlay size={30} />
            <span className="uppercase text-black text-sm font-medium">
              watch a video
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  const Slide2 = () => {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start gap-4 "
      >
        <p className="text-justify text-sm md:text-lg lg:text-lg leading-7 font-medium">{`Our expertise lies in crafting innovative solutions, platforms, and experiences that captivate consumers, setting new standards for engagement and transforming the digital landscape.`}</p>
        <span className="font-semibold text-gray-600">{`In a span of 5 Years we served across 5+ countries with more than 98% of success rate!`}</span>
        <Divider className="bg-black" />
        <span className="text-lg font-bold text-black">{`You're in trusted hands. Believe in us.`}</span>
      </motion.div>
    );
  };

  const Slide3 = () => {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start gap-4 "
      >
        <p className="text-justify text-sm md:text-lg lg:text-lg leading-7 font-medium">{`we envision a future where every digital interaction is seamlessly connected, enriching lives and empowering businesses worldwide. We strive to be pioneers in innovation, crafting best solutions that redefine the digital landscape. Our vision is to inspire and transform, the world where possibilities are limitless.`}</p>
        <Divider className="bg-black" />
        <span className={`text-2xl font-bold text-black ${inter.className}`}>
          {`“Shaping a boundless digital future where innovation thrives and businesses flourish.”`}{" "}
          <span
            className={`text-[#FF7143] font-medium inline-block ${inter2.className}`}
          >
            -AWT
          </span>
        </span>
      </motion.div>
    );
  };

  const Slide4 = () => {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start gap-4 "
      >
        <p className="text-justify text-sm md:text-lg lg:text-lg leading-7 font-medium">
          <span className="text-sm md:text-lg lg:text-lg leading-7 font-bold">
            At AWT
          </span>{" "}
          {`, our core mission is to propel your organization's digital growth. We start by understanding your business objectives, tailoring our services to your audience, and delivering expert mobile application development, website design, and marketing solutions.`}
        </p>
        <Divider className="bg-black" />
        <span className={`text-xl font-bold text-black`}>
          {`Join us in our Mission -`}{" "}
          <span
          onClick={()=>router.push('/Careers')}
            className={`text-[#FF7143] underline font-medium inline-block cursor-pointer `}
          >
            We are Hiring
          </span>
        </span>
      </motion.div>
    );
  };
  const slides = [
    { slide: <Slide1 /> },
    { slide: <Slide2 /> },
    { slide: <Slide3 /> },
    { slide: <Slide4 /> },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex relative flex-col justify-start items-start gap-4 w-full py-16">
      <div className="flex flex-col md:flex-row lg:flex-row  justify-center md:h-60 lg:h-60   md:items-start lg:items-start items-center md:w-11/12 lg:w-11/12 w-full mx-auto">
        <div className="flex  flex-col md:justify-start lg:justify-start justify-center px-4 md:items-start lg:items-start items-center md:ml-4 lg:ml-4 gap-12 md:w-1/2 lg:w-1/2 w-full ">
          <h6 className="md:text-4xl lg:text-4xl text-3xl hidden md:block lg:block font-semibold ">
            A brief
            <Customanimationslide
              text={"introduction"}
              width={240}
              style={"inline-block md:ml-2"}
            />
            <br></br>about us!
          </h6>
          <h6 className="md:text-4xl lg:text-4xl text-3xl capitalize  md:hidden lg:hidden font-semibold ">
            about us!
          </h6>
          <div className=" flex items-center gap-2 absolute bottom-0">
            <button
              onClick={handlePrev}
              className={`flex justify-center cursor-pointer bg-black text-white items-center h-10 w-10 rounded-full ${
                currentIndex === 0 &&
                "bg-white ring-1 ring-black text-black cursor-not-allowed"
              }`}
              disabled={currentIndex === 0}
            >
              <IoIosArrowBack className={currentIndex === 0 && "text-black"} />
            </button>
            <button
              onClick={handleNext}
              className={`flex justify-center cursor-pointer bg-black text-white items-center h-10 w-10 rounded-full ${
                currentIndex === slides.length - 1 &&
                "bg-white ring-1 ring-black text-black cursor-not-allowed"
              }`}
              disabled={currentIndex === slides.length - 1}
            >
              <IoIosArrowForward
                className={currentIndex === slides.length - 1 && "text-black"}
              />
            </button>
          </div>
        </div>
        {slides.map(
          (value, index) =>
            currentIndex === index && (
              <div
                key={index}
                className="flex flex-col justify-start items-start gap-4 md:w-1/2 lg:w-1/2 w-full mx-auto md:px-0 lg:px-0 px-4 py-8 md:py-0 lg:py-0 h-96"
              >
                {value.slide}
              </div>
            )
        )}
      </div>
      <div className="w-full flex flex-col  justify-center items-start md:-ml-12 lg:-ml-12 py-8">
        <Stepper
          defaultColor={`#d1d5db`}
          circleFontSize={0}
          size={16}
          titleTop={8}
          completeTitleOpacity={0.6}
          titleFontSize={20}
          defaultBarColor={`#d1d5db`}
          completeBarColor={`#FF7143`}
          completeColor={`#FF7143`}
          activeColor={`#FF7143`}
          steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
          activeStep={currentIndex}
        />
        <div className="w-11/12 flex justify-evenly gap-8 mt-3 mx-auto h-16 md:h-auto lg:h-auto">
          {" "}
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={currentIndex === 0 ? { opacity: 1 } : {}}
            className={`text-justify md:text-base lg:text-base text-[${
              currentIndex === 0 ? "0.8rem" : "0.5rem"
            }] text-gray-600 font-medium capitalize`}
          >
            know about Angadi<br></br>{" "}
            <span className="italic font-bold text-black">
              World Technologies.
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={currentIndex === 1 ? { opacity: 1 } : {}}
            className={`text-justify md:text-base lg:text-base text-[${
              currentIndex === 1 ? "0.8rem" : "0.5rem"
            }] text-gray-600 font-medium capitalize`}
          >
            <span className="italic font-bold text-black">what we do</span> here
            in angadi <br></br>world technologies?
          </motion.span>
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={currentIndex === 2 ? { opacity: 1 } : {}}
            className={`text-justify md:text-base lg:text-base text-[${
              currentIndex === 2 ? "0.8rem" : "0.5rem"
            }] text-gray-600 font-medium capitalize`}
          >
            What will be our<br></br>
            <span className="italic font-bold text-black">vision?</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={currentIndex === 3 ? { opacity: 1 } : {}}
            className={`text-justify md:text-base lg:text-base text-[${
              currentIndex === 3 ? "0.8rem" : "0.5rem"
            }] text-gray-600 font-medium capitalize`}
          >
            What is our <br></br>{" "}
            <span className="italic font-bold text-black">mission</span> here?
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Introductioncrousel;
