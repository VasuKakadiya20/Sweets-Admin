import React from "react";
import img1 from "../../assets/Vanilla Chikki.png";
import img2 from "../../assets/Strwbarry Chikki.png";
import bg_img from "../../assets/pista_vanila_img.png";

export default function SweetsAbout() {
  return (
    <section className="bg-[#fffaf3] py-24 relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-center relative z-10 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="hidden md:block absolute left-0">
          <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl animate-spin-slowha">
            <img
              src={img1}
              alt="Sweet Plate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center max-w-xl z-10">
          <span className="text-[#E09F40] font-bold tracking-wide">
            ABOUT US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#713722] mt-4 mb-6">
            Variety Of Traditional <br />
            Indian Sweets
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            We bring you a delicious range of traditional Indian sweets made
            with pure ingredients, authentic recipes, and rich taste that
            adds sweetness to every celebration.
          </p>
        </div>

        <div className="hidden md:block absolute right-0">
          <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl animate-spin-slowha">
            <img
              src={img2}
              alt="Sweet Dish"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}