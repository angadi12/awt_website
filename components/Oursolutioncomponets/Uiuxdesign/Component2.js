import React from 'react'
import Image from 'next/image'
import Backgroud from '../../../public/Solutionasset/Background.png'


const Component2 = () => {

const carddata=[
    {
    No:'01',
    subtitle:"research",
    desc:'Conduct thorough research to understand user needs, behaviors, and preferences.'
},
    {
    No:'02',
    subtitle:"define the product",
    desc:`Clearly outline the product's objectives, features, and functionality.`
},
    {
    No:'03',
    subtitle:"create persona",
    desc:'Craft personas representing different user segments based on research findings.'
},
    {
    No:'04',
    subtitle:"wireframing",
    desc:'Create low-fidelity sketches outlining the layout and structure of the product.'
},
    {
    No:'05',
    subtitle:"prototyping",
    desc:'Build interactive prototypes to test functionality and usability before final development.'
},
    {
    No:'06',
    subtitle:"visual design",
    desc:'Design a visually appealing interface that aligns with the brand identity.'
},
    {
    No:'07',
    subtitle:"Testing & validation",
    desc:'Conduct usability testing to gather feedback and iterate on the design.'
},
    {
    No:'08',
    subtitle:"launch & iteration",
    desc:'Launch the product and continue to iterate based on user feedback and evolving needs.'
},
]

  return (
    <section className='relative w-full justify-center items-center  flex'>
    <Image className='w-full relative h-[200vh] md:h-auto lg:h-auto' src={Backgroud} alt='background'/> 
    <div className="absolute flex flex-col justify-center items-center left-[50%] top-[50%]  w-full gap-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h6 className='text-xl uppercase font-bold text-white'>our simple design process!</h6>
      <p className='text-white text-sm text-center px-2 leading-6'>{`By following this structured design process, you can ensure that your UI/UX design efforts are grounded in thorough research,`}<br></br> {`user-centered principles, and iterative refinement, ultimately leading to a successful and user-friendly product launch.`}</p>
      <div className='w-11/12 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 mt-8 md:gap-10 lg:gap-10 gap-4 mx-auto place-content-center items-center'>
        {
            carddata.map((value,index)=>(
                <div className='ring-1 ring-white flex flex-col   bg-black rounded-lg  md:h-60 lg:h-60 h-32 py-6 px-4 w-full' key={index}>
                 <h6 className='text-3xl font-extrabold  text-right text-white'>{value.No}</h6>
                 <h5 className='text-sm md:mt-12 uppercase font-bold text-white'>{value.subtitle}</h5>
                 <p className='text-xs text-white md:mt-4 lg:mt-4 mt-2'>{value.desc}</p>

                </div>

            ))
        }
      </div>
    </div>

    </section>
  )
}

export default Component2