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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.avif"
              alt="Harvest Nexus Logo"
              className="h-10 rounded"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/buyer" className="text-gray-800 hover:text-green-600 font-medium">
              Buyer
            </Link>
            <Link to="/farmer" className="text-green-600 font-semibold">
              Farmer
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium">
                Services
                <svg
                  className="w-4 h-4 ml-1"
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
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-48 rounded-md border border-gray-200">
                <Link
                  to="/service1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logistics
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Storage Facilities
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium">
                Resources
                <svg
                  className="w-4 h-4 ml-1"
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
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-40 rounded-md border border-gray-200">
                <Link
                  to="/resource1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/login"
            className="px-5 py-1.5 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-1.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
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
        <div className="md:hidden bg-white border-t border-gray-200 rounded-b-2xl px-6 py-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-green-600" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/buyer" className="block py-2 text-gray-700 hover:text-green-600" onClick={toggleMenu}>
            Buyer
          </Link>
          <Link to="/farmer" className="block py-2 text-gray-700 hover:text-green-600" onClick={toggleMenu}>
            Farmer
          </Link>

          {/* Services Mobile Dropdown */}
          <button
            className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-green-600"
            onClick={() => toggleDropdown("services")}
          >
            Services
            <svg
              className="w-4 h-4"
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
            <div className="pl-4">
              <Link to="/service1" className="block py-2 text-gray-600 hover:text-green-600" onClick={toggleMenu}>
                Logistics
              </Link>
              <Link to="/service2" className="block py-2 text-gray-600 hover:text-green-600" onClick={toggleMenu}>
                Storage Facilities
              </Link>
            </div>
          )}

          {/* Resources Mobile Dropdown */}
          <button
            className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-green-600"
            onClick={() => toggleDropdown("resources")}
          >
            Resources
            <svg
              className="w-4 h-4"
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
            <div className="pl-4">
              <Link to="/resource1" className="block py-2 text-gray-600 hover:text-green-600" onClick={toggleMenu}>
                FAQs
              </Link>
            </div>
          )}

          {/* Mobile Buttons */}
          <div className="mt-4 flex justify-center space-x-3">
            <Link
              to="/login"
              className="px-5 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              onClick={toggleMenu}
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
