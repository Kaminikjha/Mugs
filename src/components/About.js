import React from 'react'
import image7 from "../assets/image-7.png";
import image2 from "../assets/image-2.png";



const About = () => {
  return (
   <>
    
   <section id='about me' 
   className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full h-auto lg:h-screen">
    

   <div className="relative  flex justify-center items-center w-1/2 px-3 sm:py-20 object-cover">
          <img
            className=" object-cover max-h-60 max-w-60 sm:max-h-[550px] sm:max-w-[550px] sm:justify-between"
            src={image7}
            alt="image"
          ></img>
        </div>
        

        <div className="flex justify-center items-start flex-col gap-5 lg:w-1/2 px-10 py-10 lg:px-28 lg:py-20">
          
          <h1 className="text-white font-bold text-3xl sm:text-5xl">About Me</h1>
          

          <p className=" text-lg text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nesciunt tenetur ipsum deserunt fugit quia repellendus
            soluta, voluptatum ea, libero natus doloremque autem doloribus
            similique earum dignissimos repellat vitae magni.
          </p>

          <div className="flex justify-center items-center gap-7 pt-5">
            
          
          <img
            className=" object-cover  sm:justify-between"
            src={image2}
            alt="image"
          ></img>
        </div>
</div>
      
        <div></div>
      </section>
   </>
  )
}

export default About;
