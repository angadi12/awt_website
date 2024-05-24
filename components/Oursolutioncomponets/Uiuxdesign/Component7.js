import React from 'react'
import Launching from '../../../public/Solutionasset/Launching.gif'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const Component7 = () => {
  return (
    <section>
     <div className="grid py-16 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-24 place-content-center justify-between w-11/12 mx-auto">
        <div className="w-full flex flex-col justify-start items-start gap-8">
           <h6 className='text-3xl font-semibold'>{`Let’s get started with your Project!`}</h6>
           <p className='text-sm font-medium leading-7'>{`Once we've discussed your project goals and requirements, we'll kickstart the UI/UX design process. Our collaborative approach ensures that your vision guides every decision, setting the stage for a successful design journey.`}</p>
           <Button variant='solid' className='ring-1 rounded-full w-60 ring-black bg-white text-black'>Get started</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image className="md:px-8 lg:px-4" src={Launching} alt="gif" />
        </div>
      </div>
    </section>
  )
}

export default Component7