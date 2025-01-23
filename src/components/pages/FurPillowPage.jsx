import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import FurPillowBanner from '../banners/FurPillowBanner';
import pillowCover from '../assests/pilllowcover.jpg';
import heartPillow from '../assests/heartpillow.jpg';
import printedPillow from '../assests/printedpillow.jpg';
import pillowDesign from '../assests/pillowdesign.jpg';
import teddy from '../assests/teddy.jpg';
import teddy2 from '../assests/teddy (2).jpg';

const FurPillowPage = () => {
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
      name: "Classic Pillow Cover",
      category: "Plain Pillows",
      price: 499,
      rating: 4.5,
      image: pillowCover,
      description: "Soft and luxurious plain pillow cover for maximum comfort"
    },
    {
      id: 2,
      name: "Heart Shape Pillow",
      category: "Special Pillows",
      price: 699,
      rating: 4.8,
      image: heartPillow,
      description: "Elegantly designed heart-shaped pillow for special occasions"
    },
    {
      id: 3,
      name: "Printed Design Pillow",
      category: "Designer Pillows",
      price: 899,
      rating: 4.7,
      image: printedPillow,
      description: "Beautiful printed design pillow for your home decor"
    },
    {
      id: 4,
      name: "Custom Pattern Pillow",
      category: "Designer Pillows",
      price: 799,
      rating: 4.9,
      image: pillowDesign,
      description: "Customizable pattern pillow to match your style"
    },
    {
      id: 5,
      name: "Premium Teddy Pillow",
      category: "Premium Pillows",
      price: 999,
      rating: 5.0,
      image: teddy,
      description: "Premium quality teddy pillow for ultimate comfort"
    },
    {
      id: 6,
      name: "Luxury Teddy Pillow",
      category: "Premium Pillows",
      price: 799,
      rating: 4.8,
      image: teddy2,
      description: "Luxury teddy pillow with extra softness"
    }
  ];

  const categories = ['all', 'Plain Pillows', 'Designer Pillows', 'Premium Pillows', 'Special Pillows'];

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
      <FurPillowBanner />
      
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
              onClick={() => navigate(`/fur-pillows/${product.id}`)}
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

export default FurPillowPage;
