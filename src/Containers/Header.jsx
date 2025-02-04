import { useState } from "react";
import { FaUser, FaShoppingCart, FaQuestionCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-16 py-2 text-sm text-gray-700">
        <div className="flex gap-4">
          <Link to="/signup" className="hover:text-orange-600 flex items-center">
            <FaUser className="mr-1" /> Login / Sign Up
          </Link>
          <Link to="/" className="hover:text-orange-600 flex items-center">
            <FaQuestionCircle className="mr-1" /> Help
          </Link>
          <Link to="/cart" className="hover:text-orange-600 flex items-center">
            <FaShoppingCart className="mr-1" /> Cart (0)
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 lg:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">MyStore</Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 max-w-2xl border border-gray-300 rounded-lg overflow-hidden">
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
          <Link to="/profile" className="hover:text-orange-600">
            <FaUser className="text-xl" />
          </Link>
          <Link to="/cart" className="hover:text-orange-600">
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="md:hidden bg-white border-t border-gray-200 shadow-md absolute w-full left-0 top-full"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <Link to="/signup" className="flex items-center text-gray-700 hover:text-orange-600">
                <FaUser className="mr-2" /> Login / Sign Up
              </Link>
              <Link to="/" className="flex items-center text-gray-700 hover:text-orange-600">
                <FaQuestionCircle className="mr-2" /> Help
              </Link>
              <Link to="/cart" className="flex items-center text-gray-700 hover:text-orange-600">
                <FaShoppingCart className="mr-2" /> Cart (0)
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
