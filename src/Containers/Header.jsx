import { FaUser, FaShoppingCart, FaQuestionCircle, FaSearch, FaBars } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 mb-20">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-16 py-2 text-sm text-gray-700">
        <div className="flex gap-4">
          <Link to="/" className="hover:text-orange-600 flex items-center">
            <FaUser className="mr-1" /> Login / Sign Up
          </Link>to
          <Link to="/" className="hover:text-orange-600 flex items-center">
            <FaQuestionCircle className="mr-1" /> Help
          </Link>to
          <Link to="/" className="hover:text-orange-600 flex items-center">
            <FaShoppingCart className="mr-1" /> Cart (0)
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 lg:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">MyStore</Link>to

        {/* Search Bar */}
        <div className="flex flex-1 mx-4 max-w-2xl border border-gray-300 rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search products, brands and categories" 
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-orange-600 px-4 py-2 text-white">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-orange-600">
            <FaUser className="text-xl" />
          </Link>to
          <Link to ="/" className="hover:text-orange-600">
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">
          <FaBars />
        </button>
      </div>

    </header>
  );
};

export default Header;