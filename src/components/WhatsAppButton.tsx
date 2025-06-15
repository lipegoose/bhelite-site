
import React from 'react';

const WhatsAppIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.1,0A16,16,0,0,0,3.6,27.9l-3.5,1.2,1.3-3.4A16,16,0,1,0,16.1,0Zm7.9,23.3A3.1,3.1,0,0,1,22.1,25a8,8,0,0,1-4-1.2,14.6,14.6,0,0,1-5.2-4.5,10.6,10.6,0,0,1-2.2-5A5,5,0,0,1,11.8,9h.5a.8.8,0,0,1,.7.5,6.8,6.8,0,0,1,1.5,3.2.7.7,0,0,1,0,.7,2.2,2.2,0,0,1-1.1,1.3,1.3,1.3,0,0,0-.4,1,9,9,0,0,0,3.5,3.4,8.1,8.1,0,0,0,3.9,1.1.9.9,0,0,0,1-.5,3.4,3.4,0,0,0,.5-1.7.5.5,0,0,1,1-.3h.3A4.2,4.2,0,0,1,24,23.3Z"
      fill="currentColor"
    />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553130244555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIconSVG className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
