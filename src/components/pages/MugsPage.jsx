import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';
import mug1 from '../assests/mug1.jpg';
import mug2 from '../assests/mug2.jpg';
import printedMug from '../assests/printedMug.jpg';

const MugsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const mugs = [
    {
      id: 1,
      name: "Classic White Mug",
      category: "Plain Mug",
      price: 14.99,
      rating: 4.5,
      image: mug1,
      description: "Simple and elegant white ceramic mug"
    },
    {
      id: 2,
      name: "Color Changing Magic Mug",
      category: "Magic Mug",
      price: 19.99,
      rating: 4.8,
      image: mug2,
      description: "Heat-sensitive color changing mug"
    },
    {
      id: 3,
      name: "Designer Printed Mug",
      category: "Printed Mug",
      price: 17.99,
      rating: 4.6,
      image: printedMug,
      description: "Stylish printed ceramic mug with custom design"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mugs' },
    { id: 'Plain Mug', name: 'Plain Mug' },
    { id: 'Magic Mug', name: 'Magic Mug' },
    { id: 'Printed Mug', name: 'Printed Mug' }
  ];

  const filteredMugs = mugs.filter(mug => {
    const matchesCategory = selectedCategory === 'all' || mug.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mug.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mug.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <MugsBanner />
      
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMugs.map((mug, index) => (
              <motion.div
                key={mug.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={mug} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MugsPage;
