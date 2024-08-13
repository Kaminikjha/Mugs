import React from "react";
import image8 from "../assets/image-8.png";




const Header = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full  h-auto lg:h-screen">
        <div className="flex justify-center items-start flex-col gap-5 lg:w-1/2 px-10 py-10 lg:px-28 lg:py-20">
          <h6 className="text-white font-bold text-xl">Hi I am</h6>
          <h6 className="font-bold text-orange-600 text-xl">Muhammad Umair</h6>
          <h1 className="text-white font-bold text-5xl sm:text-7xl">UI & UX</h1>
          <span className="text-white font-bold text-5xl sm:text-7xl pl-28 sm:pl-44">
            {" "}
            Designer
          </span>

          <p className=" text-lg text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nesciunt tenetur ipsum deserunt fugit quia repellendus
            soluta, voluptatum ea, libero natus doloremque autem doloribus
            similique earum dignissimos repellat vitae magni.
          </p>

          <div className="flex justify-center items-center gap-7">
            <button className="bg-orange-600 text-white px-8 lg:px-14 py-3 rounded-md text-[18px]  hover:text-white cursor-pointer ">
              Hire Me
            </button>
          </div>
        </div>

        <div className="relative  flex justify-center items-center w-1/2 px-3 sm:py-20 object-cover">
        <img
            className=" object-cover max-h-60 max-w-60 sm:max-h-[550px] sm:max-w-[550px] sm:justify-between"
            src={image8}
            alt="image"
          ></img>
        </div>
        <div>
       </div>
      
      </section>
    </>
  );
};

export default Header;
