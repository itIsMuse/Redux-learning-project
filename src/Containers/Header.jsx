import { useState, useRef, useEffect} from "react";
import { FaUser, FaShoppingCart, FaQuestionCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../Components/SearchBar.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const helpRef = useRef(null);
  const loginRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setHelpOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-16 py-2 text-sm text-gray-700">
        <div className="flex gap-4">
        <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="hover:text-orange-600 flex items-center focus:outline-none"
            >
              <FaUser className="mr-1" /> Login / Sign Up
            </button>

            {loginOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Help Dropdown */}
          <div className="relative" ref={helpRef}>
            <button
              onClick={() => setHelpOpen(!helpOpen)}
              className="hover:text-orange-600 flex items-center focus:outline-none"
            >
              <FaQuestionCircle className="mr-1" /> Help
            </button>

            {helpOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/support">Customer Support</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Cart Dropdown */}
          <div className="relative" ref={cartRef}>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="hover:text-orange-600 flex items-center focus:outline-none"
            >
              <FaShoppingCart className="mr-1" /> Cart (0)
            </button>

            {cartOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <div className="p-4 text-gray-700 text-sm">
                  <p>Your cart is empty.</p>
                  <Link to="/shop" className="text-orange-600 mt-2 block">
                    Browse Products
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 lg:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">MyStore</Link>

        {/* Search Bar */}
        {/* <div className="hidden md:flex flex-1 mx-4 max-w-2xl border border-gray-300 rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search products, brands and categories" 
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-orange-600 px-4 py-2 text-white">
            <FaSearch />
          </button>
        </div> */}
        <SearchBar />

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
          className="md:hidden mr-7 text-2xl focus:outline-none" 
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
              <div className="flex md:hidden items-center border border-gray-300 rounded-lg overflow-hidden w-full mt-2">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
  <button className="bg-orange-600 px-4 py-2 mr-3 rounded-tr-lg rounded-br-lg text-white">
    <FaSearch />
  </button>
</div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
