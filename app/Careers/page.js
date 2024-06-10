import Meetteam from '@/components/Aboutuscomponent/Meetteam'
import Currentopening from '@/components/Careerscomponent/Currentopening'
import Ourhiringprocess from '@/components/Careerscomponent/Ourhiringprocess'
import Searchbar from '@/components/Careerscomponent/Searchbar'
import Whywork from '@/components/Careerscomponent/Whywork'
import Commonheader from '@/components/Oursolutioncomponets/Commonheader'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-8 mx-auto overflow-hidden'>
        <Commonheader/>
        <Searchbar/>
        <Currentopening/>
        <Whywork/>
        <Ourhiringprocess/>
        {/* <Meetteam/> */}
    </section>

  )
}

export default page