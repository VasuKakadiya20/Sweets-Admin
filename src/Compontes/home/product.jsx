// // import React, { useEffect, useMemo, useState } from 'react'
// // import toast, { Toaster } from 'react-hot-toast';
// // import { Link } from "react-router-dom";
// // import { fetchDataFromApi } from '../../api';
// // import useScrollAnimation from '../useScrollAnimation';
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";

// // function Bestseller() {
// //     useScrollAnimation();

// //     const [product, setproduct] = useState([])
// //     useEffect(() => {
// //         fetchDataFromApi("/Item/").then((res) => {
// //             setproduct(res)
// //         })
// //     }, [])

// //     const randomSix = useMemo(() => {
// //         if (!product || product.length === 0) return [];
// //         return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
// //     }, [product]);

// //     return (
// //         <>
// //             <Toaster
// //                 position="top-right"
// //                 reverseOrder={false}
// //             />

// //             <div className="py-12 bg-[#F4F1EA]">
// //                 <h1 className='text-center text-xl text-[#713722] font-bold'>Best Sweets</h1>
// //                 <p className='text-center text-2xl font-bold pb-3 text-[#E09F40]'>Popular Sweets Items</p>
// //                 <div className="py-16">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <Swiper
// //                             modules={[Autoplay]}
// //                             spaceBetween={30}
// //                             slidesPerView={1}
// //                             loop={true}
// //                             autoplay={{
// //                                 delay: 2500,
// //                                 disableOnInteraction: false,
// //                             }}
// //                             breakpoints={{
// //                                 640: { slidesPerView: 2 },
// //                                 1024: { slidesPerView: 4 },
// //                             }}
// //                         >
// //                             {randomSix.map((item) => (
// //                                 <SwiperSlide key={item._id}>
// //                                     <div className="rounded-2xl p-6 text-center transition-all duration-300">

// //                                         <Link to={`/items/${item._id}`}>
// //                                             <div className="relative w-60 h-60 mx-auto mb-5">

// //                                                 <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E09F40] animate-spin-slow"></div>
// //                                                 <img
// //                                                     src={item.images[0]}
// //                                                     alt={item.itemtitle}
// //                                                     className="w-full h-60 rounded-full object-cover p-3 bg-white"
// //                                                 />
// //                                             </div>
// //                                         </Link>

// //                                         <h3 className="text-xl font-bold text-[#713722]">
// //                                             {item.itemtitle}
// //                                         </h3>

// //                                         <p className="text-[#E09F40] font-bold mt-1 text-lg">
// //                                             ₹ {item.price}
// //                                         </p>

// //                                     </div>
// //                                 </SwiperSlide>
// //                             ))}
// //                         </Swiper>
// //                     </div>
// //                 </div>
// //             </div >
// //         </>
// //     )
// // }

// // export default Bestseller

// import React, { useEffect, useMemo, useState } from "react";
// import { fetchDataFromApi } from "../../api";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import shape1 from "../../assets/Swiper_shape_1.png";
// import shape2 from "../../assets/Swiper_shape_2.png";

// function Bestseller() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     fetchDataFromApi("/Item/").then((res) => {
//       setProduct(res);
//     });
//   }, []);

//   const randomSix = useMemo(() => {
//     if (!product?.length) return [];
//     return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
//   }, [product]);

//   return (
//     <section className="relative bg-[#F4F1EA] py-24 overflow-hidden">

//       <img
//         src={shape1}
//         alt="pizza shape"
//         className="
//       absolute 
//       right-[-10px] 
//       top-24 
//       w-45 
//       opacity-90 
//       hidden lg:block 
//       float-updown
//     "/>

//       <img
//         src={shape2}
//         alt="burger shape"
//         className="
//       absolute 
//       left-[-10px] 
//       bottom-16 
//     w-45 
//       opacity-90 
//       hidden lg:block 
//       float-updown-delay
//     "/>

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <div className="flex justify-center items-center gap-2 text-[#E09F40] font-semibold mb-1">
//           BEST FOOD
//         </div>

//         <h2 className="text-4xl font-extrabold text-[#713722]">
//           Popular Food Items
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           loop
//           spaceBetween={30}
//           autoplay={{ delay: 2500 }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {randomSix.map((item) => (
//             <SwiperSlide key={item._id}>
//               <div className="flex flex-col items-center mb-10">

//                 <div className="relative w-[170px] h-[170px] mb-[-90px] z-10 flex items-center justify-center mt-5">
//                   <div
//                     className="
//                     absolute
//                     w-[175px] h-[175px] 
//                     rounded-full
//                     border-2
//                     border-dashed
//                     border-[#E09F40]
//                     animate-rotate
//                     z-20
//                   "
//                   ></div>

//                   <img
//                     src={item.images[0]}
//                     alt={item.itemtitle}
//                     className="
//                     w-[160px] h-[160px] 
//                     object-cover
//                     rounded-full
//                     z-10
//                   "/>
//                 </div>

