
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531993963916"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-8 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img
        src="/imgs/whatsapp.png"
        alt="Fale conosco pelo WhatsApp"
        className="w-full h-full rounded-full"
      />
    </a>
  );
};

export default WhatsAppButton;
