import React from "react";

const CustomerSupport = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Customer Support</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
        <p className="text-gray-600">For any inquiries or support, reach out to us via:</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Email: support@mystore.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Live Chat: Available on our website</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Support Hours</h2>
        <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM (EST)</p>
        <p className="text-gray-600">Saturday - Sunday: Closed</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">FAQs</h2>
        <p className="text-gray-600">Check out our <a href="/faq" className="text-blue-500 hover:underline">FAQ page</a> for quick answers.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Send Us a Message</h2>
        <form className="bg-gray-100 p-4 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="4" required></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default CustomerSupport;
