import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';

const ThreeToneMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const threeToneMugs = [
    {
      id: 3,
      name: "Three-Tone Designer Mug",
      category: "3-Tone Mug",
      price: 17.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1529586587093-ad0e284dbf01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      description: "Stylish three-tone ceramic mug"
    }
  ];

  const filteredMugs = threeToneMugs.filter(mug =>
    searchTerm === '' || 
    mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mug.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MugsBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Three-Tone Mugs
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredMugs.map((mug, index) => (
              <motion.div
                key={mug.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/mugs/${mug.id}`)}
                className="cursor-pointer"
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

export default ThreeToneMugPage;