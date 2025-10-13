import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        
        {/* Company Info & Newsletter */}
        <div className="xs:col-span-2 lg:col-span-1">
          <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 sm:gap-6 lg:gap-4">
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.avif" 
                alt="Harvest Nexus Logo" 
                className="h-10 sm:h-12 lg:h-14 mb-3 lg:mb-4 transition-transform hover:scale-105" 
              />
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base leading-relaxed mb-4 lg:mb-6 text-green-50">
                Connecting farmers and buyers, ensuring fresh produce, and reducing waste.
              </p>

              {/* Newsletter */}
              <div className="w-full">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Join our newsletter</h3>
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-green-500 text-white bg-green-600/20 placeholder-green-200 focus:outline-none focus:border-white focus:bg-green-600/30 transition-all duration-200 text-sm sm:text-base"
                  />
                  <button className="bg-white text-green-700 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 text-sm sm:text-base whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base lg:text-lg">Quick links</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li>
              <Link to="/buyers" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Buyers
              </Link>
            </li>
            <li>
              <Link to="/farmers" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Farmers
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Logistics
              </Link>
            </li>
            <li>
              <Link to="/storage" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Storage facilities
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base lg:text-lg">Legal</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li>
              <Link to="/privacy-policy" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:underline text-green-50 hover:text-white transition-colors duration-200 block py-1">
                Return & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base lg:text-lg">Contact</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-2 sm:gap-3">
              <Mail size={16} className="flex-shrink-0 mt-0.5 text-green-200" />
              <span className="text-green-50 break-words">harvesthublimited@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Phone size={16} className="flex-shrink-0 text-green-200" />
              <span className="text-green-50">+23497812643245</span>
            </li>
            <li className="flex items-center gap-4 sm:gap-5 mt-3 sm:mt-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white text-green-200 hover:scale-110 transition-all duration-200 p-1.5 rounded-lg hover:bg-green-600"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white text-green-200 hover:scale-110 transition-all duration-200 p-1.5 rounded-lg hover:bg-green-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-600 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 text-center">
        <p className="text-xs sm:text-sm text-green-200">
          © 2025 <span className="font-semibold text-white">Harvest Nexus</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;