import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import BottlesBanner from '../banners/BottlesBanner';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import tempBottle1 from '../assests/TempBottle1.jpg';
import tempBottle2 from '../assests/TempBottle2.jpg';
import tempBottle3 from '../assests/tempBottle.jpg';
import tempBottle4 from '../assests/tempBottle (2).jpg';
import customizeBottle from '../assests/CustomizeBottle.jpg';

const BottlesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  // Get category from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  const bottles = [
    {
      id: 1,
      name: "Premium Sublimation Bottle",
      category: "Sublimation",
      price: 24.99,
      rating: 4.5,
      image: customizeBottle,
      description: "High-quality sublimation water bottle for custom designs"
    },
    {
      id: 2,
      name: "Insulated Temperature Bottle",
      category: "Temperature Bottle",
      price: 29.99,
      rating: 4.8,
      image: tempBottle1,
      description: "Double-wall insulated temperature control bottle"
    },
    {
      id: 3,
      name: "Sport Sublimation Bottle",
      category: "Sublimation",
      price: 22.99,
      rating: 4.6,
      image: tempBottle2,
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
    },
    {
      id: 5,
      name: "Modern Temperature Bottle",
      category: "Temperature Bottle",
      price: 32.99,
      rating: 4.9,
      image: tempBottle3,
      description: "Modern design temperature-controlled bottle"
    },
    {
      id: 6,
      name: "Elite Sublimation Bottle",
      category: "Sublimation",
      price: 27.99,
      rating: 4.8,
      image: tempBottle4,
      description: "Elite grade sublimation bottle for professional use"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Bottles' },
    { id: 'Sublimation', name: 'Sublimation Bottles' },
    { id: 'Temperature Bottle', name: 'Temperature Bottles' }
  ];

  const filteredBottles = bottles.filter(bottle => 
    (selectedCategory === 'all' || bottle.category === selectedCategory) &&
    (searchTerm === '' || 
    bottle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bottle.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
            {selectedCategory === 'all' ? 'All Bottles' : selectedCategory}
          </motion.h1>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  navigate(category.id === 'all' ? '/bottles' : `/bottles?category=${category.id}`);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBottles.map((bottle, index) => (
              <motion.div
                key={bottle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/bottles/${bottle.id}`)}
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
