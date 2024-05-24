import React from "react";
import Image from "next/image";
import Backgroud from "../../../public/Solutionasset/Background.png";

const Component2 = () => {
  const carddata = [
    {
      No: "01",
      subtitle: "Discovery Phase",
      desc: "Gather client requirements, understand goals, target audience, and industry landscape.",
    },
    {
      No: "02",
      subtitle: "Planning & Strategy",
      desc: `Define project scope, objectives, risks, and develop a detailed project plan.`,
    },
    {
      No: "03",
      subtitle: "Wireframing",
      desc: "Create wireframes/mockups, iterate based on feedback, refine user experience and interface design.",
    },
    {
      No: "04",
      subtitle: "Graphical Design",
      desc: `Develop visually appealing designs aligned with client's branding guidelines.`,
    },
    {
      No: "05",
      subtitle: "Development",
      desc: "Implement designs using industry-leading technologies, follow best coding practices, conduct testing.",
    },
    {
      No: "06",
      subtitle: "Delivery & Launch",
      desc: "Prepare for deployment, schedule launch, conduct final testing, and validation.",
    },
    {
      No: "07",
      subtitle: "Training & Handover",
      desc: "Provide training and support, transfer ownership of project deliverables.",
    },
    {
      No: "08",
      subtitle: "Maintenance",
      desc: "Offer ongoing support, monitor performance, security, and collaborate on future enhancements.",
    },
  ];

  return (
    <section className="relative w-full justify-center items-center  flex">
      <Image
        className="w-full relative h-[220vh] md:h-auto lg:h-auto"
        src={Backgroud}
        alt="background"
      />
      <div className="absolute flex flex-col justify-center items-center left-[50%] top-[50%]  w-full gap-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h6 className="text-xl uppercase font-bold text-white text-center">
          our simple development process!
        </h6>
        <p className="text-white text-sm text-center">
          {`By adhering to a structured development process, you can ensure that your software development endeavors are built upon a`}
          <br></br>{" "}
          {`foundation of robust planning, efficient execution, and continuous improvement, culminating in the successful delivery of a high-quality and`}{" "}
          <br></br>
          {`scalable product.`}
        </p>
        <div className='w-11/12 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 mt-8 md:gap-10 lg:gap-10 gap-4 mx-auto place-content-center items-center'>
          {carddata.map((value, index) => (
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
      </div>
    </section>
  );
};

export default Component2;
