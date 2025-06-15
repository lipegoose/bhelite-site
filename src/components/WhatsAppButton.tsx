
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531993963916"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
      aria-label="Fale conosco pelo WhatsApp"
      style={{
        backgroundColor: '#25D366', // verde WhatsApp padrão
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.25)'
      }}
    >
      <img
        src="/lovable-uploads/83008959-7d54-4014-b3fb-ed299e30bdb0.png"
        alt="Fale conosco pelo WhatsApp"
        className="w-8 h-8"
        draggable={false}
      />
    </a>
  );
};

export default WhatsAppButton;

