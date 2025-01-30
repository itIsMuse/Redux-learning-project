import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+234 901 234 5678",
    address: "123, Lagos Street, Ikeja, Lagos",
    profilePic: "https://via.placeholder.com/100", // Replace with actual profile picture URL
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-orange-600">My Profile</h2>
        
        <div className="mt-6 flex flex-col items-center">
          {/* Profile Picture */}
          <img src={user.profilePic} alt="Profile" className="w-24 h-24 rounded-full border-4 border-orange-600 shadow-lg" />
          
          {/* User Info */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaEnvelope className="text-orange-600" />
            <p className="text-gray-700">{user.email}</p>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaPhone className="text-orange-600" />
            <p className="text-gray-700">{user.phone}</p>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <FaMapMarkerAlt className="text-orange-600" />
            <p className="text-gray-700">{user.address}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-500 transition flex items-center gap-2 justify-center">
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
