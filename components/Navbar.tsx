import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Only change hash if it's different to prevent empty history entries
    if (window.location.hash !== href) {
        window.location.hash = href;
    }
    // Close mobile menu on any navigation click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black backdrop-blur-sm ${isScrolled || isMenuOpen ? 'bg-opacity-80 shadow-lg' : 'bg-opacity-50'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="flex items-center gap-3 text-2xl font-bold text-white tracking-wider">
          <img src="https://i.ibb.co.com/hJPBwrgr/wbeverly.png" alt="Beverly Hills Logo" className="h-8 w-8" />
          <span className="font-cormorant-garamond">BEVERLY HILLS</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === `#${currentPath}`;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative group text-white hover:text-gray-200 transition-colors duration-300 ${isActive ? 'font-semibold' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-20 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-0 left-0 w-full h-screen">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;