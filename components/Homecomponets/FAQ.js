"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";
import Customanimationslide from "./Customanimationslide";
import { useRouter } from "next/navigation";


const general = [
  {
    questions: "What services does AWT offer?",
    ans:'Angadi World Technologies (AWT) specialises in a comprehensive suite of IT services, including website development, mobile app development, QR code technology solutions, digital marketing strategies, and project consulting to elevate your business.'
  },
  {
    questions: "Where is AWT located?",
    ans:'As we provide services across the globe, we are available online 24/7 and also have physical offices in Bangalore and Hyderabad.'
  },
  {
    questions: "How can I get a quote for my project?",
    ans:<span>{`Requesting a quote is simple. Reach out to us through our website's contact form or email us directly at`} <span  className="text-[#FF7143] font-semibold cursor-pointer"> <Link href={'mailto:info@angadiworldtech.com'}>info@angadiworldtech.com</Link></span>{`,and our team will get back to you promptly.`}</span>,
  },
  {
    questions: "How long has AWT been in business?",
    ans:`Founded in 2018, AWT has been delivering innovative IT solutions and exceptional service for over six years.
    `
  },
  {
    questions: " How can I contact AWT for support?",
    ans:<span>{`You can reach our support team via our website, email at`}<span  className="text-[#FF7143] font-semibold cursor-pointer"> <Link href={'mailto:info@angadiworldtech.com'}>info@angadiworldtech.com</Link></span>{`, or by calling the customer service number listed on our contact page. We are here to assist you with any queries or support needs.`}</span>
  },
];

const designing = [
  {
    questions: "What design services does AWT offer?",
    ans:`We offer a full spectrum of design services, including UI/UX design, graphic design, and branding to create visually appealing and user-friendly interfaces.
    `
  },
  {
    questions: "How does AWT approach a design project?",
    ans:'Our design process starts with understanding your vision and requirements, followed by brainstorming, creating wireframes, developing prototypes, and finalising the design based on your feedback.'
  },
  {
    questions: "Can AWT redesign my existing website/ app?",
    ans:`Yes, we specialise in redesigning existing websites and apps to enhance their look, feel, and functionality`
  },
  {
    questions: "What software AWT use for designing?",
    ans:`We use various designing softwares like Figma, Adobe XD, Photoshop, Illustrator, Canva and so on.`
  },
];

const development = [
  {
    questions: "What development services does AWT offer?",
    ans:`We provide end-to-end development services including website development, mobile app development, and custom software development.
    `
  },
  {
    questions: "What technologies does AWT specialise in?",
    ans:`Our team is proficient in a wide range of technologies, including JavaScript, Python, PHP, React, Angular, and more, enabling us to deliver robust and scalable solutions.
    `
  },
  {
    questions: "Does AWT offer post-launch support & maintenance?",
    ans:`Yes, we provide comprehensive post-launch support and maintenance to ensure your solutions remain cutting-edge and perform flawlessly.
    `
  },
  {
    questions: "Can AWT integrate third-party APIs into my project?",
    ans:`Certainly! We have extensive experience integrating a variety of third-party APIs to enhance the functionality and performance of your applications.`
  },
];

const marketing = [
  {
    questions: "Can AWT assist with digital marketing for my business?",
    ans:`Absolutely! Our digital marketing experts are adept at crafting impactful social media campaigns, optimizing your online presence through SEO, and executing targeted online advertising strategies.
    `
  },
  {
    questions: "What digital marketing services does AWT provide?",
    ans:`We offer a comprehensive suite of digital marketing services including SEO, social media marketing, content marketing, email marketing, and online advertising.
    `
  },
  {
    questions: "How can digital marketing help my business?",
    ans:`Digital marketing can enhance your online visibility, attract more customers, build brand awareness, and ultimately drive sales and growth for your business.`
  },
  {
    questions:
      "How does AWT measure the success of digital marketing campaigns?",
      ans:`We use a variety of analytics tools to measure key performance indicators (KPIs) such as website traffic, conversion rates, engagement rates, and return on investment (ROI) to ensure your campaigns are effective.`
  },
];

