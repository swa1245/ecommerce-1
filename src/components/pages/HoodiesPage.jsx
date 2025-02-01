import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import HoodiesBanner from '../banners/HoodiesBanner';
import hoodie1 from '../assests/hoodie1.jpg';
import hoodie2 from '../assests/hoodie2.jpg';
import hoodie3 from '../assests/hoodie3.jpg';
import hoodie4 from '../assests/hoodie4.jpg';

const HoodiesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const hoodies = [
    {
      id: 1,
      name: "Classic Zip Hoodie",
      category: "Zip Hoodie",
      price: 49.99,
      rating: 4.5,
      image: hoodie1,
      description: "Premium zip-up hoodie for everyday comfort"
    },
    {
      id: 2,
      name: "Pullover Hoodie",
      category: "Without Zip Hoodie",
      price: 44.99,
      rating: 4.8,
      image: hoodie2,
      description: "Cozy pullover hoodie perfect for casual wear"
    },
    {
      id: 3,
      name: "Sport Zip Hoodie",
      category: "Zip Hoodie",
      price: 54.99,
      rating: 4.6,
      image: hoodie3,
      description: "Athletic zip hoodie for active lifestyle"
    },
    {
      id: 4,
      name: "Oversized Hoodie",
      category: "Without Zip Hoodie",
      price: 47.99,
      rating: 4.7,
      image: hoodie4,
      description: "Trendy oversized hoodie for street style"
    }
  ];

  // const categories = [
  //   { id: 'all', name: 'All Hoodies' },
  //   { id: 'Zip Hoodie', name: 'Zip Hoodie' },
  //   { id: 'Without Zip Hoodie', name: 'Without Zip Hoodie' }
  // ];

  const filteredHoodies = hoodies.filter(hoodie => {
    const matchesCategory = selectedCategory === 'all' || hoodie.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      hoodie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hoodie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hoodie.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <HoodiesBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="mx-auto mb-8">
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
        </div> */}

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredHoodies.map((hoodie, index) => (
              <motion.div
                key={hoodie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

export default HoodiesPage;
