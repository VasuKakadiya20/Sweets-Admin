// import React, { useState } from 'react'
// import Rating from '@mui/material/Rating';
// import toast, { Toaster } from 'react-hot-toast';
// import { postData } from '../../../api';

// function Addreviewfrom({ showfrom, setshowfrom }) {
//     const [form, setForm] = useState({
//         Name: "",
//         Email: "",
//         Review_Title: "",
//         Review_msg: ""
//     })
//     const [rating, setRating] = useState(4);
//     const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
// };
//     //   const Addreview = () => {
//     //     toast.success("Succesfully Add Review !")
//     // }

//     const Submitreview = async (e) => {
//         e.preventDefault();

//         let formData = new FormData();
//         formData.append("Name", form.Name);
//         formData.append("Email", form.Email);
//         formData.append("Review_Title", form.Review_Title);
//         formData.append("Review_msg", form.Review_msg)
//         formData.append("Rating", rating)
//         try {
//             const res = await postData("/review/create", formData);
//              toast.success("Client added successfully!");
//             console.log(res.data);
//         } catch (err) {
//             toast.error("Error saving client");
//             console.error(err);
//         }
//     }

//     return (
//         <>
//          <Toaster
//                         position="top-right"
//                         reverseOrder={false}
//                     />
//             {showfrom && (
//                 <form className="w-full border-t pt-6 pb-3 border-b-2" onSubmit={Submitreview()}>
//                     <label className="block font-medium mb-1">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         name='Name'
//                         value={form.Name}
//                           onChange={handleChange}
//                         placeholder="Enter your name (public)"
//                         className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                         required
//                     />

//                     <label className="block font-medium mt-5 mb-1">Email</label>
//                     <input
//                         type="email"
//                         name='Email'
//                         value={form.Email}
//                           onChange={handleChange}
//                         placeholder="Enter your email (private)"
//                         className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                         required
//                     />

//                     <label className="block font-medium mt-5 mb-1">Rating</label>
//                     <Rating
//                         value={rating}
//                         onChange={(event, newValue) => setRating(newValue)}
//                         size="large"
//                     />

//                     <label className="block font-medium mt-5 mb-1">Review Title</label>
//                     <input
//                         type="text"
//                         name='Review_Title'
//                         value={form.Review_Title}
//                           onChange={handleChange}
//                         placeholder="Give your review a title"
//                         className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                         required
//                     />

//                     <label className="block font-medium mt-5 mb-1">Review</label>
//                     <textarea
//                         rows="5"
//                         name='Review_msg'
//                         value={form.Review_msg}
//                           onChange={handleChange}
//                         placeholder="Write your comments here"
//                         className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                         required
//                     ></textarea>

//                     <button type="submit" className="mt-6 bg-[#c19b5a] text-white px-5 py-2 rounded">{/*onClick={()=> Addreview()} */}
//                         Submit Review
//                     </button>
//                 </form>
//             )
//             }
//         </>
//     )
// }

// export default Addreviewfrom

import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import toast, { Toaster } from "react-hot-toast";
import { postData } from "../../utils/Api";

function Addreviewfrom({ showfrom, setshowfrom }) {
    const todaydate = new Date().toISOString().split("T")[0];
    const userid = localStorage.getItem("username")
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Review_Title: "",
        Review_msg: ""
    });
    const [rating, setRating] = useState(4);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const Submitreview = async (e) => {
        e.preventDefault();
        const body = {
            userid: userid,
            Name: form.Name,
            Email: form.Email,
            Review_Title: form.Review_Title,
            Review_msg: form.Review_msg,
            Rating: rating,
            Date: todaydate
        };

        try {
            const res = await postData("/review/create", body);
            toast.success("Review added successfully!");
            console.log(res.data);
            setForm({ Name: "", Email: "", Review_Title: "", Review_msg: "" })
            setshowfrom(false)
        } catch (err) {
            toast.error("Error saving review");
            console.error(err);
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            {showfrom && (
                <form
                    className="w-full border-t pt-6 pb-3 border-b-2"
                    onSubmit={Submitreview}
                >
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={form.Name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={form.Email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Rating</label>
                    <Rating
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        size="large"
                    />

                    <label className="block font-medium mt-5 mb-1">Review Title</label>
                    <input
                        type="text"
                        name="Review_Title"
                        value={form.Review_Title}
                        onChange={handleChange}
                        placeholder="Give your review a title"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <label className="block font-medium mt-5 mb-1">Review</label>
                    <textarea
                        rows="5"
                        name="Review_msg"
                        value={form.Review_msg}
                        onChange={handleChange}
                        placeholder="Write your comments here"
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-6 bg-[#c19b5a] text-white px-5 py-2 rounded"
                    >
                        Submit Review
                    </button>

                    <button className="px-5 py-2 rounded text-[#c19b5a] hover:bg-[#c19b5a] hover:text-white border-2 border-[#c19b5a] ml-3" onClick={() => { setshowfrom(false) }}>
                        Cancel Review
                    </button>
                    
                </form>
            )}
        </>
    );
}

export default Addreviewfrom;