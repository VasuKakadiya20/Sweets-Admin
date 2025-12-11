import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
// import Cartsidebar from "../cartsidebar/cartsidebar";
// import AuthDialog from "../login/login";
// import { mycontext } from "../../App";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [openAuth, setOpenAuth] = useState(false);
  // const context = useContext(mycontext)
  const navigate = useNavigate();
  const activeLink = "relative text-[#c19b5a] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#c19b5a] border-b-3 border-[#c19b5a]";
  const normalLink = "hover:text-[#c19b5a]";

  return (
    <>
      <nav className="w-full bg-[#fbf8f4] border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-3xl"></span>
            <h1 className="text-xl tracking-[0.3em] font-normal text-gray-900">
              Dairy
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              HOME
            </NavLink>

            <NavLink to="/items" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              ITEMS
            </NavLink>
            <NavLink to="/Additem" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
             ADD ITEMS
            </NavLink>

          </ul>

          <div className="hidden md:flex items-center">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:text-[#c19b5a]"
              onClick={() => { navigate("/profile"); }
              }>
              <FaUserAlt className="h-10" />
            </button>
          </div>

          <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              HOME
            </NavLink>

            <NavLink to="/items" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              ITEMS
            </NavLink>
            <NavLink to="/Additem" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
             ADD ITEMS
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
            ACCOUNT
            </NavLink>

          </ul>
        )}

      </nav>
      {/* {
        context.islogin === false && (
          <AuthDialog open={openAuth} setOpen={setOpenAuth} />
        )
      } */}
    </>
  );
}