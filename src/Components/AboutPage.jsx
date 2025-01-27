import React from 'react';

const AboutPage = () => {

    return (
        <div className ="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className ="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
          <h1 className ="text-3xl font-bold text-gray-800 text-left mb-4">About Us</h1>
          <p className ="text-gray-600 text-left mb-6">
            Welcome to <span className ="font-semibold">MyStore</span>, your one-stop online shop for 
            <span className ="font-semibold"> Products </span>. Our eCommerce platform, 
            built with cutting-edge technology like <span className ="font-semibold">Redux</span>, ensures a smooth and 
            efficient shopping experience from start to finish.
          </p>
          <h2 className ="text-2xl font-semibold text-gray-800 text-left mb-3">What We Offer</h2>
          <ul className ="list-disc pl-5 space-y-2 text-gray-600">
            <li><span className ="font-semibold">A Seamless Shopping Experience:</span> From browsing to checkout, enjoy a hassle-free journey.</li>
            <li><span className ="font-semibold">Wide Product Range:</span> Discover a curated selection of [product categories, e.g., fashion, electronics, or home goods].</li>
            <li><span className ="font-semibold">Reliability & Speed:</span> Powered by Redux, our store guarantees real-time updates and consistent performance.</li>
          </ul>
          <h2 className ="text-2xl font-semibold text-gray-800 text-left mt-6 mb-3">Why Choose Us?</h2>
          <p className ="text-gray-600 text-left">
            We’re committed to providing high-quality products, exceptional customer service, and a secure shopping environment.  
          </p>
          <p className ="text-gray-600 text-left mt-4">
            Shop with confidence, and let us make your online shopping easy and enjoyable!
          </p>
        </div>
      </div>
      
    );
};

export default AboutPage;





