
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Beverly Hills Malang. All Rights Reserved.</p>
        <p className="text-sm mt-2">A minimalist design for a modern living experience.</p>
      </div>
    </footer>
  );
};

export default Footer;
