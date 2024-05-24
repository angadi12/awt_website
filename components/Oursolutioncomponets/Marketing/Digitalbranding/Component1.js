import React from 'react'
import { GoDotFill } from "react-icons/go";

const Digitalbrandingpage = () => {
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center gap-8 py-12">
      <div className="w-11/12 mx-auto ">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        Our structured process for Digital Branding.
        </h6>
      </div>
      <div className="flex justify-center items-start gap-8 md:p-12 p-4 mx-auto flex-col md:flex-row">
        <div>
          <div className="relative border-s border-[#FF7143]">
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6   rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Discovery and Planning
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                {`We engage in thorough discussions to grasp your business objectives, target audience &  requirements. By conducting research, including industry analysis & competitor strategies, we ensure our approach aligns perfectly with your goals and objectives.`}
                </p>
              </div>
            </div>
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Design Concept Creation
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                {`With your needs in mind, our design team crafts initial designs & wireframes. These concepts capture your brand identity & are refined based on your feedback. Our aim is to create visually appealing designs that resonate with your audience.`}
                </p>
              </div>
            </div>
            <div className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Development & Implementation
                </h3>
                <p className="mb-12 text-justify text-sm font-medium ">
                {`Once the design is approved, our development team transforms the concepts into a fully functional website. We leverage cutting-edge technologies to build the website structure, integrate interactive elements, & ensure optimal performance & responsiveness.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative border-s border-[#FF7143] mb-28">
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Testing & Quality Assurance
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                {`As we near the completion of website development, we conduct rigorous testing to ensure functionality, usability, compatibility, and performance across devices and browsers. Our aim is a seamless user experience and optimal website performance.`}
                </p>
              </div>
            </div>
            <div className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Launch and Optimization
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                {`Once testing is complete & final approvals are secured, we launch your website to the public, marking a milestone in your online presence. We continually monitor its performance, tracking metrics & making improvements.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Digitalbrandingpage