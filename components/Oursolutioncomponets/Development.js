import React from 'react'
import Customanimationslide from "../Homecomponets/Customanimationslide";
import Component1 from "./Development/Components1";
import Component2 from "./Development/Component2";
import Component3 from "./Development/Component3";
import Component4 from "./Uiuxdesign/Component4";
import Componets5 from "./Uiuxdesign/Componets5";
import Component6 from "./Uiuxdesign/Component6";
import { Divider } from "@nextui-org/react";
import Component7 from "./Uiuxdesign/Component7";
import Component8 from "./Development/Component8";

const Development = () => {
  return (
    <section className="w-wfull flex-col gap-8 -mt-12 md:mt-0 lg:mt-0">
    <div className="w-11/12 mx-auto">
      <h2 className="md:text-3xl lg:text-3xl text-2xl font-semibold capitalize tracking-wider">
        Tailored{" "}
        <Customanimationslide
          text={"Solutions "}
          width={160}
          style={"ml-2 inline-block"}
        />
        <br></br>for your Requirements!
      </h2>
    </div>

    <div className="w-full flex-col flex justify-center items-center mx-auto ">
      <div className="">
        <Component1/>
      </div>
      <Component2/>
      <div className="w-11/12">
        <Component3/>
      </div>
      <div className="overflow-hidden">
      <Component4/>

      </div>
      <Componets5/>
      <Component6/>
      <Divider/>
      <Component7/>
      <Divider/>
      <Component8/>

    </div>
  </section>
  )
}

export default Development