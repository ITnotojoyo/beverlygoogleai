
import React, { useState } from 'react';
import { RESIDENCES } from '../constants';

const BedIcon = ({ className = '' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  );
  
  const BathIcon = ({ className = '' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8v8h8v-8zm4-8H4v12h16V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8a2 2 0 114 0v4" />
    </svg>
  );

  const AreaIcon = ({ className = '' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

const LOCATION_HIGHLIGHTS = [
    {
      name: '5 Menit dari Exit Tol Malang',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      name: '10 Menit ke RS Permata Hati',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
    },
    {
      name: '15 Menit ke Pusat Kota',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
    },
    {
      name: '20 Menit ke Bandara Abd. Saleh',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>,
    },
  ];

const HomePage: React.FC = () => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.location.hash !== href) {
        window.location.hash = href;
    }
  };

  const featuredResidence = RESIDENCES[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % featuredResidence.imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + featuredResidence.imageUrls.length) % featuredResidence.imageUrls.length);
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:h-screen">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-8 pt-12 md:pt-20 pb-20 lg:px-16 order-last md:order-first">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              Where Serenity<br />Meets Design.
            </h1>
            <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-base font-bold px-5 py-2 rounded-full shadow-lg shine-effect">
                Special Launch Price
              </span>
              <div className="mt-3">
                <p className="text-7xl lg:text-8xl font-bold text-black leading-tight">
                  <sup className="text-2xl font-medium text-gray-600 mr-1">Hanya</sup>
                  599 JT
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 h-96 md:h-screen overflow-hidden order-first md:order-last">
            <div
              className="w-full h-full bg-cover bg-center animate-fadeIn"
              style={{ 
                  backgroundImage: "url('https://i.pinimg.com/1200x/6c/a5/cc/6ca5ccd1c55044ff11a7ad6082e2ad49.jpg')",
                  animationDelay: '100ms'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Featured Residence Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Slider */}
            <div className="w-full lg:w-1/2 animate-fadeInUp relative group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {/* Image Container */}
                <div 
                  className="flex transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {featuredResidence.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${featuredResidence.name} view ${index + 1}`}
                      className="w-full h-auto object-cover flex-shrink-0"
                      style={{ minWidth: '100%' }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Slider Controls */}
              <button 
                onClick={prevImage} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-opacity-80 transition-all duration-300 focus:outline-none"
                aria-label="Previous Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextImage} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-opacity-80 transition-all duration-300 focus:outline-none"
                aria-label="Next Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {featuredResidence.imageUrls.map((_, index) => (
                      <button 
                          key={index} 
                          onClick={() => setCurrentImageIndex(index)} 
                          className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? 'bg-black' : 'bg-black bg-opacity-40'} transition-all duration-300 focus:outline-none ring-1 ring-white/20`}
                          aria-label={`Go to image ${index + 1}`}
                      ></button>
                  ))}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <span className="text-gray-400 font-semibold tracking-widest uppercase">Pre-Launching Product</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">{featuredResidence.name}</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed text-justify">
                    Experience unparalleled luxury in {featuredResidence.name}, a home designed for modern comfort and aesthetic appeal. This exquisite property features a spacious open-plan living area, premium finishes, and large windows that flood the space with natural light, offering a seamless connection to the serene outdoors.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-10 text-center">
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <BedIcon className="text-white" />
                        <span className="mt-2 text-white font-semibold">{featuredResidence.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <BathIcon className="text-white" />
                        <span className="mt-2 text-white font-semibold">{featuredResidence.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <AreaIcon className="text-white" />
                        <span className="mt-2 text-white font-semibold">{featuredResidence.area} m² Area</span>
                    </div>
                </div>
                 <a
                    href="#/contact"
                    onClick={(e) => handleNavigate(e, '#/contact')}
                    className="inline-block bg-white text-black font-bold py-3 px-10 hover:bg-gray-200 transition-all duration-300 rounded-md"
                >
                    Booking Unit
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black animate-fadeInUp">Lokasi Strategis</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    Akses mudah ke berbagai fasilitas penting di Kota Malang.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {LOCATION_HIGHLIGHTS.map((item, index) => (
                    <div 
                        key={item.name} 
                        className="flex flex-col items-center p-6 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 animate-fadeInUp rounded-xl"
                        style={{ animationDelay: `${index * 100 + 400}ms` }}
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-lg font-bold text-black text-center">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
