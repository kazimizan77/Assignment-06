import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-[#101727FF] px-4 md:px-6 pt-[90px] md:pt-[120px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 md:gap-12 items-start">
          <div className="xl:col-span-2 text-center md:text-left">
            <h2 className="text-white text-[32px] font-bold mb-3">DigiTools</h2>
            <p className="max-w-[320px] mx-auto md:mx-0 text-gray-400 leading-[1.6]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-[22px] font-semibold mb-4">
              Product
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Features
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Templates
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Integrations
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-[22px] font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                About
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Press
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-[22px] font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Community
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-[22px] font-semibold mb-4">
              Social Links
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#07112A] flex items-center justify-center hover:scale-105 transition"
              >
                <AiFillInstagram className="text-[16px]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#07112A] flex items-center justify-center hover:scale-105 transition"
              >
                <FaSquareFacebook className="text-[15px]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#07112A] flex items-center justify-center hover:scale-105 transition"
              >
                <RiTwitterXFill className="text-[15px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col items-center md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500">
            &copy; 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
