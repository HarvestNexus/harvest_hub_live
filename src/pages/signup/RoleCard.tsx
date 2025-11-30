import React from "react";

interface RoleCardProps {
  label: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="border w-full py-3 rounded-md hover:bg-gray-100 transition font-medium w-full"
  >
    {label}
  </button>
);

export default RoleCard;
