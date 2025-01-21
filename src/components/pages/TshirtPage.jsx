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
import polo1 from '../assests/polo1.jpg';
import polo2 from '../assests/polo2.jpg';
import polo3 from '../assests/polo3.jpg';
import polo4 from '../assests/polo4.jpg';
import polo5 from '../assests/polo5.jpg';

const TshirtPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const tshirts = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "Round Neck T-shirt",
      price: 24.99,
      rating: 4.5,
      image: t1,
      description: "Premium cotton t-shirt with a comfortable fit"
    },
    {
      id: 2,
      name: "Sport Performance Tee",
      category: "Sport T-shirt",
      price: 29.99,
      rating: 4.8,
      image: t2,
      description: "Moisture-wicking sport t-shirt for active lifestyle"
    },
    {
      id: 3,
      name: "Urban Street T-Shirt",
      category: "Graphic T-shirt",
      price: 27.99,
      rating: 4.6,
      image: t3,
      description: "Trendy graphic t-shirt with urban design"
    },
    {
      id: 4,
      name: "Premium Cotton Round Neck",
      category: "Round Neck T-shirt",
      price: 32.99,
      rating: 4.7,
      image: t4,
      description: "High-quality cotton t-shirt for everyday comfort"
    },
    {
      id: 5,
      name: "Designer Collection Tee",
      category: "Designer T-shirt",
      price: 34.99,
      rating: 4.9,
      image: t5,
      description: "Exclusive designer t-shirt with unique patterns"
    },
    {
      id: 6,
      name: "Casual Comfort T-Shirt",
      category: "Casual T-shirt",
      price: 26.99,
      rating: 4.6,
      image: t6,
      description: "Comfortable casual t-shirt for daily wear"
    },
    {
      id: 7,
      name: "Classic Polo T-Shirt",
      category: "Collar T-shirt",
      price: 39.99,
      rating: 4.8,
      image: polo1,
      description: "Premium cotton polo t-shirt with perfect fit"
    },
    {
      id: 8,
      name: "Business Casual Polo",
      category: "Collar T-shirt",
      price: 44.99,
      rating: 4.7,
      image: polo2,
      description: "Elegant polo t-shirt for business casual settings"
    },
    {
      id: 9,
      name: "Sport Performance Polo",
      category: "Collar T-shirt",
      price: 49.99,
      rating: 4.9,
      image: polo3,
      description: "Athletic polo t-shirt with moisture-wicking fabric"
    },
    {
      id: 10,
      name: "Premium Cotton Polo",
      category: "Collar T-shirt",
      price: 42.99,
      rating: 4.6,
      image: polo4,
      description: "High-quality cotton polo for superior comfort"
    },
    {
      id: 11,
      name: "Designer Polo Collection",
      category: "Collar T-shirt",
      price: 54.99,
      rating: 4.8,
      image: polo5,
      description: "Exclusive designer polo t-shirt with premium finish"
    }
  ];

  const categories = [
    { id: 'all', name: 'All T-shirts' },
    { id: 'Round Neck T-shirt', name: 'Round Neck' },
    { id: 'Collar T-shirt', name: 'Collar T-shirt' },
    { id: 'Sport T-shirt', name: 'Sport T-shirt' },
    { id: 'Designer T-shirt', name: 'Designer' },
    { id: 'Casual T-shirt', name: 'Casual' }
  ];

  const filteredTshirts = tshirts.filter(tshirt => {
    const matchesCategory = selectedCategory === 'all' || tshirt.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      tshirt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tshirt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tshirt.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <TshirtBanner />
      
      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
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

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTshirts.map((tshirt, index) => (
              <motion.div
                key={tshirt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

export default TshirtPage;
