
import React from 'react';

const SiteplanPage: React.FC = () => {
  return (
    <section id="siteplan" className="py-20 md:py-28 bg-black text-white pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold animate-fadeInUp">Master Siteplan</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Explore the layout of our exclusive community, designed for comfort and luxury.
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-8 border border-gray-700 animate-fadeInUp rounded-xl" style={{ animationDelay: '400ms' }}>
          <img
            src="https://i.imgur.com/8Wf5d2k.png"
            alt="Beverly Hills Siteplan"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SiteplanPage;
