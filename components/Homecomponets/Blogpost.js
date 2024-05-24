'use client'
import React from 'react'
import Image from 'next/image'
import Blog1 from '../../public/Homeasset/Blog1.png'
import Blog2 from '../../public/Homeasset/Blog2.png'
import Blog3 from '../../public/Homeasset/Blog3.png'
import User1 from '../../public/Homeasset/User1.png'
import User2 from '../../public/Homeasset/User2.png'
import User3 from '../../public/Homeasset/User3.png'
import Customanimationslide from './Customanimationslide'

const Blogpost = () => {

const postdata=[
    {
    image:Blog1,
    Title:'Can a website drive sales?',
    description:'Yes! It is completely possible with the latest technologies and the growth of Ai...',
    user:User1,
    username:'Team Angadi - '
},
    {
    image:Blog2,
    Title:'WordPress or Custom one?',
    description:'If you want something soon and simple, go with WordPress, If you want something...',
    user:User2,
    username:'Team Angadi - '
},
    {
    image:Blog3,
    Title:'Can AI be used for Marketing?',
    description:'Yes! It is completely possible with the current AI tools that are in market will help you...',
    user:User3,
    username:'Team Angadi - '
},
]

  return (
    <div className='flex justify-start flex-col items-start gap-4 w-11/12 py-12 mx-auto'>
     <div>
        <h6 className='text-3xl font-semibold capitalize text-black'>recent <Customanimationslide text={<span>blog&nbsp;posts.</span>} width={180} style={'inline-block ml-2'}/></h6>
     </div>
     <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 place-content-center justify-items-center w-full md:py-12 '>
       {
        postdata.map((data,i)=>(
            <div key={i} className='flex  flex-col justify-start items-start gap-4'>
                <Image  className='h-60 w-96' src={data.image} alt='blogimage'/>
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
     <div>

     </div>
    </div>
  )
}

export default Blogpost