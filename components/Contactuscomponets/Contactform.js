"use client";
import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    phone:""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.phone
    ) {
      toast.error("Please fill out all the required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://awt-backend.onrender.com/api/awt/Contactus/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        toast.success("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          phone: "", // Make sure to clear other fields if needed
        });
      } else {
        setStatus("error");
        toast.error(
          "There was an error submitting your message. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error(
        "There was an error submitting your message. Please try again."
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start gap-8 mx-auto md:py-16 lg:py-16">
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-4">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          All Great Achievements began with a<br></br> Simple “Hello”
        </h6>
        <p className="text-sm font-bold uppercase">
          Fill out all the required details, our company will contact you within
          48 hours!
        </p>
      </div>

      <div className="w-11/12 mx-auto flex justify-between  items-start  h-auto md:flex-row flex-col">
        <form
          onSubmit={handleSubmit}
          className=" flex-[0.9] gap-12 text-black font-bold"
        >
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-5 lg:gap-5 gap-8 my-5 py-4 flex-wrap">
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="FIRST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="LAST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
          </div>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="MOBILE NUMBER"
            className="placeholder:text-black pb-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL ID"
            className="placeholder:text-black mt-4 pb-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="REQUIREMENT"
            className="placeholder:text-black placeholder:font-bold border-b py-8 border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />

          <textarea
            type="message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            className="placeholder:text-black py-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full focus-visible:outline-none"
          />
          <Button
            type="submit"
            variant="solid"
            className="ring-1 ring-black bg-white font-bold uppercase w-full rounded-full mt-8"
          >
            Submit
          </Button>
        </form>
        <div className="flex mt-8  h-auto md:pl-16 lg:pl-16 gap-8 flex-col  md:border-l lg:border-l border-gray-400">
          <div>
            <h6 className="uppercase font-bold ">call us</h6>
            <p className="text-gray-500 text-sm font-medium">
              From Monday - Sunday we will be available<br></br> all week!
            </p>
            <h6 className="flex items-center gap-2 font-bold mt-2 text-[#FF7143]">
              <FaPhone />
              <Link href={"tel:+91-9110314465"}>+91-9110314465</Link>
            </h6>
            <span className="text-gray-500 text-sm font-medium">UK</span>
            <h6 className="flex items-center gap-2 font-bold mt-2 text-[#FF7143]">
              <FaPhone />
              <Link href="tel:+447918255464">+44 7918255464</Link>
            </h6>
          </div>

          <div>
            <h6 className="uppercase font-bold ">email us</h6>
            <p className="text-gray-500 text-sm font-medium">
              From Monday - Sunday we will be available all week!
            </p>
            <h6 className="flex items-center gap-2 font-bold mt-2 text-[#FF7143] cursor-pointer">
              <MdEmail />
              <Link href={"mailto:info@angadiworldtech.com"}>
                info@angadiworldtech.com
              </Link>
            </h6>
          </div>

          <div>
            <h6 className="uppercase font-bold ">visit us</h6>
            <p className="text-gray-500 text-sm font-medium">
              We have 3 locations globally!
            </p>
            <h6 className="flex items-center gap-2 font-bold mt-2 text-[#FF7143]">
              <FaLocationDot />
              Hyderabad - Bangalore - London
            </h6>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
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

export default Contactform;
