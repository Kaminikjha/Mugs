import React from "react";
import image9 from "../assets/image-9.png";
import image10 from "../assets/image-10.png";
const Testimonials = () => {
  return (
    <>
      <section
        id="testimonials"
        className=" w-full flex flex-col gap-5 h-fit  px-10 py-10 lg:px-18 lg:py-20"
      >
        <h1 className="text-white font-bold text-3xl sm:text-5xl text-center leading-[68px]">
          Testimonials
        </h1>
        <p className=" text-white text-center text-lg sm:mx-40">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          quod quia minus. Voluptatum quasi, eligendi ea vitae doloremque
          accusantium quis, non magnam, maiores molestiae labore laudantium
          tempora deserunt quibusdam similique?
        </p>
        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          <div className="bg-gray-100  border-2 px-3 py-5 flex just items-start flex-col gap-3 rounded-xl w-96">
            <div className="sm:flex gap-3">
              <img
                className=" object-cover text-center  max-h-20 max-w-20 sm:max-h-32 sm:max-w-32 sm:justify-between rounded-full h-32 w-32 "
                src={image9}
                alt="image"
              ></img>

              <div className="">
                <p className="pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  corporis odit reiciendis quasi ipsum officiis.
                </p>

                <span className="font-semibold text-base">Name</span>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100  border-2 px-3 py-5 flex just items-start flex-col gap-3 rounded-xl w-96 ">
            <div className="sm:flex gap-3">
              <img
                className=" object-cover text-center  max-h-20 max-w-20 sm:max-h-32 sm:max-w-32 sm:justify-between rounded-full h-32 w-32 "
                src={image9}
                alt="image"
              ></img>

              <div className="">
                <p className="pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  corporis odit reiciendis quasi ipsum officiis.
                </p>

                <span className="font-semibold text-base">Name</span>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100  border-2 px-3 py-5 flex just items-start flex-col gap-3 rounded-xl w-96">
            <div className="sm:flex gap-3">
              <img
                className=" object-cover text-center  max-h-20 max-w-20 sm:max-h-32 sm:max-w-32 sm:justify-between rounded-full h-32 w-32 "
                src={image9}
                alt="image"
              ></img>

              <div className="">
                <p className="pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  corporis odit reiciendis quasi ipsum officiis.
                </p>

                <span className="font-semibold text-base">Name</span>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden sm:flex sm:justify-center pt-8">
          <img
            className=" object-cover text-center  max-h-60 max-w-60 "
            src={image10}
            alt="image"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
