"use client";
import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Sravan from '../../public/Homeasset/Sravan.png'
import Ramya from '../../public/Homeasset/Ramya.png'

const Accordiancustom = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-11/12 mx-auto py-12">
      <div className="w-full mx-auto ">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Meet the pillars of aWT.
        </h6>
      </div>
      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 80,
                  duration: 2,
                },
                opacity: {
                  easings: "ease",
                  duration: 2,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.5,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.5,
                },
              },
            },
          },
        }}
        variant="light"
      >
        <AccordionItem
          className="text-6xl font-bold"
          key="1"
          aria-label="Accordion 1"
          title="FOUNDER & CEO"
          indicator={({ isOpen }) =>
            isOpen ? (
              <MdOutlineArrowBack className="text-black" />
            ) : (
              <MdArrowOutward className="text-black" />
            )
          }
        >
          <div className="flex justify-between items-center px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 w-full place-content-center justify-between items-center px-2 mx-auto">
              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-sm font-medium leading-7 "><span className="font-bold mr-2">Mr.Sravan Kumar Angadi</span>{`the CEO & Co-Founder of Angadi world Technologies (AWT) has been responsible for running all facets of AWT ever since its inception in 2018, he is an budding industry leader driving excellence and growth in the field of Software Technologies and Business Solution.`}</p>
                {/* <Button className="w-60 rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none flex items-center gap-4 ring-1 ring-black ml-2 bg-white text-black hover:bg-black hover:text-white">
                  View Site
                  <IoIosArrowRoundForward />
                </Button> */}
              </div>
              <div className="flex justify-center items-center gap-2 flex-col">
                <Image src={Sravan} alt="Sravan"/>
                <p className="text-sm">Sravan Kumar Angadi</p>
              </div>
            </div>
            <div></div>
          </div>
        </AccordionItem>
        <AccordionItem
          className="text-6xl font-bold"
          key="2"
          aria-label="Accordion 2"
          title="CO-FOUNDER & CFO"
          indicator={({ isOpen }) =>
            isOpen ? (
              <MdOutlineArrowBack className="text-black" />
            ) : (
              <MdArrowOutward className="text-black" />
            )
          }
        >
          <div className="flex justify-between items-center px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 w-full place-content-center justify-between items-center px-2 mx-auto">
              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-sm font-medium leading-7 "><span className="font-bold mr-2">Ms. Ramya</span>{`at AWT acts as a strategic partner across all the chief operations and Business at AWT. She is an highly motivated and purpose driven professional, who has in-built business instincts that not only makes her stand apart but also helps our clients and their projects to have an edge over others.`}</p>
                {/* <Button className="w-60 rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none flex items-center gap-4 ring-1 ring-black ml-2 bg-white text-black hover:bg-black hover:text-white">
                  View Site
                  <IoIosArrowRoundForward />
                </Button> */}
              </div>
              <div className="flex justify-center items-center gap-2 flex-col">
                <Image src={Ramya} alt="Ramya"/>
                <p className="text-sm ">Ms. Ramya</p>
              </div>
            </div>
            <div></div>
          </div>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default Accordiancustom;
