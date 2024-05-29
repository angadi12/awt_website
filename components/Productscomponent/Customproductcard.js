import { Button } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Customproductcard = ({data}) => {
   const router=useRouter()
  return (
    <div className='w-11/12 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center items-center'>
        <div className={`${data.style} flex justify-center items-start flex-col gap-4` }>
             <div className='w-full border-b-2 border-[#FF7143] pb-2'>
                <h6 className='uppercase text-[#FF7143] test-sm font-semibold'>{data.title}</h6>
             </div>
             <div className='flex justify-center items-start gap-4 flex-col'>
                <h6 className='text-2xl font-bold capitalize'>{data.productname}</h6>
                <p className='text-justify font-medium text-sm'>{data.desc}</p>
             </div>
             <div>
                <Button onClick={()=>router.push(`${data.link}`)} className='ring-1 ring-black bg-white text-black rounded-full h-8 w-60 mt-8'>View Site</Button>
             </div>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Image className='w-96 h-96 object-contain'  src={data.productimage} alt='productimage'/>
        </div>
    </div>
  )
}

export default Customproductcard