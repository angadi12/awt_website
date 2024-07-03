import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Softwareservice from "../../../../public/Homeasset/Softwareservice.png";
import Firmware from "../../../../public/Homeasset/Firmware.gif";
import Expertiseandexp from "../../../../public/Solutionasset/Expertiseandexp.png";
import Trackrecord from "../../../../public/Solutionasset/Trackrecord.png";
import Innovativesolution from "../../../../public/Solutionasset/Innovativesolution.png";

const Softwaredev = () => {
  const carddata2 = [
    {
      icon: Expertiseandexp,
      title: "Expertise and Experience",
      subtitle: (
        <p className="text-sm font-medium">
          Our seasoned team of developers boasts extensive experience in
          leveraging <span className="text-[#FF7143]">Node.js</span>{" "}
          {`to build robust and scalable applications. With years of hands-on experience, we have honed our skills to deliver exceptional results for our clients.`}
        </p>
      ),
    },
    {
      icon: Trackrecord,
      title: "Proven Track Record",
      subtitle:
        "With a history of successful projects and satisfied clients, you can trust AWT to deliver exceptional results. Our portfolio speaks for itself, showcasing a diverse range of apps developed for various industries and use cases.",
    },
    {
      icon: Innovativesolution,
      title: "Innovative Solutions",
      subtitle:
        "At AWT, we are passionate about pushing the boundaries of innovation and exploring new possibilities in app development. From groundbreaking features to elegant design solutions, we strive to exceed expectations and deliver apps that inspire and delight users.",
    },
  ];

  const carddata = [
    {
      title: "Streamlined Operations",
      desc: "Tailored software solutions streamline business processes, automating repetitive tasks & increasing operational efficiency. By eliminating manual errors and reducing overhead costs, businesses can operate more efficiently & allocate resources more effectively.",
    },
    {
      title: "Enhanced Customer Engagement",
      desc: "Customer-focused software solutions enhance the overall customer experience. By providing easy access to information, quick response times & personalized assistance, businesses can, build loyalty, & increase customer retention rates.",
    },
    {
      title: "Data-driven Insights and Analytics",
      desc: `Software generates valuable data about business operations, customer behaviors, market trends, and more. By analyzing this data, businesses gain actionable insights into their operations, enabling informed decision-making, targeted marketing strategies, and continuous improvement initiatives that drive growth and profitability.`,
    },
    {
      title: "Revenue Generation",
      desc: `Monetizable software offerings, such as subscription-based services, in-app purchases, or licensing fees, provide additional revenue streams for businesses. By diversifying revenue sources & capitalizing on value-added services, businesses can increase growth.`,
    },
    {
      title: "Enhanced Productivity",
      desc: `User-friendly software empowers employees to work smarter, not harder. With intuitive interfaces and powerful features, software solutions enable teams to collaborate more effectively, manage tasks more efficiently, & accomplish more in less time.`,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-8 justify-center items-center py-12">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          How Software Drive Business Growth?{" "}
        </h1>
      </div>
      <div className="w-11/12 grid  gap-8 place-content-center items-center md:grid-cols-2 lg:grid-cols-2 grid-cols-1 ">
        {carddata.map((value, index) => (
          <div
            key={index}
            className={
              index === 2
                ? "ring-1 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 ring-gray-300 p-4 md:h-40 lg:h-48 h-auto flex justify-center items-start gap-4 flex-col"
                : "ring-1  ring-gray-300 p-4 md:h-40 lg:h-48 h-auto flex justify-center items-start gap-4 flex-col"
            }
          >
            <h1 className="flex items-center text-justify gap-2 uppercase md:text-base lg:text-base text-xs font-bold">
              <GoDotFill />
              {value.title}
            </h1>
            <p className="text-justify text-sm font-medium ">{value.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto py-4">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Our Software Development Services!{" "}
        </h1>
      </div>
      <div className="md:w-11/12 lg:w-11/12 w-full mx-auto flex justify-start items-start p-4 relative ">
        <Image src={Softwareservice} alt="digram" />
        <Image className="absolute flex justify-center items-center lg:top-[50%] md:top-[50%] top-[50%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 h-32 object-contain w-40 md:h-96 md:w-96 lg:w-96 lg:h-96 " src={Firmware} alt="digram2" />

      </div>

      <div className="w-11/12 mx-auto py-4">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Why AWT is best for Software Development?{" "}
        </h1>
      </div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-4">
        {carddata2.map((value, index) => (
          <div
            key={index}
            className="w-full ring-1 ring-gray-400 p-2 flex gap-10 flex-col md:flex-row lg:flex-row justify-between items-center"
          >
            <div className="p-4 flex justify-center items-center">
              <Image className="w-28 h-24" src={value.icon} alt="icon" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="uppercase font-bold ">{value.title}</h1>
              {index === 0 ? (
                value.subtitle
              ) : (
                <p className="text-sm font-medium">{value.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Softwaredev;
