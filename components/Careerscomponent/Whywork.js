import React from 'react'
import Image from 'next/image'
import Growth from '../../public/Solutionasset/Growth.png'
import Work from '../../public/Solutionasset/Work.png'
import Impact from '../../public/Solutionasset/Impact.png'
import Learning from '../../public/Solutionasset/Learning.png'

const Whywork = () => {

const data=[
    {
    icon:Growth,
    title:"Professional Growth",
    desc:"We offer clear paths for advancement and skill development."
},
    {
    icon:Work,
    title:"Positive Work Environment",
    desc:"Join a supportive team that help you grow and with work-life balance."
},
    {
    icon:Impact,
    title:"Impactful Work",
    desc:"Contribute to meaningful projects that drive innovation."
},
    {
    icon:Learning,
    title:"Continuous Learning",
    desc:"Evolve with ongoing development opportunities and learn advanced concepts."
}
]


  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 mx-auto'>
     <div className='w-11/12 mx-auto'>
        <h6 className='text-3xl font-bold tracking-wider'>Why work with AWT?</h6>
     </div>
     <div className='w-11/12 py-8 mx-auto grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 place-content-center justify-center justify-items-center gap-8'>
        {
            data.map((value,index)=>(
                <div key={index} className='flex flex-col justify-start items-start gap-4 '>
                  <div className=' flex justify-center items-center'>
                    <Image className='w-16 h-16 object-contain ' src={value.icon} alt='icon'/>
                  </div>
                    <h6 className='text-lg font-semibold uppercase'>{value.title}</h6>
                    <p className='text-sm font-medium text-start  md:px-0 lg:px-0 px-2'>{value.desc}</p>
                </div>
            ))
        }
       
     </div>
    </div>
  )
}

export default Whywork