"use client";
import React, { useContext, useEffect, useState } from "react";
import Circle from "../../public/Homeasset/Circle.png";
import AWT from "../../public/Homeasset/AWT.png";
import Oursolution from "../../public/Solutionasset/Oursolution.png";
import Image from "next/image";
import { motion } from "framer-motion";
import X from "../../public/Homeasset/X.png";
import Insta from "../../public/Homeasset/Insta.png";
import Linkdin from "../../public/Homeasset/Linkdin.png";
import Facebook from "../../public/Homeasset/Facebook.png";
import { usePathname } from "next/navigation";

import Aboutawt from '../../public/Bannerimage/Aboutawt.png'
import Conatctus from '../../public/Bannerimage/Conatctus.png'
import Dailyblogs from '../../public/Bannerimage/Dailyblogs.png'
import Ourcareer from '../../public/Bannerimage/Ourcareer.png'
import Ourportfolio from '../../public/Bannerimage/Ourportfolio.png'
import UIuxdesigner from '../../public/Bannerimage/UIuxdesigner.png'
import Mobileappdesign from '../../public/Bannerimage/Mobileappdesign.png'

import Websitedesign from '../../public/Bannerimage/Websitedesign.png'
import Webappdesign from '../../public/Bannerimage/Webappdesign.png'
import Mobileappdevelopment from '../../public/Bannerimage/Mobileappdevelopment.png'
import Digitalmakeover from '../../public/Bannerimage/Digitalmakeover.png'

import Websitedevelopment from '../../public/Bannerimage/Websitedevelopment.png'
import Ourproducts from '../../public/Bannerimage/Ourproducts.png'
import Softwaredevelopment from '../../public/Bannerimage/Softwaredevelopment.png'
import Graphicdesign from '../../public/Bannerimage/Graphicdesign.png'

import Clodcomputing from '../../public/Bannerimage/Clodcomputing.png'
import Digitalmarketing from '../../public/Bannerimage/Digitalmarketing.png'
import SEO from '../../public/Bannerimage/SEO.png'
import Digitalbranding from '../../public/Bannerimage/Digitalbranding.png'
import QRtech from '../../public/Bannerimage/QRtech.png'
import Projectcounsulring from '../../public/Bannerimage/Projectcounsulring.png'

import Oursolutionsuiux from '../../public/Bannerimage/Oursolutions/Oursolutionsuiux.png'
import Oursolutionsservice from '../../public/Bannerimage/Oursolutions/Oursolutionsservice.png'
import Oursolutionsdeve from '../../public/Bannerimage/Oursolutions/Oursolutionsdeve.png'
import Oursolutionsmarketing from '../../public/Bannerimage/Oursolutions/Oursolutionsmarketing.png'
import { NavigationContext } from "../../app/Oursolution/NavigationContext";
import { useRouter } from "next/navigation";

const imageMapping = {
  UIUX: Oursolutionsuiux,
  SERVICES: Oursolutionsservice,
  MARKETING: Oursolutionsmarketing,
  DEVELOPMENT: Oursolutionsdeve
};

