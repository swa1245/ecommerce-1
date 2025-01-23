import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import whiteMug from '../assests/whiteMug.jpg';
import MugsBanner from '../banners/MugsBanner';

const PlainMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const plainMugs = [
    {
      id: 1,
      name: "Classic White Mug",
      category: "Plain Mugs",
      price: 199,
      rating: 4.5,
      image: whiteMug,
      description: "Premium quality white ceramic mug for everyday use"
    },
  ];

  const filteredMugs = plainMugs.filter(mug =>
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
            Plain Mugs
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

export default PlainMugPage;
