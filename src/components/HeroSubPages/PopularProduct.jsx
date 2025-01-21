import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../ProductCard';
import { useNavigate } from 'react-router-dom';
import polo1 from '../assests/polo1.jpg';
import hoodie1 from '../assests/hoodie1.jpg';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import bootle2 from '../assests/bootle2.jpg';

const PopularProduct = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'T-Shirts', 'Hoodies', 'Mugs', 'Accessories'];
  
  const products = [
    {
      id: 1,
      name: 'Classic Polo T-Shirt',
      description: 'Premium cotton blend classic fit t-shirt with minimalist design',
      price: 29.99,
      oldPrice: 39.99,
      image: polo1,
      category: 'T-Shirts',
      rating: 4.8,
      discount: 25,
      path: '/tshirts/7'
    },
    {
      id: 2,
      name: 'Urban Hoodie Black',
      description: 'Comfortable urban style hoodie perfect for everyday wear',
      price: 59.99,
      oldPrice: 79.99,
      image: hoodie1,
      category: 'Hoodies',
      rating: 4.9,
      discount: 20
    },
    {
      id: 3,
      name: 'Ceramic Designer Mug',
      description: 'Hand-crafted ceramic mug with artistic design',
      price: 24.99,
      oldPrice: 29.99,
      image: vaccumBootle,
      category: 'Mugs',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Premium Sports Bottle',
      description: 'Vacuum insulated stainless steel sports bottle',
      price: 34.99,
      oldPrice: 44.99,
      image: bootle2,
      category: 'Accessories',
      rating: 4.6,
      discount: 15
    }
  ];

  const handleProductClick = (product) => {
    if (product.id === 1) {
      navigate('/tshirts/7');
    } else if (product.id === 4) {
      navigate('/bottles/2');
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-24 w-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full"
          >
            <span className="text-sm font-semibold text-blue-600">
              Featured Collection
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit"
          >
            Popular Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our most loved items that combine style, quality, and value
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2'
                  : 'bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 md:gap-10"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      delay: index * 0.1
                    }
                  }
                }}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 px-4 rounded-3xl bg-gray-50"
          >
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any products in this category. Try selecting a different category or check back later.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory('All')}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                View All Products
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PopularProduct;