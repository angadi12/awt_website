'use client'
import React, { useState } from "react";
import Team1 from "../../public/Solutionasset/Team1.png";
import Praneetha from "../../public/Homeasset/Praneetha.JPEG";
import Neha from "../../public/Homeasset/Neha.JPEG";
import Mithul from "../../public/Homeasset/Mithul.JPG";
import Santosh from "../../public/Homeasset/Santosh.jpg";
import Sreeja from "../../public/Homeasset/Sreeja.jpg";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { motion } from "framer-motion";

const Meetteam = () => {
  const [whileHoverindex, Sethoverindex] = useState(null);

  const teamdata = [
    {
      name: "Praneetha Medarametla",
      designation: "Operations Manager",
      picture: Praneetha,
      insta: "",
      facebook: "",
      linkdin: "",
    },
    {
      name: "Neha Konakalla",
      designation: "Technical Analyst",
      picture: Neha,
      insta: "",
      facebook: "",
      linkdin: "",
    },
    // {
    //   name: "Mutyala Venkata Sreeja",
    //   designation: "DM Executive ",
    //   picture: Sreeja,
    //   insta: "",
    //   facebook: "",
    //   linkdin: "",
    // },
    {
      name: "Mithul M",
      designation: "Product Designer",
      picture: Mithul,
      insta: "",
      facebook: "",
      linkdin: "",
    },
    {
      name: "Santosh Alimkar",
      designation: "Developer",
      picture:Santosh,
      insta: "",
      facebook: "",
      linkdin: "",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8  mx-auto">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider capitalize">
          Meet the team
        </h6>
      </div>

      <div className="w-11/12 mx-auto grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-6 place-content-center justify-items-center overflow-hidden">
        {teamdata.map((value, index) => (
          <div
            onMouseOver={() => Sethoverindex(index)}
            onMouseLeave={() => {
              Sethoverindex(null);
            }}
            key={index}
            className="relative"
          >
            <Image
              className="object-fill h-80 w-72 cursor-pointer"
              src={value.picture}
              alt="pic"
            />
          { whileHoverindex===index && <motion.div initial={{y:-300}} whileInView={{y:0}} transition={{duration:1, type:'spring'}} className="bg-black absolute top-0 w-full h-80 flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start w-full px-4 items-start gap-4 py-8">
                <p className="text-white uppercase text-xs font-medium">
                  {value.designation}
                </p>
                <h6 className="text-white capitalize font-bold text-xl">
                  {value.name}
                </h6>
              </div>
              <div className="flex justify-start items-start gap-2 mt-2 px-4 py-4">
                <AiFillInstagram
                  size={24}
                  className="text-white cursor-pointer "
                />
                <FaFacebookSquare
                  size={24}
                  className="text-white cursor-pointer "
                />
                <IoLogoLinkedin
                  size={24}
                  className="text-white cursor-pointer "
                />
                <FaSquareTwitter
                  size={24}
                  className="text-white cursor-pointer "
                />
                <IoLogoYoutube
                  size={24}
                  className="text-white cursor-pointer "
                />
              </div>
            </motion.div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetteam;
