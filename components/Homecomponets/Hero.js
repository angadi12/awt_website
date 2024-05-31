"use client";
import React, { useEffect, useState } from "react";
import X from "../../public/Homeasset/X.png";
import Insta from "../../public/Homeasset/Insta.png";
import Linkdin from "../../public/Homeasset/Linkdin.png";
import Facebook from "../../public/Homeasset/Facebook.png";
import Circle from "../../public/Homeasset/Circle.png";
import AWT from "../../public/Homeasset/AWT.png";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";
import { Divider } from "@nextui-org/react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router =useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const title = ["Excellence", "Success", "Victory", "Achievement", "Triumph"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      title: "6+",
      Experience: "experience",
      subtitle: "years",
    },
    {
      title: "3",
      Experience: "locations",
      subtitle: "",
    },
    {
      title: "150+",
      Experience: "satisfied clients",
      subtitle: "global",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="  relative w-full ">
        <img
          className="z-0 object-fill md:object-fill lg:object-fill h-48 mx-auto md:h-[30.5rem] lg:h-[30.5rem] w-full "
          src={`https://firebasestorage.googleapis.com/v0/b/awt-website-769f8.appspot.com/o/Hero.gif?alt=media&token=a6b8aae7-9596-4ca8-a037-66a051a89770`}
          alt="Best Website Designing Company - Angadi World Technologies"
        />

        <div className="absolute md:bottom-12 lg:bottom-12 bottom-5 md:gap-4 lg:gap-4 gap-1 flex justify-center items-center md:right-12 lg:right-12 right-3  z-10">
        <div onClick={()=>router.push('https://www.facebook.com/angadiworld.t')}>

<Image
  className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
  src={Facebook}
  alt="Facebook"
/>
</div>

<div onClick={()=>router.push('https://www.instagram.com/angadiworldtech/')}>

<Image
  className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
  src={Insta}
  alt="Insta"
/>
</div>

<div onClick={()=>router.push('https://www.linkedin.com/company/14456022/?msgControlName=view_message_button&msgConversationId=2-MzU0ZWE3YTQtODFhMC00OTM1LTg2NDgtZjEwZWQ5YmM4ZDI0XzAxMA%3D%3D&msgOverlay=true')}>
<Image
  className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
  src={Linkdin}
  alt="Linkdin"
/>

</div>
          <Image
            className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
            src={X}
            alt="X"
          />
        </div>
        <div className="absolute flex justify-center items-center lg:top-[92%] md:top-[90%] top-[92%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            className="md:w-40 md:h-40 h-16 w-16 spin-animation  rounded-full"
            src={Circle}
            alt="circle"
          />
          <Image
            className="absolute md:top-16 md:h-10 md:w-20 h-6 w-10 "
            src={AWT}
            alt="AWT"
          />
        </div>
      </div>

      <div className="md:w-11/12 lg:11/12 w-full mx-auto md:h-96 lg:h-96 mt-8 md:mt-0 lg:mt-0   flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between justify-center  items-center px-4 gap-6 ">
        <div className="flex flex-col justify-start items-start md:gap-8 lg:gap-8 gap-6 md:w-[60%] lg:w-[60%] w-full ">
          <div className="flex md:justify-start lg:justify-start justify-center  items-center md:h-10 lg:h-10 h-6 px-4 gap-2 ring-1 ring-black rounded-full ">
            <div>
              <GiRoundStar className="text-[#FF7143]" />
            </div>
            <p className="uppercase md:text-sm lg:text-sm text-[0.5rem] font-semibold">
              your go-to company for it solutions
            </p>
          </div>
          <h6 className="md:text-5xl lg:text-5xl text-3xl font-semibold   w-full ">
            Your partner for <br></br> Digital{" "}
            <AnimatePresence>
              {title.map(
                (value, index) =>
                  index === currentIndex && (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-[#FF7143] inline-block md:text-5xl lg:text-5xl text-3xl ml-2 absolute "
                    >
                      {value}.
                    </motion.p>
                  )
              )}
            </AnimatePresence>
          </h6>
          <p className="md:text-sm lg:text-base text-sm w-full font-semibold leading-7">
            We amplify the value of your digital presence, <br className=" hidden md:block lg:block"></br>propelling
            your brand to new heights.
          </p>
        </div>
        <div className="flex flex-col md:w-[50%] lg:w-[50%] w-full overflow-hidden justify-end items-start gap-8 md:ml-8 lg:ml-8 ml-0">
          <div className="flex justify-evenly gap-4 items-center">
            <AnimatePresence>
              {data.map((value, i) => (
                <div
                  key={i}
                  className={
                    i === 2 ? " px-4" : "border-r border-gray-600 px-4 "
                  }
                >
                  <motion.h6
                    initial={{ color: "black", scale: 1 }}
                    animate={
                      currentIndex1 === i
                        ? {
                            scale: [1, 1.1, 1],
                            color: ["#FF7143", "#FF7143", "#00000"],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                    }}
                    className=" font-extrabold md:text-3xl lg:text-3xl text-2xl  flex items-center text-black pb-2"
                  >
                    {value.title}
                    <p className="inline-block text-[#FF7143] ml-2 md:text-sm lg:text-sm text-[0.5rem] font-semibold uppercase">
                      {value?.subtitle}
                    </p>
                  </motion.h6>
                  <p className="md:text-sm lg:text-sm text-[0.5rem] uppercase font-semibold">
                    {value.Experience}
                  </p>
                </div>
              ))}
            </AnimatePresence>
          </div>

          <div>
            <p className="md:text-sm lg:text-base text-sm  md:break-all  text-justify md:w-11/12 lg:w-11/12 w-full mx-auto  font-semibold leading-7">
              {`  At the heart of our service lies a dedication to fulfilling your
              needs, prioritizing your requirements, and ensuring your utmost
              satisfaction.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
