import React from 'react'

import figma from "../../../../public/Solutionasset/figma.png";
import Adobe from "../../../../public/Solutionasset/Adobe.png";
import Sketch from "../../../../public/Solutionasset/Sketch.png";
import Invasion from "../../../../public/Solutionasset/Invasion.png";
import Photoshop from "../../../../public/Solutionasset/Photoshop.png";
import AI from "../../../../public/Solutionasset/AI.png";
import Canva from "../../../../public/Solutionasset/Canva.png";
import Maze from "../../../../public/Solutionasset/Maze.png";
import Image from 'next/image';

const Technologiesused = () => {


  const branddata = [
    {
      image: figma,
      text:'figma'
    },
    {
      image: Adobe,
      text:"adobe xd"
    },
    {
      image: Sketch,
      text:"Sketch"
    },
    {
      image: Invasion,
      text:"InVision Studio"
    },
    {
      image: Photoshop,
      text:"photoshop"
    },
    {
      image: AI,
      text:"illustrator"
    },
    {
      image: Canva,
      text:"canva"
    },
    {
      image: Maze,
      text:"Maze"
    },
  ];

  return (
     <section className='flex flex-col justify-center items-start gap-8 w-full mx-auto py-12'>
       <div className="w-11/12 mx-auto">
          <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
            What Technologies we use for your Project?
          </h6>
        </div>
        <div className="w-11/12 mt-4 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 md:gap-8 lg:gap-8 mx-auto place-content-center justify-center items-center">
          {branddata.map((value, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 ring-1 ring-gray-300 h-40 p-4"
            >
              <Image className="w-16 h-16" src={value.image} alt="icons" />
              <h6 className='text-xs font-bold uppercase'>{value.text}</h6>
            </div>
          ))}
        </div>
     </section>
  )
}

export default Technologiesused