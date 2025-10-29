"use client";

import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D1117] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-extrabold tracking-tight text-white cursor-pointer">
          Style<span className="text-pink-600">Hub</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {["Home", "Collections", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-pink-600 transition-colors duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-5 text-gray-300">
          <Search className="w-5 h-5 cursor-pointer hover:text-pink-600 transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-pink-600 transition" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-pink-600 transition" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1117] border-t border-gray-700 shadow-lg animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-300 font-medium">
            {["Home", "Collections", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-pink-600 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 pb-4 text-gray-300">
            <Search className="w-5 h-5 cursor-pointer hover:text-pink-600" />
            <User className="w-5 h-5 cursor-pointer hover:text-pink-600" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
