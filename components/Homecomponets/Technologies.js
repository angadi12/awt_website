"use client";
import React, { useState } from "react";
import Customanimationslide from "./Customanimationslide";
import { Divider, image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "../../public/Homeasset/arrow.png";
import Robot from "../../public/Homeasset/Robot.png";

import Cloud from "../../public/Homeasset/Cloud.png";
import Datasci from "../../public/Homeasset/Datasci.png";
import AIML from "../../public/Homeasset/AIML.png";
import Softwarecon from "../../public/Homeasset/Softwarecon.png";
import IOT from "../../public/Homeasset/IOT.png";
import RPA from "../../public/Homeasset/RPA.png";
import Blockchain from "../../public/Homeasset/Blockchain.png";
import IMS from "../../public/Homeasset/IMS.png";
import SAP from "../../public/Homeasset/SAP.png";

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const datalist = [
    {
      text: <span>Cloud&nbsp;Computing</span>,
      width: 160,
    },
    {
      text: <span>data&nbsp;science</span>,
      width: 130,
    },
    {
      text: <span>AI&nbsp;ML</span>,
      width: 60,
    },
    {
      text: <span>software&nbsp;consulting</span>,
      width: 200,
    },
    {
      text: "iot",
      width: 50,
    },
    {
      text: "rpa",
      width: 50,
    },
    {
      text: "blockchain",
      width: 110,
    },
    {
      text: "ims",
      width: 50,
    },
    {
      text: <span>dev&nbsp;ops</span>,
      width: 80,
    },
    {
      text: "sap",
      width: 50,
    },
  ];

  const data = [
    {
      image: Cloud,
      desc: `The method of delivering on-demand computing services - including servers, storage, databases, networking, software, analytics, and intelligence over the internet offers faster innovation, flexible resources, and economies of scale. Cloud computing enables organizations to consume resources as a utility- just like electricity- rather than building and maintaining computing infrastructures in-home. It's worth noting that Cloud Computing is not a single technology, it's a collection of technologies that work together to provide various services over the internet.`,
      tittle: "cloud computing",
    },
    {
      image: Datasci,
      desc: `It is an interdisciplinary field that involves using scientific methods, algorithms, and systems to extract knowledge and insights from all types of data. Techniques from machine learning, data mining, and strategical analysis uncover patterns and trends in data, then use this knowledge to make data-driven decisions and predictions. They also use programming languages like Python and R to work with data and build models. It's a constantly evolving field with new techniques, tools, and technologies emerging.`,
      tittle: "Data science",
    },
    {
      image: AIML,
      desc: `Al is the border concept of machines being able to perform tasks that would typically require human intelligence. Human-like understanding of your website & marketing! ML is a technique of teaching machines to learn from data and make predictions. ML is mainly concerned about accuracy and patterns. Al and ML are used to analyze medical images, predict patient outcomes, and assist with diagnosis. We bring software to life!`,
      tittle: "AI & ML",
    },
    {
      image: Softwarecon,
      desc: `Software Consulting is a service helping the company improve its software development and implementation process. It involves providing advice and guidance to clients on how to best utilize software to achieve their business goals. Our software consultants work with clients to understand their needs, identify areas for improvement, and recommend solutions that can help to streamline their processes and improve efficiency. Software Consulting can be beneficial for organizations of all sizes, as it can help to improve efficiency, reduce costs, and increase the ROI of their software investments.`,
      tittle: "software consulting",
    },
    {
      image: IOT,
      desc: `We build a network of physical devices, vehicles, buildings, and other items embedded with electronics, software, sensors, and connectivity which enables these objects to connect and exchange data. These objects are sensed and controlled remotely across existing network infrastructure, creating opportunities for more direct integration of the physical world into computer-based systems, resulting in improved efficiency, accuracy, and economic benefit.`,
      tittle: "IoT",
    },
    {
      image: RPA,
      desc: `Our technology allows software robots to emulate human actions and automate repetitive, rule-based processes. The software "bots" interact with the existing applications and systems just like human users, so they can be integrated into a company's existing infrastructure without the need for extensive modifications. RPA is integrated with other technologies such as artificial intelligence (AI) and machine learning (ML) to create "intelligent automation" solutions that can perform more complex tasks, such as decision-making and many more.`,
      tittle: "rPA",
    },
    {
      image: Blockchain,
      desc: `It is a distributed ledger technology that uses cryptography to secure and validate transactions. It is the technology that underlies cryptocurrencies such as Bitcoin and Ethereum. In a blockchain network, transactions are grouped into blocks and added to a chain, creating an immutable record of all past transactions. Once a block is added to the chain, the data it contains cannot be altered or deleted, creating an immutable record of all transactions. Blockchain also offers decentralization and immutability, which eliminates the need for intermediaries and ensures that the data stored on the blockchain cannot be altered.`,
      tittle: "block chain",
    },
    {
      image: IMS,
      desc: `We build a network of physical devices, vehicles, buildings, and other items embedded with electronics, software, sensors, and connectivity which enables these objects to connect and exchange data. These objects are sensed and controlled remotely across existing network infrastructure, creating opportunities for more direct integration of the physical world into computer-based systems, resulting in improved efficiency, accuracy, and economic benefit.`,
      tittle: "IMS",
    },
    {
      image: IMS,
      desc: `The software development methodology combines software development (Dev) and IT operations (Ops) to improve the speed and quality of software delivery. We focus on collaboration, automation, and integration between development and operations teams to streamline the software development lifecycle. We use this to improve the software delivery process and to achieve better collaboration, faster time-to-market, and more efficient use of resources.`,
      tittle: "dev ops",
    },
    {
      image: SAP,
      desc: `Transform your business with our future-ready ERP solution. Our suite of enterprise resource planning (ERP) software applications seamlessly integrates core functions, such as accounting, supply chain management, human resources, and customer relationship management. With built-in intelligent technologies like AI, machine learning, and advanced analytics, we empower you to become a best-run business. Streamline operations, enhance data accuracy, and minimize errors with our centralized control system. Maximize efficiency and stay ahead of the curve in today's dynamic market landscape.`,
      tittle: "SAP",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full h-auto bg-black py-8 mt-4 md:px-8 lg:px-4 overflow-hidden">
      <div className="w-11/12 flex justify-between items-center  md:py-4 lg:py-8">
        <div className="w-1/2 flex justify-start flex-col items-start gap-2  ">
          <div className="">
            <Customanimationslide
              text={"Technologies"}
              width={240}
              style={"flex text-3xl font-bold inline-block tracking-wider"}
            />
          </div>
          <span className="text-white text-3xl font-bold capitalize tracking-wider">
            we are familiar with.
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-end text-gray-600 text-lg font-semibold w-[32rem]">{`We specialize in crafting innovative solutions, platforms, and experiences that engage your consumers in groundbreaking ways.`}</p>
        </motion.div>
      </div>
      <Divider className="bg-white w-11/12 mx-auto" />
      <div className="flex justify-start gap-24 items-center md:py-4 lg:py-8 w-11/12">
        <div className="flex justify-start items-start w-[40%] md:gap-4 lg:gap-5 flex-col">
          {datalist.map((value, index) => (
            <div
              key={index}
              onMouseOver={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col gap-2 justify-between items-start w-full "
            >
              <div className="flex cursor-pointer  justify-between items-start w-full ">
                <motion.div
                  initial={{ width: value.width, opacity: 1 }}
                  animate={
                    hoveredIndex === index
                      ? {
                          width: [
                            0,
                            10,
                            20,
                            30,
                            40,
                            60,
                            70,
                            80,
                            90,
                            100,
                            value.width,
                          ],
                          opacity: 1,
                          backgroundColor: "#FF7143",
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "backInOut",
                    type: "spring",
                  }}
                  className="relative top-0 w-full pl-1 z-10 h-8 flex justify-start items-start"
                >
                  <p className="uppercase absolute w-full top-1 text-white text-sm font-semibold">
                    {value.text}
                  </p>
                </motion.div>
                <div>
                  <Image className="h-4 w-4 mt-2" src={arrow} alt="arrow" />
                </div>
              </div>
              <Divider className="w-full bg-white" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-start w-full">
          {hoveredIndex === null ? (
            <div className=" w-full h-auto flex justify-center items-center">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {" "}
                <Image
                  className=" h-[34rem] w-[34rem] "
                  src={Robot}
                  alt="Robot"
                />
              </motion.div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-start">
              {data.map(
                (value, index) =>
                  hoveredIndex === index && (
                    <motion.div
                     initial={{opacity:0, y:50}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:1,type:"spring"}}
                      key={index}
                      className="flex flex-col justify-center items-start gap-4 mt-8"
                    >
                      <Image src={value.image} />
                      <h1 className="text-xl font-semibold uppercase text-white">
                        {value.tittle}
                      </h1>
                      <p className="text-sm leading-7 font-medium text-white text-start">
                        {value.desc}
                      </p>
                    </motion.div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      {/* <Divider className="bg-white w-11/12 mx-auto" /> */}
    </div>
  );
};

export default Technologies;
