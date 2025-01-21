import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import BottlesBanner from '../banners/BottlesBanner';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import bootle from '../assests/bootle2.jpg';

const BottlesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const bottles = [
    {
      id: 1,
      name: "Premium Sublimation Bottle",
      category: "Sublimation",
      price: 24.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
      description: "High-quality sublimation water bottle"
    },
    {
      id: 2,
      name: "Insulated Temperature Bottle",
      category: "Temperature Bottle",
      price: 29.99,
      rating: 4.8,
      image: bootle,
      description: "Double-wall insulated temperature control bottle"
    },
    {
      id: 3,
      name: "Sport Sublimation Bottle",
      category: "Sublimation",
      price: 22.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500&auto=format",
      description: "Lightweight sublimation bottle for sports"
    },
    {
      id: 4,
      name: "Vacuum Insulated Bottle",
      category: "Temperature Bottle",
      price: 34.99,
      rating: 4.7,
      image: vaccumBootle,
      description: "Premium vacuum insulated temperature bottle"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Bottles' },
    { id: 'Sublimation', name: 'Sublimation' },
    { id: 'Temperature Bottle', name: 'Temperature Bottle' }
  ];

  const filteredBottles = bottles.filter(bottle => {
    const matchesCategory = selectedCategory === 'all' || bottle.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      bottle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bottle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bottle.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <BottlesBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 font-outfit ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
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

export default BottlesPage;
