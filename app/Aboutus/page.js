import Aboutawt from '@/components/Aboutuscomponent/Aboutawt'
import Accordiancustom from '@/components/Aboutuscomponent/Accordiancustom'
import Companytrust from '@/components/Aboutuscomponent/Companytrust'
import Meetteam from '@/components/Aboutuscomponent/Meetteam'
import Skillsbar from '@/components/Aboutuscomponent/Skillsbar'
import Visionandmission from '@/components/Aboutuscomponent/Visionandmission'
import Locationcard from '@/components/Contactuscomponets/Locationcard'
import Commonheader from '@/components/Oursolutioncomponets/Commonheader'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-8 mx-auto overflow-hidden'>
       <Commonheader/>
       <Aboutawt/>
       <Visionandmission/>
       <Skillsbar/>
       <Companytrust/>
       <Meetteam/>
       <Accordiancustom/>
       <Locationcard/>
    </section>
  )
}

export default page