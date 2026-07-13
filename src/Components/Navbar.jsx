import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

function Navbar() {

  const {cart} = useCart();
  return (
    <nav className="w-full bg-[#141412] border-b border-[#2A2A26]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#F5F3EC] font-semibold text-xl tracking-tight">
              My<span className="text-[#C9A15C]">-</span>Store
            </span>
          </Link>

          {/* Home link */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              to="/"
              className="text-[#F5F3EC] text-sm font-medium tracking-wide uppercase relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C9A15C] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-white flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#ecece4] transition-colors duration-200"
          >
            Card
            <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#e59b1a] text-[#141412] text-[11px] font-bold leading-none">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
