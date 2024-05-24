"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import Userpic from '../../public/Solutionasset/Userpic.png'
import Userpic2 from '../../public/Solutionasset/Userpic2.png'
import Userpic3 from '../../public/Solutionasset/Userpic3.png'
import Userpic4 from '../../public/Solutionasset/Userpic4.png'
import Userpic5 from '../../public/Solutionasset/Userpic5.png'
import Userpic6 from '../../public/Solutionasset/Userpic6.png'
import Userpic7 from '../../public/Solutionasset/Userpic7.png'
import Userpic8 from '../../public/Solutionasset/Userpic8.png'
import Userpic9 from '../../public/Solutionasset/Userpic9.png'
import Qoute from '../../public/Solutionasset/Qoute.png'

const Reviewcrousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const reviews = [
    {
      pic: Userpic,
      name: "- Sarah",
      desc: "Working with AWT has been a game-changer for our business! Their strategic approach to online advertising significantly increased our brand visibility and drove a surge in sales. Highly recommend their expertise!",
    },
    {
      pic: Userpic2,
      name: "- Anna",
      desc: "Impressive results and excellent service! AWT helped us revamp our social media presence and optimize our website for search engines. The team's dedication and creativity have truly elevated our online presence.",
    },
    {
      pic:Userpic3,
      name: "- Thomas",
      desc: "Incredible ROI! Thanks to AWT's targeted email campaigns and PPC strategies, we've seen a significant boost in leads and conversions. Their data-driven approach and transparent reporting make them a trusted partner.",
    },
    {
      pic:Userpic4,
      name: "- emma",
      desc: "A++ for AWT! Their comprehensive digital strategy transformed our online store into a thriving e-commerce platform. From SEO to content marketing, they cover it all with expertise and enthusiasm.",
    },
    {
      pic:Userpic5,
      name: "- rose",
      desc: "Couldn't be happier with the results. AWT helped us launch a successful influencer marketing campaign and engagement beyond our expectations. Their attention to detail and communication throughout the process were top-notch.",
    },
    {
      pic:Userpic6,
      name: "- alice",
      desc: "AWT guided us through every step of the process, from website redesign to social media management. Their proactive approach and dedication to our success have made them an invaluable partner.",
    },
    {
      pic:Userpic7,
      name: "- Stephen",
      desc: "Outstanding service and exceptional results! AWT delivered a tailored SEO strategy that propelled our website to the top of search engine rankings, resulting in a significant increase in organic traffic and leads. Their expertise is unmatched!",
    },
    {
      pic:Userpic8,
      name: "- Natasha",
      desc: "AWT helped us craft a cohesive digital marketing strategy that aligned perfectly with our goals. Thanks to their expertise in content creation and paid advertising, we've seen a remarkable improvement in brand recognition and engagement.",
    },
    {
      pic:Userpic9,
      name: "- remma",
      desc: "Simply the best in the business! AWT goes above and beyond to deliver outstanding results. Their team's creativity, professionalism, and dedication have made them an invaluable partner in our digital growth journey.",
    },
    
  ];

  useEffect(() => {
    if (!api) return;

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex justify-center items-center w-11/12 absolute -top-28  mx-auto  mt-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className=" w-full  py-4   "
      >
        <CarouselContent>
          {reviews.map((value, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2   h-auto"
            >
              <div>
                <div className="rounded-lg  border bg-[#FFDEC7]  border-foreground-300 flex justify-center items-start">
                  <div className="flex flex-col gap-2 relative  items-center justify-center p-4">
                    <div className="flex justify-center items-center gap-2 ">
                      <Image
                        className="w-16 h-16 rounded-full "
                        size="lg"
                        src={value.pic}
                      />
                    </div>
                    <div className="flex justify-start top-8 left-8 absolute items-start gap-2 ">
                      <Image
                        className="w-8 h-8 rounded-full "
                        size="lg"
                        src={Qoute}
                      />
                    </div>
                    <p className="text-center text-[#FF7143] break-all h-28 leading-6 font-medium text-xs">
                      {value.desc}
                    </p>

                    <span className="uppercase font-bold text-sm">{value.name}</span>
                    
                    <div className="flex justify-center items-center gap-2 text-2xl">
                      <FaStar className="text-[#FF7143]" />
                      <FaStar className="text-[#FF7143]" />
                      <FaStar className="text-[#FF7143]" />
                      <FaStar className="text-[#FF7143]" />
                      <FaStar className="text-[#FF7143]" />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="absolute bottom-[-15px] w-full flex justify-center items-center">
          {reviews.map((value, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                current === index + 1 ? "bg-[#FF7143]" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
        <div className="absolute md:hidden lg:hidden md:static lg:static flex justify-center items-center   -bottom-2 left-[50%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <div className="absolute hidden md:block lg:block md:static lg:static left-40 -bottom-2"> 
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Reviewcrousel;
