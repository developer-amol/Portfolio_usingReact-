import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending the data to a backend server
    console.log(formData);
  };

  return (
       
    <div id="skills" className=" bg-slate-800">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center py-6">
          <h1 id="about" className="font-bold text-3xl text-white">
            <span className="text-red-500 border-t-4 border-l-4 border-red-500 pl-2">Co</span>
            <span>nta</span>
            <span className="border-b-4 border-r-4 border-red-500 pr-2">ct</span>
          </h1>
        </div>

    <div className="max-w-md mx-auto  p-6 bg-gray-700 pt-4 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Send Message</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ContactForm;
