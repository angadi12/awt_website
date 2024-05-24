"use client";
import React, { useState,useContext } from "react";
import Circle from "../../public/Homeasset/Circle.png";
import AWT from "../../public/Homeasset/AWT.png";
import Oursolution from "../../public/Solutionasset/Oursolution.png";
import { Tabs, Tab } from "@nextui-org/react";
import {Navbar, NavbarContent} from "@nextui-org/react";
import Image from "next/image";
import Uiuxdesign from "@/components/Oursolutioncomponets/Uiuxdesign";
import Development from "@/components/Oursolutioncomponets/Development";
import Services from "@/components/Oursolutioncomponets/Services";
import Marketing from "@/components/Oursolutioncomponets/Marketing";
import { motion } from "framer-motion";
import X from "../../public/Homeasset/X.png";
import Insta from "../../public/Homeasset/Insta.png";
import Linkdin from "../../public/Homeasset/Linkdin.png";
import Facebook from "../../public/Homeasset/Facebook.png";
import { NavigationContext } from "../../app/Oursolution/NavigationContext"; 

const Page = () => {
  const { selectedTab, handleTabSelectionChange } = useContext(NavigationContext);


  const renderSelectedComponent = (selectedTab) => {
    switch (selectedTab) {
      case "UIUX":
        return <Uiuxdesign/>;
      case "DEVELOPMENT":
        return <Development/>;
      case "SERVICES":
        return <Services/>;
      case "MARKETING":
        return <Marketing/>;
      default:
        return null;
    }
  };

  

  return (
    <main className="flex flex-col justify-center items-center mx-auto overflow-hidden">

      <section className="flex flex-col  mx-auto justify-center items-center py-12 gap-8 mt-12 overflow-hidden">
      {renderSelectedComponent(selectedTab)}
      </section>

     
    </main>
  );
};

export default Page;
