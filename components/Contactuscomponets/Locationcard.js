"use client";
import React, { useState } from "react";
import Hydrabad from "../../public/Solutionasset/Hydrabad.png";
import Banglore from "../../public/Solutionasset/Banglore.png";
import London from "../../public/Solutionasset/London.png";
import QRCODE from "../../public/Solutionasset/QRCODE.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Locationcard = () => {
  const [whileHoverindex, Sethoverindex] = useState(null);
  const [showqrcode, Setshowqrcode] = useState(null);

  const carddata = [
    {
      image: Hydrabad,
      cityname: "Bangalore",
      desc: "#93/1,5,First Floor MRS Complex, Ramamurthy Nagar Main Rd, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
      barcode: QRCODE,
    },
    {
      image: Banglore,
      cityname: "Hyderabad",
      desc: "5th Floor, Rajapushpa Summit, Nanakramguda Rd, Financial District, Gachibowli, Hyderabad, Telangana 500008",
      barcode: QRCODE,
    },
    {
      image: London,
      cityname: "London",
      desc: "1 Kesteven Close, Ilford, London IG6 3EP",
      barcode: QRCODE,
    },
  ];

  return (
    <div className="bg-black  w-full flex flex-col gap-8 justify-center items-center py-12">
      <div>
        <h1 className="uppercase text-2xl font-bold text-white text-center ">
          we have <span className="text-[#FF7143]">three</span> locations{" "}
          <span className="text-[#FF7143]">globally!</span>
        </h1>
      </div>
      <div>
        <p className="text-center text-white font-medium md:text-sm lg:text-sm text-xs">
          {`Angadi World Technologies is a top-tier provider of Web and App Design & Development, along with`}
          <br className="hidden md:block"></br>{" "}
          {`Digital Marketing services. Renowned for our innovative solutions, we excel in delivering cutting-edge`}
          <br className="hidden md:block"></br>{" "}
          {`mobile apps and digital experiences to a global clientele.`}
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 w-11/12 mx-auto items-center justify-center px-2 ">
        {carddata.map((value, index) => (
          <div
            key={index}
            onMouseOver={() => Sethoverindex(index)}
            onMouseLeave={() => {
              Sethoverindex(null);
            }}
            className="ring-1 ring-white rounded-md h-[22rem] overflow-hidden  "
          >
            <div className="flex justify-end w-full items-end py-2">
              <FiArrowUpRight size={36} className="text-white" />
            </div>
            {showqrcode === index ? (
              <div className="flex flex-col -mt-4 justify-center items-center  relative">
                <h1 className="text-white uppercase text-sm font-bold ">
                  scan for location
                </h1>
                <Image
                  onClick={()=>Setshowqrcode(null)}
                  className="object-fill w-40 h-40"
                  src={value.barcode}
                  alt="imageicon"
                />
                <Image
                  className="object-fill md:mt-12 lg:mt-12 mt-10  "
                  src={value.image}
                  alt="imageicon"
                />
              </div>
            ) : (
              <motion.div
                initial={{ y: 80 }}
                whileInView={whileHoverindex === index ? { y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex flex-col -mt-4 justify-center items-center gap-4 relative"
              >
                <h1 className="text-white uppercase text-sm font-bold ">
                  {value.cityname}
                </h1>
                <p className="text-center text-white text-xs px-4 mb-4">
                  {value.desc}
                </p>
                {whileHoverindex === index && (
                  <motion.span
                    whileTap={{ scale: 1.1 }}
                    onClick={() => Setshowqrcode(index)}
                    className="text-sm cursor-pointer font-bold uppercase text-[#FF7143]"
                  >
                    tap for qr code
                  </motion.span>
                )}
                {whileHoverindex === index && (
                  <Image
                    className="object-fill md:mt-12 lg:mt-12 mt-20 "
                    src={value.image}
                    alt="imageicon"
                  />
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locationcard;
