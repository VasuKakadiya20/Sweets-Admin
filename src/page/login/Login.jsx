import React, { useContext, useEffect, useState } from "react";
import laptop from "../../assets/login_laptop.png"
import { myContext } from "../../App";
import { postData } from "../../utils/Api";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [fromdata, setfromdata] = useState({
        Email: "",
        password: ""
    })
    const context = useContext(myContext)
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
                    <form className="p-10 flex flex-col justify-center" onSubmit={handlesubmit}>
                        <h2 className="text-3xl font-bold mb-2 text-[#c19b5a]">Welcome back</h2>
                        <p className="mb-8">Please enter your details</p>

                        <label className="text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="text"
                            name="Email"
                            value={fromdata.Email}
                            onChange={handleChange}
                            placeholder="Enter Your User email"
                            className="w-full p-3 border border-gray-300 rounded-full mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                        />

                        <label className="text-sm font-medium text-gray-700">Password *</label>
                        <input
                            type="password"
                            name="password"
                            value={fromdata.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            className="w-full p-3 border border-gray-300 rounded-full  mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                        />

                        <button type="submit" className="w-full bg-[#c19b5a] text-white py-3 rounded-lg font-medium hover:bg-[#caaa71] transition-all">
                            Sign in
                        </button>

                        <button className="w-full border border-[#c19b5a] py-3 rounded-lg mt-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Sign in with Google
                        </button>

                        <p className="mt-6 text-center text-sm">
                            Don’t have an account? <a className="text-blue-600" href="#">Sign up</a>
                        </p>
                    </form>

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
