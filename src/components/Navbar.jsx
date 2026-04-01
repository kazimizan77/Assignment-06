import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import cartIcon from "../assets/products/shopping-cart.png";

function Navbar({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto h-[72px] md:h-[92px] px-4 md:px-6 flex items-center justify-between">
        <div>
          <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#7C3AED]">
            DigiTools
          </h1>
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] xl:text-[16px] text-[#101727] font-semibold">
          <li className="cursor-pointer hover:text-[#7C3AED] transition">
            Products
          </li>
          <li className="cursor-pointer hover:text-[#7C3AED] transition">
            Features
          </li>
          <li className="cursor-pointer hover:text-[#7C3AED] transition">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-[#7C3AED] transition">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-[#7C3AED] transition">
            FAQ
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <div className="relative cursor-pointer shrink-0">
            <img src={cartIcon} className="w-4 h-4" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] rounded-full bg-[#7C3AED] text-white text-[10px] flex items-center justify-center px-1">
                {cart.length}
              </span>
            )}
          </div>

          <button className="hidden sm:block text-[14px] md:text-[16px] text-[#101727] font-semibold hover:text-[#7C3AED] transition cursor-pointer">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white text-[12px] sm:text-[14px] md:text-[16px] font-semibold px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-md hover:scale-105 duration-200 font-[Inter] cursor-pointer whitespace-nowrap">
            Get Started
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#101727] text-[28px] cursor-pointer"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
          <ul className="flex flex-col px-4 py-4 text-[#101727] font-semibold text-[15px]">
            <li className="py-3 border-b border-gray-100 cursor-pointer hover:text-[#7C3AED] transition">
              Products
            </li>
            <li className="py-3 border-b border-gray-100 cursor-pointer hover:text-[#7C3AED] transition">
              Features
            </li>
            <li className="py-3 border-b border-gray-100 cursor-pointer hover:text-[#7C3AED] transition">
              Pricing
            </li>
            <li className="py-3 border-b border-gray-100 cursor-pointer hover:text-[#7C3AED] transition">
              Testimonials
            </li>
            <li className="py-3 cursor-pointer hover:text-[#7C3AED] transition">
              FAQ
            </li>

            <button className="sm:hidden mt-4 text-left text-[#101727] font-medium hover:text-[#7C3AED] transition">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
