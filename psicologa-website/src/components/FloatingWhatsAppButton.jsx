import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999', '_blank'); // Substitua pelo seu número do WhatsApp
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-4 md:right-4 bg-green-500 text-white rounded-full p-3 md:p-4 shadow-lg cursor-pointer transition-transform transform hover:scale-110"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" /> {/* Ajuste do tamanho do ícone */}
    </div>
  );
};

export default FloatingWhatsAppButton;
