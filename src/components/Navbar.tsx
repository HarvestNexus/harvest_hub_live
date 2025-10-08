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
    <nav className="bg-white rounded-lg shadow-sm mx-auto max-w-4xl">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 my-2">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.avif"
              alt="Harvest Nexus Logo"
              className="h-12"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link to="/buyer" className="text-gray-700 hover:text-green-600">
              Buyer
            </Link>
            <Link to="/farmer" className="text-gray-700 hover:text-green-600">
              Farmer
            </Link>
            <div className="relative group flex items-center">
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 flex items-center"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1 text-gray-700 group-hover:text-green-600"
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
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-56 rounded-md border border-gray-200 z-20">
                <Link
                  to="/services"
                  className="block text-gray-700 hover:text-green-600 px-4 py-3"
                >
                  Logistics
                </Link>
                <Link
                  to="/service2"
                  className="block text-gray-700 hover:text-green-600 px-4 py-3"
                >
                  Storage Facilities
                </Link>
              </div>
            </div>
            <div className="relative group flex items-center">
              <Link
                to="/resources"
                className="text-gray-700 hover:text-green-600 flex items-center"
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1 text-gray-700 group-hover:text-green-600"
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
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-1 w-56 rounded-md border border-gray-200 z-20">
                <Link
                  to="/resource1"
                  className="block text-gray-700 hover:text-green-600 px-4 py-3"
                >
                  FAQS
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-green-600 px-5 py-2 rounded-md border border-green-600 hover:bg-green-700 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>

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
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            to="/"
            className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/buyer"
            className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
            onClick={toggleMenu}
          >
            Buyer
          </Link>
          <Link
            to="/farmer"
            className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
            onClick={toggleMenu}
          >
            Farmer
          </Link>
          <div>
            <div className="flex justify-center items-center gap-1 py-2 px-4">
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <button
                onClick={() => toggleDropdown("services")}
                className="focus:outline-none"
              >
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
            </div>
            {openDropdown === "services" && (
              <div className="bg-gray-50">
                <Link
                  to="/service1"
                  className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
                  onClick={toggleMenu}
                >
                  Logistics
                </Link>
                <Link
                  to="/service2"
                  className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
                  onClick={toggleMenu}
                >
                  Storage Facilities
                </Link>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-center items-center gap-1 py-2 px-4">
              <Link
                to="/resources"
                className="text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Resources
              </Link>
              <button
                onClick={() => toggleDropdown("resources")}
                className="focus:outline-none"
              >
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
            </div>
            {openDropdown === "resources" && (
              <div className="bg-gray-50">
                <Link
                  to="/resource1"
                  className="flex justify-center items-center text-gray-700 hover:text-green-600 py-2 px-4"
                  onClick={toggleMenu}
                >
                  FAQS
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-center space-x-4 px-4 py-3">
            <Link
              to="/login"
              className="bg-white text-green-600 px-5 py-2 rounded-md border border-green-600 hover:bg-green-700 hover:text-white flex-1 text-center"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex-1 text-center"
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
