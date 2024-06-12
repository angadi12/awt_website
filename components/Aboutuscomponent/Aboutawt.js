'use client'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { MdOutlineWork } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import Aboutawtimg from '../../public/Solutionasset/Aboutawt.png'
import Aboutawtimg2 from '../../public/Solutionasset/Aboutawtimg.png'
import Exptag from '../../public/Solutionasset/Exptag.png'
import Customanimationslide from '../Homecomponets/Customanimationslide';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Aboutawt = () => {
  const router =useRouter()
  return (
    <div className="w-11/12 md:py-20 lg:py-20 mx-auto flex lg:flex-row-reverse flex-col justify-center items-start gap-20">
      <div className="flex flex-col justify-start items-start gap-8 lg:w-[46%] md:w-[46%] w-full">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
        Let’s know <br></br> more about<Customanimationslide text={'AWT.'} width={90} style={'inline-block ml-2'}/>
        </h6>
        <p className="text-justify  text-sm font-medium leading-7 lg:w-[32rem]"><span className='font-bold mr-2'>Angadi World Technologies</span>{`is a top-tier provider of Web and App Design & Development, along with Digital Marketing services. Renowned for our innovative solutions, we excel in delivering cutting-edge mobile apps and digital experiences to a global clientele.`}</p>
        <div className="flex flex-row justify-between md:gap-24 gap-2 items-center">
          <div className="flex flex-col justify-start items-start gap-4">
            <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><MdOutlineWork size={24} className='bg-[#FF7143] p-1  rounded-full text-white'/>Expertise Across Platforms</span>
            <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><LuBadgeCheck size={24} className='bg-[#FF7143] p-1  rounded-full text-white'/>Proven Track Record</span>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
          <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><IoChatboxEllipsesOutline size={24} className='bg-[#FF7143] p-1  rounded-full text-white'/>continues support</span>
          <span className="flex flex-row items-center gap-2 text-sm font-bold capitalize"><FaStar size={24} className='bg-[#FF7143] p-1  rounded-full text-white'/>High quality results</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 md:flex-row lg:flex-row flex-col'>

        <Button
        onPress={()=>router.push('/Contactus')}
          variant="solid"
          className="ring-1 ring-black font-bold uppercase text-black rounded-full mt-4 w-60 bg-white"
        >
         get started
        </Button>
        <Divider className='bg-gray-500  h-12 mt-4 hidden md:block' orientation='vertical'/>
        <div className='flex justify-between gap-8 items-center mt-4'>
            <Link href={'tel:9110314465'}><div className='flex justify-center items-start ring-1 ring-black rounded-full p-2'>
                <MdLocalPhone size={40}/>
            </div></Link>
            <div className='flex flex-col justify-center items-start'>
                <span className='uppercase font-medium text-[#FF7143]'>call us at</span>
                <Link href={'tel:9110314465'}><span className='font-bold'>+91-9110314465</span></Link>
            </div>
        </div>
        </div>
      </div>
      <div className="md:w-full    flex justify-start items-start">
        <div className='relative'>
          <Image className="lg:w-[32rem] h-[26rem] object-center w-full relative " src={Aboutawtimg} alt="aboutimg" />
          <Image className="absolute md:-right-20 lg:-right-20 right-2  top-12  object-contain h-44 w-44" src={Aboutawtimg2} alt="savedimage" />
          <Image className="absolute  -bottom-12 left-0  object-contain h-44 w-44" src={Exptag} alt="savedimage" />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Aboutawt