import React, { useContext, useEffect, useState } from "react";
import laptop from "../../assets/login_laptop.png"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postData } from "../../api";
import { mycontext } from "../../App";

export default function LoginPage() {
    const [fromdata, setfromdata] = useState({
        Email: "",
        password: ""
    })
    const context = useContext(mycontext)
    const navigate = useNavigate()

    useEffect(() => {
        context.sethideHeaderandFooter(true)
    }, [])

    const handleChange = (e) => {
        setfromdata({
            ...fromdata,
            [e.target.name]: e.target.value,
        });
    };

   const handlesubmit = async (e) => {
    e.preventDefault();  
    try {
        const res = await postData("/user/loginuser", fromdata);
        toast.success("Login successfully!");
        console.log("this is a login user",res)
        localStorage.setItem("islogin", true);
        localStorage.setItem("username", res.userinfo.id);
        navigate("/")

        context.setislogin(true);
        setfromdata({ Email: "", password: "" });
    } catch (error) {
        toast.error("Invalid email or password!");
        console.error(error);
    }
};


    return (
        <>
         <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-5xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    <div className="p-10 flex flex-col justify-center" >
                    {/* <form className="p-10 flex flex-col justify-center" onSubmit={handlesubmit}> */}
                        <h2 className="text-3xl font-bold mb-2 text-[#E09F40]">Welcome back</h2>
                        <p className="mb-8">Please enter your details</p>
                        <form onSubmit={handlesubmit}>

                        <label className="text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="text"
                            name="Email"
                            value={fromdata.Email}
                            onChange={handleChange}
                            placeholder="Enter Your User email"
                            className="w-full p-3 border border-gray-300 rounded-full mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                        />

                        <label className="text-sm font-medium text-gray-700">Password *</label>
                        <input
                            type="password"
                            name="password"
                            value={fromdata.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            className="w-full p-3 border border-gray-300 rounded-full  mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                        />

                        <button type="submit" className="w-full text-white py-3 rounded-full font-medium hover:bg-[#caaa71] transition-all btn-viewall">
                            Sign in
                        </button>
                        </form>

                        <button className="w-full border-1 border-[#E09F40] py-3 rounded-full mt-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Sign in with Google
                        </button>

                    </div>

                    <div className="hidden md:flex items-center justify-center bg-white p-10">
                        <img
                            src={laptop}
                            alt="Illustration"
                            className="w-80"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}