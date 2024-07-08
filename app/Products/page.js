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
    desc:'Explore the future of digital interaction with QR Angadi, a cutting-edge platform that enhances user engagement through QR code technology. QR Angadi empowers businesses to create, manage, and analyze QR code campaigns effortlessly, driving seamless customer interactions and operational efficiency. Learn more about QR Angadi and how it can elevate your digital strategy.',
    link:'https://www.qrangadi.com/',
    productimage:QRANGADI,
    style:'md:order-first order-last',
    alt:'QR Code Technology - Angadi World Technologies'
},
  {
    title:'International Business Expedition Trailblazers (IBETS) – Coming Soon!',
    productname:"IBETS",
    desc:`At IBETS, we're committed to revolutionizing franchising and international business expansion. As your trusted partner, we provide comprehensive solutions for franchise listing, module development, and global market entry. Stay tuned for our upcoming launch and discover how IBETS can seamlessly transition your business from local success to global prominence.`,
    link:'',
    productimage:IBGTLOGO,
    style:'order-last'
},
//   {
//     title:'virtual networking platform',
//     productname:"Network House",
//     desc:'Our online networking platform is the premier destination for business owners looking to expand their horizons and forge meaningful connections. Whether you're a seasoned entrepreneur or just starting out, [Brand Name] offers a dynamic space to connect with like-minded individuals, collaborate on projects, and unlock endless possibilities for growth. Join us today and watch your network flourish!',
//     link:'',
//     productimage:QRANGADI,
//     style:'md:order-first order-last'
// },
  {
    title:'Job Streamers AI – Launching Soon!',
    productname:"Job Streamers Ai",
    desc:`At Job Streamers AI, our mission is to revolutionize the recruitment process by leveraging cutting-edge technology. Our vision is to create a seamless and efficient platform that enhances how companies and candidates connect, ensuring the perfect fit for every role. Stay tuned for our upcoming launch and join us in reshaping the future of hiring!.`,
    link:'',
    productimage:Jobstremers,
    style:'md:order-first order-last'
},
 
  
  
]


  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto">
      <Commonheader />
      <div className="w-11/12 mx-auto md:py-12 lg:py-12">
        <h1 className="text-3xl tracking-wider font-bold">
        Our Companies.
        </h1>
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
