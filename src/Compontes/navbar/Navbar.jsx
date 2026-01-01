import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../../assets/Logo_Marvel.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const activeLink = "relative text-[#713722] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#713722] border-b-3 border-[#713722]";
  const normalLink = "hover:text-[#713722]";

  return (
    <>
      <nav className="w-full bg-[#fbf8f4] border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-3xl"></span>
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-22 w-full" />
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              Home
            </NavLink>

            <NavLink to="/Chikki" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              Chikki
            </NavLink>

            <NavLink to="/Order" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              Order List
            </NavLink>

            <NavLink to="/Additem" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              Add Chikki
            </NavLink>
          </ul>

          <div className="hidden md:flex items-center">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:text-[#713722]"
              onClick={() => { navigate("/profile"); }
              }>
              <FaUserAlt className="h-10" />
            </button>
          </div>

          <button className="mr-3 md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </NavLink>
            <NavLink to="/Chikki" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              Chikki
            </NavLink>
            <NavLink to="/Order" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              Order List
            </NavLink>
            <NavLink to="/Additem" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              Add Chikki
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              Account
            </NavLink>
          </ul>
        )}
      </nav>
    </>
  );
}