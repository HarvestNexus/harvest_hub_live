import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-2 xs:top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] xs:w-[97%] sm:w-[96%] md:w-[95%] lg:w-[94%] xl:w-[92%] bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
      <div className="flex justify-between items-center px-4 xs:px-5 sm:px-6 md:px-8 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/images/logo.avif"
              alt="Harvest Nexus Logo"
              className="h-8 xs:h-9 sm:h-10 md:h-11 rounded transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Home
            </Link>
            <Link 
              to="/buyer" 
              className="text-gray-800 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Buyer
            </Link>
            <Link 
              to="/farmer" 
              className="text-green-600 font-semibold transition-colors duration-200 text-sm lg:text-base"
            >
              Farmer
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base">
                Services
                <svg
                  className="w-3 h-3 xs:w-4 xs:h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white/95 backdrop-blur-md shadow-xl mt-2 w-48 rounded-xl border border-gray-200 overflow-hidden">
                <Link
                  to="/service1"
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100"
                >
                  Logistics
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  Storage Facilities
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base">
                Resources
                <svg
                  className="w-3 h-3 xs:w-4 xs:h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white/95 backdrop-blur-md shadow-xl mt-2 w-40 rounded-xl border border-gray-200 overflow-hidden">
                <Link
                  to="/resource1"
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <Link
            to="/login"
            className="px-4 lg:px-5 py-1.5 lg:py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 text-sm lg:text-base font-medium hover:shadow-lg hover:-translate-y-0.5"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 lg:px-5 py-1.5 lg:py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200 text-sm lg:text-base font-medium hover:shadow-lg hover:-translate-y-0.5"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 xs:w-7 xs:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl px-5 sm:px-6 py-4 shadow-xl">
          {/* Links */}
          <Link to="/" className="block py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 border-b border-gray-100" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/buyer" className="block py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 border-b border-gray-100" onClick={closeMenu}>
            Buyer
          </Link>
          <Link to="/farmer" className="block py-3 text-green-600 font-semibold transition-colors duration-200 border-b border-gray-100" onClick={closeMenu}>
            Farmer
          </Link>

          {/* Services Dropdown */}
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              onClick={() => toggleDropdown("services")}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 pb-2">
                <Link to="/service1" className="block py-2 text-gray-600 hover:text-green-600 transition-colors duration-200" onClick={closeMenu}>
                  Logistics
                </Link>
                <Link to="/service2" className="block py-2 text-gray-600 hover:text-green-600 transition-colors duration-200" onClick={closeMenu}>
                  Storage Facilities
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="border-b border-gray-100">
            <button
              className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              onClick={() => toggleDropdown("resources")}
            >
              Resources
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "resources" && (
              <div className="pl-4 pb-2">
                <Link to="/resource1" className="block py-2 text-gray-600 hover:text-green-600 transition-colors duration-200" onClick={closeMenu}>
                  FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col xs:flex-row justify-center space-y-3 xs:space-y-0 xs:space-x-3">
            <Link
              to="/login"
              className="px-5 py-2.5 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 text-center font-medium hover:shadow-lg"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-200 text-center font-medium hover:shadow-lg"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;