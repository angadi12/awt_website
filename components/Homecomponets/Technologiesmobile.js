"use client";
import React from "react";
import Cloud from "../../public/Homeasset/Cloud.png";
import Datasci from "../../public/Homeasset/Datasci.png";
import AIML from "../../public/Homeasset/AIML.png";
import Softwarecon from "../../public/Homeasset/Softwarecon.png";
import IOT from "../../public/Homeasset/IOT.png";
import RPA from "../../public/Homeasset/RPA.png";
import Blockchain from "../../public/Homeasset/Blockchain.png";
import IMS from "../../public/Homeasset/IMS.png";
import SAP from "../../public/Homeasset/SAP.png";
import Robot from "../../public/Homeasset/Robot.png";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Technologiesmobile = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
    <div className="flex flex-col justify-center gap-2 items-center w-full mx-auto px-4 py-12 h-auto bg-black">
      <div className="flex flex-col justify-start items-start gap-3">
        <h6 className="text-3xl tracking-wider text-white font-semibold">
          Technologies <br></br> we use.
        </h6>
        <p className="text-gray-500 capitalize text-sm leading-5">{`We specialize in crafting innovative solutions, platforms, and experiences that engage your consumers in groundbreaking ways.`}</p>
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.25, duration: 1 }}
        className="flex justify-center items-center mx-auto"
      >
        <Image src={Robot} alt="roboda" />
      </motion.div>
      <Divider className="bg-white" />

      <div className="flex justify-center items-center mx-auto"></div>
      <Accordion
        showDivider={true}
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
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
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
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {data.map((value, index) => (
          <AccordionItem
            className="border-b text-white"
            indicator={({ isOpen }) =>
              isOpen ? (
                <MdOutlineArrowBack size={24} className="text-white" />
              ) : (
                <MdArrowOutward size={24} className="text-white" />
              )
            }
            key={index}
            aria-label="Accordion 1"
            title=<span className="text-white uppercase text-sm font-bold">
              {value.tittle}
            </span>
          >
            <div className="flex flex-col justify-center gap-2 items-center">
              <Image src={value.image} />
              <p className="text-sm leading-6 text-start">{value.desc}</p>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Technologiesmobile;
