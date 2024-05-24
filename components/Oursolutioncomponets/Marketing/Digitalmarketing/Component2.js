import React from "react";
import Image from "next/image";

import seo from "../../../../public/Solutionasset/Services/seo.png";
import Advertisement from "../../../../public/Solutionasset/Services/Advertisement.png";
import Branding from "../../../../public/Solutionasset/Services/Branding.png";
import WebApplication from "../../../../public/Solutionasset/Services/WebApplication.png";

import socialmedia from "../../../../public/Solutionasset/Services/socialmedia.png";
import Emailmarketing from "../../../../public/Solutionasset/Services/Emailmarketing.png";
import Influencermarketing from "../../../../public/Solutionasset/Services/Influencermarketing.png";

const Digitalmarketingservice = () => {
  const carddata = [
    {
      icon: seo,
      color: "#9747FF",
      titile: "SEO",
      text: "Optimize your product to rank higher in search results pages & increase organic traffic.",
    },
    {
      icon: Advertisement,
      color: "#FF7143",
      titile: "PPC Advertising",
      text: "Running targeted ads on search engines/social media, paying when users click on your ads.",
    },
    {
      icon: Branding,
      color: "#FFC700",
      titile: "Branding",
      text: "Crafting and shaping the identity and perception of a brand.",
    },
    {
      icon: WebApplication,
      color: "#1877F2",
      titile: "web/app design",
      text: "Creating user-friendly & visually appealing web/apps for optimal digital experiences.",
    },
    {
      icon: Advertisement,
      color: "#ED0000",
      titile: "Social Media Marketing",
      text: "Engaging audiences, raising brand awareness via social media platforms.",
    },
    {
      icon: socialmedia,
      color: "#309E3A",
      titile: "Content Marketing",
      text: "Creating valuable content to engage audiences and drive profitable actions.",
    },
    {
      icon: Emailmarketing,
      color: "#4D2A15",
      titile: "Email Marketing",
      text: " Sending personalized emails to nurture leads and maintain customer relationships.",
    },
    {
      icon: Influencermarketing,
      color: "#C837AB",
      titile: "Influencer Marketing",
      text: "Leveraging influencers to promote products, services, or brands to their audience.",
    },
  ];

  return (
    <section className="flex flex-col w-full  gap-8 py-8">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Our Graphic Design Services.
        </h6>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="ring-1 ring-gray-300 p-4 h-60 flex justify-center items-start gap-4 flex-col"
          >
            <div
              style={{ backgroundColor: value.color }}
              className="relative w-16 mb-4 h-16 flex justify-center items-center  rounded-full"
            >
              <Image className="w-10 h-10" src={value.icon} alt="icon" />
            </div>
            <h6 className="uppercase font-bold ">{value.titile}</h6>
            <p className="text-xs font-medium w-full">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Digitalmarketingservice