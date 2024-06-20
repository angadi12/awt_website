"use client";
import { Divider, Input } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Image from "next/image";
import brand from "../../public/Homeasset/AWT.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { NavigationContext } from "../../app/Oursolution/NavigationContext"; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { selectedTab, handleTabSelectionChange,setSelectedTab } = useContext(NavigationContext);
console.log(selectedTab)

  // const handleTabSelectionChange = (key) => {
  //   setSelectedTab(key);
  //   // window.scrollTo({ top: 530, behavior: 'smooth' });
  //   router.push('/Oursolution')
  // };

  const validateEmail = (email) => {
    const re =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = async () => {
    try {
      // Validate email format
      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Make POST request to subscribe endpoint
      const response = await fetch("https://awt-backend.onrender.com/api/awt/Contactus/Newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        throw new Error("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Subscription error:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col bg-black">
      <div
        onClick={() => router.push("/Contactus")}
        className="md:m-10 m-4 flex items-center justify-center border border-white rounded-lg md:p-32 lg:p-32 p-12 relative "
      >
        <p className="md:text-5xl lg:text-5xl text-lg font-semibold relative z-30 text-white">
          {`Let's start a`}
          <span className="font-[Pacifico] md:text-7xl lg:text-7xl text-2xl font-normal text-white ml-2">
            Project
          </span>
        </p>
        <div
          className="absolute text-white rounded-lg z-20 flex justify-center items-end"
          id="start"
        >
          <button className="relative text-white z-30 mb-20 font-semibold">
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="bg-black md:h-40 lg:h-40 h-56 md:pb-0 lg:pb-0 pb-4 w-full gap-8 flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center items-start md:px-12 lg:px-12 px-4 ">
        <div className="flex justify-start items-start gap-2 md:w-1/2 lg:w-1/2 w-full flex-col">
          <h6 className="text-xs font-medium text-[#FF7143] uppercase">
            newsletter
          </h6>
          <p className="text-[0.7rem] md:text-xs lg:text-xs font-medium text-white md:leading-7 lg:leading-7 leading-7 uppercase">
            {`Sign up for our newsletter now! Get exclusive insights, trends, and strategies to fuel your business growth. Stay informed, stay ahead. Subscribe today!`}
          </p>
        </div>
        <div className="flex items-center h-12 ring-1 ring-white rounded-lg md:w-1/2 lg:w-1/2 w-full px-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="border-none text-white w-11/12 focus:outline-none bg-black p-2"
          />
          <span
            onClick={handleSubscribe}
            className="text-sm font-extrabold text-[#FF7143] uppercase cursor-pointer"
          >
            send
          </span>
        </div>
      </div>
     
      <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8">
        <Divider orientation="horizontal" />
      </div>
      <div className="flex flex-col justify-center items-center bg-black md:h-[60vh] lg:h-[60vh] h-[55vh]">
        <div className="w-11/12 mx-auto flex md:flex-row flex-col justify-between items-start ">
          <div className="flex flex-wrap md:gap-24 lg:gap-24 gap-4 w-full items-start">
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-sm lg:text-sm text-[0.7rem]">
                company
              </p>
              <span
                onClick={() => router.push("/Aboutus")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                About Us
              </span>
              <span
                onClick={() => router.push("/Oursolution")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                Our Solutions
              </span>
              <span
                onClick={() => router.push("/Products")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                our projects
              </span>
              <span
                onClick={() => router.push("/Products")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                products
              </span>
              <span
                onClick={() => router.push("/Blog")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                blog
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-xs lg:text-xs text-[0.7rem]">
                solutions
              </p>
              <span
                onClick={() =>  handleTabSelectionChange("UIUX")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                ui/ux design
              </span>
              <span
                onClick={() => {setSelectedTab("DEVELOPMENT"),router.push("/Oursolution/Development/Mobileappdev")}}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                development
              </span>
              <span
                onClick={() => {setSelectedTab("SERVICES"),router.push("/Oursolution/Services/DigitalMakeover")}}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                services
              </span>
              <span
                onClick={() => {setSelectedTab("MARKETING"),router.push("/Oursolution/Marketing/DigitalMarketing")}}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                marketing
              </span>
              <span
                onClick={() => router.push("/Oursolution/Services/project-consulting")}
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                consultation
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-xs lg:text-xs text-[0.7rem]">
                legal
              </p>
              <span
                onClick={() => router.push("/Termsandconditions")}
                className="md:text-xs lg:text-xs text-[0.6rem] text-white cursor-pointer hover:text-[#FF7143]"
              >
                terms & conditions
              </span>
              <span
                onClick={() => router.push("/Policy")}
                className="md:text-xs lg:text-xs text-[0.7rem] text-white cursor-pointer hover:text-[#FF7143]"
              >
                privacy policy
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-80 mt-4 md:mt-0 justify-start items-center gap-2">
            <div className="flex justify-start items-start gap-2 flex-col">
              <p className="text-[#FF7143] font-semibold text-sm uppercase">
                contact us
              </p>
              <span className="text-sm text-white cursor-pointer uppercase">
                email
              </span>
              <h6 className=" text-lg font-medium text-white">
                <Link href={"mailto:info@angadiworldtech.com"}>
                  info@angadiworldtech.com
                </Link>
              </h6>

              <div className="flex md:flex-col lg:flex-col justify-between items-start gap-8 md:gap-2 lg:gap-2">
                <div>
                  <span className="text-sm text-white cursor-pointer uppercase">
                    Phone
                  </span>
                  <h6 className="md:text-xl lg:text-xl text-sm font-medium text-white">
                    +91-9492963103
                    <br></br>+91-9110314465
                  </h6>
                </div>
                <div>
                  <span className="text-sm text-white cursor-pointer uppercase">
                    UK
                  </span>
                  <h6 className="md:text-xl lg:text-xl text-sm font-medium text-white">
                    +44 7918255464
                  </h6>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2 pb-4">
                <AiFillInstagram
                  onClick={() =>
                    router.push("https://www.instagram.com/angadiworldtech/")
                  }
                  size={45}
                  className="text-white hover:text-[#FF7143]"
                />
                <FaFacebookSquare
                  onClick={() =>
                    router.push("https://www.facebook.com/angadiworld.t")
                  }
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <IoLogoLinkedin
                  onClick={() =>
                    router.push(
                      "https://www.linkedin.com/company/14456022/?msgControlName=view_message_button&msgConversationId=2-MzU0ZWE3YTQtODFhMC00OTM1LTg2NDgtZjEwZWQ5YmM4ZDI0XzAxMA%3D%3D&msgOverlay=true"
                    )
                  }
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <FaSquareTwitter
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <IoLogoYoutube
                  onClick={() =>
                    router.push(
                      "https://www.youtube.com/@angadiworldtechnologies7108"
                    )
                  }
                  size={45}
                  className="text-white hover:text-[#FF7143]"
                />
              </div>
            </div>
          </div>
        </div>

        <div>{/* dropdown */}</div>
      </div>
      <Divider className="w-11/12 mx-auto z-10 bg-white " />
      <div className="w-full h-12 bg-black flex justify-start items-center md:px-10 lg:px-10 px-4">
        <Image className=" md:h-8 md:w-24 lg:h-8 lg:w-24 h-6 w-16" src={brand} alt="brand" />
        <p className="text-center text-white font-bold md:text-xs lg:text-xs text-[0.4rem] uppercase w-full">
          {` 2024 Angadi world technologies - All rights reserved.`}
        </p>
      </div>

      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </div>
  );
};

export default Footer;
