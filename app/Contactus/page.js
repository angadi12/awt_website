import Contactform from '@/components/Contactuscomponets/Contactform'
import Locationcard from '@/components/Contactuscomponets/Locationcard'
import Commonheader from '@/components/Oursolutioncomponets/Commonheader'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-8 mx-auto mb-6'>
       <Commonheader/>
       <Contactform/>
       <Locationcard/>
    </section>
  )
}

export default page