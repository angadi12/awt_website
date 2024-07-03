import React from "react";
import Image from "next/image";
import Frameicon from '../../../../public/Solutionasset/Services/Frameicon.png'


import IaaS from '../../../../public/Solutionasset/Services/IaaS.png'
import PaaS from '../../../../public/Solutionasset/Services/PaaS.png'
import SaaS from '../../../../public/Solutionasset/Services/SaaS.png'
import DBaaS from '../../../../public/Solutionasset/Services/DBaaS.png'
import NaaS from '../../../../public/Solutionasset/Services/NaaS.png'
import STaaS from '../../../../public/Solutionasset/Services/STaaS.png'
import FaaS from '../../../../public/Solutionasset/Services/FaaS.png'

import AWS from '../../../../public/Solutionasset/Services/AWS.png'
import googlecloud from '../../../../public/Solutionasset/Services/googlecloud.png'
import AZURE from '../../../../public/Solutionasset/Services/AZURE.png'
import Oracle from '../../../../public/Solutionasset/Services/Oracle.png'

import Cloudhosting from '../../../../public/Solutionasset/Services/Server.png'

const Cloudconsultationpage = () => {

  const branddata=[
    {
    image:AWS,
    text:"amazon web services"
  },
    {
    image:googlecloud,
    text:"google cloud"
  },
    {
    image:AZURE,
    text:"microsoft azure"
  },
    {
    image:Oracle,
    text:"oracle cloud"
  },
]
  const carddata = [
    {
        icon:IaaS,
        title:'Infrastructure as a Service (IaaS)',
        subtitle:'IaaS solutions offer virtualized computing resources over the internet, providing the flexibility & scalability needed to support your business operations. With our IaaS offerings, you can deploy and manage your applications & workloads efficiently while maintaining control over your infrastructure.'
    },
    {
        icon:PaaS,
        title:'Platform as a Service (PaaS)',
        subtitle:'PaaS offerings provide a complete platform for developing, testing, and deploying applications without the complexity of managing underlying infrastructure. With our PaaS solutions, you can accelerate your application development cycles, increase productivity, and focus on innovation.'
    },
    {
        icon:SaaS,
        title:'Software as a Service (SaaS)',
        subtitle:'SaaS applications deliver software solutions over the internet on a subscription basis, eliminating the need for local installation & maintenance. With our SaaS offerings, you can access powerful business applications from any device with internet access, increasing collaboration & productivity.'
    },
    {
        icon:FaaS,
        title:'Function as a Service (FaaS)',
        subtitle:'FaaS solutions enable serverless computing, allowing developers to run code in response to events without managing server infrastructure. With our FaaS offerings, you can build scalable and event-driven applications, reduce operational overhead, and pay only for the compute time consumed.'
    },
    {
        icon:DBaaS,
        title:'Database as a Service (DBaaS)',
        subtitle:'DBaaS offerings provide managed database services over the internet, offering scalability, reliability, and automatic backups. With our DBaaS solutions, you can offload database management tasks, ensure data integrity, and focus on deriving insights from your data.'
    },
    {
        icon:NaaS,
        title:'Networking as a Service (NaaS)',
        subtitle:'NaaS solutions offer cloud-based networking solutions, providing virtualized networking components, scalability, and ease of management. With our NaaS offerings, you can build secure & scalable network infrastructure, connect your resources seamlessly & streamline network management.'
    },
    {
        icon:STaaS,
        title:'Storage as a Service (STaaS)',
        subtitle:'STaaS solutions offer cloud-based storage solutions, providing scalability, durability, and accessibility for your data. With our STaaS offerings, you can store and manage your data securely in the cloud, scale storage resources as needed, and ensure data availability and reliability.'
    },
];

  return (
    <section className="w-full mx-auto flex flex-col justify-center items-center gap-8">
      <div className="w-11/12 mx-auto">
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Our Cloud Computing Services for you.
        </h1>
      </div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-4">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="w-full ring-1 ring-gray-300 px-2 py-4 flex justify-between gap-12 flex-col md:flex-row lg:flex-row  items-center"
          >
            <div className="px-4 flex justify-center items-center">
              <div className="relative flex justify-center items-center">
                <Image className="z-0 w-60 object-contain" src={Frameicon} alt=""/>
                <Image
                  className=" h-4 w-16  z-10  absolute flex justify-center items-center top-[60%] left-[50%] rounded-full transform -translate-x-1/2 -translate-y-1/2  "
                  src={value.icon}
                  alt="image"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
               <h1 className="uppercase font-bold">{value.title}</h1>
              <p className="text-sm leading-6 font-medium">{value.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto py-4">
        <h1 className="md:text-3xl text-2xl lg:text-3xl font-bold tracking-wider">
        What Technologies we use for your Project?
       </h1>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-items-center items-center mx-auto w-11/12 ">
        {
          branddata.map((value,index)=>(
            <div key={index} className="ring-1 ring-gray-300 p-4 flex gap-2 flex-col justify-center items-center">
               <Image className="w-60 h-24 object-contain" src={value.image} alt="image"/>
               <span className="text-xs font-bold">{value.text}</span>
            </div>
          ))
        }
      </div>
      <section className="flex justify-start items-start flex-col w-full py-16">
     <div className="w-11/12 mx-auto" >
      <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">Why choose AWS for Cloud Computing?</h1>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between gap-4 md:gap-16 lg:gap-16 items-center w-11/12 mx-auto py-14">
        <div className="w-full flex flex-col justify-center items-start gap-8 order-2">
          <div>
            <div class="relative border-s border-[#FF7143]">
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1 -start-1.5 border border-white"></div>
                <h3 class="text-lg font-semibold text-black">
                Global Infrastructure
                </h3>
                <p class="mb-4 text-sm font-medium leading-7">
                {`AWS offers a vast and geographically diverse network of data centers around the world, allowing businesses to deploy their applications and services closer to their customers for lower latency and better performance.`}
                </p>
              </div>
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 class="text-lg font-semibold text-black">
                  {`Scalability and Flexibility`}
                </h3>
                <p class="text-sm font-medium leading-7">
                {`AWS provides scalable and flexible cloud computing resources that can easily accommodate fluctuations in demand. Businesses can quickly scale up or down their infrastructure as needed, paying only for the resources they use.`}
                </p>
              </div>
              <div class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#FF7143] rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 class="text-lg font-semibold text-black">
                  {`Wide Range of Services`}
                </h3>
                <p class="text-sm font-medium leading-7">
                {`AWS offers a comprehensive portfolio of cloud computing services, including compute, storage, databases, networking, analytics, machine learning, IoT, and more. This allows businesses to find all the tools and services they need to build and run virtually any type of application in the cloud.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start order-1">
          <Image className="" src={Cloudhosting} alt="gif" />
        </div>
      </div>
    </section>
    </section>
  );
};

export default Cloudconsultationpage;
