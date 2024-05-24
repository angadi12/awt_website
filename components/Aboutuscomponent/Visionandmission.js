"use client";
import React, { useRef, useState } from "react";
import Vision from "../../public/Solutionasset/Vision.png";
import Mision from "../../public/Solutionasset/Mision.png";
import Videoframe from "../../public/Solutionasset/Videoframe.png";
import Image from "next/image";
import Customanimationslide from "../Homecomponets/Customanimationslide";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";

function Visionandmission() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

      <div className="flex justify-center items-center gap-4 w-full mx-auto flex-col py-16 mt-8">
        <h6 className="md:text-2xl lg:text-2xl text-lg font-bold tracking-wider px-2">
          Watch a small video of ourselves and get to know us better.
        </h6>
        <video
          src="https://res.cloudinary.com/dipr7y36n/video/upload/v1716534553/AWT-WEBSITE/qeyggrhec4utzsfajm3v.mp4"
          ref={videoRef}
          controls
          className="h-[100vh] relative object-cover"
        />
        {/* <div
          className="absolute w-16 h-16 bg-white text-[#FF7143] flex justify-center items-center rounded-full"
          onClick={handlePlayPause}
        >
          {isPlaying ? <IoPlay size={30} /> : <FaPause size={30} />}
        </div>{" "} */}
      </div>
    </div>
  );
}

export default Visionandmission;
