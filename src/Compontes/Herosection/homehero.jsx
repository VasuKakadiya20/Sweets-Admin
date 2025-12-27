import React from "react";
import bgimg from "../../assets/bg_img.png"; 
import heroimg from "../../assets/All_types_home.png";
import bgimg1 from "../../assets/herobg.png"

export default function ChocolateChikkiSection() {
  return (
    <section
      className="
        w-full
        min-h-[320px] sm:min-h-[400px] md:h-[700px]
        py-10 sm:py-12 md:py-20
        bg-cover bg-center bg-no-repeat
        slideUp
      "
      style={{ backgroundImage: `url(${bgimg1})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
            w-full
            min-h-[220px] sm:min-h-[300px] md:h-[550px] backdrop-blur-md
            rounded-[22px] sm:rounded-[28px]
            shadow-2xl
             bg-cover bg-center
            slideDownH
          "
           style={{ backgroundImage: `url(${heroimg})` }}
        >
          </div>

        </div>
    </section>
  );
}