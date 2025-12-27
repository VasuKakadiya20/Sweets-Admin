// import React from 'react'
// import useScrollAnimation from '../useScrollAnimation'

// function Contectusbox() {
//     useScrollAnimation()
//     return (
//         <>
//             <section className="py-12 px-6 slideU bg-[#F4F1EA]">
//                 <div className="max-w-5xl mx-auto text-center shadow-2xl p-8 rounded-2xl bg-white">
//                     <p className="inline-block text-sm font-semibold tracking-widest text-[#E09F40] mb-6 border-l-4 border-[#E09F40] pl-3">
//                         OUR CONTACTS
//                     </p>

//                     <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input
//                             type="text"
//                             placeholder="Your name"
//                             className="border border-gray-700 text-gray-700 rounded-full px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Your email"
//                             className="border border-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
//                         />
//                         <textarea
//                             placeholder="Message"
//                             rows="4"
//                             className="md:col-span-2 border border-gray-700 rounded-2xl px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
//                         ></textarea>
//                         <button
//                             type="submit"
//                             className="md:col-span-2 mx-auto border-1 border-[#E09F40] text-[#E09F40] rounded-full px-8 py-3  transition "
//                         >
//                             SUBMIT{/*hover:bg-[#f5c37a] hover:text-white */}
//                         </button>
//                     </form>
                    
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Contectusbox

import React from "react";
import foodImage from "../../assets/Contect_box.jpg";

export default function ContactSection() {
  return (
    <section className="bg-[#F4F1EA] py-16">
      <div className= "px-10 lg:px-0 lg:pr-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={foodImage}
            alt="Delicious Food"
            className="rounded-[0%_50%_50%_0%] w-[933px] h-[634px] hidden lg:block object-cover"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm md:h-[540px]">
          <h3 className="text-3xl font-bold mb-6 mt-3">Get In Touch</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E09F40] w-full h-[50px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E09F40] w-full h-[50px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E09F40] w-full h-[50px]"
              />
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E09F40] w-full h-[50px]">
                <option>Subject</option>
                <option>Order Inquiry</option>
                <option>Complain</option>
                <option>Greetings</option>
                <option>Expire Date</option>
                <option>About Price</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              placeholder="Write your message here..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E09F40] w-full h-42 resize-none"
            ></textarea>

            {/* <div className="flex items-center space-x-2 mt-3">
              <input
                type="checkbox"
                className="accent-[#E09F40] w-4 h-4"
              />
              <span className="text-gray-500 text-sm">
                Collaboratively formulate principle capital. Progressively evolve user
              </span>
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#E09F40] text-white py-3 rounded-md font-semibold hover:bg-[#cf8f32] transition flex items-center justify-center gap-2 mt-4 btn-viewall"
            >
              SUBMIT NOW <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
