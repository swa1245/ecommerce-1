import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';
import t1 from '../assests/1.png';
import t2 from '../assests/2.png';
import t3 from '../assests/3.jpg';
import t4 from '../assests/4.jpg';
import t5 from '../assests/5.jpg';
import t6 from '../assests/6.jpg';

const RoundNeckTshirtPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const roundNeckTshirts = [
    {
      id: 1,
      name: "Classic Cotton Round Neck",
      category: "Round Neck T-shirt",
      price: 32.99,
      rating: 4.7,
      image: t1,
      description: "High-quality cotton t-shirt for everyday comfort"
    },
    {
      id: 2,
      name: "Premium Sport Round Neck",
      category: "Round Neck T-shirt",
      price: 34.99,
      rating: 4.8,
      image: t2,
      description: "Performance round neck t-shirt for active lifestyle"
    },
    {
      id: 3,
      name: "Urban Style Round Neck",
      category: "Round Neck T-shirt",
      price: 29.99,
      rating: 4.6,
      image: t3,
      description: "Trendy round neck t-shirt with modern design"
    },
    {
      id: 4,
      name: "Essential Round Neck",
      category: "Round Neck T-shirt",
      price: 27.99,
      rating: 4.5,
      image: t4,
      description: "Must-have basic round neck t-shirt"
    },
    {
      id: 5,
      name: "Designer Round Neck",
      category: "Round Neck T-shirt",
      price: 39.99,
      rating: 4.9,
      image: t5,
      description: "Premium designer round neck t-shirt"
    },
    {
      id: 6,
      name: "Comfort Fit Round Neck",
      category: "Round Neck T-shirt",
      price: 31.99,
      rating: 4.7,
      image: t6,
      description: "Super comfortable round neck t-shirt"
    }
  ];

  const filteredTshirts = roundNeckTshirts.filter(tshirt =>
    searchTerm === '' || 
    tshirt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tshirt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <TshirtBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Round Neck T-Shirts
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredTshirts.map((tshirt, index) => (
              <motion.div
                key={tshirt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/tshirts/${tshirt.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={tshirt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundNeckTshirtPage;
