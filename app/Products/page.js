import React from "react";
import Commonheader from "@/components/Oursolutioncomponets/Commonheader";
import QRANGADI from '../../public/Solutionasset/QRANGADI.png'
import IBGTLOGO from '../../public/Solutionasset/IBGTLOGO.png'
import Jobstremers from '../../public/Portfolioasset/Jobstremers.jpeg'
import Customproductcard from "@/components/Productscomponent/Customproductcard";

const page = () => {


const productdata=[
  {
    title:'Customized QR Generation',
    productname:"QR Angadi",
    desc:'QR Angadi is a flagship product of Angadi World Technologies Pvt Ltd, a company founded with a commitment to innovation and excellence. Our team of dedicated professionals is driven to simplify and enhance the QR code experience for users across various industries.',
    link:'https://www.qrangadi.com/',
    productimage:QRANGADI,
    style:'md:order-first order-last',
    alt:'QR Code Technology - Angadi World Technologies'
},
  {
    title:'franchising and business expansion',
    productname:"IBETS",
    desc:'At International Business Expedition Trailblazers, we are dedicated to revolutionizing the world of franchising and international business expansion. As your trusted partner, we offer comprehensive solutions for franchise listing, module development, and global market entry, ensuring a seamless transition from local to global business landscapes.',
    link:'',
    productimage:IBGTLOGO,
    style:'order-last'
},
//   {
//     title:'virtual networking platform',
//     productname:"Network House",
//     desc:`Our online networking platform is the premier destination for business owners looking to expand their horizons and forge meaningful connections. Whether you're a seasoned entrepreneur or just starting out, [Brand Name] offers a dynamic space to connect with like-minded individuals, collaborate on projects, and unlock endless possibilities for growth. Join us today and watch your network flourish!`,
//     link:'',
//     productimage:QRANGADI,
//     style:'md:order-first order-last'
// },
  {
    title:'job finding or publishing platform',
    productname:"Job Streamers Ai",
    desc:'At International Business Expedition Trailblazers, we are dedicated to revolutionizing the world of franchising and international business expansion. As your trusted partner, we offer comprehensive solutions for franchise listing, module development, and global market entry, ensuring a seamless transition from local to global business landscapes.',
    link:'',
    productimage:Jobstremers,
    style:'md:order-first order-last'
},
 
  
  
]


  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto">
      <Commonheader />
      <div className="w-11/12 mx-auto md:py-12 lg:py-12">
        <h6 className="text-3xl tracking-wider font-bold">
        Our Companies.
        </h6>
      </div>
       
       <div className="w-full mx-auto flex flex-col justify-center items-center gap-8">
       {
        productdata.map((value,index)=>(
          <Customproductcard key={index} data={value}/>
        ))
       }

       </div>


    </section>
  );
};

export default page;
