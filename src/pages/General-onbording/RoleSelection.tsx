
import { ArrowLeft } from "lucide-react";

interface RoleSelectionProps {
  isLogin?: boolean; // false = signup, true = login
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ isLogin = false }) => {
  const roles = ["Buyer", "Farmer", "Logistics", "Storage Facilities"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-white rounded-r-3xl shadow-lg overflow-hidden relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600456899121-8a3fa2b0c94e?auto=format&fit=crop&w=800&q=80"
          alt="Farm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <img
            src="/logo.png"
            alt="Harvest Nexus Logo"
            className="w-10 h-10 rounded"
          />
        </div>
        <div className="absolute top-4 right-4">
          <button className="flex items-center gap-1 bg-white/80 hover:bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition">
            <ArrowLeft size={16} />
            Back to website
          </button>
        </div>
        <div className="relative z-10 text-center text-white drop-shadow-md">
          <h1 className="text-4xl font-bold mb-2">Hello</h1>
          <p className="text-lg font-medium">
            {isLogin
              ? "Welcome Back To Harvest Nexus"
              : "Welcome To Harvest Nexus"}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Choose Your Role</h2>
          <p className="text-gray-500 mb-6">
            Choose your role to {isLogin ? "login" : "get started"}
          </p>
          <div className="flex flex-col gap-4">
            {roles.map((role) => (
              <button
                key={role}
                className="border border-gray-300 rounded-lg px-8 py-2 text-gray-700 hover:bg-green-600 hover:text-white transition font-medium"
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

export default RoleSelection;
