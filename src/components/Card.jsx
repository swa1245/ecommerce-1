import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, name, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 h-full"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      <motion.div 
        className="p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Explore
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Card;
