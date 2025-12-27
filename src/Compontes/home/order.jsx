import React from "react";
import shape1 from "../../assets/banner_1.png"
import shape2 from "../../assets/Best_Selling_3.png"
import shape3 from "../../assets/banner_2.png"
import shape4 from "../../assets/banner_3.png"
import { FaArrowRight } from "react-icons/fa";
import bg_img from "../../assets/banner_bg.png"

export default function CtaSection() {
  return (
    <>
   <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20"
  style={{
    backgroundImage:
      `url(${bg_img})`,
  }}
>
  <img src={shape1} className="hidden 2xl:block absolute top-10 left-10 animate-float-x w-36" alt="" />
  <img src={shape2} className="hidden 2xl:block absolute bottom-10 left-20 animate-float-y w-30" alt="" />
  <img src={shape3} className="hidden 2xl:block absolute top-1/2 right-10 -translate-y-1/2 animate-float-y w-48 mt-5" alt="" />

  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
     

      <div className="order-2 xl:order-2 flex justify-center">
        <img
          src={shape4}
          className="animate-float-x"
          alt="cta"
        />
      </div>

       <div className="order-1 xl:order-1">
        <h6 className="text-[#E09F40] font-semibold tracking-wide animate-fade-up">
         WELCOME TO MARVEL CRUNCH CHIKKI
        </h6>

        <h3 className="text-white text-4xl md:text-5xl font-bold mt-3 animate-fade-up delay-150">
         TODAY'S DELICIOUS CHIKKI  
        </h3>

        <p className="text-gray-300 mt-3 animate-fade-up delay-300 mb-3">
           Limited Stock – Grab Yours Now!
        </p>

       {/* <a
            href="/items"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E09F40] text-white font-semibold rounded-md hover:bg-[#cf8f32] transition"
          >
            ORDER NOW <FaArrowRight/>
        </a> */}
         <a href="/items" className="theme-btn">
          ORDER NOW <FaArrowRight />
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
