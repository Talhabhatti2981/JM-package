import React from "react";
import cartIcon from "../assets/img/cart-9-xxl.png";

const Navbar = () => {
  return (
    <nav className="bg-[#D0324B] px-4 py-3 sm:px-6 md:px-10 flex items-center justify-around">
      <button className="text-white cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="mt-3 sm:mt-0">
        <button className="flex items-center gap-2 bg-white cursor-pointer text-[#D0324B] px-4 py-2 shadow hover:bg-[#f5f5f5] transition">
          <img src={cartIcon} alt="Cart" className="w-5 h-5" />
          <span className="text-sm font-medium">Cart</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
