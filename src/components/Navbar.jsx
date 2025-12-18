import { ChevronDown, Menu, Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Form, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 pb-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" >
          {/* --------------------------Left: Menu------------------------------------------------ */}
          <div className="">
            <button>
              <Menu />
            </button>
          </div>
          {/* --------------------------Left: Menu------------------------------------------------ */}

          {/* --------------------------Center: Shop name------------------------------------------ */}
          <div>
            <span>Promt Print Shop</span>
          </div>
          {/* --------------------------Center: Shop name------------------------------------------ */}

          {/* ---------------------------Right: Link and cart-------------------------------------- */}
          <div>
            <a href="About"></a>
            <a href="FAQs"></a>
            <button>
              <ShoppingBag />
            </button>
            <Link>Sign In</Link>
            <Link>Sign Out</Link>
          </div>
          {/* ---------------------------Right: Link and cart-------------------------------------- */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
