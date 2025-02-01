import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault();

  const backendUrl = 'backend.com'

  const userData = {
    email,
    password
  }

  const response = await fetch(backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })


}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-orange-600">Welcome Back</h2>
        <p className="text-gray-600 text-center mt-2">Login to continue shopping</p>

        <form className="mt-6">
          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-semibold">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-400" />
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full p-2 focus:outline-none"
                onChange={(e) => setEmail(e.target.value) }
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-semibold">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaLock className="text-gray-400" />
              <input 
                type="password" 
                placeholder="********" 
                className="w-full p-2 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button onClick = {handleSubmit} className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition">
            Login
          </button>

          {/* Forgot Password & Signup Link */}
          <div className="text-center text-sm mt-4">
            <a href="#" className="text-gray-600 hover:underline">Forgot password?</a>
            <p className="text-gray-600 mt-2">
              Don't have an account? <Link to ="/signup" className="text-orange-600 hover:underline">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

