import React from "react";

export default function Contectusbox() {
    return (
        <div className="flex justify-center py-16 px-4">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl/30 p-10">
                <h2 className="text-center text-sm font-semibold tracking-widest text-[#c19b5a] mb-10">
                    <span className="border-l-4 border-[#c19b5a] pl-3">OUR CONTACTS </span>
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="border border-gray-300 text-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="border border-gray-300 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="md:col-span-2 border border-gray-300 rounded-2xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                    ></textarea>
                    <button
                        type="submit"
                        className="md:col-span-2 mx-auto border border-[#c19b5a] text-[#c19b5a] rounded-full px-8 py-3 hover:bg-[#c19b5a] hover:text-white transition "
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}

