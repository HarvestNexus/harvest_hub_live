import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Correct import

const Signup: React.FC = () => {
  const roles = ["Buyer", "Farmer", "Logistics", "Storage Facilities"];

  return (
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 h-full bg-white rounded-r-3xl shadow-lg overflow-hidden relative flex items-center justify-center">
        <img
          src="/images/onboarding.jpeg"
          alt="Farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-4 left-4">
          <img
            src="/images/logo.avif"
            alt="Harvest Nexus Logo"
            className="h-12 rounded"
          />
        </div>

        {/* ✅ Fixed Back Button */}
        <div className="absolute top-4 right-4">
          <Link
            to="/"
            className="flex items-center gap-1 bg-white/80 hover:bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition"
          >
            <ArrowLeft size={16} />
            Back to website
          </Link>
        </div>

        <div className="relative z-10 text-center text-white drop-shadow-md">
          <h1 className="text-5xl font-bold mb-2">Hello</h1>
          <p className="text-xl font-medium">Welcome To Harvest Nexus</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Choose Your Role</h2>
          <p className="text-gray-500 mb-8 text-base">
            Choose your role to get started
          </p>

          <div className="flex flex-col gap-4">
            {roles.map((role) => (
              <button
                key={role}
                className="border border-gray-300 rounded-lg px-10 py-3 text-gray-700 text-lg hover:bg-green-600 hover:text-white transition font-medium"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
