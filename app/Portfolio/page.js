"use client";
import React from "react";
import Commonheader from "@/components/Oursolutioncomponets/Commonheader";
import Customportfoliocard from "@/components/Portfoliocomponent/Customportfoliocard";
import biryani from "../../public/Portfolioasset/90biryani.png";
import biryanidesktop from "../../public/Portfolioasset/biryanidesktop.png";
import biryaniiphone from "../../public/Portfolioasset/biryaniiphone.png";

import Vitamindesktop from "../../public/Portfolioasset/Vitamindesktop.png";
import Vitaminiphone from "../../public/Portfolioasset/Vitaminiphone.png";
import Vitaminslogo from "../../public/Portfolioasset/Vitaminslogo.png";

import Winklogo from "../../public/Portfolioasset/Winklogo.png";
import Winkadsdesktop from "../../public/Portfolioasset/Winkadsdesktop.png";
import Winkadsiphone from "../../public/Portfolioasset/Winkadsiphone.png";

import Pioneerdesktop from "../../public/Portfolioasset/Pioneerdesktop.png";
import Pioneeriphone from "../../public/Portfolioasset/Pioneeriphone.png";
import Pioneerlogo from "../../public/Portfolioasset/Pioneerlogo.png";

import Mythridesktop from "../../public/Portfolioasset/Mythridesktop.png";
import Mythriiphone from "../../public/Portfolioasset/Mythriiphone.png";
import Mythrilogo from "../../public/Portfolioasset/Mythrilogo.png";

import Solardesktop from "../../public/Portfolioasset/Solardesktop.png";
import Solariphone from "../../public/Portfolioasset/Solariphone.png";
import Solarlogo from "../../public/Portfolioasset/Solarlogo.png";

import Prospectdesktop from "../../public/Portfolioasset/Prospectdesktop.png";
import Prospectiphone from "../../public/Portfolioasset/Prospectiphone.png";
import Prospectlogo from "../../public/Portfolioasset/Prospectlogo.png";

import Brandsagadesktop from "../../public/Portfolioasset/Brandsagadesktop.png";
import Brandsagaiphone from "../../public/Portfolioasset/Brandsagaiphone.png";
import Brandsagalogo from "../../public/Portfolioasset/Brandsagalogo.png";

import Amazondesktop from "../../public/Portfolioasset/Amazondesktop.png";
import Amazoniphone from "../../public/Portfolioasset/AmazonIphone.png";
import Amazonlogo from "../../public/Portfolioasset/Amazonlogo.png";

import Customanimationslide from "@/components/Homecomponets/Customanimationslide";
import { Button } from "@nextui-org/react";
import { BiSolidCategory } from "react-icons/bi";

