import React, { useEffect, useMemo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { fetchDataFromApi } from '../../utils/Api';

function Bestseller() {
    const [quantity, setQuantity] = useState({});
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetchDataFromApi("/Item/").then((res) => {
            setproduct(res)
            console.log("this is a Item", res)
        })
    }, [])

    const randomSix = useMemo(() => {
        if (!product || product.length === 0) return [];
        return [...product].sort(() => Math.random() - 0.5).slice(0, 9);
    }, [product]);



    const updateQty = (id, amount) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + amount),
        }));
    };

    const Addtocart = () => {
        toast.success("Succesfully Item Add to Cart!")
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className=" min-h-screen py-12">
                <h1 className='text-center text-3xl font-bold pb-5 text-[#c19b5a] '>Best Sellers</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

                    {randomSix.map((item) => (
                        <div
                            key={item._id}
                            // className="border-1 p-5 rounded-xl overflow-hidden transition-all duration-300  border-[#c19b5a]"
                            className="border-2 p-5 rounded-xl overflow-hidden transition-all duration-300 border-[#c19b5a]"

                        >{/**/}
                            <Link to={`/items/${item._id}`}>
                                <div className="relative w-full h-72 flex justify-center items-center group cursor-pointer">
                                    <img
                                        src={item.images[0]}
                                        alt={item.itemtitle}
                                        className="absolute w-auto h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />

                                    <img
                                        src={item.images[1]}
                                        alt="Hover"
                                        className="absolute w-auto h-full object-contain opacity-1 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>

                                <h3 className="text-gray-900 font-medium mt-4 text-center">{item.itemtitle}</h3>
                                <p className="text-gray-700 text-sm font-semibold text-center">₹ {item.price}</p>
                            </Link>
                            <div className="flex place-content-center gap-3 mt-4 ">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-2">{quantity[item.id] || 1}</span>
                                    <button
                                        className="px-3 py-2 text-lg"
                                        onClick={() => updateQty(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="bg-[#c19b5a] text-white px-6 py-3 rounded-md text-sm hover:bg-[#a48145] transition" onClick={() => Addtocart()}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Bestseller
