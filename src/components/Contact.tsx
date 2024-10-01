"use client"

import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Show the popup message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {showPopup && (
        <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 rounded-md shadow-md">
         Thanks for your Attention!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your name:"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your email:"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Comment Below:</label>
          <input
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="One line comment please"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
