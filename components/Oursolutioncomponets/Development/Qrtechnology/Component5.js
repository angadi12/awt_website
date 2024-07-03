import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Manufacturing from '../../../../public/Solutionasset/Manufacturing.png'
import Retail from '../../../../public/Solutionasset/Retail.png'
import Helthcare from '../../../../public/Solutionasset/Helthcare.png'
import Logistics from '../../../../public/Solutionasset/Logistics.png'
import Hospilaty from '../../../../public/Solutionasset/Hospilaty.png'

const Component5 = () => {

    const branddata = [
        {
          image: Manufacturing,
          text: "manufacturing",
        },
        {
          image: Retail,
          text: "retail",
        },
        {
          image: Helthcare,
          text: "healthcare",
        },
        {
          image: Logistics,
          text: "logistics",
        },
        {
          image: Hospilaty,
          text: "hospitality",
        },
       
      ];


  return (
    <section className="flex justify-start items-start flex-col w-full py-4">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Benefits of using QR Code Technology!
        </h1>
      </div>
      <div className="flex justify-center items-start gap-8 md:p-12 p-4 mx-auto mt-4 flex-col md:flex-row">
        <div>
          <div className="relative border-s border-[#FF7143]">
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6   rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Customizable Solutions
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`QR code solutions to fit the specific needs for you, whether you require simple tracking systems or complex integrations with your ERP & CRM software.`}
                </p>
              </div>
            </div>
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem]  border-gray-200 flex flex-col items-start gap-4">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Real-Time Tracking
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`Monitor your products and services in real-time with our advanced QR code tracking systems, ensuring you have up-to-date information at your fingertips.`}
                </p>
              </div>
            </div>
            <div className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Secure and Reliable
                </h3>
                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`Our QR code technology is built with security in mind, ensuring your data is protected and reliable at all times.`}
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
              <div className="border-1.5 p-4 rounded-md md:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Scalable qr codes
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`Whether you are a small business or a large enterprise, our QR code solutions are designed to scale with your growing needs.`}
                </p>
              </div>
            </div>
            <div className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Security & Authentication{" "}
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all ">
                  {`QR codes securely transfer sensitive information such as login/payment details. They verify the authenticity of products, reducing the risk.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Industries We Serve.{" "}
        </h1>
      </div>
      <div className="w-11/12 mx-auto mt-4 grid md:grid-cols-5 lg:grid-cols-5 grid-cols-2 md:gap-12 lg:gap-12 py-12 place-content-center justify-center items-center">
      {branddata.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center ring-1 ring-gray-300  p-4"
            >
              <Image className="w-16 h-16" src={value.image} alt="icons" />
              <span className="uppercase font-medium text-sm">
                {value.text}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Component5;
