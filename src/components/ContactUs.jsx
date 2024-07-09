import React from 'react';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-5xl font-bold text-black mb-4">Contact Us</h1>
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="bg-indigo-600 p-8 md:w-1/2">
          
          <p className="text-white text-lg mb-4">
            If you have any questions or need further assistance, please don't hesitate to reach out to us. We are here to help!
          </p>
          <div className="text-white text-lg">
            <p className="mb-2"><strong>Office Address:</strong></p>
            <p className="mb-4">1234 Main St,<br />Anytown, USA 12345</p>
            <p className="mb-2"><strong>Mobile No:</strong></p>
            <p className="mb-4">(123) 456-7890</p>
            <p className="mb-2"><strong>Email:</strong></p>
            <p>contact@ctask.com</p>
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your name" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your email" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your message" 
                rows="4" 
                required 
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default ContactUs;
