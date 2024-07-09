import React from 'react';
import { Router } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-indigo-600 p-4">
          <h1 className="text-3xl font-bold text-white text-center">About Us</h1>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg mb-4">
            Welcome to cTask! We are dedicated to providing the best quality products at the most affordable prices. Our mission is to ensure customer satisfaction and to deliver an exceptional shopping experience.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            At cTask, we believe in the power of technology to enhance the way you shop. Our platform is designed to be user-friendly, providing a seamless and enjoyable experience from browsing to checkout.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our team is committed to continually improving our services and expanding our product range to meet your needs. Thank you for choosing cTask. We look forward to serving you!
          </p>
          
        </div>
        
      </div>
      <Footer/>
    </div>
    
    </>
  );
};

export default About;
