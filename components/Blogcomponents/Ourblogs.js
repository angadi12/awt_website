import React from 'react'
import Image from 'next/image'

import Blog1 from '../../public/Solutionasset/Ourblog1.png'
import Blog2 from '../../public/Solutionasset/Ourblog2.png'
import Blog3 from '../../public/Solutionasset/Ourblog3.png'
import Blog4 from '../../public/Solutionasset/Ourblog4.png'

import User1 from '../../public/Homeasset/User1.png'
import User2 from '../../public/Homeasset/User2.png'
import User3 from '../../public/Homeasset/User3.png'
import { Button, Divider } from '@nextui-org/react'

const Ourblogs = () => {


    const postdata=[
        {
        image:Blog1,
        Title:'Why research is Important?',
        description:'This is a sample sub paragraph for this blog Relevant contents will be filled later...',
        user:User1,
        username:'Team Angadi - '
    },
        {
        image:Blog2,
        Title:'Team is a precious asset.',
        description:'This is a sample sub paragraph for this blog Relevant contents will be filled later...',
        user:User2,
        username:'Team Angadi - '
    },
        {
        image:Blog3,
        Title:'Top 10 high paying skills!',
        description:'This is a sample sub paragraph for this blog Relevant contents will be filled later...',
        user:User3,
        username:'Team Angadi - '
    },
        {
        image:Blog4,
        Title:'How to avoid distractions?',
        description:'This is a sample sub paragraph for this blog Relevant contents will be filled later...',
        user:User3,
        username:'Team Angadi - '
    },
    ]


    const blogstitle=[
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
        {
          Blogsno:'01',
          title:"This is a Sample Blog Title!",
          user:'Team Angadi - Team Angadi '
        },
    ]
    

  return (
   <section className='w-full flex flex-col justify-center items-center md:py-12 lg:py-12 mx-auto '>
      <div className='w-11/12 mx-auto py-12'>
        <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider capitalize'>our Blogs.</h6>
      </div>
       <div className='w-11/12 mx-auto flex justify-between gap-8 items-start '>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 justify-items-center md:w-2/3 lg:w-2/3 '>
        {
        postdata.map((data,i)=>(
            <div key={i} className='flex flex-col   justify-start items-start gap-4'>
                <Image  className='' src={data.image} alt='blogimage'/>
                <h6 className='text-xl font-semibold '>{data.Title}</h6>
                <p className='text-sm font-medium text-justify text-gray-700'>{data.description} <span className='text-sm font-bold'>Read More</span></p>
                <div className='flex justify-start items-center gap-4 py-4'>
                    <Image className='w-14 h-14 rounded-full ' src={data.user} alt='userimg'/>
                    <span className='text-sm font-bold'>{data.username}<span className='text-sm font-medium  text-gray-700'>10 April 2024</span></span>
                </div>
            </div>
        ))
       }
        </div>
        <div className='md:flex lg:flex flex-col justify-start items-start mx-auto px-4 gap-8 hidden '>
           <h6 className='text-xl font-bold '>Popular this week!</h6>
            
            <div>

            {
                blogstitle.map((value,index)=>(
                    <div key={index} className='flex  justify-start items-start gap-4 '>
                        <div className='text-gray-500 text-3xl font-extrabold'>
                            {value.Blogsno}
                        </div>
                        <div className='flex flex-col justify-start items-start gap-4'>
                            <h6 className='text-lg font-bold'>{value.title}</h6>
                            <span className='text-sm font-medium uppercase'>{value.user}<span className='text-gray-400'>- 10 April 2024</span></span>
                        <Divider orientation='horizontal'/>
                        </div>
                    </div>
                ))
            }

            </div>


        </div>
               
       </div>
       <div className='mt-4'>
        <Button className='ring-1 ring-black rounded-full bg-white text-black uppercase' variant='solid'>
        read all blogs
        </Button>
       </div>
   </section>
  )
}

export default Ourblogs