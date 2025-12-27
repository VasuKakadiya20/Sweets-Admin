// other file

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { mycontext } from '../../App';
import { fetchDataFromApi, postData } from '../../api';
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function BestSellingDishes() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState({});
  const context = useContext(mycontext);

  useEffect(() => {
    fetchDataFromApi("/Item/").then((res) => {
      setProduct(res);
    });
  }, []);

  const randomSix = useMemo(() => {
    if (!product || product.length === 0) return [];
    return [...product].sort(() => Math.random() - 0.5).slice(0, 6);
  }, [product]);

  const updateQty = (_id, amount) => {
    setQuantity((prev) => ({
      ...prev,
      [_id]: Math.max(1, (prev[_id] || 1) + amount),
    }));
  };

  const Addtocart = async (item) => {
    if (context.islogin === true) {
      try {
        const userid = localStorage.getItem("username");
        const qty = quantity[item._id] || 1;

        const cartData = {
          userid: userid,
          itemid: item._id,
          qty: qty,
          producttitle: item.itemtitle,
          price: item.price,
          totalprice: item.price * qty,
          itemimg: item.images[0]
        };

        await postData("/Cart/create", cartData);
        toast.success("Successfully added to cart!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to add to cart!");
      }
    } else {
      toast.error("Please login to add items to cart!");
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <section className="bg-[#F4F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-center text-xl text-[#713722] font-bold">Popular Sweets</h1>
          <p className="text-[40px] font-bold mb-5 leading-tight max-lg:text-[32px] pb-3 text-[#E09F40]">Best Selling Sweets</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {randomSix.map((item) => (
              <div
                key={item._id}
                className="p-5 rounded-2xl overflow-hidden transition-transform duration-300 bg-white hover:shadow-2xl hover:scale-105"
              >
                <Link to={`/items/${item._id}`}>
                  <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                    <img
                      src={item.images[0]}
                      alt={item.itemtitle}
                      className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-80"
                    />
                  </div>
                  <h3 className="text-[#713722] font-medium mt-4 text-center">{item.itemtitle}</h3>
                  <p className="text-[#E09F40] text-sm font-semibold text-center">₹ {item.price}</p>
                </Link>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-4">
                  <div className="flex items-center border-1 border-gray-300 rounded-full">
                    <button
                      className="px-3 py-2 text-lg hover:text-[#E09F40] transition-colors"
                      onClick={() => updateQty(item._id, -1)}
                    >
                      −
                    </button>
                    <span className="px-4 py-2">{quantity[item._id] || 1}</span>
                    <button
                      className="px-3 py-2 text-lg hover:text-[#E09F40] transition-colors"
                      onClick={() => updateQty(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-white border-1 border-[#E09F40] text-[#E09F40] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E09F40]  transition"
                    onClick={() => Addtocart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link to="/items">
            <button className="mt-12 bg-[#E09F40] text-white px-6 py-3 rounded-md hover:bg-[#E09F40] transition">
              View All Items →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}