"use client";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Customportfoliocard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
const router=useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${data.className} md:w-11/12 lg:w-11/12  p-6 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 h-auto rounded-lg place-content-center justify-between items-center overflow-hidden`}
    >
      <div className="flex flex-col justify-between items-start gap-24 w-full">
        <div className="flex flex-col justify-center items-start gap-2">
          <Image src={data.logo} className="object-contain" alt="logo" />
          <Divider />
          <p className="text-sm font-medium leading-7">{data.desc}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {data.tag.map((item, i) => (
              <div
                key={i}
                className={`${data.cardborder}  h-6 px-3 text-center rounded-full w-auto uppercase font-bold text-sm  flex justify-center items-center `}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center md:gap-8 lg:gap-8 gap-2 w-full">
          <div>
            <Button onPress={()=>router.push(`${data.link}`)} className="ring-1 rounded-full text-xs md:text-sm lg:text-sm font-bold uppercase ring-black text-black bg-transparent text-center md:w-60 lg:w-60">
              View website
            </Button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="h-12 w-12 bg-black rounded-full  relative flex justify-center items-center">
              <MdArrowOutward
                size={30}
                style={{ color: data.iconcolor }}
                className={`absolute top-2 text-[${data.iconcolor}]`}
              />
            </div>
            <p className="uppercase text-xs md:text-sm lg:text-sm font-bold">
              Case Study
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${data.className} hidden rounded-lg h-96 ml-8 p-8 md:flex lg:flex overflow-hidden justify-center items-center w-full ${data.cardborder}`}
      >
        {data.image.map(
          (img, i) =>
            currentIndex === i && (
              <motion.div
                key={i}
                initial={
                  i === 1 ? { x: -150, opacity: 0 } : { x: 100, opacity: 0 }
                }
                whileInView={
                  i === 1 ? { x: 20, opacity: 1 } : { x: -8, opacity: 1 }
                }
                transition={{ duration: 1, ease: "backInOut" }}
                exit={i === 1 ? { x: -150 } : { x: 100 }}
              >
                <Image
                  src={img}
                  className="object-contain ml-8 "
                  alt="desktop"
                />
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default Customportfoliocard;
