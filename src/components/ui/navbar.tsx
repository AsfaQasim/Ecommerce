"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";  // Import the dropdown icon
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility on small screens
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-slate-50 max-w-full">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Hamburger Menu for Small Screens */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="p-2" onClick={handleMenuToggle}>
            <GiHamburgerMenu className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${menuOpen ? "block" : "hidden"}`}
          >
            <li>
              <Link href="/">
                <span className="font-bold hover:text-myOrange">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">Women</Link>
              <ul className="p-2">
                <li><Link href="/tops">Tops</Link></li>
                <li><Link href="/pants">Pants</Link></li>
              </ul>
            </li>
            <li><Link href="/accessories" className="hover:text-myOrange">Accessories/Jewellery</Link></li>
            <li><Link href="/shoes" className="hover:text-myOrange">Shoes</Link></li>
            <li><Link href="/contact" className="hover:text-myOrange">Contact</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/Aq_logo.jpg"
            alt="logo"
            className="ml-4 cursor-pointer"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">
          {/* Highlighted "Home" Link */}
          <li>
            <Link href="/">
              <span className="font-bold hover:text-myOrange">Home</span>
            </Link>
          </li>
          <li tabIndex={0}>
            {/* "Women" Link with Dropdown Icon */}
            <Link href="#">
              <span className="hover:text-myOrange">Women</span> 
              <AiOutlineDown className="ml-2 text-xl" />
            </Link>
            <ul className="p-2 bg-slate-50 shadow-md">
              <li><Link href="/tops" className="hover:text-myOrange">Tops</Link></li>
              <li><Link href="/pants" className="hover:text-myOrange">Pants</Link></li>
            </ul>
          </li>
          <li><Link href="/accessories" className="hover:text-myOrange">Accessories/Jewellery</Link></li>
          <li><Link href="/shoes" className="hover:text-myOrange">Shoes</Link></li>
          <li><Link href="/contact" className="hover:text-myOrange">Contact</Link></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* Cart Icon */}
        <Link href="/cart">
          <div className="btn btn-ghost btn-circle cursor-pointer hover:bg-myOrange duration-300">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