const Consultation = [
  {
    questions: "What project consulting services does AWT offer?",
    ans:`AWT provides expert project consulting services, including strategic planning, process optimization, technology implementation, and project management to help your business achieve its goals.
    `
  },
  {
    questions: "How can project consulting benefit my business?",
    ans:`Our project consulting services can streamline your operations, enhance efficiency, reduce costs, and ensure successful project outcomes by leveraging our industry expertise and best practices.`
  },
  {
    questions:
      "What is the process for engaging AWT’s project consulting services?",
      ans:`Our process involves an initial assessment to understand your business needs, followed by tailored consulting services designed to address your specific challenges and opportunities.
      `
  },
  {
    questions: "What industries does AWT provide project consulting for?",
    ans:`We offer project consulting services across various industries including IT, healthcare, retail, manufacturing, and more, providing customised solutions to meet the unique needs of each sector.`
  },
];

const qrtech = [
  {
    questions: "What QR code technology solutions does AWT offer?",
    ans:`We provide comprehensive QR code solutions including QR code generation, integration, and management for various applications such as marketing, product tracking, and event management.
    `
  },
  {
    questions: "How can QR codes benefit my business?",
    ans:`QR codes can streamline processes, enhance customer engagement, provide easy access to information, and facilitate contactless transactions, making them a versatile tool for modern businesses.
    `
  },
  {
    questions: "Can AWT integrate QR codes into my existing systems?",
    ans:`Yes, we can seamlessly integrate QR codes into your existing systems and applications to enhance functionality and user experience.
    `
  },
  {
    questions: "What industries can benefit from QR code technology?",
    ans:`QR code technology is versatile and can benefit various industries including retail, hospitality, healthcare, events, and logistics by improving efficiency and customer interaction.
    `
  },
];

const FAQ = () => {
  const router = useRouter();
  const [selectedtab, Setselectedtab] = useState(0);
  const [selecteddata, Setselecteddata] = useState(general);

  const active = "rounded-md bg-[#FF7143] text-white font-semibold";
  const unactive = "rounded-md text-gray-500 font-semibold";

  const tab = [
    {
      tabname: "General",
    },
    {
      tabname: "Designing",
    },
    {
      tabname: "Development",
    },
    {
      tabname: "Marketing",
    },
    {
      tabname: "Consultation",
    },
    {
      tabname: "QR Tech",
    },
  ];

  const handleTabChange = (index) => {
    Setselectedtab(index);
    switch (index) {
      case 0:
        Setselecteddata(general);
        break;
      case 1:
        Setselecteddata(designing);
        break;
      case 2:
        Setselecteddata(development);
        break;
      case 3:
        Setselecteddata(marketing);
        break;
      case 4:
        Setselecteddata(Consultation);
        break;
      case 5:
        Setselecteddata(qrtech);
        break;
      default:
        Setselecteddata(general);
    }
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="w-full flex flex-col-reverse md:flex-col lg:flrx-col justify-center items-center  mx-auto">
      <div className="w-11/12 grid md:grid-cols-6 lg:grid-cols-6 grid-cols-3 place-content-center justify-evenly items-start gap-2">
        {tab.map((value, index) => (
          <Button
            onPress={() => handleTabChange(index)}
            className={selectedtab === index ? active : unactive}
            key={index}
          >
            {value.tabname}
          </Button>
        ))}
      </div>
      <div className="flex justify-center md:items-start items-center md:gap-32 gap-8 py-8 w-11/12 mx-auto flex-col lg:flex-row h-auto">
        <div className="gap-4 flex flex-col justify-start  mx-auto mt-4 h-auto lg:w-2/4 w-full">
          <h6 className="text-3xl font-bold md:w-[23rem] leading-9 text-black">
            Frequently Asked{" "}
            <Customanimationslide
              text={"Questions"}
              width={170}
              style={"block"}
            />
          </h6>
          <p className=" text-gray-400 text-xs capitalize font-medium">
            {`Still have some unsolved queries?`}
          </p>
          <div className="flex  items-center ">
            <Button
              onPress={() => router.push("/Contactus")}
              className=" w-60 uppercase bg-white ring-1 ring-black rounded-full text-xs   text-black font-medium"
            >
              Contact us
            </Button>
          </div>
        </div>

        <div className="lg:w-9/12 w-full">
          <Accordion selectionMode="single" variant="light">
            {selecteddata.map((value, index) => (
              <AccordionItem
                key={index}
                aria-label="Will I get a refund after 7 days?"
                title=<p className="text-sm font-medium ">{value.questions}</p>
              >
                <p className="text-sm font-medium leading-6 ">{value.ans}</p>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex justify-end items-center px-1 gap-2">
            {/* <Button variant="light">
              <p className="text-[#FF7143] text-sm">See more questions</p>
              <GoArrowDown className="text-[#FF7143] text-sm" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
