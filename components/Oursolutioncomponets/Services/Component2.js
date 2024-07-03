import React from "react";
import Image from "next/image";
import Brand from "../../../public/Solutionasset/Services/Brand.gif";
import { GoDotFill } from "react-icons/go";

const Component2 = () => {
  return (
    <section className="flex justify-start items-start flex-col w-full py-4">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-xl font-bold tracking-wider">
          Is the appearance and user<br></br> experience important for your
          brand?
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-between items-center w-11/12 mx-auto py-10 md:py-0 lg:py-0">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <div>
            <h1 className="uppercase font-bold text-sm ">{`Absolutely! Looks and user experience are crucial aspects of building and maintaining a strong brand.`}</h1>
          </div>
          <div className="flex justify-start items-start gap-1">
            <GoDotFill />
            <p className="font-medium text-sm leading-7">{`When it comes to cultivating a strong brand identity, the aesthetics and user experience play indispensable roles.`}</p>
          </div>
          <div className="flex justify-start items-start gap-1">
            <GoDotFill />
            <p className="font-medium text-sm leading-7">{`When it comes to cultivating a strong brand identity, the aesthetics and user experience play indispensable roles.`}</p>
          </div>
          <div className="flex justify-start items-start gap-1">
            <GoDotFill />
            <p className="font-medium text-sm leading-7">{`When it comes to cultivating a strong brand identity, the aesthetics and user experience play indispensable roles.`}</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-start">
          <Image className="" src={Brand} alt="gif" />
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          5 Reasons why it’s Important.
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
                  First Impressions
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`The visual appeal of your brand, including your logo, website, and marketing materials, creates the first impression for potential customers. A visually appeadivng brand captures attention and sets the tone for further interactions.`}
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
                  Brand Perception
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`The design elements of your brand shape how customers perceive your business. A well-designed brand conveys professionadivsm, trustworthiness, and quadivty, while a poorly designed brand may give the impression of being outdated or unprofessional.`}
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
                  User Engagement
                </h3>
                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`User experience (UX) plays a significant role in keeping customers engaged and satisfied. A seamless and intuitive user experience across all touchpoints, from your website to your mobile app, enhances customer satisfaction and encourages repeat business.`}
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
                  Brand Loyalty
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all">
                  {`A positive user experience fosters brand loyalty and advocacy. When customers have a pleasant experience interacting with your brand, they are more divkely to become loyal customers and recommend your brand to others.`}
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
                  Competitive Advantage
                </h3>

                <p className="mb-12 text-justify text-sm font-medium leading-7 break-all ">
                  {`In today's competitive market, a well-designed brand with a focus on user experience can differentiate your business from competitors. It can be a key factor in attracting and retaining customers in a crowded marketplace.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component2;
