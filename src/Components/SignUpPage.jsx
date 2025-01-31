import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
const [fullName, setFullName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubmit = async (e) => {
  
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-orange-600">Create an Account</h2>
        <p className="text-gray-600 text-center mt-2">Join us for the best shopping experience</p>

        <form className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-semibold">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaUser className="text-gray-400" />
              <input 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text" 
                placeholder="John Doe" 
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-semibold">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-400" />
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
                type="email" 
                placeholder="you@example.com" 
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-semibold">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaLock className="text-gray-400" />
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Signup Button */}
          <button onClick={handleSubmit} className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-gray-600 text-center text-sm mt-4">
            Already have an account? <Link to="/login" className="text-orange-600 hover:underline">Login</Link>
       </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
