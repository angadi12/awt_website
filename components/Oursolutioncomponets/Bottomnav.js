"use client";
import React, { useState,useContext } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import {Navbar, NavbarContent} from "@nextui-org/react";
import { NavigationContext } from "../../app/Oursolution/NavigationContext"; 
import { usePathname } from 'next/navigation'


const Bottomnav = () => {
    const pathname = usePathname()
    const { selectedTab, handleTabSelectionChange } = useContext(NavigationContext);




   
   




  return (
    <footer className="fixed bottom-0 w-full z-40 " >
    <Navbar  maxWidth="" className="w-full z-40 h-12 justify-center items-center bg-white ring-1 ring-gray-300">
    <NavbarContent className="flex justify-center items-center mx-auto w-full  md:-ml-20 lg:-ml-20 -ml-8">

    <Tabs
      selectedKey={selectedTab}
      onSelectionChange={handleTabSelectionChange}
      aria-label="Options"
      variant="light"
      classNames={{
        tabList: "md:gap-8 lg:gap-8  mx-auto w-full text-black relative rounded-none p-0",
        cursor: "w-full bg-[#FF7143] text-black",
        tab: "md:w-64 lg:w-64   h-12 text-black",
        tabContent: "group-data-[selected=true]:text-black text-gray-400  ",
      }}
    >
      <Tab
        key="UIUX"
        title={
          <div className="flex items-center md:space-x-2 ">
            <span className="md:text-sm lg:text-sm text-[0.6rem] font-bold">UI UX DESIGN</span>
          </div>
        }
      />
      <Tab
        key="DEVELOPMENT"
        title={
          <div className="flex items-center space-x-2">
            <span className="md:text-sm lg:text-sm text-[0.6rem] font-bold">DEVELOPMENT</span>
          </div>
        }
      />
      <Tab
        key="SERVICES"
        title={
          <div className="flex items-center md:space-x-2">
            <span className="md:text-sm lg:text-sm text-[0.6rem] font-bold">SERVICES</span>
          </div>
        }
      />
      <Tab
        key="MARKETING"
        title={
          <div className="flex items-center space-x-2">
            <span className="md:text-sm lg:text-sm text-[0.6rem] font-bold">MARKETING</span>
          </div>
        }
      />
    </Tabs>
    </NavbarContent>

    </Navbar>
  </footer>
  )
}

export default Bottomnav