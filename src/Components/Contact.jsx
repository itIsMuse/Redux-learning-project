import React from 'react'

const Contact = () => {
  return (
    <div>
        <div class="min-h-screen bg-gray-50 flex items-center justify-center">
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
    <h1 class="text-3xl font-bold text-gray-800 text-left mb-4">Contact Us</h1>
    <p class="text-gray-600 text-left mb-6">
      We're here to help! Reach out to us for any questions, feedback, or support, and we'll get back to you as soon as possible.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 text-left mb-3">Get in Touch</h2>
    <form class="space-y-4">
      
      <div>
        <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Full Name"
          required
        />
      </div>

      
      <div>
        <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Email Address"
          required
        />
      </div>

      
      <div>
        <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>


      <button 
        type="submit" 
        class="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>

    <h2 class="text-2xl font-semibold text-gray-800 text-left mt-8 mb-3">Other Ways to Contact</h2>
    <ul class="space-y-3 text-gray-600">
      <li><span class="font-semibold">Email:</span> support@[yourstore].com</li>
      <li><span class="font-semibold">Phone:</span> +1 (123) 456-7890</li>
      <li><span class="font-semibold">Address:</span> 123 Main Street, City, Country</li>
    </ul>
  </div>
</div>

    </div>
  )
}

export default Contact
