'use client'
import React from 'react'
import Commonheader from '@/components/Oursolutioncomponets/Commonheader'
import Customportfoliocard from '@/components/Portfoliocomponent/Customportfoliocard'
import biryani from '../../public/Portfolioasset/90biryani.png' 
import biryanidesktop from '../../public/Portfolioasset/biryanidesktop.png' 
import biryaniiphone from '../../public/Portfolioasset/biryaniiphone.png' 

import Vitamindesktop from '../../public/Portfolioasset/Vitamindesktop.png' 
import Vitaminiphone from '../../public/Portfolioasset/Vitaminiphone.png' 
import Vitaminslogo from '../../public/Portfolioasset/Vitaminslogo.png' 

import Winklogo from '../../public/Portfolioasset/Winklogo.png' 
import Winkadsdesktop from '../../public/Portfolioasset/Winkadsdesktop.png' 
import Winkadsiphone from '../../public/Portfolioasset/Winkadsiphone.png' 

import Pioneerdesktop from '../../public/Portfolioasset/Pioneerdesktop.png' 
import Pioneeriphone from '../../public/Portfolioasset/Pioneeriphone.png' 
import Pioneerlogo from '../../public/Portfolioasset/Pioneerlogo.png' 

import Mythridesktop from '../../public/Portfolioasset/Mythridesktop.png' 
import Mythriiphone from '../../public/Portfolioasset/Mythriiphone.png' 
import Mythrilogo from '../../public/Portfolioasset/Mythrilogo.png' 

import Solardesktop from '../../public/Portfolioasset/Solardesktop.png' 
import Solariphone from '../../public/Portfolioasset/Solariphone.png' 
import Solarlogo from '../../public/Portfolioasset/Solarlogo.png' 


import Prospectdesktop from '../../public/Portfolioasset/Prospectdesktop.png' 
import Prospectiphone from '../../public/Portfolioasset/Prospectiphone.png' 
import Prospectlogo from '../../public/Portfolioasset/Prospectlogo.png' 


import Brandsagadesktop from '../../public/Portfolioasset/Brandsagadesktop.png' 
import Brandsagaiphone from '../../public/Portfolioasset/Brandsagaiphone.png' 
import Brandsagalogo from '../../public/Portfolioasset/Brandsagalogo.png' 


import Amazondesktop from '../../public/Portfolioasset/Amazondesktop.png' 
import Amazoniphone from '../../public/Portfolioasset/AmazonIphone.png' 
import Amazonlogo from '../../public/Portfolioasset/Amazonlogo.png' 




import Customanimationslide from '@/components/Homecomponets/Customanimationslide'
import { Button } from '@nextui-org/react'
import { BiSolidCategory } from "react-icons/bi";

