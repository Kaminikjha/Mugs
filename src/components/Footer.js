import React from 'react'
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <section
        id="footer"
        className="w-full flex flex-col gap-5 h-fit  px-10 py-10 lg:px-18 lg:py-20 justify-center items-center mb-8"
      >
       <img
            className="object-cover max-h-32 max-w-32 sm:max-h-48 sm:max-w-48 sm:justify-between"
            src={logo}
            alt="Logo"
          ></img>
       
       <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-4 text-sm sm:text-xl mb-8">
          <div className="text-white px-4 py-3  flex just items-start flex-col gap-3 rounded-xl w-fit ">
            Home
          </div>

          <div className="text-white px-3 py-3  flex just items-start flex-col gap-3 rounded-xl w-fit">
            About
          </div>

          <div className="text-white px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit">
            Services
          </div>

          <div className=" text-white px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit">
            Projects
          </div>

          <div className="text-white px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit">
           Testimonials
          </div>

          <div className="text-white  px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit ">
           Contact
          </div>

        </div>

        <div className=' flex  text-white text-xl gap-8'>
        <FaFacebook />
        <BsTwitter />
        <FaInstagram />
        <FaLinkedin />
        </div>
        </section>
        <div className='bg-black w-full h-20 flex justify-center items-center'>
        <p className='text-white text-base'>@ 2023 <span className='text-orange-600'> Mumair</span> All Rights Reserved, Inc.</p>

        </div>
        
   
   </>
  )
}

export default Footer;
