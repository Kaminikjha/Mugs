import React from "react";
import { RiPagesFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="w-full flex flex-col gap-5 h-fit  px-10 py-10 lg:px-18 lg:py-20"
      >
        <h1 className="text-white font-bold text-3xl sm:text-5xl text-center leading-[68px]">
          Services
        </h1>
        <p className=" text-white text-center text-lg sm:mx-40">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          quod quia minus. Voluptatum quasi, eligendi ea vitae doloremque
          accusantium quis, non magnam, maiores molestiae labore laudantium
          tempora deserunt quibusdam similique?
        </p>
        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          <div className="bg-gray-100  border-2 px-3 py-8 flex just items-start flex-col gap-3 rounded-xl w-80 hover:shadow-lg">
            <RiPagesFill className=" text-orange-600 text-4xl sm:text-5xl" />

            <h1 className=" text-black text-2xl font-semibold">UI/UX</h1>
            <p className="text-[17px] text-gray-600">
              Our premium quality hair products are highly sought after in the
              Chinese market, known for their.
            </p>
          </div>

          <div className="bg-gray-100  border-2 px-3 py-8 flex just items-start flex-col gap-3 rounded-xl w-80 hover:shadow-lg">
            <FaLaptopCode className=" text-orange-600 text-4xl sm:text-5xl" />

            <h1 className=" text-black text-2xl font-semibold">UI/UX</h1>
            <p className="text-[17px] text-gray-600">
              Our premium quality hair products are highly sought after in the
              Chinese market, known for their.
            </p>
          </div>

          <div className="bg-gray-100  border-2 px-3 py-8 flex just items-start flex-col gap-3 rounded-xl w-80 hover:shadow-lg">
            <FaMobileRetro className=" text-orange-600 text-4xl sm:text-5xl" />

            <h1 className=" text-black text-2xl font-semibold">UI/UX</h1>
            <p className="text-[17px] text-gray-600">
              Our premium quality hair products are highly sought after in the
              Chinese market, known for their.
            </p>
          </div>

          <div className="bg-gray-100  border-2 px-3 py-8 flex just items-start flex-col gap-3 rounded-xl w-80 hover:shadow-lg">
            <VscGraphLine  className=" text-orange-600 text-4xl sm:text-5xl" />

            <h1 className=" text-black text-2xl font-semibold">UI/UX</h1>
            <p className="text-[17px] text-gray-600">
              Our premium quality hair products are highly sought after in the
              Chinese market, known for their.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
