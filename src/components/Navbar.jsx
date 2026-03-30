import cartIcon from "../assets/products/shopping-cart.png";

function Navbar({ cartCount }) {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-400 mx-auto h-23 px-4 md:px-6 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#7C3AED]">
            DigiTools
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[16px] text-[#101727FF] font-semibold">
          <li className="cursor-pointer hover:text-[#7C3AED]">Products</li>
          <li className="cursor-pointer hover:text-[#7C3AED]">Features</li>
          <li className="cursor-pointer hover:text-[#7C3AED]">Pricing</li>
          <li className="cursor-pointer hover:text-[#7C3AED]">Testimonials</li>
          <li className="cursor-pointer hover:text-[#7C3AED]">FAQ</li>
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="cart" className="w-5 h-5" />

            <span className="absolute -top-2 -right-2 min-w-4.5 h-4.5 rounded-full bg-[#7C3AED] text-white text-[10px] flex items-center justify-center px-1">
              {cartCount}
            </span>
          </div>

          <button className="text-[16px] text-[#374151] font-medium hover:text-[#7C3AED] cursor-pointer">
            Login
          </button>

          <button className="bg-linear-to-r from-[#6D28D9] to-[#9333EA] text-white text-[15px] font-semibold px-5 py-3 rounded-full shadow-md hover:scale-105 duration-200 font-[Inter] cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
