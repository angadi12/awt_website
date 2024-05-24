import React from 'react'
import Image from 'next/image'

import Appredisign  from '../../../../public/Solutionasset/Appredisign.png'
import UsabilityTesting  from '../../../../public/Solutionasset/UsabilityTesting.png'
import Icondesign  from '../../../../public/Solutionasset/Icondesign.png'
import Animationdesign  from '../../../../public/Solutionasset/Animationdesign.png'
import Userresearch  from '../../../../public/Solutionasset/Userresearch.png'
import Documentation  from '../../../../public/Solutionasset/Documentation.png'
import appstrategy  from '../../../../public/Solutionasset/appstrategy.png'
import MVP  from '../../../../public/Solutionasset/MVP.png'

const Servicecomponet = () => {

    const carddata=[
        {
        icon:Appredisign,
        color:'#9747FF',
        titile:'app Re-design',
        text:'Revamp your app with improved UI/UX design for an enhanced user experience.'
    },
        {
        icon:UsabilityTesting,
        color:'#FF7143',
        titile:'Usability Testing',
        text:'Ensure seamless user interactions through testing and feedback.'
    },
        {
        icon:Icondesign,
        color:'#FFC700',
        titile:'Icon Design',
        text:'Craft unique visual elements to enhance app identity and engagement.'
    },
        {
        icon:Animationdesign,
        color:'#1877F2',
        titile:'Animation Design',
        text:'Elevate user experience with immersive animations and transitions.'
    },
        {
        icon:Userresearch,
        color:'#ED0000',
        titile:'User Research',
        text:'Conducting in-depth research to understand user behaviors, needs, and preferences.'
    },
        {
        icon:Documentation,
        color:'#309E3A',
        titile:'Documentation',
        text:'Detailed documentation to guide development & ensure consistency.'
    },
        {
        icon:appstrategy,
        color:'#4D2A15',
        titile:'app strategy',
        text:'Our strategy covers analysis, targeting, monetization, security, & scalability.'
    },
        {
        icon:MVP,
        color:'#C837AB',
        titile:'MVP',
        text:'Initial version with essential features for market validation and feedback.'
    }
]


  return (
   <section className='flex flex-col w-full  gap-8 py-8'>
    <div className='w-11/12 mx-auto'>
        <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Our Mobile App Design Services.</h6>
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

export default Servicecomponet