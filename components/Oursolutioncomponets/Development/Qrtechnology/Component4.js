import React from 'react'
import Image from 'next/image'

import Qricon  from '../../../../public/Solutionasset/Qricon.png'
import Qrmanage  from '../../../../public/Solutionasset/Qrmanage.png'
import Inteservice  from '../../../../public/Solutionasset/Inteservice.png'


const Component4 = () => {

    const carddata=[
        {
        icon:Qricon,
        color:'#9747FF',
        titile:'Generation & Customization',
        text:'Generate both static and dynamic QR codes customized with branding elements to align with your business identity.'
    },
        {
        icon:Qrmanage,
        color:'#FF7143',
        titile:'QR Code Management',
        text:'Efficiently handle bulk QR code generation and management while tracking performance through detailed analytics.'
    },
        {
        icon:Inteservice,
        color:'#FFC700',
        titile:'Integration Services',
        text:'Seamlessly integrate QR codes into websites, apps & social media campaigns to enhance user interaction & engagement.'
    }
]


  return (
   <section className='flex flex-col w-full  gap-8 py-8'>
    <div className='w-11/12 mx-auto'>
        <h1 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Our QR Code Services!</h1>
    </div>
    <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8'>
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


export default Component4