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
         CUSTOMER FAVORITES
        </div>

        <h2 className="text-3xl font-extrabold text-[#713722]">
          Our Most Loved Chikki Varieties
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