import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/Logo_Marvel.png"
import Chocolate_Chikki from "../../assets/Choclete chikki.png"
import Pista_Chocolate_Chikki from "../../assets/Pista Chikki.png"

function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-300 py-12 px-6 ">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-5">

          <div className="space-y-4">
            <img src={Logo} alt='Logo' className='h-24'/>
            <p className="text-gray-400 text-sm">
             Crafting premium Indian sweets with tradition and love. Freshly made every day for unforgettable taste.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://x.com/" className="hover:text-[#c19b5a]"><FaTwitter /></a>
              <a href="https://www.facebook.com/" className="hover:text-[#c19b5a]"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" className="hover:text-[#c19b5a]"><FaInstagram /></a>
              <a href="https://telegram.org/" className="hover:text-[#c19b5a]"><FaPaperPlane /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-[#E09F40] font-semibold">Explore</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className='gap-2'><span className="font-semibold text-[#E09F40]"><FaPhoneAlt /></span> +91 99461 37919</p>
              <p className='gap-2'><span className="font-semibold text-[#E09F40]"><FaMapMarkerAlt /></span> 34 Gandhi Road,Surat.</p>
              <p className='gap-2'><span className="font-semibold text-[#E09F40]"><FaEnvelope /></span> Info@MarvelCrunch.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-[#E09F40] font-semibold">Latest Posts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img src={Chocolate_Chikki} alt="Post 1" className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="text-xs text-[#E09F40]">Chocolate Chikki</p>
                  <p className="text-sm">This is Our Most Selling Product</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src={Pista_Chocolate_Chikki} alt="Post 2" className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="text-xs text-[#E09F40] uppercase">Pista Chocolate Chikki</p>
                  <p className="text-sm">This is Our Most Selling Product</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=" border-t border-gray-800 pt-3 text-center text-gray-500 text-sm">
          &copy; 2025 Marvel Crunch. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer