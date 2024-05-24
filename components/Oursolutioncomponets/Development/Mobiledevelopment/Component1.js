import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Digramservices from "../../../../public/Solutionasset/Digramservices.png";
import Expertiseandexp from "../../../../public/Solutionasset/Expertiseandexp.png";
import Trackrecord from "../../../../public/Solutionasset/Trackrecord.png";
import Innovativesolution from "../../../../public/Solutionasset/Innovativesolution.png";

const Mobiledev = () => {


const carddata2=[
    {
    icon:Expertiseandexp,
    title:'Expertise and Experience',
    subtitle:<p className="text-sm font-medium">Our seasoned team of developers boasts extensive experience in leveraging <span className="text-[#FF7143]">Node.js</span> {`to build robust and scalable applications. With years of hands-on experience, we have honed our skills to deliver exceptional results for our clients.`}</p>
},
    {
    icon:Trackrecord,
    title:'Proven Track Record',
    subtitle:'With a history of successful projects and satisfied clients, you can trust AWT to deliver exceptional results. Our portfolio speaks for itself, showcasing a diverse range of apps developed for various industries and use cases.'
},
    {
    icon:Innovativesolution,
    title:'Innovative Solutions',
    subtitle:'At AWT, we are passionate about pushing the boundaries of innovation and exploring new possibilities in app development. From groundbreaking features to elegant design solutions, we strive to exceed expectations and deliver apps that inspire and delight users.'
},
]


  const carddata = [
    {
      title: "Expanded Reach",
      desc: "Expanded Reach With the widespread of smartphones and mobile apps provide businesses with a powerful platform to reach a larger audience. Making your products & services accessible anytime/anywhere, you can attract users all over the Globe.",
    },
    {
      title: "Enhanced Customer Engagement",
      desc: "Mobile apps offer a direct and personalized channel of communication with your customers. Through features like push notifications, in-app messaging, and personalized content, you can engage with your audience in real-time, driving increased interactions.",
    },
    {
      title: "Data-driven Insights and Analytics",
      desc: `Mobile apps generate valuable data and insights about user behavior, preferences, and interactions. By analyzing this data, you can gain a deeper understanding of your audience, identify emerging trends, and make informed decisions to optimize your products and services for maximum impact.`,
    },
    {
      title: "Monetization Opportunities",
      desc: `Mobile apps offer multiple monetization avenues, including in-app purchases, subscriptions, advertising, & premium features. By these revenue streams, you can diversify your income sources and drive additional revenue for your business.`,
    },
    {
      title: "Improved Brand Visibility",
      desc: `Having a mobile app with your brand logo prominently displayed on users' devices reinforces brand recognition and boosts visibility. It serves as a constant reminder of your brand, increasing the likelihood of users engaging with your services.`,
    },
   
  ];

  return (
    <section className="w-full flex flex-col gap-8 justify-center items-center py-12">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          How Mobile Apps Drive Business Growth?{" "}
        </h6>
      </div>
      <div className="w-11/12 grid  gap-8 place-content-center items-center md:grid-cols-2 lg:grid-cols-2 grid-cols-1 ">
        {carddata.map((value, index) => (
          <div
            key={index}
            className={
               index === 2
                ? "ring-1 md:col-start-1 lg:col-start-1 lg:col-end-3 md:col-end-3 ring-gray-300 p-4 md:h-48 lg:h-48 flex justify-center items-start gap-4 flex-col"
                : "ring-1  ring-gray-300 p-4 md:h-48 lg:h-48 flex justify-center items-start gap-4 flex-col"
            }
          >
            <h6 className="flex items-center text-justify gap-2 uppercase md:text-base text-xs lg:text-base font-bold">
              <GoDotFill />
              {value.title}
            </h6>
            <p className="text-justify text-sm font-medium ">{value.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto py-4">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        Our Mobile App Development Services!
        </h6>
      </div>
      <div className="md:w-11/12 lg:w-11/12 w-full mx-auto flex justify-start items-start p-4">
        <Image src={Digramservices} alt="digram"/>
      </div>


      <div className="w-11/12 mx-auto py-4">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
      Why AWT is best for App Development?
        </h6>
      </div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-4">
         {
            carddata2.map((value,index)=>(
                <div key={index} className="w-full ring-1 ring-gray-400 p-2 flex gap-10 flex-col lg:flex-row md:flex-row justify-between items-center">
                    <div className="p-4 flex  justify-center items-center">
                        <Image className="w-28 h-24" src={value.icon} alt="icon"/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <h6 className="uppercase font-bold ">{value.title}</h6>
                         {index===0 ?value.subtitle:
                         <p className="text-sm font-medium">{value.subtitle}</p>}
                    </div>
                </div>
            ))
         }  
      </div>
    </section>
  );
};

export default Mobiledev;
