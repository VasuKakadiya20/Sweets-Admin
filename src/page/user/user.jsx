import React, { useState,useEffect,useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { mycontext } from "../../App";
import { fetchDataFromApi, updatedata } from "../../api";

export default function UserProfile() {
    const [editing, setEditing] = useState(false);
    const context = useContext(mycontext)
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        Firstname: "",
        Lastname: "",
        phonenumber: "",
        Email: "",
        password: "*******",
    });
    const id = localStorage.getItem("username")

    useEffect(() => {
        fetchDataFromApi(`/user/${id}`).then((data) => {
            console.log("this is a user data:-", data);
            setForm(data)
        })
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await updatedata(`/user/${id}`, form)
            console.log("this is a data", res)
            setEditing(false);
            toast.success("Profile Updated Successfully!");
        } catch (error) {
            console.log(err.response?.data?.msg)
        }
    };

    const logout = async () => {
        toast.success("Logout Successfully!")
        context.setislogin(false)
        localStorage.removeItem("username")
        localStorage.removeItem("islogin")
        setTimeout(()=>{
        Navigate("/login")
    },2000)
    }

    const handleCancel = () => {  
        setEditing(false);
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-3xl mt-10 mb-10">
                <div className="md:flex sm:mb-10 justify-between items-center mb-8">
                    <h2 className="mt-5 text-2xl font-bold text-[#713722] border-l-4 border-[#713722] pl-4">Your Profile</h2>
                    <div className="flex mt-5">
                        <button
                            onClick={() => logout()}
                            className="flex px-5 py-2 bg-[#E09F40] text-white rounded-md hover:bg-[#cf8f32] mr-3 gap-2"
                        >
                            <FaSignOutAlt className="mr-2 text-base" />
                            Logout
                        </button>
                        {!editing && (
                            <button
                                onClick={() => setEditing(true)}
                                className="px-5 py-2 bg-[#E09F40] text-white rounded-md hover:bg-[#cf8f32]"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">First Name</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="Firstname"
                            value={form.Firstname}
                            onChange={handleChange}
                            placeholder="First Name"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Last Name</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="Lastname"
                            value={form.Lastname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Phone Number</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="phonenumber"
                            value={form.phonenumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-1 block">Email</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="Email"
                            value={form.Email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`
        w-full px-4 py-3 rounded-full border 
        ${editing ? "bg-white" : "bg-gray-100"} 
        border-gray-300 text-gray-700
        focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
        outline-none transition-all duration-200
      `}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-gray-600 text-sm mb-1 block">Password</label>
                        <input
                            disabled={!editing}
                            type="text"
                            name="password"
                            value={editing ? form.password : "******"}
                            onChange={handleChange}
                            className={`
                            w-full px-4 py-3 rounded-full border 
                            ${editing ? "bg-white" : "bg-gray-100"} 
                            border-gray-300 text-gray-700
                            focus:ring-2 focus:ring-[#c19b5a] focus:border-[#c19b5a]
                            outline-none transition-all duration-200
                        `}
                        />
                    </div>

                    {editing && (
                        <div className="flex gap-4 md:col-span-2 justify-center mt-4 ml-[50%]">
                            <button
                                onClick={handleSave}
                                className="px-8 py-3 bg-[#E09F40] text-white rounded-md hover:bg-[#cf8f32]"
                            >
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="px-8 py-3 border-1 border-[#E09F40] text-[#E09F40] rounded-md "
                            >
                                Cancel{/*hover:bg-[#c19b5a] hover:text-white */}
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}