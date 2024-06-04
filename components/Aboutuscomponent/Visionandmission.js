"use client";
import React, { useRef, useState } from "react";
import Vision from "../../public/Solutionasset/Vision.png";
import Mision from "../../public/Solutionasset/Mision.png";
import Videoframe from "../../public/Solutionasset/Videoframe.png";
import Image from "next/image";
import Customanimationslide from "../Homecomponets/Customanimationslide";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import { Button, Divider } from "@nextui-org/react";
import FAQ from '../../public/Homeasset/FAQ.png'
import { useRouter } from "next/navigation";

function Visionandmission() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router=useRouter()

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center mx-auto w-full">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Our Vision &
          <Customanimationslide
            text={" Mission"}
            width={140}
            style={"inline-block ml-2"}
          />
        </h6>
      </div>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-items-center items-center md:gap-12 lg:gap-12 gap-24">
        <div className="bg-[#FF714333] h-80 rounded-lg relative p-12 flex justify-start items-start gap-4 flex-col">
          <h6 className="text-2xl font-bold">Our Vision</h6>
          <p className="text-gray-500 font-medium text-sm md:text-base lg:text-base">{`Empower aspiring entrepreneurs with a dynamic digital hub for starting, growing & scaling businesses.`}</p>
          <Image
            className="absolute w-40 h-40 -bottom-12 right-8"
            src={Vision}
            alt="vision"
          />
        </div>
        <div className="bg-[#FFC70033] h-80 rounded-lg relative p-12  flex justify-start items-start gap-4 flex-col">
          <h6 className="text-2xl font-bold">Our Mission</h6>
          <p className="text-gray-500 font-medium text-sm md:text-base lg:text-base">{`We empower entrepreneurs with tools, insights, and expert guidance to achieve their goals.`}</p>
          <Image
            className="absolute w-40 h-40 -bottom-12 right-8"
            src={Mision}
            alt="vision"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-11/12 mx-auto gap-8 place-content-center justify-center items-start py-16 mt-8">
        <div className="flex justify-center items-start gap-4 flex-col md:order-1 lg:order-1 order-2">
          <h6 className="md:text-3xl lg:text-3xl text-2xl font-semibold tracking-wider">
            Watch a small video of ourselves and get to know us better.
          </h6>
           <p className="text-start text-sm leading-7 font-medium">{`Here is a video about our company. If you have any further questions or need additional information, please contact our team. We are dedicated to assisting you and will resolve your inquiries within 48 hours, ensuring prompt and efficient service.`}</p>
           <div className='flex justify-center items-center gap-4 md:flex-row lg:flex-row flex-col'>

        <Button
        onPress={()=>router.push('/Contactus')}
          variant="solid"
          className="ring-1 ring-black font-bold uppercase text-black rounded-full mt-4 md:w-60 lg:w-60 w-full bg-white"
        >
         Contact us
        </Button>
        <Divider className='bg-gray-500  h-12 mt-4 hidden md:block' orientation='vertical'/>
        <div className='flex justify-between gap-8 items-center mt-4'>
            <div className='flex justify-center items-start ring-1 ring-black rounded-full p-2'>
               <Image className="w-8 h-8 object-contain" src={FAQ} alt="FAQ"/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <span className='uppercase font-medium text-[#FF7143]'>common queries</span>
                <span className='font-bold'>FAQs</span>
            </div>
        </div>
        </div>
        </div>

        <div className="flex justify-center items-center relative bg-[#FF7143] md:p-4 p-2 lg:p-4 order-1 md:order-2 lg:order-2">
          {/* <div
            className="absolute w-16 h-16 bg-white text-[#FF7143] flex justify-center items-center rounded-full"
            onClick={handlePlayPause}
          >
            {isPlaying ? <IoPlay size={30} /> : <FaPause size={30} />}
          </div>{" "} */}
          <video
            src="https://res.cloudinary.com/dipr7y36n/video/upload/v1716534553/AWT-WEBSITE/qeyggrhec4utzsfajm3v.mp4"
            ref={videoRef}
            controls
            className=" w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Visionandmission;
