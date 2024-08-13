import React from "react";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";


const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full flex flex-col gap-5 h-fit  px-10 py-10 lg:px-18 lg:py-20"
      >
        <h1 className="text-white font-bold text-3xl sm:text-5xl text-center leading-[68px]">
          My Projects
        </h1>
        <p className=" text-white text-center text-lg sm:mx-40 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          quod quia minus. Voluptatum quasi, eligendi ea vitae doloremque
          accusantium quis, non magnam, maiores molestiae labore laudantium
          tempora deserunt quibusdam similique?
        </p>

        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-4 text-sm sm:text-xl mb-8">
          <div className="bg-gray-100  px-4 py-3  flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg ">
            All
          </div>

          <div className="bg-gray-100  px-3 py-3  flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg">
            UI/UX
          </div>

          <div className="bg-orange-600  px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg">
            Web Design
          </div>

          <div className="bg-gray-100  px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg">
            App Design
          </div>

          <div className="bg-gray-100  px-3 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg">
            Graphic Design
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6 sm:gap-12">
        <div className="bg-gray-900 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg ">
            <img
              className=" object-cover max-h-60 max-w-60 sm:max-h-[300px] sm:max-w-[300px] sm:justify-between"
              src={image3}
              alt="image"
            ></img>
          
          <div>
            <p className="text-orange-600 text-sm sm:text-xl">Web Design</p>
            <p className="text-white text-sm sm:text-xl">
              AirCalling Landing Page Design
            </p>
          </div>

          
          </div>


          <div className="bg-gray-900 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg ">
            <img
              className=" object-cover max-h-60 max-w-72 sm:max-h-[300px] sm:max-w-[300px] sm:justify-between"
              src={image4}
              alt="image"
            ></img>
          
          <div>
            <p className="text-orange-600 text-sm sm:text-xl">Web Design</p>
            <p className="text-white text-sm sm:text-xl">
              Business Landing Page Design
            </p>
          </div>

          
          </div>

          <div className="bg-gray-900 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg ">
            <img
              className=" object-cover max-h-60 max-w-60 sm:max-h-[300px] sm:max-w-[300px] sm:justify-between"
              src={image5}
              alt="image"
            ></img>
          
          <div>
            <p className="text-orange-600 text-sm sm:text-xl">Web Design</p>
            <p className="text-white text-sm sm:text-xl">
              Ecom Landing Page Design
            </p>
          </div>

          
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
