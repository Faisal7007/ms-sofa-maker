
"use client"
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918318274042";
    const message = encodeURIComponent("Hello, I have a query.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
    <FaWhatsapp size={24}/>
      
    </button>
  );
};

export default FloatingWhatsAppButton;
