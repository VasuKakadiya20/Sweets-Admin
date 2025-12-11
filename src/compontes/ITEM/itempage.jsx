import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Deletedata, fetchDataFromApi } from "../../utils/Api";


export default function ProductPage() {
    
    const navigate = useNavigate()
    const [product,setproduct] = useState([])
    useEffect(()=>{
        fetchDataFromApi("/Item/").then((res)=>{
            setproduct(res)
            console.log("this is a Item",res)
        })
    },[])


    const Updateitem = (_id) => {
       navigate(`/upadteitem/${_id}`)
    }
    const Deleteitem = (_id) => {
        console.log(_id)
          Deletedata(`/Item/${_id}`).then((res)=>{
            console.log("this is Deleted",res)
            toast.success("Succesfully Item Deleted !")
            fetchDataFromApi("/Item/").then((res)=>{
            setproduct(res)
            console.log("this is a Item",res)
        })
        })
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className=" min-h-screen py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                    {product.map((item) => (
                        <div
                            key={item._id}
                            className="p-5 rounded-xl overflow-hidden transition-all duration-300 border-2 border-[#c19b5a]"
                        >
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
                        
                                <button className="cursor-pointer bg-[#c19b5a] text-white px-6 py-3 rounded-md text-sm hover:bg-[#a48145] transition" onClick={() => Updateitem(item._id)}>
                                   Update Item
                                </button>
                                <button className="cursor-pointer bg-red-500 text-white px-6 py-3 rounded-md text-sm hover:bg-red-400 transition" onClick={() => Deleteitem(item._id)}>
                                    Delete Item
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