const page = () => {
  const data = [
    {
      image: [Amazondesktop, Amazoniphone],
      logo: Amazonlogo,
      desc: `We developed an AI-based Helmet Adherence System for Amazon, enhancing delivery associate safety by verifying helmet usage through real-time image analysis. The system features automatic helmet detection, real-time monitoring, and a user-friendly interface, ensuring easy adoption and compliance. It safeguards data privacy by recording only helmet status and timestamps. This solution reduces head injury risks, streamlines verification, and ensures compliance with safety regulations.`,
      iconcolor: "#00ACD7",
      cardborder: "Amazoncardborder",
      className: "Amazoncard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "#",
    },
    {
      image: [Prospectdesktop, Prospectiphone],
      logo: Prospectlogo,
      desc: `We proudly partnered with Prospect Tutors to redefine educational success. Our collaboration introduces a comprehensive tutoring system that caters to students across all levels, from beginner to advanced. This initiative not only enhances the learning experience with expert instruction but also empowers parents to monitor their children's progress in real-time. Together, we are committed to fostering academic excellence and providing a transparent, effective, and engaging educational journey for students worldwide.`,
      iconcolor: "#028ED9",
      cardborder: "Propspectcardborder",
      className: "Prospectcard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://prospecttutors.co.uk/",
    },
    {
      image: [Winkadsdesktop, Winkadsiphone],
      logo: Winklogo,
      desc: `Wink Ads revolutionizes the advertising landscape by providing interactive and engaging ad formats tailored to the needs of modern businesses. Their platform facilitates effective customer engagement through targeted ad campaigns and real-time analytics.`,
      iconcolor: "#00BFB5",
      cardborder: "winkadscardborder",
      className: "winkadscard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://winkads.in/",
      servicesProvided: [
        "Interactive ad formats (video, carousel, etc.)",
        "Targeted ad campaigns",
        "Real-time analytics and reporting",
        "Customizable ad solutions for various industries",
      ],
      keyFeatures: [
        "Intuitive and responsive website design",
        "Advanced ad targeting and analytics integration",
        "Customizable campaign management interface",
        "High-performance hosting and ongoing support",
      ],
      developmentOutput:"Angadi World Technologies crafted a user-friendly website for Wink Ads, focusing on high performance and scalability. We integrated advanced targeting and analytics features, ensuring a seamless user experience and robust backend support.",
      tabcolor:"#00B0EF"
    },
    {
      image: [Solardesktop, Solariphone],
      logo: Solarlogo,
      desc: `Petrichor Solar focuses on delivering sustainable and efficient solar energy solutions for residential, commercial, and industrial applications. They provide customized solar installations designed to maximize energy savings and reduce environmental impact`,
      iconcolor: "#F3850E",
      cardborder: "Solarcardborder",
      className: "Solarcard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://petrichorsolar.com/",
      servicesProvided: [
        "Solar panel installation",
        "Energy efficiency consulting",
        "Maintenance and support services",
        "Customized solar solutions for different needs",
      ],
      keyFeatures: [
        "Detailed product and service descriptions",
        "Interactive solar savings calculator",
        "Case studies and client testimonials",
        "Educational resources on solar energy",
      ],
      developmentOutput:"Angadi World Technologies developed a comprehensive and interactive website for Petrichor Solar, highlighting their innovative products and services. The site includes educational resources and an interactive solar calculator to assist customers in making informed decisions.",
    tabcolor:"#422174"
    },

    {
      image: [Vitamindesktop, Vitaminiphone],
      logo: Vitaminslogo,
      desc: `Vitamins and Me is an e-commerce platform dedicated to offering high-quality vitamins, supplements, and health products. Their mission is to provide customers with reliable and effective health solutions`,
      iconcolor: "#9747FF",
      cardborder: "vitaminscardborder",
      className: "vitaminscard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://vitaminsandme.in/",
      servicesProvided: [
        "Wide range of vitamins and supplements",
        "Detailed product descriptions and health benefits",
        "Customer reviews and ratings",
        "Health and wellness blog",
      ],
      keyFeatures: [
        "Responsive and user-friendly design",
        "Extensive product catalog with detailed descriptions",
        "Customer reviews and ratings",
        "Health and wellness blog",
      ],
      developmentOutput:"We designed and developed a sleek, responsive website for Vitamins and Me, ensuring easy navigation and a seamless shopping experience. The site features comprehensive product information, a review system, and a health blog to engage and inform customers.",
       tabcolor:"#DB0B82"
    },
    {
      image: [biryanidesktop, biryaniiphone],
      logo: biryani,
      desc: `We proudly partnered with 90s Biryani to pioneer the future of Indian culinary delights. Our collaboration with 90s Biryani.com forecasts 'Biryani' as the reigning champion in the realm of Indian food service and delivery. This visionary project exemplifies our commitment to revolutionizing the culinary landscape and delighting taste buds worldwide.`,
      iconcolor: "#A71E22",
      cardborder: "biryanibordercard",
      className: "biryanicard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://90sbiryani.com/",
    },
    {
      image: [Pioneerdesktop, Pioneeriphone],
      logo: Pioneerlogo,
      desc: `Pioneer Online is a premier ISP offering high-speed internet and comprehensive digital solutions to both residential and commercial clients. They are committed to providing reliable and efficient internet services with exceptional customer support.`,
      iconcolor: "#3FBFAA",
      cardborder: "pioneercardborder",
      className: "pioneercard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://pioneeronline.com/",
      "servicesProvided": [
        "High-speed internet services",
        "Digital solutions for businesses",
        "24/7 customer support",
        "Flexible subscription plans"
      ],
      "keyFeatures": [
      "Modern, user-friendly interface",
      "Simplified service subscription process",
      "Detailed service information and FAQs",
      "Secure and scalable backend infrastructure"
    ],
    "developmentOutput":`We redesigned Pioneer Online's website to enhance usability and customer engagement. The site features a modern layout, easy navigation, and secure service subscription processes, ensuring a smooth user experience.`,
    tabcolor:"#01770B"
  },
    {
      image: [Mythridesktop, Mythriiphone],
      logo: Mythrilogo,
      desc: `Mythri Tech offers state-of-the-art technology solutions and services across various industries, specializing in IT consulting, software development, and system integration.`,
      iconcolor: "#1877F2",
      cardborder: "mythricardborder",
      className: "mythricard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://mythritech.com/",
      "servicesProvided": [
        "IT consulting and strategy",
        "Custom software development",
        "System integration and support",
        "Technology innovation and implementation"
      ],
      "keyFeatures": [
      "Comprehensive service descriptions",
      "Case studies and project highlights",
      "Tech trends and news blog",
      "Interactive contact forms and customer support"
    ],
    "developmentOutput":`We collaborated with Mythri Tech to create a dynamic and informative website that showcases their expertise and successful projects. The site includes detailed service offerings, case studies, and a blog to keep clients updated on the latest tech trends.`,
    tabcolor:"#EC3439"
  },

    {
      image: [Brandsagadesktop, Brandsagaiphone],
      logo: Brandsagalogo,
      desc: `Brand Saga is a full-service branding and marketing agency known for crafting compelling brand stories and delivering strategic marketing solutions. They help businesses build strong, memorable brands.`,
      iconcolor: "#A71E22",
      cardborder: "Brandsagacardborder",
      className: "Brandsagacard",
      tag: ["Branding", "web dev", "social media handling"],
      link: "https://www.brandsaga.co.in/",
      "servicesProvided": [
        "Brand strategy and identity",
        "Marketing campaigns and advertising",
        "Digital marketing and social media management",
        "Creative design and content creation"
      ],
      "keyFeatures": [
        "Visually appealing and creative design",
        "Portfolio showcasing past projects",
        "Client testimonials and success stories",
        "Informative blog on branding and marketing strategies"
      ],
      "developmentOutput":`Angadi World Technologies developed a vibrant and visually appealing website for BrandSaga, emphasizing their creative portfolio and strategic services. The website features case studies, client testimonials, and a blog offering insights into branding and marketing.`,
       tabcolor:"#222222"
    },
    
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto">
      <Commonheader />
      <div className="w-full flex flex-col justify-center items-center mx-auto gap-8 md:py-12 lg:py-12">
        <div className="w-11/12 mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider">
            Take a look at our{" "}
            <span className="md:hidden lg:hidden inline-block rounded-md px-2 text-white bg-[#FF7143]">
              Portfolio!
            </span>{" "}
            <Customanimationslide
              text={"Portfolio!"}
              width={180}
              style={"md:inline-block hidden lg:inline-block ml-2"}
            />
          </h1>
        </div>

        {data.map((value, index) => (
          <div
            className="md:py-8 lg:py-8 flex flex-col justify-center items-center  w-11/12"
            key={index}
          >
            <Customportfoliocard data={value} />
          </div>
        ))}
      </div>
      {/* <div className='fixed bottom-4 z-50'>
        <Button className='bg-black uppercase font-bold rounded-full text-white flex justify-center items-center'>Categories <BiSolidCategory size={30} className='inline-block ml-2 text-white'/></Button>
      </div> */}
    </section>
  );
};

export default page;
