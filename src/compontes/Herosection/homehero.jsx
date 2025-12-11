import React from "react";
import bgimg from '../../assets/bg-home.png'
import heroimg from '../../assets/Hero-Image.png'

export default function IndianSweetsSection() {
  return (
    <>
      <section
        className="md:h-[700px] w-full bg-cover bg-center bg-no-repeat py-20 md:py-28"
        style={{
          backgroundImage:
            `url(${bgimg})`
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 bg-white/70 p-8 rounded-xl backdrop-blur-sm">

          <div className="flex-1 text-start md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Indian Authentic <br /> Sweets
            </h1>

            <p className="text-gray-700 mt-4 text-base md:text-lg max-w-md">
              Indulge in the sweetness of life with our irresistible range of sweets
              made with traditional methods and our crafted recipes.
            </p>

            <a
              href="/items"
              className="inline-block mt-6 bg-[#c19b5a] text-white px-8 py-3 text-sm font-medium rounded hover:bg-[#a48145] transition duration-300"
            >
              Shop Now
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={heroimg}
              alt="Indian sweets bowl"
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
