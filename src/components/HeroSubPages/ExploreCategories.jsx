import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExploreCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'T-Shirts',
      description: 'Custom designed t-shirts for every occasion',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
      itemCount: '150+ Items',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      id: 2,
      name: 'Hoodies',
      description: 'Comfortable hoodies with unique designs',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format',
      itemCount: '100+ Items',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      id: 3,
      name: 'Mugs',
      description: 'Personalized mugs for home and office',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format',
      itemCount: '80+ Items',
      color: 'from-pink-500/20 to-pink-600/20'
    },
    {
      id: 4,
      name: 'Phone Cases',
      description: 'Protective cases with artistic designs',
      image: 'https://images.unsplash.com/photo-15862071463884-2a4b6b9f63a3?w=500&auto=format',
      itemCount: '120+ Items',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      id: 5,
      name: 'Stickers',
      description: 'High-quality stickers for any surface',
      image: 'https://images.unsplash.com/photo-1629392554711-1b9d90205f92?w=500&auto=format',
      itemCount: '200+ Items',
      color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      id: 6,
      name: 'Posters',
      description: 'Wall art that makes a statement',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format',
      itemCount: '90+ Items',
      color: 'from-red-500/20 to-red-600/20'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b w-screen from-white to-gray-50">
      <div className="max-w-7xl w-screen mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full"
          >
            <span className="text-sm font-semibold text-blue-600">
              Discover More
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit"
          >
            Explore Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find the perfect custom product from our wide range of categories
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
              }}
            >
              <Link 
                to={`/category/${category.name.toLowerCase()}`}
                className="block group"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.color} p-1`}
                >
                  <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
                    {/* Image Container */}
                    <div className="relative h-72 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="absolute inset-0"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 inset-x-0 p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {category.name}
                          </motion.h3>
                          <p className="text-gray-200 text-sm">
                            {category.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            {category.itemCount}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/categories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium 
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:ring-offset-2 transition-colors duration-300 shadow-lg shadow-blue-500/25"
            >
              View All Categories
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreCategories;
