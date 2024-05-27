"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";
import Customanimationslide from "./Customanimationslide";
import { useRouter } from "next/navigation";

const FAQ = () => {
  const router =useRouter()
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex justify-center md:items-start items-center md:gap-32 gap-8 py-16 w-11/12 mx-auto flex-col lg:flex-row h-auto">
      <div className="gap-4 flex flex-col justify-start  mx-auto mt-4 h-auto lg:w-2/4 w-full">
        <h6 className="text-3xl font-bold md:w-[23rem] leading-9 text-black">
          Frequently Asked <Customanimationslide text={'Questions'} width={170} style={'block'}/>

        </h6>
        <p className=" text-gray-400 text-xs capitalize font-medium">
         {`Still have some unsolved queries?`}
        </p>
        <div className="flex  items-center ">
          <Button onPress={()=>router.push('/Contactus')} className=" w-60 uppercase bg-white ring-1 ring-black rounded-full text-xs   text-black font-medium">
           Contact us
          </Button>
        </div>
      </div>

      <div className="lg:w-9/12 w-full">
        <Accordion selectionMode="single" variant="light">
          <AccordionItem
            key="1"
            aria-label="Will I get a refund after 7 days?"
            title=<p className="text-sm font-medium ">
             {` Hiring UI UX will be better?`}
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Will I get unlimited generations?"
            title=<p className="text-sm font-medium ">
           {`What is the process for working with you?`}
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can I upload linktree in the URL?"
            title=<p className="text-sm font-medium ">
             {`What sets your company apart from others?`}
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Can I track the number of click?"
            title=<p className="text-sm font-medium ">
              {`What is your pricing structure?`}
            </p>
          >
            <p className="text-sm font-medium ">{defaultContent}</p>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-end items-center px-1 gap-2">
          <Button variant="light">
            <p className="text-[#FF7143] text-sm">See more questions</p>
            <GoArrowDown className="text-[#FF7143] text-sm" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
