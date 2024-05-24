import React from 'react'
import Image from 'next/image'

import CMS  from '../../../../public/Solutionasset/CMS.png'
import API  from '../../../../public/Solutionasset/API.png'
import Dashboard  from '../../../../public/Solutionasset/Dashboard.png'
import Optimization  from '../../../../public/Solutionasset/Optimization.png'
import Database  from '../../../../public/Solutionasset/Database.png'
import Integration  from '../../../../public/Solutionasset/Integration.png'
import Cart  from '../../../../public/Solutionasset/Cart.png'
import Supportservice  from '../../../../public/Solutionasset/Supportservice.png'

const Webappservices = () => {

    const carddata=[
        {
        icon:CMS,
        color:'#9747FF',
        titile:'cms integration',
        text:'Integrating CMS platforms like WordPress/Shopify to enable easy updates & management.'
    },
        {
        icon:API,
        color:'#FF7143',
        titile:'api integration',
        text:'Integrating web apps with third-party APIs for enhanced functionality.'
    },
        {
        icon:Dashboard,
        color:'#FFC700',
        titile:'Custom Dashboard',
        text:'Creating personalized user dashboards tailored to the needs & preferences of user.'
    },
        {
        icon:Optimization,
        color:'#1877F2',
        titile:'optimization',
        text:'Optimizing website speed & overall performance to provide a smooth experience.'
    },
        {
        icon:Database,
        color:'#ED0000',
        titile:'database Integration',
        text:'Integrating databases for efficient data management and seamless user access.'
    },
        {
        icon:Integration,
        color:'#309E3A',
        titile:'security & safety measures',
        text:'Implementing security measures like SSL, firewalls, & updates to protect web apps.'
    },
        {
        icon:Cart,
        color:'#4D2A15',
        titile:'e-commerce solutions',
        text:'Creating e-commerce sites with product listings, shopping carts & payment gateways.'
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
        <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Our Web App Design Services.</h6>
    </div>
    <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8'>
        {
             carddata.map((value,index)=>(
            <div key={index} className='ring-1 ring-gray-300 p-4 h-60 flex justify-center items-start gap-4 flex-col'>
                <div style={{backgroundColor:value.color}} className='relative w-20 mb-4 h-20 flex justify-center items-center  rounded-full'>
                    <Image className='w-12 h-12' src={value.icon} alt='icon'/>
                </div>
                <h6 className='uppercase font-bold '>{value.titile}</h6>
                <p className='text-xs font-medium w-full'>{value.text}</p>
            </div>

             ))
        }
    </div>
   </section>
  )
}


export default Webappservices