"use client";
import React, { useState } from "react";
import Image from "next/image";
import Crouselimage1 from "../../public/Solutionasset/Crousel1.png";
import Crouselimage2 from "../../public/Solutionasset/Crousel2.png";
import Crouselimage3 from "../../public/Solutionasset/Crousel3.png";
import Crouselimage4 from "../../public/Solutionasset/Crousel4.png";
import Crouselimage5 from "../../public/Solutionasset/Crousel5.png";
import Crouselimage6 from "../../public/Solutionasset/Crousel6.png";
import Crouselimage7 from "../../public/Solutionasset/Crousel7.png";
import Crouselimage8 from "../../public/Solutionasset/Crousel8.png";
import Crouselimage9 from "../../public/Solutionasset/Crousel9.png";
import Crouselimage10 from "../../public/Solutionasset/Crousel10.png";
import Crouselimage11 from "../../public/Solutionasset/Crousel11.png";
import Crouselimage12 from "../../public/Solutionasset/Crousel12.png";
import Crouselimage13 from "../../public/Solutionasset/Crousel13.png";

import Cardimage1 from "../../public/Solutionasset/Cardimage1.png";
import Cardimage2 from "../../public/Solutionasset/Cardimage2.png";
import Cardimage3 from "../../public/Solutionasset/Cardimage3.png";
import Cardimage4 from "../../public/Solutionasset/Cardimage4.png";
import Cardimage5 from "../../public/Solutionasset/Cardimage5.png";
import Cardimage6 from "../../public/Solutionasset/Cardimage6.png";
import Cardimage7 from "../../public/Solutionasset/Cardimage7.png";
import Cardimage8 from "../../public/Solutionasset/Cardimage8.png";
import Cardimage9 from "../../public/Solutionasset/Cardimage9.png";
import Cardimage10 from "../../public/Solutionasset/Cardimage10.png";
import Cardimage11 from "../../public/Solutionasset/Cardimage11.png";
import Cardimage12 from "../../public/Solutionasset/Cardimage12.png";

import Mobiledesign from "../../public/Mobilecrousel/Mobiledesign.png";
import Webappdesign from "../../public/Mobilecrousel/Webappdesign.png";
import Websitedesign from "../../public/Mobilecrousel/Websitedesign.png";
import Graphicdesign from "../../public/Mobilecrousel/Graphicdesign.png";
import Digitalmakeover from "../../public/Mobilecrousel/Digitalmakeover.png";
import Appdevelopment from "../../public/Mobilecrousel/Appdevelopment.png";
import Webdevelopment from "../../public/Mobilecrousel/Webdevelopment.png";
import Softwaredevelopment from "../../public/Mobilecrousel/Softwaredevelopment.png";
import Digitalmarketing from "../../public/Mobilecrousel/Digitalmarketing.png";
import SEO from "../../public/Mobilecrousel/SEO.png";
import Digitalbranding from "../../public/Mobilecrousel/Digitalbranding.png";
import Cloudcompunting from "../../public/Mobilecrousel/Cloudcompunting.png";

