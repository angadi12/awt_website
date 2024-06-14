import React from 'react'
import Image from 'next/image'
import Consulticon from '../../../../public/Solutionasset/Consulticon.png'
import Customicon from '../../../../public/Solutionasset/Customicon.png'
import Impleicon from '../../../../public/Solutionasset/Impleicon.png'
import Optiicon from '../../../../public/Solutionasset/Optiicon.png'

const Component2 = () => {


  const data=[
    {
    icon:Consulticon,
    title:"Consultation",
    desc:"We begin with a thorough consultation to understand your specific business needs and challenges."
},
    {
    icon:Customicon,
    title:"Customization",
    desc:"Our team designs a customized QR code solution tailored to your requirements."
},
    {
    icon:Impleicon,
    title:"Implementation",
    desc:"We implement the QR code system, ensuring seamless integration with your existing processes."
},
    {
    icon:Optiicon,
    title:"Optimization",
    desc:"We continuously monitor & optimize the system to ensure it delivers efficiency & value for you."
}
]



  return (
   <section className='w-11/12 mx-auto flex flex-col justify-center items-start'>
    <div className=''>
        <h6 className='text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider'>How it works?</h6>
    </div>
    <div className='w-full py-8 mx-auto grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 place-content-center justify-center justify-items-start gap-12'>
        {
            data.map((value,index)=>(
                <div key={index} className='flex flex-col justify-start items-start gap-4 '>
                  <div className=' flex justify-center items-center bg-[#FF7143] w-16 h-16 rounded-full mb-4'>
                    <Image className='w-8 h-8 object-contain ' src={value.icon} alt='icon'/>
                  </div>
                    <h6 className='text-sm font-bold uppercase'>{value.title}</h6>
                    <p className='text-sm font-medium text-justify md:break-all lg:break-all md:px-0 lg:px-0 px-2'>{value.desc}</p>
                </div>
            ))
        }
       
     </div>
   </section>
  )
}

export default Component2