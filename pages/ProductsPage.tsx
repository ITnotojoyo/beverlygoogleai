
import React from 'react';
import { RESIDENCES } from '../constants';
import { Residence } from '../types';

const ResidenceCard: React.FC<{ residence: Residence; delay: number }> = ({ residence, delay }) => (
  <div
    className="bg-white border border-gray-200 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp rounded-xl"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="overflow-hidden">
        <img src={residence.imageUrls[0]} alt={residence.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-black mb-2">{residence.name}</h3>
      <p className="text-gray-500 mb-4">{residence.type}</p>
      <div className="flex space-x-6 text-gray-700">
        <span>{residence.bedrooms} BR</span>
        <span>{residence.bathrooms} BA</span>
        <span>{residence.area} m²</span>
      </div>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50 pt-32 md:pt-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black animate-fadeInUp">Our Residence Types</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Choose from our collection of meticulously designed American-style homes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESIDENCES.map((residence, index) => (
            <ResidenceCard key={residence.name} residence={residence} delay={index * 150 + 400} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;