//                 <div className="bg-white rounded-2xl w-full h-[190px] pt-24 px-6 shadow-md flex flex-col items-center">
//                   <h3 className="text-lg font-bold text-[#713722] text-center">
//                     {item.itemtitle}
//                   </h3>

//                   <p className="text-[#E09F40] font-bold text-lg">
//                     ₹ {item.price}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Bestseller;
// import React, { useEffect, useMemo, useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast';
// import { Link } from "react-router-dom";
// import { fetchDataFromApi } from '../../api';
// import useScrollAnimation from '../useScrollAnimation';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// function Bestseller() {
//     useScrollAnimation();

//     const [product, setproduct] = useState([])
//     useEffect(() => {
//         fetchDataFromApi("/Item/").then((res) => {
//             setproduct(res)
//         })
//     }, [])

//     const randomSix = useMemo(() => {
//         if (!product || product.length === 0) return [];
//         return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
//     }, [product]);

//     return (
//         <>
//             <Toaster
//                 position="top-right"
//                 reverseOrder={false}
//             />

//             <div className="py-12 bg-[#F4F1EA]">
//                 <h1 className='text-center text-xl text-[#713722] font-bold'>Best Sweets</h1>
//                 <p className='text-center text-2xl font-bold pb-3 text-[#E09F40]'>Popular Sweets Items</p>
//                 <div className="py-16">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <Swiper
//                             modules={[Autoplay]}
//                             spaceBetween={30}
//                             slidesPerView={1}
//                             loop={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             breakpoints={{
//                                 640: { slidesPerView: 2 },
//                                 1024: { slidesPerView: 4 },
//                             }}
//                         >
//                             {randomSix.map((item) => (
//                                 <SwiperSlide key={item._id}>
//                                     <div className="rounded-2xl p-6 text-center transition-all duration-300">

//                                         <Link to={`/items/${item._id}`}>
//                                             <div className="relative w-60 h-60 mx-auto mb-5">

//                                                 <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E09F40] animate-spin-slow"></div>
//                                                 <img
//                                                     src={item.images[0]}
//                                                     alt={item.itemtitle}
//                                                     className="w-full h-60 rounded-full object-cover p-3 bg-white"
//                                                 />
//                                             </div>
//                                         </Link>

//                                         <h3 className="text-xl font-bold text-[#713722]">
//                                             {item.itemtitle}
//                                         </h3>

//                                         <p className="text-[#E09F40] font-bold mt-1 text-lg">
//                                             ₹ {item.price}
//                                         </p>

//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Bestseller

import React, { useEffect, useMemo, useState } from "react";
import { fetchDataFromApi } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import shape1 from "../../assets/Swiper_shape_1.png";
import shape2 from "../../assets/Swiper_shape_2.png";

function Bestseller() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/Item/").then((res) => {
      setProduct(res);
    });
  }, []);

  const randomSix = useMemo(() => {
    if (!product?.length) return [];
    return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
  }, [product]);

  return (
    <section className="relative bg-[#F4F1EA] py-20 overflow-hidden pt-24">

      <img
        src={shape1}
        alt="pizza shape"
        className="
      absolute 
      right-[-10px] 
      top-24 
      w-45 
      opacity-90 
      hidden lg:block 
      float-updown
    "/>

      <img
        src={shape2}
        alt="burger shape"
        className="
      absolute 
      left-[-10px] 
      bottom-16 
    w-45 
      opacity-90 
      hidden xl:block 
      float-updown-delay
    "/>

      <div className="max-w-5xl mx-auto px-6 text-center container">

        <div className="flex justify-center items-center gap-2 text-[#E09F40] font-bold mb-1">
          BEST ITEMS
        </div>

        <h2 className="text-4xl font-extrabold text-[#713722]">
          Popular Food Items
          {/* Popular Food Items */}
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop
          spaceBetween={30}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {randomSix.map((item) => (
            <SwiperSlide key={item._id} style={{width: "265px"}}>
              <div className="flex flex-col items-center mb-10 single-food-items">

                <div className="relative w-[170px] h-[170px] mb-[-70px] z-10 flex items-center justify-center mt-5">
                  <div
                    className="
                    absolute
                    w-[175px] h-[175px] 
                    rounded-full
                    border-2
                    border-dashed
                    border-[#E09F40]
                    animate-rotate
                    z-20
                  "
                  ></div>

                  <img
                    src={item.images[0]}
                    alt={item.itemtitle}
                    className="
                    w-[160px] h-[160px] 
                    object-cover
                    rounded-full
                    z-10
                  "/>
                </div>

                <div className="bg-white rounded-2xl w-[230px] h-[190px] pt-20 px-6 shadow-md flex flex-col items-center item-content">
                  <h3 className="text-lg font-bold text-[#713722] text-center">
                    {item.itemtitle}
                  </h3>
                  <p className="text-[#E09F40] font-bold text-lg">
                    ₹ {item.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Bestseller;