const Commonheader = () => {
  const router=useRouter()
  const { selectedTab } = useContext(NavigationContext);
  const [title, setTitle] = useState({
    main: "Our",
    highlight: "Solutions.",
    image:Oursolution
  });
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/Oursolution":
        setTitle({
          main: "Our",
          highlight: "Solutions",
          image:''
        });
        break;
      case "/Oursolution/Mobileappdesign":
        setTitle({
          main: "Mobile app",
          highlight: "design",
          image:Mobileappdesign
        });
        break;
      case "/Oursolution/Websitedesign":
        setTitle({
          main: "Website",
          highlight: "design",
          image:Websitedesign
        });
        break;
      case "/Oursolution/Webappdesign":
        setTitle({
          main: "Web app",
          highlight: "design",
          image:Webappdesign 
        });
        break;
      case "/Oursolution/Development/Mobileappdev":
        setTitle({
          main: "Mobile app",
          highlight: "Development",
          image:Mobileappdevelopment
        });
        break;
      case "/Oursolution/Development/Websitedev":
        setTitle({
          main: "Website ",
          highlight: "Development",
          image:Websitedevelopment
        });
        break;
      case "/Oursolution/Development/Softwaredev":
        setTitle({
          main: "Software ",
          highlight: "Development",
          image:Softwaredevelopment
        });
        break;
      case "/Oursolution/Development/qr-code-technology":
        setTitle({
          main: "QR-Code ",
          highlight: "Technology",
          image:QRtech
        });
        break;
      case "/Oursolution/Services/DigitalMakeover":
        setTitle({
          main: "Digital ",
          highlight: "Makeover",
          image:Digitalmakeover
        });
        break;
      case "/Oursolution/Services/GraphicDesign":
        setTitle({
          main: "Graphic ",
          highlight: "Design",
          image:Graphicdesign
        });
        break;
      case "/Oursolution/Services/CloudConsultation":
        setTitle({
          main: "Cloud  ",
          highlight: "Consultation",
          image:Clodcomputing
        });
        break;
      case "/Oursolution/Services/project-consulting":
        setTitle({
          main: "Project  ",
          highlight: "Consulting",
          image:Projectcounsulring
        });
        break;
      case "/Oursolution/Marketing/Seo":
        setTitle({
          main: "search Engine ",
          highlight: "Optimization.",
          image:SEO
        });
        break;
      case "/Oursolution/Marketing/DigitalBranding":
        setTitle({
          main: "Digital",
          highlight: "Branding.",
          image:Digitalbranding
        });
        break;
      case "/Oursolution/Marketing/DigitalMarketing":
        setTitle({
          main: "Digital ",
          highlight: "Marketing.",
          image:Digitalmarketing
        });
        break;
      case "/Contactus":
        setTitle({
          main: "Contact",
          highlight: "us.",
          image:Conatctus
        });
        break;
      case "/Blog":
        setTitle({
          main: "Daily",
          highlight: "Blogs.",
          image:Dailyblogs
        });
        break;
      case "/Products":
        setTitle({
          main: "Our",
          highlight: "Products.",
          image:Ourproducts
        });
        break;
      case "/Portfolio":
        setTitle({
          main: "Our",
          highlight: "Portfolio.",
          image:Ourportfolio
        });
        break;
      case "/Aboutus":
        setTitle({
          main: "About",
          highlight: "AWT.",
          image:Aboutawt
        });
        break;
      case "/Careers":
        setTitle({
          main: "Our",
          highlight: "Careers.",
          image:Ourcareer
        });
        break;
      case "/Termsandconditions":
        setTitle({
          main: "Terms &",
          highlight: "conditions.",
          image:Oursolution
        });
        break;
      case "/Policy":
        setTitle({
          main: "Privacy",
          highlight: "Policy.",
          image:Oursolution
        });
        break;
      // Add more cases as needed
      default:
        setTitle({
          main: "Our",
          highlight: "Default Title",
        });
    }
  }, [pathname]);


  useEffect(() => {
    if (pathname === '/Oursolution') {
      const tabTitleMap = {
        UIUX: { main: 'Our Solutions', highlight:` - UI UX Design `, image: imageMapping.UIUX },
        SERVICES: { main: 'Our Solutions', highlight: '- Services', image: imageMapping.SERVICES },
        MARKETING: { main: 'Our Solutions', highlight: '- Marketing', image: imageMapping.MARKETING },
        DEVELOPMENT: { main: 'Our Solutions', highlight: '- Development', image: imageMapping.DEVELOPMENT }
      };

      if (tabTitleMap[selectedTab]) {
        setTitle(tabTitleMap[selectedTab]);
      } else {
        setTitle({ main: 'Our', highlight: 'Solutions.', image: Aboutawt });
      }
    }
  }, [selectedTab, pathname]);


console.log(selectedTab)

  return (
    <header className="  relative w-full py-8 ">
      <Image
        className="z-0 w-[96%] h-36 object-fill -mt-4 md:h-auto lg:h-auto md:mt-0 lg:mt-0 mx-auto"
        src={title.image}
        alt="herogif"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white w-80 md:w-auto lg:w-auto md:text-4xl lg:text-4xl text-xl font-bold capitalize absolute flex justify-center items-center lg:top-[50%] md:top-[60%] top-[50%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <span>{title.main}</span>{" "}
        <span className="text-[#FF7143] ml-2">{title.highlight}</span>
      </motion.h1>
      <div className="absolute md:bottom-12 lg:bottom-12 bottom-10 md:gap-4 lg:gap-4 gap-1 flex justify-center items-center md:right-12 lg:right-12 right-3  z-10">
        <div onClick={()=>router.push('https://www.facebook.com/angadiworld.t')}>

        <Image
          className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
          src={Facebook}
          alt="Facebook"
        />
        </div>

        <div onClick={()=>router.push('https://www.instagram.com/angadiworldtech/')}>

        <Image
          className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
          src={Insta}
          alt="Insta"
        />
        </div>

        <div onClick={()=>router.push('https://www.linkedin.com/company/14456022/?msgControlName=view_message_button&msgConversationId=2-MzU0ZWE3YTQtODFhMC00OTM1LTg2NDgtZjEwZWQ5YmM4ZDI0XzAxMA%3D%3D&msgOverlay=true')}>
        <Image
          className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
          src={Linkdin}
          alt="Linkdin"
        />

        </div>
        <Image
          className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer "
          src={X}
          alt="X"
        />
      </div>
      <div className="absolute flex justify-center items-center lg:top-[91%] md:top-[90%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          className="md:w-40 md:h-40 h-16 w-16 spin-animation ring-1 ring-white  rounded-full"
          src={Circle}
          alt="circle"
        />
        <Image
          className="absolute md:top-16 md:h-10 md:w-20 h-6 w-10 "
          src={AWT}
          alt="AWT"
        />
      </div>
    </header>
  );
};

export default Commonheader;
