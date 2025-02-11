import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import BottlesBanner from '../banners/BottlesBanner';

const SublimationBottlesPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const sublimationBottles = [
    {
      id: 1,
      name: "Premium Sublimation Bottle",
      category: "Sublimation",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
      description: "High-quality sublimation water bottle"
    },
    {
      id: 3,
      name: "Sport Sublimation Bottle",
      category: "Sublimation",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500&auto=format",
      description: "Lightweight sublimation bottle for sports"
    }
  ];

  const filteredBottles = sublimationBottles.filter(bottle =>
    searchTerm === '' || 
    bottle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bottle.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BottlesBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Sublimation Bottles
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredBottles.map((bottle, index) => (
              <motion.div
                key={bottle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/bottles/${bottle.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={bottle} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SublimationBottlesPage;
