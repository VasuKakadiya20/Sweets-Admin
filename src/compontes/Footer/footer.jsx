import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-300 py-12 px-6 ">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c19b5a]">Dairy</h2>
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
            <h3 className="text-xl text-[#c19b5a] font-semibold">Explore</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><span className="font-semibold text-[#c19b5a]"><FaPhoneAlt /></span> +1 800 123 456 78</p>
              <p><span className="font-semibold text-[#c19b5a]"><FaMapMarkerAlt /></span> 5 Rue Dalou, 75015 Paris</p>
              <p><span className="font-semibold text-[#c19b5a]"><FaEnvelope /></span> Info@Dairy.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-[#c19b5a] font-semibold">Latest Posts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img src="https://www.anandsweets.in/cdn/shop/products/Doodhpeda.png?v=1740398096&width=713" alt="Post 1" className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="text-xs text-[#c19b5a]">Special Doodh Peda</p>
                  <p className="text-sm">This is Our Most Selling Product</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src="https://www.anandsweets.in/cdn/shop/products/KajuKatli.png?v=1747477294&width=493" alt="Post 2" className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="text-xs text-[#c19b5a] uppercase">Kaju Katli</p>
                  <p className="text-sm">This is Our Most Selling Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-800 pt-3 text-center text-gray-500 text-sm">
          &copy; 2025 Dairy. All Rights Reserved.
        </div>

      </footer>
    </>
  )
}

export default Footer