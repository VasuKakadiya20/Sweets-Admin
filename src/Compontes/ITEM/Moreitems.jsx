import React, {  useEffect, useMemo, useState } from 'react'
import { Link } from "react-router-dom";
import { fetchDataFromApi } from '../../api';
import { FaShoppingBag } from "react-icons/fa";

function Relatedproduct() {
    const [quantity, setQuantity] = useState({});
    const [product, setproduct] = useState([])

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

    return (
        <>
            <div className="py-16 bg-[#F4F1EA]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-xl font-bold text-[#E09F40] border-l-4 border-[#E09F40] pl-4 mb-10">Related Chikki Varieties</h1>
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