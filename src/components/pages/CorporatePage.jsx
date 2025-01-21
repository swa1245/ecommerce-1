import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import CorporateBanner from '../banners/CorporateBanner';
import pen from '../assests/pen.jpg';
import corporate from '../assests/corporate.jpg';

const CorporatePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const corporateProducts = [
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
      id: 2,
      name: "Premium Business Cards",
      category: "Visiting Card",
      price: 24.99,
      rating: 4.8,
      image: "https://th.bing.com/th/id/OIP.O5LlCxcxVSof_Foj8w43XwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format",
      description: "Premium finish business cards, pack of 100"
    },
    {
      id: 3,
      name: "Executive Metal Pen Set",
      category: "Pens",
      price: 29.99,
      rating: 4.6,
      image: pen ,
      description: "Luxury metal pen set for professionals"
    },
    {
      id: 4,
      name: "Welcome Kit Bundle",
      category: "Employee Welcome Kit",
      price: 49.99,
      rating: 4.7,
      image: corporate,
      description: "Complete employee welcome kit"
    },
    {
      id: 5,
      name: "Professional Diary 2024",
      category: "Diary",
      price: 19.99,
      rating: 4.9,
      image: "https://th.bing.com/th/id/OIP.L7DwdbrsHah3mDtRxFcqdwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format",
      description: "Premium leather-bound diary"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ID Card and Lanyard', name: 'ID Card & Lanyard' },
    { id: 'Visiting Card', name: 'Visiting Cards' },
    { id: 'Pens', name: 'Pens' },
    { id: 'Employee Welcome Kit', name: 'Welcome Kit' },
    { id: 'Diary', name: 'Diaries' }
  ];

  const filteredProducts = corporateProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      (product.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <CorporateBanner />
      
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
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/corporate/${product.id}`)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl"
                >
                  <ProductCard product={product} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
