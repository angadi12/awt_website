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
import Userpic1 from '../../public/Solutionasset/Userpic1.png'
import Userpic2 from '../../public/Solutionasset/Userpic2.png'
import Userpic3 from '../../public/Solutionasset/Userpic3.png'
import Userpic4 from '../../public/Solutionasset/Userpic4.png'
import Userpic5 from '../../public/Solutionasset/Userpic5.png'
import Userpic6 from '../../public/Solutionasset/Userpic6.png'
import Userpic7 from '../../public/Solutionasset/Userpic7.png'
import Qoute from '../../public/Solutionasset/Qoute.png'

const Reviewcrousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const reviews = [
    {
      pic: Userpic1,
      name: "Sudheer",
      desg:'- web development',
      desc: "AWT did a great job in designing our website and they had a great team who has helped us all through the project from initial discussions to getting our website online. Sravan, Abhi and Dhivya worked seamlessly with our team. Expert's in what they do and strongly suggest everyone. Thank you.",
    },
    {
      pic: Userpic2,
      name: "Mary Madhuri",
      desg:'- intern',
      desc: "I want to thank you for giving me the opportunity to serve as a intern at Angadi World Technologies.I have gained valuable insight and increased my interest in pursuing a career.",
    },
    {
      pic:Userpic3,
      name: "Rohan Gunai",
      desg:'- development',
      desc: "Best place to get any kind of Web and Mobile Applications to be Developed",
    },
    {
      pic:Userpic4,
      name: "Veluri Sai kusuma",
      desg:'- intern',
      desc: "For interns, this Angadi world Technologies company offers the best opportunity to gain valuable learning experiences.",
    },
    {
      pic:Userpic5,
      name: "santosh krishna Murthy",
      desg:' - development',
      desc: "They are very proffesional and what ever changes what we told without hesitating they changed and gave us the final output.. we were very happy with their work. santosh",
    },
    {
      pic:Userpic6,
      name: "Shashank HP ",
      desg:' -app development',
      desc: "Wanna get your business online? Then AWT is the best you can get!",
    },
    {
      pic:Userpic7,
      name: "Shashank HP ",
      desg:'app development',
      desc: "I needed digital marketing services, I came to AWT, now my brand is in top! Thanks to AWT!",
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
        className="md:2/4 lg:w-2/4 w-full  py-4   "
      >
        <CarouselContent>
          {reviews.map((value, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/1 lg:basis-1/1 sm:basis-1/1   h-auto"
            >
              <div>
                <div className="rounded-lg  border bg-[#FFDEC7]  border-foreground-300 flex justify-center items-start">
                  <div className="flex flex-col gap-2 relative  items-center justify-center p-4">
                    <div className="flex justify-center items-center gap-2 ">
                      <Image
                        className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24  rounded-full "
                        size="lg"
                        src={value.pic}
                      />
                    </div>
                    <div className="flex justify-start top-8 left-8 absolute items-start gap-2 ">
                      <Image
                        className="w-8 h-8 md:w-14 md:h-14 rounded-full "
                        size="lg"
                        src={Qoute}
                      />
                    </div>
                    <p className="text-center text-[#FF7143] break-all h-40 md:h-28 lg:h-28 leading-6 font-medium text-xs">
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
        <div className="absolute md:hidden lg:hidden md:static lg:static flex justify-center items-center   -bottom-6 left-[50%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
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
