'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Divider } from '@nextui-org/react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { FaLocationDot, FaCalendar } from 'react-icons/fa6';
import { MdOutlineWork, MdAccessTimeFilled } from 'react-icons/md';
import { LuDot } from 'react-icons/lu';
import Circle from '../../../public/Homeasset/Circle.png';
import AWT from '../../../public/Homeasset/AWT.png';
import Oursolution from '../../../public/Solutionasset/Oursolution.png';
import Insta from '../../../public/Homeasset/Insta.png';
import Linkdin from '../../../public/Homeasset/Linkdin.png';
import Facebook from '../../../public/Homeasset/Facebook.png';
import X from '../../../public/Homeasset/X.png';
import Jobicon from '../../../public/Solutionasset/Jobicon.png';
import Jobicon1 from '../../../public/Solutionasset/Jobicon1.png';
import Jobicon2 from '../../../public/Solutionasset/Jobicon2.png';
import DefaultIcon from '../../../public/Solutionasset/Jobicon1.png';
import Loading from '@/app/loading';

const Jobdetails = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const iconMapping = {
    'UI UX Designer': Jobicon,
    'App Developer': Jobicon1,
    'Business Analyst': Jobicon2,
    // Add other mappings if needed
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://awt-backend.onrender.com/api/awt/jobs/Get/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>No job details available</div>;
  }


  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  const formattedDate = formatDate(job.closingDate);
  return (
    <>
      <header className="relative w-full py-8">
        <Image
          className="z-0 w-[96%] h-36 object-fill -mt-4 md:h-auto lg:h-auto md:mt-0 lg:mt-0 mx-auto"
          src={Oursolution}
          alt="herogif"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white w-80 md:w-auto lg:w-auto md:text-4xl lg:text-4xl text-xl font-bold capitalize absolute flex justify-center items-center lg:top-[50%] md:top-[60%] top-[50%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <span className="text-[#FF7143] ml-2">{job.title}</span>
        </motion.h1>
        <div className="absolute md:bottom-12 lg:bottom-12 bottom-10 md:gap-4 lg:gap-4 gap-1 flex justify-center items-center md:right-12 lg:right-12 right-3 z-10">
          <Image className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer" src={Facebook} alt="Facebook" />
          <Image className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer" src={Insta} alt="Insta" />
          <Image className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer" src={Linkdin} alt="Linkdin" />
          <Image className="z-0 md:h-8 md:w-8 lg:h-8 lg:w-8 h-6 w-6 cursor-pointer" src={X} alt="X" />
        </div>
        <div className="absolute flex justify-center items-center lg:top-[91%] md:top-[90%] left-[50.7%] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image className="md:w-40 md:h-40 h-16 w-16 spin-animation ring-1 ring-white rounded-full" src={Circle} alt="circle" />
          <Image className="absolute md:top-16 md:h-10 md:w-20 h-6 w-10" src={AWT} alt="AWT" />
        </div>
      </header>

      <section className="w-full mx-auto py-12 flex flex-col justify-center items-center gap-8">
        <div className="w-11/12 mx-auto">
          <span className="text-sm font-bold flex justify-start items-center uppercase cursor-pointer gap-2" onClick={() => router.push('/Careers')}>
            <IoIosArrowRoundBack size={40} /> to jobs
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center gap-8 md:gap-0 lg:gap-0 justify-between w-11/12 mx-auto">
          <div className="flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col justify-center items-start gap-2">
              <h6 className="text-3xl font-semibold tracking-wider">About the Job</h6>
              <h6 className="text-gray-400 font-bold">
                {job.title} - <span className="text-[#FF7143] font-medium">{job.openings} Openings</span>
              </h6>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h6 className="capitalize font-bold tracking-wider">Description</h6>
              <p className="text-justify text-sm font-medium leading-6">{job.description}</p>
            </div>
          </div>
          <div className="flex md:justify-end lg:justify-end justify-center items-start w-full">
            <div className="flex flex-col justify-center items-center md:w-2/3 lg:w-2/3 w-full">
              <div className="bg-[#FF7143] flex flex-col justify-center items-center w-full h-16">
                <h6 className="uppercase font-bold text-white text-sm">Job Details</h6>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-2 bg-gray-100 h-auto w-full">
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8">
                  <div>
                    <FaLocationDot size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase">Location</span>
                    <span className="text-xs font-bold uppercase">{job.location}</span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8">
                  <div>
                    <MdOutlineWork size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase">Job Mode</span>
                    <span className="text-xs font-bold uppercase">{job.jobMode}</span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8">
                  <div>
                    <MdAccessTimeFilled size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase">Job Type</span>
                    <span className="text-xs font-bold uppercase">{job.jobType}</span>
                  </div>
                </div>
                <Divider />
                <div className="flex w-full justify-start px-6 py-2 items-start gap-8">
                  <div>
                    <FaCalendar size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase">Closes On</span>
                    <span className="text-xs font-bold uppercase">{formattedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-8">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">Key Responsibilities</h6>
          </div>

          <div className="w-full justify-center items-start gap-6">
              <div className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{job.responsibilities}</p>
              </div>
          
          </div>
        </div>

        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-4">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">Basic Qualifications</h6>
          </div>

          <div className="w-full justify-center items-start gap-6">
              <div  className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{job.qualifications}</p>
              </div>
          
          </div>
        </div>

        <div className="w-11/12 mx-auto flex justify-center items-center flex-col gap-4 py-4">
          <div className="w-full mx-auto">
            <h6 className="text-2xl font-semibold tracking-wider">Preferred Qualifications</h6>
          </div>

          <div className="w-full justify-center items-start gap-6">
              <div  className="flex items-center gap-2 mb-2">
                <LuDot />
                <p className="text-sm font-medium leading-6">{job.preferredQualifications}</p>
              </div>
          
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center text-center">
          <p className='text-xs'>Share your resume </p>
          <Button   className="text-white bg-[#FF7143] rounded-full text-center w-60">careers@angadiworldtech.com</Button>
        </div>
      </section>


      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        size='full'
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Apply</ModalHeader>
              <ModalBody>
                
              </ModalBody>
              <ModalFooter className='flex justify-center items-center'>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button> */}
                <Button className='bg-[#FF7143] rounded-full text-white font-bold' onPress={onClose}>
                 Submit Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Jobdetails;
