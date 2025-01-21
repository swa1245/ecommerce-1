import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import CorporateBanner from '../banners/CorporateBanner';

const DiaryPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const diaryProducts = [
    {
      id: 5,
      name: "Executive Leather Diary",
      category: "Diary",
      price: 39.99,
      rating: 4.9,
      image: "https://th.bing.com/th/id/OIP.L7DwdbrsHah3mDtRxFcqdwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format?w=500&auto=format",
      description: "Premium leather corporate diary"
    },
    {
      id: 10,
      name: "Custom Logo Planner",
      category: "Diary",
      price: 29.99,
      rating: 4.7,
      image: "https://th.bing.com/th/id/OIP.L7DwdbrsHah3mDtRxFcqdwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format?rs=1&pid=ImgDetMain",
      description: "Customizable corporate planner with logo"
    }
  ];

  const filteredProducts = diaryProducts.filter(product =>
    searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CorporateBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Corporate Diaries
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/corporate/${product.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
