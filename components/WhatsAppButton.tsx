import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "6281234567890"; // Use the number from the contact page
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello, I'm interested in Beverly Hills Malang.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white rounded-full p-3 md:px-5 shadow-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-1.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.06.094-1.157 4.224 4.272-1.119zm.123-7.781c-.27-.136-.948-.47-1.095-.524-.146-.052-1.298-.51-1.152.648.145 1.158 1.157 2.723 1.303 2.91.146.187.146.374.052.523-.094.149-.239.24-.48.333-.242.094-.53.188-2.317-1.084-1.787-1.272-2.731-3.21-2.91-3.692-.187-.482-.374-.72-.523-.72-.149 0-.295.047-.442.047-.146 0-.389.047-.482.047s-.342.047-.489.14l-.442.235c-.148.094-.577.281-1.023 1.272s-1.119 2.537-.88 3.542.835 1.97 1.625 2.765c.79 0.795 2.147 2.05 4.887 3.326 2.74 1.276 3.931 1.422 4.475 1.375.544-.047 1.442-.422 1.687-1.272.244-.85.244-1.625.198-1.771-.047-.148-.148-.235-.295-.333-.146-.094-.442-.235-.733-.375s-.389-.187-.295-.047c.094.14.342.422.442.568.099.148.148.188.197.188.049 0 .147-.047.244-.094.098-.047.442-.281.589-.568.148-.287.197-.524.295-.812.098-.287.049-.577-.047-.671-.098-.094-.244-.14-.389-.188z"/>
      </svg>
      <span className="ml-3 font-semibold hidden md:inline">Hubungi WA</span>
    </a>
  );
};

export default WhatsAppButton;