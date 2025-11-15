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
    <nav className="bg-white/90 rounded-3xl shadow-subtle mx-auto max-w-6xl relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-1.5">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.avif"
              alt="Harvest Nexus Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/buyer"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Buyer
            </Link>
            <Link
              to="/farmer"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Farmer
            </Link>

            <div className="relative group flex items-center">
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 flex items-center transition-colors duration-200"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1 text-gray-700 group-hover:text-green-600 transition-colors duration-200"
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
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-64 rounded-lg border border-gray-200 z-20 overflow-hidden">
                <Link
                  to="/service1"
                  className="block text-gray-700 hover:text-green-600 px-8 py-4 transition-all duration-200 relative group/item"
                >
                  <span className="relative z-10">Logistics</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-10 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
                <Link
                  to="/service2"
                  className="block text-gray-700 hover:text-green-600 px-8 py-4 transition-all duration-200 relative group/item"
                >
                  <span className="relative z-10">Storage Facilities</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-10 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
              </div>
            </div>

            <div className="relative group flex items-center">
              <Link
                to="/resources"
                className="text-gray-700 hover:text-green-600 flex items-center transition-colors duration-200"
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1 text-gray-700 group-hover:text-green-600 transition-colors duration-200"
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
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-56 rounded-lg border border-gray-200 z-20 overflow-hidden">
                <Link
                  to="/faq"
                  className="block text-gray-700 hover:text-green-600 px-8 py-4 transition-all duration-200 relative group/item"
                >
                  <span className="relative z-10">FAQS</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-10 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex space-x-3 text-sm">
          <Link
            to="/login"
            className="bg-white text-green-600 px-4 py-1.5 rounded-md border border-green-600 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-[#AD895F] hover:shadow-lg transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>
        <button
          className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none transition-colors duration-200"
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
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 rounded-b-2xl">
          <Link
            to="/"
            className="block text-center text-gray-700 hover:text-green-600 hover:bg-green-50 py-4 transition-all duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/buyer"
            className="block text-center text-gray-700 hover:text-green-600 hover:bg-green-50 py-4 transition-all duration-200"
            onClick={toggleMenu}
          >
            Buyer
          </Link>
          <Link
            to="/farmer"
            className="block text-center text-gray-700 hover:text-green-600 hover:bg-green-50 py-4 transition-all duration-200"
            onClick={toggleMenu}
          >
            Farmer
          </Link>


          <div className="block text-center">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-gray-700 hover:text-green-600 hover:bg-green-50 py-4 focus:outline-none transition-all duration-200"
            >
              Services
            </button>
            {openDropdown === "services" && (
              <div className="bg-gray-50">
                <Link
                  to="/service1"
                  className="block text-gray-700 hover:text-green-600 py-4 transition-all duration-200 relative group/item"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">Logistics</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-12 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
                <Link
                  to="/service2"
                  className="block text-gray-700 hover:text-green-600 py-4 transition-all duration-200 relative group/item"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">Storage Facilities</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-12 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
              </div>
            )}
          </div>
          <div className="block text-center">
            <button
              onClick={() => toggleDropdown("resources")}
              className="w-full text-gray-700 hover:text-green-600 hover:bg-green-50 py-4 focus:outline-none transition-all duration-200"
            >
              Resources
            </button>
            {openDropdown === "resources" && (
              <div className="bg-gray-50">
                <Link
                  to="/faq"
                  className="block text-gray-700 hover:text-green-600 py-4 transition-all duration-200 relative group/item"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10">FAQS</span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-12 w-4/5 bg-green-50 rounded-lg scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center"></div>
                </Link>
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-3 px-4 py-4 border-t border-gray-200">
            <Link
              to="/login"
              className="bg-white text-green-600 px-4 py-2 rounded-md border border-green-600 hover:bg-green-600 hover:text-white hover:border-green-700 flex-1 text-center transition-all duration-200"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 hover:shadow-lg flex-1 text-center transition-all duration-200"
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