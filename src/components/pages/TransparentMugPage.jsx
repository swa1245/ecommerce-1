import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';

// Import mug images
import goldenMug from '../assests/GoldenMug.jpg';
import silverMug from '../assests/SilverMug.jpg';

const TransparentMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const transparentMugs = [
    {
      id: 11,
      name: "Golden Premium Mug",
      category: "Transparent Mugs",
      rating: 4.9,
      image: goldenMug,
      description: "Luxurious golden-finished ceramic mug",
      features: [
        "Premium golden finish",
        "Transparent glass design",
        "Heat-resistant material",
        "Elegant appearance",
        "Perfect for special occasions"
      ]
    },
    {
      id: 12,
      name: "Silver Premium Mug",
      category: "Transparent Mugs",
      rating: 4.9,
      image: silverMug,
      description: "Elegant silver-finished ceramic mug",
      features: [
        "Premium silver finish",
        "Crystal clear transparency",
        "Temperature resistant",
        "Modern design",
        "Ideal for gifting"
      ]
    }
  ];

  const filteredMugs = transparentMugs.filter(mug =>
    searchTerm === '' || 
    mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mug.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <MugsBanner />
      
      <div className="container m-6 mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 font-outfit"
        >
          Transparent Mugs Collection
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMugs.map((mug, index) => (
            <motion.div
              key={mug.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ProductCard
                key={mug.id}
                product={mug}
                onClick={() => navigate(`/mugs/${mug.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparentMugPage;
