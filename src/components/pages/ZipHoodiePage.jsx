import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import HoodiesBanner from '../banners/HoodiesBanner';
import hoodie1 from '../assests/hoodie1.jpg';
import hoodie2 from '../assests/hoodie2.jpg';
import hoodie3 from '../assests/hoodie3.jpg';
import hoodie4 from '../assests/hoodie4.jpg';

const ZipHoodiePage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const zipHoodies = [
    {
      id: 1,
      name: "Classic Zip Hoodie",
      category: "Zip Hoodie",
      rating: 4.5,
      image: hoodie1,
      description: "Premium zip-up hoodie for everyday comfort"
    },
    {
      id: 5,
      name: "Modern Zip Hoodie",
      category: "Zip Hoodie",
      rating: 4.7,
      image: hoodie3,
      description: "Modern style zip hoodie for urban look"
    }
  ];

  const filteredHoodies = zipHoodies.filter(hoodie =>
    searchTerm === '' || 
    hoodie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hoodie.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HoodiesBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Zip Hoodies
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredHoodies.map((hoodie, index) => (
              <motion.div
                key={hoodie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/hoodies/${hoodie.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={hoodie} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZipHoodiePage;
