import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Incresedclicks from '../../../../public/Solutionasset/Services/Incresedclicks.png'

const Searchoptimization = () => {

const carddata=[
    {
    image:Incresedclicks
},
    {
    image:Incresedclicks
},
    {
    image:Incresedclicks
},
    {
    image:Incresedclicks
},
]


  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center gap-8 md:py-12 lg:py-12 py-0">
      <div className="w-11/12 mx-auto ">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Step into our SEO process and discover how<br></br> we elevate your
          online presence.
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
                  Comprehensive Website Audit
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                  {`We start by conducting a thorough audit of your website to identify areas for improvement. This includes analyzing site structure, content quality, keyword usage, and technical aspects like page speed and mobile-friendliness.`}
                </p>
              </div>
            </div>
            <div className="md:mb-20 mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-md md:w-[32rem] lg:w-[32rem] border-gray-200 flex flex-col items-start gap-4">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  Keyword Research and Strategy{" "}
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                  {`Next, we perform extensive keyword research to identify the most relevant and high-traffic keywords for your business. We then develop a customized SEO strategy that targets these keywords to improve your website's visibility and attract quality traffic.`}
                </p>
              </div>
            </div>
            <div className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ">
                <GoDotFill className="text-[#FF7143]" />
              </span>
              <div className="border-1.5 p-4 rounded-mdmd:w-[32rem] lg:w-[32rem]  border-gray-200 flex flex-col items-start gap-4 ">
                <h3 className="flex items-center gap-1 mb-1 uppercase text-sm font-bold  ">
                  <GoDotFill />
                  On-Page Optimization
                </h3>
                <p className="mb-12 text-justify text-sm font-medium ">
                  {`We optimize your website's on-page elements, including meta tags, headings & content, to align with our target keywords & improve search engine rankings. This involves creating compelling & informative content that resonates with your audience while incorporating relevant keywords naturally.`}
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
                  Off-Page Optimization
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                  {`In addition, we focus on off-page SEO tactics such as link building, social media promotion, & online reputation management. These strategies help increase your website's authority and credibility, further boosting its visibility in search results.`}
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
                  Monitoring and Optimization{" "}
                </h3>

                <p className="mb-12 text-justify text-sm font-medium ">
                  {`We continuously monitor your website's performance & make necessary adjustments to our strategy. This includes tracking keyword rankings, analyzing traffic metrics, & staying updated with search engine algorithm changes to ensure long-term success.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto ">
        <h6 className="md:text-3xl lg:text-3xl text-xl font-bold tracking-wider">
        What happens when your website ranks<br></br> higher in Google search results?
        </h6>
      </div>
      <div className="w-11/12 mx-auto py-12 p-2 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-items-center items-center gap-8">
           {
            carddata.map((value,index)=>(
                <Image className="object-contain" key={index} src={value.image} alt="imageicon"/>
            ))
           }
      </div>
    </div>
  );
};

export default Searchoptimization;
