import React from 'react';
import { motion } from 'framer-motion';

const ExploreCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden "
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 font-outfit tracking-wide">
          {item.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit tracking-tight">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 font-sans text-sm leading-relaxed tracking-wide">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {item.stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-1">
                <span className="text-gray-500">{stat.icon}</span>
                <span className="text-sm font-medium text-gray-700 font-sans">{stat.value}</span>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm font-outfit tracking-wide"
          >
            Learn More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
