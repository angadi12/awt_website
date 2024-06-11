"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import Uiuxdesign from "../../public/Solutionasset/Jobicon.png";
import Appdeveloper from "../../public/Solutionasset/Jobicon1.png";
import Bussinessanalyst from "../../public/Solutionasset/Jobicon2.png";
import DefaultIcon from "../../public/Solutionasset/Jobicon1.png"; // Add a default icon
import Error from "../../public/Homeasset/Error.gif";
import Nodata from "../../public/Homeasset/Nodata.gif";

const Currentopening = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const iconMapping = {
    "UI UX Designer": Uiuxdesign,
    "App Developer": Appdeveloper,
    "Business Analyst": Bussinessanalyst,
    // Add other mappings here if needed
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://awt-backend.onrender.com/api/awt/jobs/Get");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data.data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-2xl lg:text-2xl text-lg tracking-wider font-bold">Current Available Openings</h6>
       <div className="w-full flex justify-center items-center  flex-col ">
        <Image src={Error} alt="error" />
        {error}

       </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mx-auto py-12 bg-slate-100 overflow-hidden">
      <div className="w-11/12 mx-auto md:text-2xl lg:text-2xl text-lg tracking-wider font-bold">
        <h6>Current Available Openings</h6>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center text-gray-500 text-lg flex justify-center items-center gap-2">
         <Image src={Nodata} alt="Nodata"/>
          No current openings available.
        </div>
      ) : (
        <div className="flex flex-col w-11/12 mx-auto justify-center items-center gap-8">
          {jobs.map((job, index) => (
            <motion.div
              onClick={() => router.push(`/Jobdetails/${job._id}`)}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              key={index}
              className="bg-white w-full md:h-40 lg:h-40 h-auto px-4 py-4 flex flex-col md:flex-row lg:flex-row lg:items-center items-start justify-between gap-12 md:gap-0 lg:gap-0 md:items-center"
            >
              <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start gap-4">
                <div>
                  <Image
                    className="w-14 h-14 object-contain"
                    src={iconMapping[job.title] || DefaultIcon}
                    alt="icons"
                  />
                </div>
                <div className="flex flex-col justify-start items-start md:gap-2 w-full">
                  <h6 className="capitalize font-bold md:text-lg ">
                    {job.title}
                    <span className="text-xs text-[#FF7143] ml-2">
                      . {job.openings} openings
                    </span>
                  </h6>
                  <p className="flex justify-center items-center gap-2 text-gray-400 capitalize font-medium text-xs md:text-sm lg:text-sm">
                    <FaLocationDot className="text-[#FF7143] text-xs md:text-base lg:text-base" />
                    {job.location}
                  </p>
                  <div className="flex justify-start items-start gap-8 mt-4">
                    <span className="text-xs ring-1 ring-black p-1 text-center rounded-full px-2 uppercase font-bold ">
                      {job.jobType}
                    </span>
                    <span className="text-xs ring-1 ring-black p-1 text-center rounded-full px-2 uppercase font-bold ">
                      {job.jobMode}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <span className="md:text-lg lg:text-lg text-xs font-extrabold ">
                  ₹ {job.package}.0 L/year
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default Currentopening;
