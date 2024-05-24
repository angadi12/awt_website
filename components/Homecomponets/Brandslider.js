"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Brand1 from "../../public/Brandlogo/Brand1.png";
import Brand2 from "../../public/Brandlogo/Brand2.png";
import Brand3 from "../../public/Brandlogo/Brand3.png";
import Brand4 from "../../public/Brandlogo/Brand4.png";
import Brand5 from "../../public/Brandlogo/Brand5.png";
import Brand6 from "../../public/Brandlogo/Brand6.png";
import Brand7 from "../../public/Brandlogo/Brand7.png";
import Brand8 from "../../public/Brandlogo/Brand8.png";
import Brand9 from "../../public/Brandlogo/Brand9.png";
import Brand10 from "../../public/Brandlogo/Brand10.png";
import Brand11 from "../../public/Brandlogo/Brand11.png";
import Brand12 from "../../public/Brandlogo/Brand12.png";
import Brand13 from "../../public/Brandlogo/Brand13.png";
import Brand14 from "../../public/Brandlogo/Brand14.png";
import Brand15 from "../../public/Brandlogo/Brand15.png";
import Brand16 from "../../public/Brandlogo/Brand16.png";
import Brand17 from "../../public/Brandlogo/Brand17.png";
import Brand18 from "../../public/Brandlogo/Brand18.png";

const shuffleArray = (array) => {
  let newArray = array.slice(); // Create a copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Brandslider = () => {
  const brandimages = [
    { image: Brand1 },
    { image: Brand2 },
    { image: Brand3 },
    { image: Brand4 },
    { image: Brand5 },
    { image: Brand6 },
    { image: Brand7 },
    { image: Brand8 },
    { image: Brand9 },
    { image: Brand10 },
    { image: Brand11 },
    { image: Brand12 },
    { image: Brand13 },
    { image: Brand14 },
    { image: Brand15 },
    { image: Brand16 },
    { image: Brand17 },
    { image: Brand18 },
  ];

  const [shuffledImages, setShuffledImages] = useState(brandimages);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray(brandimages));
    }, 10000); // Change order every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="w-full relative bg-gray-100 md:h-52 lg:h-52 h-40 flex justify-center items-center">
      <div className="flex justify-evenly gap-4 items-center w-[2200px] slideranimation overflow-hidden">
        {shuffledImages.map((value, i) => (
          <Image key={i} className="h-28 w-40" src={value.image} alt="brandimg" />
        ))}
      </div>
      <div className="absolute top-0 left-0 md:h-52 lg:h-52 h-40 md:w-[32rem] lg:w-[32rem] w-40 rounded-lg ring-2 ring-gray-300 bg-slate-100 flex justify-center items-center p-4 z-10">
        <p className="text-start md:text-2xl lg:text-2xl text-sm font-semibold capitalize">
          in the span of <span className="text-[#FF7143] italic">6+ years</span> we
          <br />
          served across <span className="text-[#FF7143] italic">5+ countries</span> with
          <br />
          more than <span className="text-[#FF7143] italic">98%</span> of success rate!
        </p>
      </div>
    </div>
  );
};

export default Brandslider;
