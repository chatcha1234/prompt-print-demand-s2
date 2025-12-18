import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
// import { Home, ShoppingBag ,Grid,HelpCircle,Info,User } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
