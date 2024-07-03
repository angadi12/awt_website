"use client";
import Commonheader from "@/components/Oursolutioncomponets/Commonheader";
import { Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const Page = () => {
  const [currentindex, setcurrentindex] = useState(0);

  const navitems = [
    "Privacy Policy",
    ` Consent`,
    ` Information we collect`,
    ` How your Info is Used`,
    ` Log Files`,
    `Cookies & Web Beacons`,
    `Advertising Partner`,
    `CCPA Privacy Rights`,
    ` GDPR Data Protection`,
    `Children’s Information`,
  ];

  const Termsofuse = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">privacy policy</h1>
          <p className="text-sm font-medium leading-7 text-justify">
            {`At Angadi world Tech, accessible from www.angadiworldtech.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Angadi world Tech and how we use it.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">{`If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Angadi world Tech. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.`}</p>
        </div>
      </section>
    );
  };

  const Cookies = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">consent</h1>
          <p className="text-sm font-medium leading-7 text-justify">{`By using our website, you hereby consent to our privacy policy & agree to it’s terms.`}</p>
        </div>
      </section>
    );
  };

  const License = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">
            information we collect
          </h1>
          <p className="text-sm font-medium leading-7 text-justify">{`The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`}</p>
        </div>
      </section>
    );
  };

  const Hyperlinking = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">
            how your information is used
          </h1>
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-sm font-bold uppercase">{`We use the information we collect in various ways, including to:`}</h1>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Provide, operate, and maintain our website`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Improve, personalize, and expand our website`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Understand and analyze how you use our website`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Develop new products, services, features, and functionality`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Send you emails`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Find and prevent fraud`}
            </span>
          </div>
        </div>
      </section>
    );
  };

  const Iframe = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">log files</h1>
          <p className="text-sm font-medium leading-7 text-justify">{`Angadi world Tech follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`}</p>
        </div>
      </section>
    );
  };

  const ContentLiability = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">cookies & web beacons</h1>
          <p className="text-sm font-medium leading-7 text-justify">{`Like any other website, Angadi world Tech uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. For more general information on cookies, please read the Cookies article on Generate Privacy Policy website.`}</p>
        </div>
      </section>
    );
  };

  const Reservationrights = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">
            advertising partner privacy policy
          </h1>
          <p className="text-sm font-medium leading-7 text-justify">{`You may consult this list to find the Privacy Policy for each of the advertising partners of Angadi world Tech. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Angadi world Tech, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
`}</p>
          <p className="text-sm font-bold leading-7 text-justify">{`Note that Angadi world Tech has no access to or control over these cookies that are used by third-party advertisers.`}</p>
        </div>
      </section>
    );
  };

  const Removallinks = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">{`ccpa privacy rights (do not sell my personal information)`}</h1>
          <p className="text-sm font-medium leading-7 text-justify">{`Under the CCPA, among other rights, California consumers have the right to:
`}</p>
          <div className="flex flex-col justify-center items-start gap-2">
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Request that a business delete any personal data about the consumer that a business has collected.
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">{`If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`}</p>
        </div>
      </section>
    );
  };

  const Disclaimer = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">
            gdpr data protection rights
          </h1>
          <p className="text-sm font-medium leading-7 text-justify">{`We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:`}</p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">The right to access -</span>
            {` You have the right to request copies of your personal data. We may charge you a small fee for this service.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">The right to rectification -</span>
            {` You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">The right to erasure -</span>
            {` You have the right to request that we erase your personal data, under certain conditions.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">
              The right to restrict processing -
            </span>
            {` You have the right to request that we restrict the processing of your personal data, under certain conditions.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">
              The right to object to processing -{" "}
            </span>
            {`You have the right to object to our processing of your personal data, under certain conditions.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">
            <span className="text-[#FF7143]">
              The right to data portability -
            </span>
            {` You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">{`If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please
contact us.`}</p>
        </div>
      </section>
    );
  };

  const Gdpr = () => {
    return (
        <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h1 className="text-lg font-bold uppercase">{`Children’s Information`}</h1>
          <p className="text-sm font-medium leading-7 text-justify">{`Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`Angadi world Tech does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`}</p>
        </div>
      </section>
    );
  };

  const contentcomponent = [
    {comp:<Termsofuse />},
   { comp:<Cookies />},
    {comp:<License />},
    {comp:<Hyperlinking />},
   {comp: <Iframe />},
   {comp: <ContentLiability />},
   {comp: <Reservationrights />},
   {comp: <Removallinks />},
    {comp:<Disclaimer />},
    {comp:<Gdpr />},
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto h-auto mb-8">
      <Commonheader />

      <div className="md:flex lg:flex justify-center items-start w-full py-16 h-auto hidden">
        <div className="flex-[0.2] py-4 justify-center items-start  bg-[#FF71433B] sticky w-1/3   h-auto">
          <div>
            <h1 className="uppercase font-bold text-center text-sm mb-6">
              Table of Contents
            </h1>
          </div>

          {navitems.map((value, index) => (
            <div
              onClick={() => setcurrentindex(index)}
              key={index}
              className="flex cursor-pointer justify-between items-center pl-16 mb-4 w-full"
            >
              <p
                className={
                  currentindex === index
                    ? "capitalize text-[#FF7143] text-sm font-medium cursor-pointer"
                    : "capitalize text-sm font-medium cursor-pointer"
                }
              >
                {value}
              </p>
              <span
                className={
                  currentindex === index
                    ? "w-2 h-8 bg-[#FF7143]"
                    : "w-2 h-8 bg-transparent"
                }
              ></span>
            </div>
          ))}
        </div>

        <div className="flex-[0.8] flex-col   justify-center items- start  w-full  h-auto">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-3x font-bold px-12  tracking-wider">
              Privacy Policy
            </h1>
          </div>
          {contentcomponent.map(
            (value, index) => currentindex === index &&
            ( <div key={index}>
             {value.comp}

             </div>)
          )}
        </div>
      </div>


      <div className="flex md:hidden lg:hidden flex-col justify-center items-start  w-full mx-auto py-4">

           
           {
            contentcomponent.map((value,index)=>(
                <div key={index} className="flex flex-col justify-center items-start w-full mx-auto">
                    {value.comp}
                    <Divider className="my-4"/>
                </div>
            ))
           }

      </div>
    </section>
  );
};

export default Page;
