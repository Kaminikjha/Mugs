import React from 'react'

const Contact = () => {
  return (
   <>
   <section
        id="contact"
        className="w-full flex flex-col gap-5 h-fit  px-10 py-10 lg:px-18 lg:py-20"
      >
        <h1 className="text-white font-bold text-3xl sm:text-5xl text-center leading-[68px]">
          Lets Desihn Together
        </h1>
        <p className=" text-white text-center text-lg sm:mx-40 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          quod quia minus. Voluptatum quasi, eligendi ea vitae doloremque
          accusantium quis, non magnam, maiores molestiae labore laudantium
          tempora deserunt quibusdam similique?
        </p>

        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          <div className="bg-gray-100  border-2 px-3 py-5 flex just items-start flex-col gap-3 rounded-xl w-80 hover:shadow-lg ">
            <p className='text-gray-400 text-base active:text-white'>Enter Your Email</p>
            </div>
            <div className="bg-orange-600 text-sembold text-white px-8 py-3 sm:py-5 flex just items-start flex-col gap-3 rounded-xl w-fit hover:shadow-lg">
            Contact Me
          </div>
          </div>
        </section>
   </>
  )
}

export default Contact;
