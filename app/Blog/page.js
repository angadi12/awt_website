import React from 'react'
import Commonheader from '@/components/Oursolutioncomponets/Commonheader'
import Blogpost from '@/components/Homecomponets/Blogpost'
import Trendingcomponets from '@/components/Blogcomponents/Trendingcomponets'
import Ourblogs from '@/components/Blogcomponents/Ourblogs'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center md:gap-8 lg:gap-8 gap-0 mx-auto'>
    <Commonheader/>
    <Blogpost/>
    <Trendingcomponets/>
    <Ourblogs/>

 </section>
  )
}

export default page