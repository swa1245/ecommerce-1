import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';
import whiteMug from '../assests/whiteMug.jpg';
import threeToneMug from '../assests/3ToneMug.jpg';
import threeToneMug2 from '../assests/3ToneMug (2).jpg';
import magicMugHeart from '../assests/MagicMugHeartHandle.jpg';
import coupleMug from '../assests/coupleMug.jpg';
import goldenMug from '../assests/GoldenMug.jpg';
import silverMug from '../assests/SilverMug.jpg';
import whiteHeartMug from '../assests/WhiteHeartHandleaMug.jpg';
import printedMug from '../assests/printedmug.jpg';

const MugsPage = () => {
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
      name: "Classic White Mug",
      category: "Plain Mugs",
      price: 199,
      rating: 4.5,
      image: whiteMug,
      description: "Premium quality white ceramic mug for everyday use"
    },
    {
      id: 2,
      name: "3-Tone Magic Mug",
      category: "Magic Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect"
    },
    {
      id: 3,
      name: "Premium 3-Tone Mug",
      category: "Magic Mugs",
      price: 399,
      rating: 4.7,
      image: threeToneMug2,
      description: "Premium color-changing mug with metallic finish"
    },
    {
      id: 4,
      name: "Heart Handle Magic Mug",
      category: "Magic Mugs",
      price: 449,
      rating: 4.9,
      image: magicMugHeart,
      description: "Color-changing mug with heart-shaped handle"
    },
    {
      id: 5,
      name: "Couple Photo Mug Set",
      category: "Special Mugs",
      price: 599,
      rating: 5.0,
      image: coupleMug,
      description: "Perfect gift for couples with custom photo printing"
    },
    {
      id: 6,
      name: "Golden Premium Mug",
      category: "Premium Mugs",
      price: 499,
      rating: 4.8,
      image: goldenMug,
      description: "Luxury golden finish ceramic mug"
    },
    {
      id: 7,
      name: "Silver Premium Mug",
      category: "Premium Mugs",
      price: 499,
      rating: 4.8,
      image: silverMug,
      description: "Elegant silver finish ceramic mug"
    },
    {
      id: 8,
      name: "White Heart Handle Mug",
      category: "Special Mugs",
      price: 299,
      rating: 4.6,
      image: whiteHeartMug,
      description: "Classic white mug with heart-shaped handle"
    },
    {
      id: 9,
      name: "Custom Printed Mug",
      category: "Personalized Mugs",
      price: 349,
      rating: 4.7,
      image: printedMug,
      description: "Personalized mug with your custom design or photo"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mugs' },
    { id: 'Plain Mugs', name: 'Plain Mugs' },
    { id: 'Magic Mugs', name: 'Magic Mugs' },
    { id: 'Special Mugs', name: 'Special Mugs' },
    { id: 'Premium Mugs', name: 'Premium Mugs' },
    { id: 'Personalized Mugs', name: 'Personalized Mugs' }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    (searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
            {selectedCategory === 'all' ? 'All Mugs' : selectedCategory}
          </motion.h1>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  navigate(category.id === 'all' ? '/mugs' : `/mugs?category=${category.id}`);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

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
                  onClick={() => navigate(`/mugs/${product.id}`)}
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

export default MugsPage;
