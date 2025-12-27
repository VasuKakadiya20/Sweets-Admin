import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Deletedata, fetchDataFromApi, postData } from "../../api";
import { mycontext } from "../../App";
import shape1 from "../../assets/Best_Selling.png";
import shape2 from "../../assets/Best_Selling_2.png";
import shape3 from "../../assets/Best_Selling_3.png";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function ProductPage() {
  const [quantity, setQuantity] = useState({});
  const [product, setproduct] = useState([])
  const context = useContext(mycontext)
  const navigate = useNavigate()

  useEffect(() => {
    fetchDataFromApi("/Item/").then((res) => {
      setproduct(res)

    })
  }, [])

  const Deleteitem = (_id) => {
    console.log(_id)
    Deletedata(`/Item/${_id}`).then((res) => {
      console.log("this is Deleted", res)
      toast.success("Succesfully Item Deleted !")
      fetchDataFromApi("/Item/").then((res) => {
        setproduct(res)
      })
    })
  }

  const Updateitem = (_id) => {
    navigate(`/upadteitem/${_id}`)
  }

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <section className="bg-[#F4F1EA] py-24 relative">
        <div className="max-w-8xl mx-auto px-6">
          <img
            src={shape1}
            alt="shape"
            className="floating-shape float-updown hidden md:block"
          />
          <img
            src={shape2}
            alt="shape"
            className="floating-shape2 float-updown hidden md:block"
          />
          <img
            src={shape3}
            alt="shape"
            className="floating-shape3 float-updown hidden md:block"
          />
          <img
            src={shape3}
            alt="shape"
            className="floating-shape4 float-updown hidden md:block"
          />
          <div className="text-center mb-14">
            <div className="text-[#E09F40] font-bold tracking-widest mb-2 text-[16px]">
              POPULAR DISHES
            </div>
            <h2 className="text-[40px] font-bold text-[#713722] mb-5 leading-tight max-lg:text-[32px]">
              Our Most Popular Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 ">
            {product.map((item, i) => (
              <div className="relative rounded-2xl overflow-hidden sellingcar pt-4">
                <button
                  onClick={() => Deleteitem(item._id)}
                  className="add-to-cart-btn"
                >
                  <MdDelete className="w-5" />
                </button>
                <button
                  onClick={() => Updateitem(item._id)}
                  className="add-to-cart-btn2"
                >
                  <MdModeEdit className="w-5" />
                </button>

                <Link to={`/items/${item._id}`}>
                  <div className="relative z-20 p-6 flex justify-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="product-img"
                    />
                  </div>
                </Link>

                <div className="relative z-20 text-center pb-6 px-4">
                  <h3 className="text-lg font-bold mb-1 text-[#713722] group-hover:text-white">{item.itemtitle}</h3>
                  <span className="font-bold text-lg text-[#E09F40] group-hover:text-white price">₹ {item.price}</span>
                  <div className="mt-3 flex justify-center">
                    {/* <button className="
  bg-[#713722] 
  text-white 
  font-semibold 
  py-2 px-6 
  rounded-lg 
  shadow-md 
  group-hover:
  hover:bg-[#a88747] 
  hover:shadow-lg 
  active:scale-95 
  transition 
  duration-300 
  ease-in-out
  w-full md:w-auto
">
                      Update Item
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
