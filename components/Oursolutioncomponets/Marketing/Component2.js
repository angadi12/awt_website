import React from "react";
import Image from "next/image";
import Backgroud from "../../../public/Solutionasset/Background.png";

const Component2 = () => {
  const carddata = [
    {
      No: "01",
      subtitle: "Strategy plan",
      desc: "Align strategy with business goals through market research, targeting, and analysis.",
    },
    {
      No: "02",
      subtitle: "Campaign Planning",
      desc: `Plan targeted campaigns, set timelines, budgets, KPIs, and coordinate teams.`,
    },
    {
      No: "03",
      subtitle: "Content Creation",
      desc: "Create diverse content aligned with goals, engage audience, ensure consistency.",
    },
    {
      No: "04",
      subtitle: "Ad Targeting",
      desc: `Use data for targeted messaging, optimize ad placements, reduce costs.`,
    },
    {
      No: "05",
      subtitle: "Campaign Management",
      desc: "Track campaign metrics, adjust tactics based on data, coordinate with teams for optimization.",
    },
    {
      No: "06",
      subtitle: "Analytics & Reporting",
      desc: "Analyze data, generate reports, optimize future campaigns for continuous growth.",
    },
  ];

  const firstFourCards = carddata.slice(0, 4);
  const lastTwoCards = carddata.slice(4);

  return (
    <section className="relative w-full justify-center items-center  flex">
      <Image
        className="w-full relative h-[180vh] md:h-auto lg:h-auto"
        src={Backgroud}
        alt="background"
      />
      <div className="absolute flex flex-col justify-center items-center left-[50%] top-[50%]  w-full gap-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h6 className="text-xl uppercase font-bold text-white text-center">
          our simple marketing process!
        </h6>
        <p className="text-white text-sm text-center">
          {`By adhering to a structured development process, you can ensure that your software development endeavors are built upon a`}
          <br></br>{" "}
          {`foundation of robust planning, efficient execution, and continuous improvement, culminating in the successful delivery of a high-quality and`}{" "}
          <br></br>
          {`scalable product.`}
        </p>
        <div className='w-11/12 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 mt-8 md:gap-10 lg:gap-10 gap-4 mx-auto place-content-center items-center'>
          {firstFourCards.map((value, index) => (
            <div
            className='ring-1 ring-white flex flex-col   bg-black rounded-lg  md:h-60 lg:h-60 h-36 py-6 px-4 w-full'
              key={index}
            >
              <h6 className="text-3xl font-extrabold  text-right text-white">
                {value.No}
              </h6>
              <h5 className="text-sm md:mt-12 lg:mt-12 uppercase font-bold text-white">
                {value.subtitle}
              </h5>
              <p className='text-xs text-white md:mt-4 lg:mt-4 mt-2'>{value.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center md:w-[50%] lg:w-[50%] w-full mt-4 gap-10  mx-auto ">
          {lastTwoCards.map((value, index) => (
            <div
              className="ring-1 ring-white flex flex-col bg-black rounded-lg md:h-60 lg:h-60 h-32 w-11/12 md:w-auto lg:w-auto py-6 px-4 justify-self-center"
              key={index}
            >
              <h6 className="text-3xl font-extrabold text-right text-white">
                {value.No}
              </h6>
              <h5 className="text-sm text-justify md:mt-12 lg:mt-12 uppercase font-bold text-white">
                {value.subtitle}
              </h5>
              <p className='text-xs text-white md:mt-4 lg:mt-4 mt-2'>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Component2;
