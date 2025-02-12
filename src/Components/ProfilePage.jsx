import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const Profile = () => {
  // User state
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+234 901 234 5678",
    address: "123, Lagos Street, Ikeja, Lagos",
    profilePic: "https://via.placeholder.com/100",
  });

  const [editMode, setEditMode] = useState(false); // Toggle edit mode

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-orange-600">My Profile</h2>

        <div className="mt-6 flex flex-col items-center">
          {/* Profile Picture */}
          <img src={user.profilePic} alt="Profile" className="w-24 h-24 rounded-full border-4 border-orange-600 shadow-lg" />

          {/* User Info */}
          {editMode ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="text-xl font-semibold text-gray-700 mt-4 text-center border border-gray-300 rounded-md px-2 py-1"
            />
          ) : (
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{user.name}</h3>
          )}

          {editMode ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="text-gray-500 text-center border border-gray-300 rounded-md px-2 py-1"
            />
          ) : (
            <p className="text-gray-500">{user.email}</p>
          )}
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-4">
          {/* Email */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaEnvelope className="text-orange-600" />
            {editMode ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            ) : (
              <p className="text-gray-700">{user.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaPhone className="text-orange-600" />
            {editMode ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            ) : (
              <p className="text-gray-700">{user.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaMapMarkerAlt className="text-orange-600" />
            {editMode ? (
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
            ) : (
              <p className="text-gray-700">{user.address}</p>
            )}
          </div>
        </div>

        {/* Edit Profile Buttons */}
        <div className="mt-6 text-center">
          {editMode ? (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setEditMode(false)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-400 transition flex items-center gap-2"
              >
                <FaTimes /> Cancel
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition flex items-center gap-2"
              >
                <FaSave /> Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-500 transition flex items-center gap-2"
            >
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
