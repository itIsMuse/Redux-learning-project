import React from "react";

const HelpPage = () => {
  return (
    <div className="container mx-auto p-6 mt-5">
      <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🔹 How do I place an order?</h2>
          <p>Simply browse our products, add items to your cart, and proceed to checkout.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🔹 What payment methods do you accept?</h2>
          <p>We accept credit/debit cards, PayPal, and other secure payment options.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🔹 How can I track my order?</h2>
          <p>Go to your profile and check the 'Orders' section for tracking details.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🔹 What is the return policy?</h2>
          <p>You can return items within 30 days of purchase. Visit our Returns page for details.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">🔹 Need more help?</h2>
          <p>Contact us at <strong>support@mystore.com</strong> or call <strong>+123 456 7890</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
