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

const WithoutZipHoodiePage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const withoutZipHoodies = [
    {
      id: 2,
      name: "Classic Pullover Hoodie",
      category: "Without Zip Hoodie",
      price: 44.99,
      rating: 4.8,
      image: hoodie1,
      description: "Classic pullover hoodie with kangaroo pocket"
    },
    {
      id: 4,
      name: "Comfort Fit Hoodie",
      category: "Without Zip Hoodie",
      price: 47.99,
      rating: 4.7,
      image: hoodie2,
      description: "Comfortable pullover hoodie for everyday wear"
    },
    {
      id: 6,
      name: "Oversized Comfort Hoodie",
      category: "Without Zip Hoodie",
      price: 52.99,
      rating: 4.6,
      image: hoodie3,
      description: "Trendy oversized pullover hoodie"
    },
    {
      id: 8,
      name: "Premium Pullover Hoodie",
      category: "Without Zip Hoodie",
      price: 57.99,
      rating: 4.9,
      image: hoodie4,
      description: "Premium quality pullover hoodie with perfect fit"
    }
  ];

  const filteredHoodies = withoutZipHoodies.filter(hoodie =>
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
            Pullover Hoodies
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

export default WithoutZipHoodiePage;
