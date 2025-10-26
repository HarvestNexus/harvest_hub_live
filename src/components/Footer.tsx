import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <img src="/images/logo.avif" alt="Harvest Nexus Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            Connecting farmers and buyers, ensuring fresh produce, and reducing waste.
          </p>


          <div>
            <h3 className="font-semibold mb-2">Join our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-5 rounded-md border border-gray-200 text-gray-900 bg-transparent placeholder-gray-300 focus:outline-none focus:border-white text-base"
              />
              <button className="bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 text-sm whitespace-nowrap h-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/buyers" className="hover:underline">Buyers</Link></li>
            <li><Link to="/farmers" className="hover:underline">Farmers</Link></li>
            <li><Link to="/marketplace" className="hover:underline">Marketplace</Link></li>
            <li><Link to="/logistics" className="hover:underline">Logistics</Link></li>
            <li><Link to="/storage" className="hover:underline">Storage facilities</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Return & Refund Policy</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>harvesthublimited@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+23497812643245</span>
            </li>
            <li className="flex items-center gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-600 mt-8 pt-4 text-center text-sm">
        © 2025 <span className="font-semibold">Harvest Nexus</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;