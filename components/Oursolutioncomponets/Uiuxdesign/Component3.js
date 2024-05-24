import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

import figma from "../../../public/Solutionasset/figma.png";
import Adobe from "../../../public/Solutionasset/Adobe.png";
import Sketch from "../../../public/Solutionasset/Sketch.png";
import Invasion from "../../../public/Solutionasset/Invasion.png";
import Photoshop from "../../../public/Solutionasset/Photoshop.png";
import AI from "../../../public/Solutionasset/AI.png";
import Canva from "../../../public/Solutionasset/Canva.png";
import Maze from "../../../public/Solutionasset/Maze.png";

const Component3 = () => {
  const carddata = [
    {
      title: "User Satisfaction",
      desc: "A well-designed UI/UX enhances user satisfaction by providing a seamless and enjoyable experience. When users can easily navigate and accomplish tasks within the product, they are more likely to have a positive perception of it.",
    },
    {
      title: "User Engagement1",
      desc: "An intuitive and visually appealing interface encourages user engagement. By incorporating elements that capture user attention and encourage interaction, UI/UX design helps keep users engaged and invested in the product.",
    },
    {
      title: "Competitive Advantage",
      desc: `In today's competitive market, a standout UI/UX can differentiate a product from competitors. A well-designed interface that meets user needs and surpasses expectations can attract and retain users, giving the project a competitive edge.`,
    },
    {
      title: "Increased Conversions",
      desc: ` A user-friendly UI/UX can lead to higher conversion rates. When users find it easy to complete desired actions, such as making a purchase or signing up for a service, they are more likely to convert into customers.`,
    },
    {
      title: " Reduced Costs",
      desc: `Investing in UI/UX design upfront can help avoid costly redesigns and usability issues later on. By identifying and addressing user needs and pain points early in the development process, UI/UX design can save time and resources in the long run.`,
    },
    {
      title: "Brand Reputation",
      desc: `The UI/UX design serves as the face of your brand. A well-crafted interface not only reflects professionalism and attention to detail but also contributes to building a positive brand reputation.`,
    },
  ];

  const branddata = [
    {
      image: figma,
      text:'Figma'
    },
    {
      image: Adobe,
      text:'adobe xd'
    },
    {
      image: Sketch,
      text:'sketch'
    },
    {
      image: Invasion,
      text:'InVision Studio'
    },
    {
      image: Photoshop,
      text:'photoshop'
    },
    {
      image: AI,
      text:'illustrator'
    },
    {
      image: Canva,
      text:'canva'
    },
    {
      image: Maze,
      text:'maze'
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8  py-12 full mx-auto">
      <div className="w-11/12 ">
        <h6 className="md:text-3xl lg:text-3xl text-lg font-bold tracking-wider">
          Why do you need UI UX for your<br></br> Project?
        </h6>
      </div>
      <div className="w-11/12 grid gap-8 place-content-center justify-center items-center md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="ring-1 ring-gray-300 p-4 h-48 flex justify-center items-start gap-4 flex-col"
          >
            <h6 className="flex items-center text-justify gap-2 uppercase text-base font-bold">
              <GoDotFill />
              {value.title}
            </h6>
            <p className="text-justify text-sm font-medium ">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-start gap-8 w-11/12 mx-auto">
        <div className="md:py-12 lg:py-12 mt-4 md:mt-0 lg:mt-0">
          <h6 className="md:text-3xl lg:text-3xl text-lg font-bold tracking-wider">
            What Technologies we use for your Project?
          </h6>
        </div>

        <div className="w-full md:mt-4 lg:mt-4 mt-0 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 md:gap-12 lg:gap-12  mx-auto place-content-center justify-center items-center">
          {branddata.map((value, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center ring-1 ring-gray-300 gap-3 p-4"
            >
              <Image className="md:w-16 md:h-16 h-12 w-12 lg:w-16 lg:h-16" src={value.image} alt="icons" />
              <span className="uppercase font-semibold md:text-sm lg:text-sm text-xs">
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Component3;
