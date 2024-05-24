import React from 'react'
import Trending1 from '../../public/Solutionasset/Trending1.png'
import Trending2 from '../../public/Solutionasset/Trending2.png'
import Trending3 from '../../public/Solutionasset/Trending3.png'
import Trending4 from '../../public/Solutionasset/Trending4.png'
import Trending5 from '../../public/Solutionasset/Trending5.png'
import Image from 'next/image'

const Trendingcomponets = () => {

    const carddata=[
        {
        image:Trending4,
        text:'Can a website drive sales?'
    },
        
        {
        image:Trending3,
        text:'Best language to web development?'
    },
        
        {
        image:Trending2,
        text:'Is coding hard? Can AI help us?'
    },
        
        {
        image:Trending1,
        text:'Why brainstorming is important?'
    },
        
]
  return (
    <div className='w-full flex flex-col justify-center items-start gap-8 mx-auto'>
        <div className='w-11/12 mx-auto'>
            <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider '>Trending Now.</h6>
        </div>
        <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-8 justify-items-center items-center w-11/12 mx-auto'>
            {
               carddata.map((value,index)=>(
                <div key={index} className=' overflow-hidden '>
                   <div className='flex justify-center items-center overflow-hidden relative'>
                    <Image className='  brightness-50' src={value.image} alt="imagepost"/>
                    <Image className='absolute w-24 h-24' src={Trending5} alt="imagepost"/>                    
                   <h6 className='absolute bottom-2 text-lg text-white text-start px-2 font-semibold '>{value.text}</h6>
                   </div>

                </div>
               ))
            }
        </div>
    </div>
  )
}

export default Trendingcomponets