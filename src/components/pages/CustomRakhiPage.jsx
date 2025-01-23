import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import customRakhi1 from '../assests/CustomRakhi1.jpg';
import customRakhi2 from '../assests/CustomRakhi2.jpg';

const CustomRakhiPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  const products = [
    {
      id: 1,
      name: "Premium Custom Rakhi",
      category: "Premium Rakhis",
      price: 299,
      rating: 4.8,
      image: customRakhi1,
      description: "Beautifully crafted custom rakhi with premium materials"
    },
    {
      id: 2,
      name: "Personalized Photo Rakhi",
      category: "Photo Rakhis",
      price: 399,
      rating: 4.9,
      image: customRakhi2,
      description: "Custom photo rakhi to make your bond special"
    }
  ];

  const categories = ['all', 'Premium Rakhis', 'Photo Rakhis'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`?category=${category}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="relative h-[400px] bg-gradient-to-r from-orange-400 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Rakhis
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Celebrate the bond of love with our beautiful collection of custom rakhis.
            Make this Raksha Bandhan special with personalized touches.
          </motion.p>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              } transition duration-300 ease-in-out`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(`/other-products/rakhis/${product.id}`)}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <h3 className="text-xl text-gray-600">No products found matching your criteria</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomRakhiPage;
