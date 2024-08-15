import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";
import React, { useState,useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
    // disable background scrolling when mobile menu is active
  
    useEffect(() => {
    
      if (toggle) {
        document.body.classList.add("overflow-y-hidden")
      } else {
        document.body.classList.remove("overflow-y-hidden")
      }
    })

  return (
    <>
      <section className="w-full text-white flex justify-between items-center py-6 lg:px-16">
        <div className="w-full flex justify-between items-center h-14 mx-5 sm:p-3">
          <img
            className="object-cover max-h-32 max-w-32 sm:max-h-40 sm:max-w-40 sm:justify-between"
            src={logo}
            alt="Logo"
          ></img>

          {toggle ? (
            <FaXmark
              onClick={() => setToggle(!toggle)}
              className="fa-solid fa-xmark text-3xl lg:hidden block"
            />
          ) : (
            <IoMenu
              onClick={() => setToggle(!toggle)}
              className="fa-solid fa-bars text-4xl lg:hidden block"
            />
          )}

<div className=" hidden lg:flex justify-end items-center w-full  gap-2">
          <ul className="flex justify-center items-center gap-3">
            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="#about me"
              >
                About Me
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="#Services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="#contact"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                className="text-sm text-slate-100 cursor-pointer rounded-sm px-3 py-2 bg-orange-600  active:text-white"
                href="#"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

          {/* Responsive Menu */}

          <ul
            className={` duration-300 lg:hidden w-full h-screen fixed block bg-black  top-[82px] 
          ${toggle ? "left-[0]" : "left-[-100%]"} `}
          >
            <li className=" p-3 ">
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="/"
              >
                Home
              </a>
            </li>
            <li className=" p-3" >
                <a
                  className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                  href="/"
                >
                  About Me
                </a>
              </li>

            <li className=" p-3 ">
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="/"
              >
                Services
              </a>
            </li>

            <li className=" p-3 ">
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="/"
              >
                Projects
              </a>
            </li>
            <li className=" p-3" >
                <a
                  className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                  href="/"
                >
                  Testimonials
                </a>
              </li>

            <li className=" p-3 ">
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600 hover:text-white active:text-white"
                href="/"
              >
                Contact Us
              </a>
            </li>
            <li className=" p-3" >
                <a
                  className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-orange-600  hover:text-white active:text-white"
                  href="/"
                >
                  Download CV
                </a>
              </li>
          </ul>
        </div>
        
      </section>
    </>
  );
};

export default Navbar;
