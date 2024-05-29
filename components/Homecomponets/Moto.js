"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Customanimationslide from "./Customanimationslide";
import Image from "next/image";
import Animateicon1 from "../../public/Homeasset/Animateicon1.png";
import Animateicon2 from "../../public/Homeasset/Animateicon2.png";
import Animateicon3 from "../../public/Homeasset/Animateicon3.png";
import Animateicon4 from "../../public/Homeasset/Animateicon4.png";
import Animateicon5 from "../../public/Homeasset/Animateicon5.png";
import Animateicon6 from "../../public/Homeasset/Animateicon6.png";


import Emoji1 from "../../public/Homeasset/Emoji1.png";
import Emoji2 from "../../public/Homeasset/Emoji2.png";
import Emoji3 from "../../public/Homeasset/Emoji3.png";
import Emoji4 from "../../public/Homeasset/Emoji4.png";
import Emoji5 from "../../public/Homeasset/Emoji5.png";

const Moto = () => {
  const [showicons, setshowiocns] = useState(false);
  const [emojishow, Setemojishow] = useState(false);

  const starticonanimation = () => {
    setshowiocns(true);
    Setemojishow(false)
  };

  const showemoji=()=>{
    Setemojishow(true)
  }

  return (
    <div className="flex bg-black justify-center mb-8 mt-8 items-center overflow-hidden w-full md:h-screen lg:h-screen h-[60vh] relative ">
      <div>
        <motion.h6
          onAnimationComplete={starticonanimation}
          initial={{ opacity: 0, y: 200 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-3xl lg:text-3xl text-[0.8rem] font-bold md:leading-10 lg:leading-10 text-gray-500 "
        >
          Your <p className="inline-block text-white">requirements</p> are
          paramount <p className="inline-block text-white">to us.</p>
          <br></br> They drive our{" "}
          <p className="inline-block text-white">every action and decision,</p>{" "}
          ensuring<br></br>{" "}
          <p className="inline-block text-white">
            your satisfaction is our top <span className="inline-block md:hidden lg:hidden rounded-md bg-[#FF7143] text-white ml-1 px-2">priority.</span>
          </p>
          <Customanimationslide
            text={"Prority"}
            width={120}
            style={"md:inline-block ml-2 hidden "}
          />
        </motion.h6>
      </div>
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={showicons ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        
        className="absolute left-1/2 top-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-red-400"
      ></motion.div> */}
   { showicons &&  <motion.div
        initial={{ scale: 0, opacity: 0 }}
        onAnimationComplete={showemoji}
        whileInView={{ scale: [0, 1.2], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute  flex flex-col justify-center  items-center gap-6 w-full  z-10"
      >
        <div className="flex justify-between items-center  md:w-[60%] w-40  overflow-hidden">
          <motion.div className="">
            <Image
              className="md:h-14 md:w-14 h-10 w-10 rounded-full object-contain  absolute -top-24 lg:left-60 md:left-60 left-12"
              src={Animateicon1}
              alt="iconsimage"
            />
           { emojishow &&<Image
              className="md:h-8 md:w-8 h-6 w-6 absolute md:-top-[4.2rem] -top-[5rem] lg:left-60 md:left-60 left-12"
              src={Emoji1}
              alt="iconsimage"
            />}

          </motion.div>
          <motion.div>
            <Image
              className="md:h-14 md:w-14 h-10 w-10 absolute -top-24"
              src={Animateicon2}
              alt="Animateicon1"
            />
           {emojishow && <Image
              className="md:h-8 md:w-8 h-6 w-6 absolute md:-top-[4.2rem] -top-[5rem]"
              src={Emoji2}
              alt="Animateicon1"
            />}
          </motion.div>
        </div>
        <div className="flex justify-between items-center md:w-96 w-64">
          <motion.div>
            <Image
              className="md:h-14 md:w-14 h-10 w-10 absolute md:-top-28 -top-16 left-[45%] md:left-[50%]"
              src={Animateicon3}
              alt="iconimage"
            />
           { emojishow && <Image
              className="md:h-8 md:w-8 h-6 w-6 absolute md:-top-[5.2rem] -top-[3rem] left-[50%] "
              src={Emoji3}
              alt="iconimage"
            />}
          </motion.div>
          <motion.div>
            <Image
              className="md:h-14 md:w-14 h-10 w-10 md:-bottom-28 lg:-bottom-28 -bottom-20 absolute right-[45%] "
              src={Animateicon4}
              alt="iconimage"
            />
            { emojishow && <Image
              className="md:h-8 md:w-8 h-6 w-6 md:-bottom-[7.2rem] -bottom-[5rem] absolute right-[45%] "
              src={Emoji4}
              alt="iconimage"
            />}
          </motion.div>
        </div>
        <div className="flex justify-between items-center md:w-96 w-64">
          <motion.div>
            <Image
              className="md:h-14 md:w-14 h-10 w-10 absolute -bottom-28 md:right-[70%] right-[75%]"
              src={Animateicon5}
              alt="iconimage"
            />
          { emojishow && <Image
              className="md:h-8 md:w-8 h-6 w-6 absolute -bottom-[7.2rem] md:right-[70%] right-[75%] "
              src={Emoji1}
              alt="iconimage"
            />}
          </motion.div>
          <motion.div>
            <Image
              className="md:h-14 md:w-14 h-10 w-10 absolute -bottom-28 md:right-[20%] right-[18%]"
              src={Animateicon6}
              alt="iconiamge"
            />
            { emojishow && <Image
              className="md:h-8 md:w-8 h-6 w-6 absolute -bottom-[7.2rem] right-[20%]"
              src={Emoji5}
              alt="iconiamge"
            />}
          </motion.div>
        </div>
      </motion.div>}
    </div>
  );
};

export default Moto;
