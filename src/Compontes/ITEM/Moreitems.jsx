import React, { useContext, useEffect, useMemo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { fetchDataFromApi, postData } from '../../api';
import { mycontext } from '../../App';
import { FaShoppingBag } from "react-icons/fa";


function Relatedproduct() {
    const [quantity, setQuantity] = useState({});
    const [product, setproduct] = useState([])
    const context = useContext(mycontext)

    useEffect(() => {
        fetchDataFromApi("/Item/").then((res) => {
            setproduct(res)
        })
    }, [])

    const randomSix = useMemo(() => {
        if (!product || product.length === 0) return [];
        return [...product].sort(() => Math.random() - 0.5).slice(0, 4);
    }, [product]);

    const updateQty = (_id, amount) => {
        setQuantity((prev) => ({
            ...prev,
            [_id]: Math.max(1, (prev[_id] || 1) + amount),
        }));
    };

    // const Addtocart = async (item) => {
    //     if (context.islogin === true) {
    //         try {
    //             const userid = localStorage.getItem("username");
    //             const qty = quantity[item._id] || 1;
    //             const cartData = {
    //                 userid: userid,
    //                 itemid: item._id,
    //                 qty: qty,
    //                 producttitle: item.itemtitle,
    //                 price: item.price,
    //                 totalprice: item.price * qty,
    //                 itemimg: item.images[0]
    //             };

    //             await postData("/Cart/create", cartData);
    //             toast.success("Successfully added to cart!");
    //         } catch (error) {
    //             console.error(error);
    //             toast.error("Failed to add to cart!");
    //         }
    //     } else {
    //         toast.error("Please login to add items to cart!");
    //     }
    // };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className="py-16 bg-[#F4F1EA]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-xl font-bold text-[#E09F40] border-l-4 border-[#E09F40] pl-4 mb-10"> Our Products </h1>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
                        {randomSix.map((item) => (
                            <div className="relative rounded-2xl overflow-hidden sellingcar pt-4">
                                <button
                                    className="add-to-cart-btn"
                                >
                                    <FaShoppingBag />
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
                                    {/* <div className="px-4 flex items-center border-1 border-gray-300 rounded-full text-center">
                                        <button
                                            className="text-lg hover:text-[#E09F40] transition-colors add"
                                            onClick={() => updateQty(item._id, -1)}
                                        >
                                            −
                                        </button>
                                        <span className="px-4 py-2 add">{quantity[item._id] || 1}</span>
                                        <button
                                            className="text-lg hover:text-[#E09F40] transition-colors add"
                                            onClick={() => updateQty(item._id, 1)}
                                        >
                                            +
                                        </button>
                                    </div> */}
                                    <div className="mt-3 flex justify-center">
                                        <div className="flex items-center gap-4 border border-gray-300 rounded-full px-6 sm:px-8 py-2.5  w-48 sm:w-56 ">

                                            <button
                                                className="px-3 text-xl font-bold hover:text-[#E09F40] transition add"
                                                onClick={() => updateQty(item._id, -1)}
                                            >
                                                −
                                            </button>

                                            <span className="w-12 sm:w-18 text-center text-lg font-semibold add">
                                                {quantity[item._id] || 1}
                                            </span>

                                            <button
                                                className="px-3 text-xl font-bold hover:text-[#E09F40] transition add"
                                                onClick={() => updateQty(item._id, 1)}
                                            >
                                                +
                                            </button>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relatedproduct