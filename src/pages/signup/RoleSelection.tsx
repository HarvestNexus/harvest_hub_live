import React from "react";
import RoleCard from "./RoleCard";
import { useNavigate } from "react-router-dom";
import SignUpNav from "./SignUpNav"

const roles = ["Buyer", "Farmer", "Logistics", "Storage Facilities"];

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (role: string) => {
    navigate(`/signup/form?role=${encodeURIComponent(role)}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-100 ">
      {/* LEFT SIDE IMAGE */}
      <div className="md:w-1/2 w-full  relative">
        <img
          src="/images/signup/farm-bg.avif"
          alt="Farm"
          className="w-full h-full object-cover"
        />
        {/*<SignUpNav />*/}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center  items-center text-white">
          <h1 className="text-4xl font-bold">Hello</h1>
          <p className="text-lg mt-2">Welcome To Harvest Nexus</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center w-full px-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl font-bold mb-2">Choose Your Role</h2>
        <p className="text-gray-600 mb-8">Choose your role to get started</p>

        </div>
        <div className="flex flex-col gap-4 max-w-sm  w-full">
          {roles.map((role) => (
            <RoleCard key={role} label={role} onClick={() => handleSelect(role)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
