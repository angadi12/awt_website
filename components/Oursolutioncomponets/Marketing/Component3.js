import React from 'react'
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import Speak from '../../../public/Solutionasset/Marketing/Speak.png'

const Component3 = () => {

    const carddata = [
        {
          title: " Driving Awareness and Interest",
          desc: "Marketing raises awareness & curiosity about products/services, drawing potential customers into the sales funnel. Through strategic campaigns, marketing endeavors to inform & educate prospects about the unique benefits and value of the services.",
          className:"ring-1 md:rounded-tl-[4rem] lg:rounded-tl-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col"

        },
        {
          title: " Customer-Centric Approach",
          desc: "Marketing is shifting towards a more customer-centric approach, focusing on building meaningful relationships, delivering personalized experiences, and addressing the evolving needs and preferences of consumers.",
          className:"ring-1 md:rounded-tr-[4rem] lg:rounded-tr-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col"

        },
        {
          title: "building Brand Reputation",
          desc: "Effective marketing builds a strong brand reputation, fostering trust and confidence in products/services. Positive brand associations drive sales by influencing purchasing decisions and fostering loyalty. Marketing is essential for Building Trust.",
          className:"ring-1 md:rounded-bl-[4rem] lg:rounded-bl-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col"

        },
        {
          title: "Lead Generation",
          desc: "Marketing activities like lead generation, email marketing, and content marketing identify and qualify leads. By nurturing leads with personalized communication, marketing builds trust, making prospects more receptive to sales messages.",
          className:"ring-1 md:rounded-br-[4rem] lg:rounded-br-[4rem] ring-gray-300 md:p-4 lg:p-4  md:h-48 lg:h-48 h-auto p-6 flex justify-center items-start gap-4 flex-col"

        },
       
       
      ];


  return (
    <section className="flex flex-col justify-start items-start gap-8 w-full py-12">
    <div>
      <h1 className="text-3xl font-bold tracking-wider">
      Why marketing is the future?      </h1>
    </div>
    <div className="w-full grid gap-8 place-content-center items-center md:grid-cols-2 relative">
      {carddata.map((value, index) => (
        <div
          key={index}
          className={value.className}
        >
          <h1 className="flex items-center gap-0 md:gap-2 lg:gap-2 text-justify  uppercase text-base font-bold">
            <GoDotFill className=''/>
            {value.title}
          </h1>
          <p className="text-justify text-sm font-medium break-all">{value.desc}</p>
        </div>
      ))}
      <Image className='w-24 h-24 absolute hidden md:flex lg:flex justify-center items-center top-[50%] left-[50%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10' src={Speak} alt='Speak'/>
    </div>
    </section>
  )
}

export default Component3