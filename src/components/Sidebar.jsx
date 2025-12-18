import React from "react";
import { Link } from "react-router-dom";
import {
  X,
  Home,
  ShoppingBag,
  Grid,
  HelpCircle,
  Info,
  Phone,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col gap-1 px-2">
              <NavItem
                to="/"
                icon={<Home size={20} />}
                label="Home"
                onClose={onClose}
              />
              <NavItem
                to="/shop"
                icon={<ShoppingBag size={20} />}
                label="Shop"
                onClose={onClose}
              />
              <NavItem
                to="/categories"
                icon={<Grid size={20} />}
                label="Categories"
                onClose={onClose}
              />
              <div className="my-2 border-t border-gray-100" />
              <NavItem
                to="/about"
                icon={<Info size={20} />}
                label="About"
                onClose={onClose}
              />
              <NavItem
                to="/faqs"
                icon={<HelpCircle size={20} />}
                label="FAQs"
                onClose={onClose}
              />
              <NavItem
                to="/contact"
                icon={<Phone size={20} />}
                label="Contact"
                onClose={onClose}
              />
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="text-xs text-gray-500 text-center">
              &copy; 2024 Prompt Print Shop
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ to, icon, label, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200 group"
    >
      <span className="text-gray-400 group-hover:text-purple-500 transition-colors">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}

export default Sidebar;
