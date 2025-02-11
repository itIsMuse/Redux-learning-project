import React, { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our products, select an item, and click 'Add to Cart.' Once you're ready, proceed to checkout and follow the instructions to complete your purchase.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and other secure payment options.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing an order, you'll receive an email with a tracking number. Use this number to track your order on our website.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return items within 30 days of purchase. The product must be unused and in its original packaging. Contact our support team to initiate a return.",
  },
  {
    question: "How do I contact customer support?",
    answer: "For any inquiries, you can reach us via email at support@mystore.com or through our live chat feature on the website.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to various countries. Shipping fees and delivery times vary based on location.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Orders can only be modified or canceled within an hour of placing them. Contact our support team as soon as possible.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
