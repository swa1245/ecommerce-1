import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import CorporateBanner from '../banners/CorporateBanner';

const IDCard = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const idCardProducts = [
    {
      id: 1,
      name: "Professional ID Card & Lanyard",
      category: "ID Card and Lanyard",
      price: 9.99,
      rating: 4.5,
      image: "https://www.mockupworld.co/wp-content/uploads/dynamic/2022/10/id-card-lanyard-free-mockup-psd-536x0-c-default.jpg?w=500&auto=format",
      description: "High-quality ID card with custom lanyard"
    },
    {
      id: 6,
      name: "Custom Photo ID Card",
      category: "ID Card and Lanyard",
      price: 7.99,
      rating: 4.4,
      image: "https://th.bing.com/th/id/OIP.O5LlCxcxVSof_Foj8w43XwAAAA?rs=1&pid=ImgDetMain",
      description: "Personalized photo ID card with holder"
    }
  ];

  const filteredProducts = idCardProducts.filter(product =>
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
            ID Cards & Lanyards
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

export default IDCard;
