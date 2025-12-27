// import React from "react";
// import shape1 from "../../assets/aboutShape1_1.png";
// import shape4 from "../../assets/aboutShape1_4.png";
// import img from "../../assets/pista.png"
// import shape3 from "../../assets/Strwbarry Chikki.png";
//  import "./AboutSection.css";

// export default function AboutSectionHome() {
//   return (
//     <section className="relative py-[140px] bg-white overflow-hidden">
//       <img src={shape1} className="absolute top-10 left-0 hidden xl:block h-[562px] w-[442px]" alt="" />
//       <img src={shape3} className="absolute bottom-40 left-[90px] rotate hidden xl:block h-[358px] w-[362px] rounded-full" alt="" />
//       <img src={shape4} className="absolute top-10 right-0 hidden xl:block h-[562px] w-[442px]" alt="" />
//       <img src={shape3} className="absolute bottom-40 right-[90px] rotate hidden xl:block h-[350px] w-[355px] rounded-full" alt="" />

//       <div className="container mx-auto relative mt-10">

//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         </div>

//         <div className="relative z-10 max-w-[720px] mx-auto text-center">
//           <div className="text-[#E09F40] font-bold tracking-[2px] mb-3 text-[18px]">
//             ABOUT US
//           </div>

//           <h2 className="text-[40px] font-bold text-[#111] mb-5 leading-tight max-lg:text-[32px]">
//             Sweet Moments Made With <br />
//             Love & Tradition
//           </h2>

//           <p className="text-[#666] text-[16px] leading-[1.8] mb-8">
//             We create delicious traditional sweets using the finest ingredients.
//             Every bite is crafted with care, purity, and authentic taste to make
//             your celebrations more joyful and memorable.
//           </p>

//           <a
//             href="/items"
//             className="
//               inline-flex items-center gap-2
//               px-8 py-3
//               bg-[#E09F40]
//               text-white
//               font-semibold
//               rounded-md
//               hover:bg-[#cf8f32]
//               transition
//             "
//           >
//             ORDER NOW
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import shape1 from "../../assets/img3.png";
import shape4 from "../../assets/img2.png";
import pista from "../../assets/pista.png";
import shape3 from "../../assets/item_1.png";
import shape2 from "../../assets/item_5.png";
import "./AboutSection.css";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSectionHome() {
  return (
    <section className="about-section relative bg-white overflow-hidden xl:max-h-[500px]">
      <img src={shape1}
        className="hidden d-xxl-block shape-left"
        alt=""
      />
      <img src={pista}
        className="hidden d-xxl-block shape-leftside"
        alt="PISTA"
      />
      <div className="round-wrapper1 rotate">
        <img src={shape3} alt="" className="round-image" />
      </div>

      <img src={shape4}
        className="hidden d-xxl-block shape-right"
        alt=""
      />
      <img src={pista}
        className="hidden d-xxl-block shape-rightside"
        alt="PISTA"
      />

      <div className="round-wrapper2 rotate">
        <img
          src={shape2}
          alt=""
          className="round-image "
        />
      </div>

      <div className="container mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-20"></div>

        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <div className="text-[#E09F40] font-bold tracking-[2px] mb-3 text-[18px]">
            ABOUT US
          </div>

          <h2 className="text-[40px] font-bold text-[#111] mb-5 leading-tight max-lg:text-[32px]">
            Sweet Moments Made With <br />
            Love & Tradition
          </h2>

          <p className="text-[#666] text-[16px] leading-[1.8] mb-8 text-center">
            Authentic traditional sweets prepared with love & purity, using the finest ingredients to bring joy & sweetness to every occasion.
          </p>

          {/* <a
            href="/items"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E09F40] text-white font-semibold rounded-md hover:bg-[#cf8f32] transition"
          >
            ORDER NOW <FaArrowRight />
          </a> */}
          <a href="/items" className="px-8 py-3 theme-btn">
            ORDER NOW <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