import { motion, AnimatePresence } from "framer-motion";
import Customanimationslide from "./Customanimationslide";
import { Button, image } from "@nextui-org/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
const Solutionscrousel = () => {
  const router=useRouter()
  const [carouselIndex, setCarouselIndex] = useState(0);

  const ThumbnailImages = [
    Crouselimage1,
    Crouselimage2,
    Crouselimage3,
    Crouselimage4,
    Crouselimage5,
    Crouselimage6,
    Crouselimage7,
    Crouselimage8,
    Crouselimage9,
    Crouselimage10,
    Crouselimage11,
    Crouselimage12,
    Crouselimage13,
  ];

  const CardImages = [
    Cardimage1,
    Cardimage2,
    Cardimage3,
    Cardimage4,
    Cardimage5,
    Cardimage6,
    Cardimage7,
    Cardimage8,
    Cardimage9,
    Cardimage10,
    Cardimage11,
    Cardimage12,
    "",
    "",
    "",
  ];

  const mobilecrouselimage = [
    Mobiledesign,
    Webappdesign,
    Websitedesign,
    Graphicdesign,
    Digitalmakeover,
    Appdevelopment,
    Webdevelopment,
    Softwaredevelopment,
    Digitalmarketing,
    SEO,
    Digitalbranding,
    Cloudcompunting,
  ];

  const Carddata = [
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider text-white">
          MOBILE APP<br></br> DESIGN
        </h6>
      ),
      subtitle: "UI UX Design",
      desc: "Transform your app with cutting-edge UI/UX design that captivates and engages users effortlessly.",
      Link: "/Oursolution/Mobileappdesign",
      alt:' MOBILE APP DESIGN - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider text-white">
          MOBILE APP<br></br> DESIGN
        </h6>
      ),
      subtitle: "UI UX Design",
      desc: "Transform your app with cutting-edge UI/UX design that captivates and engages users effortlessly.",
      Link: "/Oursolution/Mobileappdesign",
      alt:' MOBILE APP DESIGN - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          web APP<br></br> DESIGN
        </h6>
      ),
      subtitle: "UI UX Design",
      desc: "Transform your online platform with sleek UI/UX design that captivates users and drives engagement to new heights.",
      Link: "/Oursolution/Webappdesign",
      alt:' web APP DESIGN - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          website<br></br> DESIGN
        </h6>
      ),
      subtitle: "UI UX Design",
      desc: "Elevate your website with immersive UI/UX design that captivates visitors and leaves a lasting impression.",
      Link: "/Oursolution/Websitedesign",
      alt:'website DESIGN - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          graphic<br></br> DESIGN
        </h6>
      ),
      subtitle: "Services",
      desc: "Elevate your brand with captivating graphic design that communicates your message with impact and style.",
      Link: "/Oursolution/Services/GraphicDesign",
      alt:'graphic DESIGN - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          digital<br></br>makeover
        </h6>
      ),
      subtitle: "Services",
      desc: "Navigate the digital landscape with confidence through strategic digital transformation that revolutionizes your business processes.",
      Link: "/Oursolution/Services/DigitalMakeover",
      alt:'digital makeover - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          app <br></br>development
        </h6>
      ),
      subtitle: "Services",
      desc: "Partner with us for expert app development that brings your vision to life, delivering seamless functionality and engaging user experiences.",
      Link: "/Oursolution/Development/Mobileappdev",
      alt:'Mobile App Development Company - Angadi World Technologies'
    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          web <br></br>development
        </h6>
      ),
      subtitle: "Services",
      desc: "Trust our expertise in web development to create dynamic and responsive websites that drive your online success to new horizons.",
      Link: "/Oursolution/Development/Websitedev",
      alt:' web development - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          software <br></br>development
        </h6>
      ),
      subtitle: "Services",
      desc: "We craft powerful software solutions tailored to your needs, driving success in the digital age.",
      Link: "/Oursolution/Development/Softwaredev",
      alt:' software development - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          digital <br></br>marketing
        </h6>
      ),
      subtitle: "Marketing",
      desc: "Our digital marketing strategies propel your business forward, reaching and engaging your audience with precision and impact.",
      Link: "/Oursolution/Marketing/DigitalMarketing",
      alt:'Digital Marketing - Angadi World Technologies'
    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          search engine <br></br>optimization
        </h6>
      ),
      subtitle: "Marketing",
      desc: "Our SEO expertise ensures your website ranks higher, driving increased traffic and maximizing your digital presence.",
      Link: "/Oursolution/Marketing/Seo",
      alt:' search engine optimization - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          digital <br></br>branding
        </h6>
      ),
      subtitle: "Marketing",
      desc: "Our digital branding strategies establish your unique presence, resonating with audiences and driving lasting connections in the digital world.",
      Link: "/Oursolution/Marketing/DigitalBranding",
      alt:' digital branding - Angadi World Technologies'

    },
    {
      title: (
        <h6 className="text-3xl font-bold tracking-wider uppercase text-white">
          cloud <br></br>consulting
        </h6>
      ),
      subtitle: "Marketing",
      desc: "Our consulting maximizes efficiency and innovation, driving your business forward in the digital realm.",
      Link: "/Oursolution/Services/CloudConsultation",
      alt:' cloud consulting - Angadi World Technologies'

    },
  ];

  const handleSliderChange = (direction) => {
    if (direction === "next") {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % ThumbnailImages.length);
    } else if (direction === "prev") {
      setCarouselIndex((prevIndex) =>
        prevIndex === 0 ? ThumbnailImages.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="flex flex-col justify-center overflow-hidden items-center w-full mx-auto relative h-[110vh]">
      <div className="absolute z-0 w-full h-full">
        {ThumbnailImages.map(
          (image, index) =>
            carouselIndex === index && (
              <Image
                key={index}
                className="md:object-fill lg:object-fill object-cover md:block lg:block hidden w-full md:h-full lg:h-full h-[90vh]"
                src={image}
                alt={`carousel-img-${index}`}
              />
            )
        )}
      </div>
      {/* mobilecrousel */}
      <div className="absolute z-0 w-full h-full">
        {mobilecrouselimage.map(
          (image, index) =>
            carouselIndex === index && (
              <Image
                key={index}
                className="md:object-fill lg:object-fill object-cover md:hidden lg:hidden block w-full md:h-full lg:h-full h-[100vh]"
                src={image}
                alt={`carousel-img-${index}`}
              />
            )
        )}
      </div>
      <AnimatePresence>
        {ThumbnailImages.map(
          (image, index) =>
            carouselIndex === index && (
              <motion.div
                key={index}
                initial={{
                  width: "50px",
                  height: "100px",
                  top: "60%",
                  right: "30%",
                }}
                whileInView={{
                  scale: [0.4, 1],
                  width: "100%",
                  height: "110vh",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                exit={{
                  width: "15%",
                  height: "50vh",
                  top: "60%",
                  left: "50%",
                  opacity: 0.6,
                }}
                transition={{ duration: 0.8 }}
                className="absolute h-full w-full hidden md:block"
              >
                <Image
                  className="object-fill"
                  src={image}
                  alt={`carousel-img-${index}`}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="w-11/12 mx-auto absolute md:top-36 lg:top-36 top-16">
        <h6 className="md:text-3xl lg:text-4xl text-3xl uppercase font-bold text-white tracking-wider">
          <Customanimationslide
            text={"solutions"}
            width={240}
            style={"mr-2 md:inline-block lg:inline-block hidden"}
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-white bg-[#FF7143] px-2 rounded-md mr-2 inline-block md:hidden lg:hidden">solutions</span>we provide
          </motion.span>
        </h6>
      </div>

      <div className="absolute top-[50%] w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-between items-center gap-12">
        {Carddata.map(
          (value, index) =>
            carouselIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={index}
                className="flex flex-col justify-start items-start gap-4 -mt-16 md:mt-0 lg:mt-0 h-72 md:h-auto lg:h-auto"
              >
                <h6 className="md:text-base lg:text-base text-sm font-medium uppercase text-white">
                  {value.subtitle}
                </h6>
                {value.title}
                <p className="md:text-sm lg:text-sm text-xs leading-6 font-medium text-start text-white md:w-96 lg:w-96 ">
                  {value.desc}
                </p>
                <Button onPress={()=>router.push(`${value.Link}`)} className="ring-1 rounded-full ring-white bg-transparent text-white">
                  learn more
                </Button>
              </motion.div>
            )
        )}
        <div className={"flex justify-end items-end relative -right-24"}>
          <Carousel className="w-full">
            <CarouselContent className="hidden md:flex lg:flex">
              {CardImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1  w-56">
                    <div className="relative flex rounded-lg justify-start items-end p-0 overflow-hidden">
                      {image ? (
                        <Image
                          className="h-60 w-56 shadow-2xl"
                          src={image}
                          alt={`card-img-${index}`}
                        />
                      ) : (
                        <div className="h-60 w-56" />
                      )}{" "}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -left-40 top-52">
              <div onClick={() => handleSliderChange("prev")}>
                <CarouselPrevious className="bg-transparent text-white" />
              </div>

              <div onClick={() => handleSliderChange("next")}>
                <CarouselNext className="bg-transparent text-white" />
              </div>
            </div>
          </Carousel>
          {/* mobile crousel control */}
          <div className=" flex md:hidden lg:hidden items-center gap-8 absolute bottom-8 right-[60%]">
            <button
              onClick={() => handleSliderChange("prev")}
              className={`flex justify-center cursor-pointer bg-white text-black items-center h-10 w-10 rounded-full ${
                carouselIndex === 0 &&
                "bg-gray-400 ring-1 ring-black text-black cursor-not-allowed"
              }`}
              disabled={carouselIndex === 0}
            >
              <IoIosArrowBack className={carouselIndex === 0 && "text-black"} />
            </button>
            <button
              onClick={() => handleSliderChange("next")}
              className={`flex justify-center cursor-pointer bg-white text-black items-center h-10 w-10 rounded-full ${
                carouselIndex === ThumbnailImages.length - 1 &&
                "bg-gray-400 ring-1 ring-black text-black cursor-not-allowed"
              }`}
              disabled={carouselIndex === ThumbnailImages.length - 1}
            >
              <IoIosArrowForward
                className={
                  carouselIndex === ThumbnailImages.length - 1 && "text-black"
                }
              />
            </button>
          </div>
          {carouselIndex === 12 && (
            <div className="md:flex lg:flex hidden justify-start items-start gap-4 flex-col absolute right-60 bottom-8">
              <h6 className="text-white text-sm  font-medium">{`Do you have any doubts? Consult now!`}</h6>
              <Button onPress={()=>router.push('/Contactus')} className="bg-transparent text-white uppercase ring-1 ring-white rounded-full w-40">
                consult
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solutionscrousel;
