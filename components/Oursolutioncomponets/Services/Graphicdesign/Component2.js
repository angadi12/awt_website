import React from 'react'
import Image from 'next/image'

import Icondesign  from '../../../../public/Solutionasset/Services/Icondesign.png'
import Branding  from '../../../../public/Solutionasset/Services/Branding.png'
import Illustration  from '../../../../public/Solutionasset/Services/Illustration.png'
import Animation  from '../../../../public/Solutionasset/Services/Animation.png'
import socialmedia  from '../../../../public/Solutionasset/Services/socialmedia.png'
import Logodesign2  from '../../../../public/Solutionasset/Services/Logodesign2.png'
import posterdesign  from '../../../../public/Solutionasset/Services/posterdesign.png'
import Advertisement  from '../../../../public/Solutionasset/Services/Advertisement.png'


const Graphicdesignservices = () => {

    const carddata=[
        {
        icon:Icondesign,
        color:'#9747FF',
        titile:'Logo Design',
        text:'Crafting unique & memorable logos that represent your brand identity.'
    },
        {
        icon:Branding,
        color:'#FF7143',
        titile:'Branding',
        text:'Designing identities including color palettes, typography & brand guidelines.'
    },
        {
        icon:Illustration,
        color:'#FFC700',
        titile:'Illustration',
        text:'Creating custom illustrations for editorial, advertising & branding.'
    },
        {
        icon:Animation,
        color:'#1877F2',
        titile:'animations',
        text:'Optimizing website speed & overall performance to provide a smooth experience.'
    },
        {
        icon:socialmedia,
        color:'#ED0000',
        titile:'social media design',
        text:'Engaging reels, cover photos, posts, stories optimized for each platform.'
    },
        {
        icon:Logodesign2,
        color:'#309E3A',
        titile:'security & safety measures',
        text:'Enhancing user experience with visual cues for websites, apps, and digital interfaces.'
    },
        {
        icon:posterdesign,
        color:'#4D2A15',
        titile:'poster design',
        text:'Captivating visuals that convey your message effectively and leave a lasting impact.'
    },
        {
        icon:Advertisement,
        color:'#C837AB',
        titile:'advertisement design',
        text:'Best visuals that grab attention & drive action, from your target user & campaign goals.'
    }
]


  return (
   <section className='flex flex-col w-full  gap-8 py-8'>
    <div className='w-11/12 mx-auto'>
        <h1 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Our Graphic Design Services.</h1>
    </div>
    <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8'>
        {
             carddata.map((value,index)=>(
            <div key={index} className='ring-1 ring-gray-300 p-4 h-60 flex justify-center items-start gap-4 flex-col'>
                <div style={{backgroundColor:value.color}} className='relative w-16 mb-4 h-16 flex justify-center items-center  rounded-full'>
                    <Image className='w-10 h-10' src={value.icon} alt='icon'/>
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


export default Graphicdesignservices

