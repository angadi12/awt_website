import React from 'react'
import { GoDotFill } from "react-icons/go";

const Digitalbussiness = () => {


    const carddata = [
        {
          title: "Increased Visibility",
          desc: "Digital marketing tactics such as search engine optimization (SEO), social media marketing (SMM), and pay-per-click (PPC) advertising can improve your visibility, making it easier for users to find your business when searching for products or services.",
        },
        {
          title: " Targeted Reach",
          desc:'With digital marketing, you can precisely target your audience based on demographics, interests, and online behaviors. This allows you to reach the right people with the right message, increasing the likelihood of engagement and conversion.'
        },
        {
          title: " Cost-Effectiveness",
          desc:`Compared to traditional marketing methods, digital marketing is often more cost-effective, allowing you to reach a larger audience with a smaller budget. With tactics such as content marketing and email marketing, you can generate leads and conversions at a fraction of the cost of traditional advertising methods.`
        },
        {
          title: "Improved Customer Relationships",
          desc: `Digital marketing fosters direct and immediate interaction with customers through channels like social media, email, and live chat. Building meaningful relationships with customers enhances brand loyalty and advocacy, driving sustained growth.`
        },
        {
          title: "Adaptability and Agility",
          desc:`Digital marketing offers flexibility and agility to adapt quickly to market changes and trends. With the ability to tweak campaigns in real-time based on performance data, businesses can stay responsive to evolving user needs & driving continuous growth.`
        },
      ];


  return (
    <section className="w-full flex flex-col gap-8 justify-center items-center py-12">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        How digital marketing will help your business <br></br> grow?
        </h6>
      </div>
      <div className="w-11/12 grid  gap-8 place-content-center items-center md:grid-cols-2 lg:grid-cols-2 grid-cols-1 ">
        {carddata.map((value, index) => (
          <div
            key={index}
            className={
              index === 2
                ? "ring-1 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 ring-gray-300 p-4 md:h-40 lg:h-48 h-auto flex justify-center items-start gap-4 flex-col"
                : "ring-1  ring-gray-300  p-4 md:h-40 lg:h-48 h-auto flex justify-center items-start gap-4 flex-col"
            }
          >
            <h6 className="flex items-center text-justify gap-2 uppercase md:text-base lg:text-base text-xs font-bold">
              <GoDotFill />
              {value.title}
            </h6>
            <p className="text-justify text-sm font-medium ">{value.desc}</p>
          </div>
        ))}
      </div>
      </section>
  )
}

export default Digitalbussiness