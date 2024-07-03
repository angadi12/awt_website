import React from 'react'
import { GoDotFill } from "react-icons/go";

const Graphicdesignpage = () => {


    const carddata = [
        {
          title: "Professionalism",
          desc: "A graphic designer brings a level of professionalism to your brand's visual identity that can't be matched by others. With their expertise, they can ensure that your brand presents itself in a polished and consistent manner across all platforms.",
        },
        {
          title: "Brand Identity",
          desc: "Hiring a graphic designer for their ability to develop a strong and cohesive brand identity for your business. Through the creation of logos, color palettes, typography, and other visual elements, they can help you establish a distinct and memorable brand.",
        },
        {
          title: "Creativity",
          desc: `Graphic designers are creative individuals who thrive on bringing ideas to life through visual expression. You can use their creative skills to develop design concepts that effectively communicate your brand's message and values in a visually compelling way.`,
        },
        {
          title: "Time and Cost Savings",
          desc: `Hiring a graphic designer may initially seem like an extra cost, but it can actually save you both time & money in the long term. Professional designers can prevent the trial & error of DIY projects and costly mistakes from others.`,
        },
        {
          title: "Consistency",
          desc: `Consistency is key when it comes to building a strong brand identity, and a graphic designer can help you maintain that consistency across all of your brand's touchpoints. From materials to digital assets, they can ensure that your brand has a consistency.`,
        },
        {
          title: "Adaptability",
          desc: `In today's fast-paced digital landscape, it's important for brands to be able to adapt to changing market trends & user preferences. With a graphic designer, you can stay ahead by implementing solutions that are flexible & adaptable to your brand's Identity.`,
        },
      ];
  return (
    <section className="flex flex-col justify-start items-start gap-8 w-full md:py-12 lg:py-12 py-4">
      <div className='w-11/12 mx-auto'>
        <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        Benefits of Hiring a Graphic Designer for your<br></br> Brand.
        </h1>
      </div>
      <div className="w-11/12 mx-auto grid gap-8 place-content-center items-center md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="ring-1 ring-gray-300 p-4 h-48 flex justify-center items-start gap-4 flex-col"
          >
            <h1 className="flex items-center text-justify gap-2 uppercase text-base font-bold">
              <GoDotFill />
              {value.title}
            </h1>
            <p className="text-justify text-sm font-medium ">{value.desc}</p>
          </div>
        ))}
      </div>
</section>
  )
}

export default Graphicdesignpage