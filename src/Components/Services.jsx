import React from 'react'

const Services = () => {
  return (
    <div>
      <div className ="min-h-screen bg-gray-50 flex items-center justify-center">
  <div className ="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
    <h1 className ="text-3xl font-bold text-gray-800 text-left mb-4">Our Services</h1>
    <p className ="text-gray-600 text-left mb-6">
      At <span className ="font-semibold">[Store Name]</span>, we go beyond just selling products. We offer a range of services designed to enhance your shopping experience and ensure your satisfaction.
    </p>
    <h2 className ="text-2xl font-semibold text-gray-800 text-left mb-3">What We Provide</h2>
    <ul className ="list-disc pl-5 space-y-2 text-left text-gray-600">
      <li>
        <span className ="font-semibold">Personalized Recommendations:</span> Get tailored product suggestions based on your preferences and past purchases.
      </li>
      <li>
        <span className ="font-semibold">Fast Shipping:</span> Enjoy reliable and speedy delivery options to get your orders on time.
      </li>
      <li>
        <span className ="font-semibold">Customer Support:</span> Our dedicated team is here to help you with inquiries, returns, or any concerns.
      </li>
      <li>
        <span className ="font-semibold">Secure Payments:</span> Shop confidently with our encrypted and safe payment gateways.
      </li>
      <li>
        <span className ="font-semibold">Easy Returns:</span> Hassle-free return policies for a worry-free shopping experience.
      </li>
    </ul>
    <h2 className ="text-2xl font-semibold text-gray-800 text-left mt-6 mb-3">Why Work With Us?</h2>
    <p className ="text-gray-600 text-left">
      We’re dedicated to making every aspect of your journey with us simple, enjoyable, and rewarding. Whether you're shopping for [specific product categories] or exploring our services, we've got you covered.
    </p>
    <p className ="text-gray-600 text-left mt-4">
      Experience convenience and excellence with our services, tailored just for you!
    </p>
  </div>
</div>

    </div>
  )
}

export default Services
