import { ChevronDown, Menu, Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 right-0">
      <div className="w-full">
        <div className="w-full flex justify-between items-center h-16">
          {/* --------------------------Start Left: Menu------------------------------------------------ */}
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          {/* --------------------------End Left: Menu------------------------------------------------ */}

          {/* --------------------------Start Center: Shop name------------------------------------------ */}
          <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <span className="text-lg font-bold whitespace-nowrap">
              Prompt Print Shop
            </span>
          </div>
          {/* --------------------------End Center: Shop name------------------------------------------ */}

          {/* ---------------------------Start Right: Link and cart-------------------------------------- */}
          <div className="flex items-center gap-6 absolute right-4">
            <Link to="/about" className="text-sm">
              About
            </Link>
            <Link to="/faqs" className="text-sm">
              FAQs
            </Link>
            <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100">
              <ShoppingBag />
            </button>
            <Link
              to="/sign-in"
              className="rounded-full bg-black text-white border border-black px-2 py-1 hover:bg-white hover:text-black"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="rounded-full bg-white text-black border border-black px-2 py-1 hover:bg-black hover:text-white"
            >
              Register
            </Link>
          </div>
          {/* ---------------------------End Right: Link and cart-------------------------------------- */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