const page = () => {


  const data=[
    {
      image:[Amazondesktop,Amazoniphone],
      logo:Amazonlogo,
      desc:`We developed an AI-based Helmet Adherence System for Amazon, enhancing delivery associate safety by verifying helmet usage through real-time image analysis. The system features automatic helmet detection, real-time monitoring, and a user-friendly interface, ensuring easy adoption and compliance. It safeguards data privacy by recording only helmet status and timestamps. This solution reduces head injury risks, streamlines verification, and ensures compliance with safety regulations.`,
      iconcolor:'#00ACD7',
      cardborder:'Amazoncardborder',
      className:'Amazoncard',
      tag:['Branding','web dev','social media handling'],
      link:'#'
  },
  {
    image:[Prospectdesktop,Prospectiphone],
    logo:Prospectlogo,
    desc:`We proudly partnered with Prospect Tutors to redefine educational success. Our collaboration introduces a comprehensive tutoring system that caters to students across all levels, from beginner to advanced. This initiative not only enhances the learning experience with expert instruction but also empowers parents to monitor their children's progress in real-time. Together, we are committed to fostering academic excellence and providing a transparent, effective, and engaging educational journey for students worldwide.`,
    iconcolor:'#028ED9',
    cardborder:'Propspectcardborder',
    className:'Prospectcard',
    tag:['Branding','web dev','social media handling'],
    link:'#'
},
{
  image:[Winkadsdesktop,Winkadsiphone],
  logo:Winklogo,
  desc:`Wink Ads empowers businesses with compelling marketing messages crafted to captivate audiences. Our collaboration with Wink Ads showcases our dedication to delivering impactful solutions that drive results, all while maintaining affordability. Together, we redefine the standards of effective advertising strategies, setting the stage for success in the modern market.`,
  iconcolor:'#00BFB5',
  cardborder:'winkadscardborder',
  className:'winkadscard',
  tag:['Branding','web dev','social media handling'],
  link:'https://winkads.in/'
},
{
  image:[Solardesktop,Solariphone],
  logo:Solarlogo,
  desc:`We proudly partnered with Petrichor Solar to pioneer the future of sustainable energy solutions. Our collaboration with Petrichor Solar forecasts rooftop solar panel installations as the leading force in the renewable energy sector. This visionary project exemplifies our commitment to revolutionizing the energy landscape, reducing carbon footprints, and promoting green energy adoption. Through expert consultation, top-notch installation services, and ongoing support, we aim to empower households and businesses worldwide to harness the power of the sun.`,
  iconcolor:'#F3850E',
  cardborder:'Solarcardborder',
  className:'Solarcard',
  tag:['Branding','web dev','social media handling'],
  link:'#'
},

{
  image:[Vitamindesktop,Vitaminiphone],
  logo:Vitaminslogo,
  desc:`Wink Ads empowers businesses with compelling marketing messages crafted to captivate audiences. Our collaboration with Wink Ads showcases our dedication to delivering impactful solutions that drive results, all while maintaining affordability. Together, we redefine the standards of effective advertising strategies, setting the stage for success in the modern market.`,
  iconcolor:'#9747FF',
  cardborder:'vitaminscardborder',
  className:'vitaminscard',
  tag:['Branding','web dev','social media handling'],
  link:''
},
    {
      image:[biryanidesktop,biryaniiphone],
      logo:biryani,
      desc:`We proudly partnered with 90s Biryani to pioneer the future of Indian culinary delights. Our collaboration with 90s Biryani.com forecasts 'Biryani' as the reigning champion in the realm of Indian food service and delivery. This visionary project exemplifies our commitment to revolutionizing the culinary landscape and delighting taste buds worldwide.`,
      iconcolor:'#A71E22',
      cardborder:'biryanibordercard',
      className:'biryanicard',
      tag:['Branding','web dev','social media handling'],
      link:''
  },
    {
      image:[Pioneerdesktop,Pioneeriphone],
      logo:Pioneerlogo,
      desc:`Wink Ads empowers businesses with compelling marketing messages crafted to captivate audiences. Our collaboration with Wink Ads showcases our dedication to delivering impactful solutions that drive results, all while maintaining affordability. Together, we redefine the standards of effective advertising strategies, setting the stage for success in the modern market.`,
      iconcolor:'#3FBFAA',
      cardborder:'pioneercardborder',
      className:'pioneercard',
      tag:['Branding','web dev','social media handling'],
      link:''
  },
    {
      image:[Mythridesktop,Mythriiphone],
      logo:Mythrilogo,
      desc:`Wink Ads empowers businesses with compelling marketing messages crafted to captivate audiences. Our collaboration with Wink Ads showcases our dedication to delivering impactful solutions that drive results, all while maintaining affordability. Together, we redefine the standards of effective advertising strategies, setting the stage for success in the modern market.`,
      iconcolor:'#1877F2',
      cardborder:'mythricardborder',
      className:'mythricard',
      tag:['Branding','web dev','social media handling'],
      link:'https://wordpress-1272405-4594953.cloudwaysapps.com/'
  },
    


    {
      image:[Brandsagadesktop,Brandsagaiphone],
      logo:Brandsagalogo,
      desc:`We are excited to collaborate with BrandSaga, a leader in celebrity and influencer marketing services. By partnering with top influencers and celebrities, BrandSaga helps brands amplify their presence and achieve remarkable growth. This initiative reflects our dedication to innovating marketing strategies and driving brand success in the ever-evolving digital landscape.`,
      iconcolor:'#A71E22',
      cardborder:'Brandsagacardborder',
      className:'Brandsagacard',
      tag:['Branding','web dev','social media handling'],
      link:'#'
  },

    



]



  return (
    <section className='flex flex-col justify-center items-center gap-8 mx-auto'>
    <Commonheader/>
    <div className='w-full flex flex-col justify-center items-center mx-auto gap-8 md:py-12 lg:py-12'>
        <div className='w-11/12 mx-auto'>
          <h6 className='text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider'>Take a look at our <span className='md:hidden lg:hidden inline-block rounded-md px-2 text-white bg-[#FF7143]'>Portfolio!</span> <Customanimationslide text={'Portfolio!'} width={180} style={'md:inline-block hidden lg:inline-block ml-2'}/></h6>
        </div>

       {
        data.map((value,index)=>(
          <div className='md:py-8 lg:py-8 flex flex-col justify-center items-center  w-11/12' key={index}>
            <Customportfoliocard data={value}/>

          </div>

        ))
       }
    </div>
      {/* <div className='fixed bottom-4 z-50'>
        <Button className='bg-black uppercase font-bold rounded-full text-white flex justify-center items-center'>Categories <BiSolidCategory size={30} className='inline-block ml-2 text-white'/></Button>
      </div> */}
 </section>
  )
}

export default page