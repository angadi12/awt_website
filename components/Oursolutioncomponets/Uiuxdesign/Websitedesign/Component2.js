import React from 'react'
import Image from 'next/image'

import Appredisign  from '../../../../public/Solutionasset/Appredisign.png'
import SEOsiteservice  from '../../../../public/Solutionasset/SEOsiteservice.png'
import Responsiveservice  from '../../../../public/Solutionasset/Responsiveservice.png'
import Optimization  from '../../../../public/Solutionasset/Optimization.png'
import Integration  from '../../../../public/Solutionasset/Integration.png'
import Brandingidentity  from '../../../../public/Solutionasset/Brandingidentity.png'
import Analysis  from '../../../../public/Solutionasset/Analysis.png'
import Supportservice  from '../../../../public/Solutionasset/Supportservice.png'

const Websiteservice = () => {

    const carddata=[
        {
        icon:Appredisign,
        color:'#9747FF',
        titile:'site Re-design',
        text:'Revamp your website with improved UI/UX design for an enhanced user experience.'
    },
        {
        icon:SEOsiteservice,
        color:'#FF7143',
        titile:'seo integration',
        text:'Implementing SEO will improve website visibility & rankings on search engines.'
    },
        {
        icon:Responsiveservice,
        color:'#FFC700',
        titile:'responsive Design',
        text:'Crafting websites that adapt to different screen sizes for seamless experience.'
    },
        {
        icon:Optimization,
        color:'#1877F2',
        titile:'optimization',
        text:'Optimizing website speed & overall performance to provide a smooth experience.'
    },
        {
        icon:Integration,
        color:'#ED0000',
        titile:'Security Integration',
        text:'Implementing SSL, firewalls, and updates to secure websites from threats.'
    },
        {
        icon:Analysis,
        color:'#309E3A',
        titile:'Analytics & Tracking',
        text:'Implementing Google Analytics to track user behavior & optimize websites.'
    },
        {
        icon:Brandingidentity,
        color:'#4D2A15',
        titile:'branding & identity',
        text:'Creating cohesive visual identities for strong online brand presence.'
    },
        {
        icon:Supportservice,
        color:'#C837AB',
        titile:'monitoring & support',
        text:'Continuous monitoring and support for website performance & functionality.'
    }
]


  return (
   <section className='flex flex-col w-full  gap-8 py-8'>
    <div className='w-11/12 mx-auto'>
        <h1 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Our Website Design Services.</h1>
    </div>
    <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8'>
        {
             carddata.map((value,index)=>(
            <div key={index} className='ring-1 ring-gray-300 p-4 h-60 flex justify-center items-start gap-4 flex-col'>
                <div style={{backgroundColor:value.color}} className='relative w-20 mb-4 h-20 flex justify-center items-center  rounded-full'>
                    <Image className='w-12 h-12' src={value.icon} alt='icon'/>
                </div>
                <h1 className='uppercase font-bold '>{value.titile}</h1>
                <p className='text-xs font-medium w-full'>{value.text}</p>
            </div>

             ))
        }
    </div>
   </section>
  )
}

export default Websiteservice