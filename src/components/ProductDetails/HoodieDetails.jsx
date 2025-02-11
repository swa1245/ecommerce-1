import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import hoodie1 from '../assests/hoodie1.jpg';
import hoodie2 from '../assests/hoodie2.jpg';
import hoodie3 from '../assests/hoodie3.jpg';
import hoodie4 from '../assests/hoodie4.jpg';

const HoodieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const hoodies = [
    {
      id: "1",
      name: 'Classic Comfort Hoodie',
      description: 'Experience ultimate comfort with our premium cotton blend hoodie. Features a modern fit, adjustable drawstring hood, and kangaroo pocket.',
      image: hoodie1,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Premium cotton blend material',
        'Adjustable drawstring hood',
        'Ribbed cuffs and hem',
        'Kangaroo pocket',
        'Machine washable'
      ]
    },
    {
      id: "2",
      name: 'Pullover Hoodie',
      description: 'Cozy pullover hoodie perfect for casual wear.',
      image: hoodie2,
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Soft cotton fabric',
        'Regular fit',
        'Front pocket',
        'Double-layered hood',
        'Durable construction'
      ]
    },
    {
      id: "3",
      name: 'Sport Zip Hoodie',
      description: 'Athletic zip hoodie for active lifestyle.',
      image: hoodie3,
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Moisture-wicking fabric',
        'Full zip closure',
        'Side pockets',
        'Athletic fit',
        'Breathable material'
      ]
    },
    {
      id: "4",
      name: 'Oversized Hoodie',
      description: 'Without Zip Hoodie.',
      image: hoodie4,
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Oversized fit',
        'Drop shoulders',
        'Heavy-weight fabric',
        'Large hood',
        'Extra long sleeves'
      ]
    }
  ];

  const currentHoodie = hoodies.find(h => h.id === id) || hoodies[0];

  if (!currentHoodie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Hoodie not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: currentHoodie.id,
      name: currentHoodie.name,
      image: currentHoodie.image,
      size: selectedSize,
      quantity: quantity
    });
    toast.success('Added to cart successfully!');
  };

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div className="relative w-full max-w-md">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  src={currentHoodie.image}
                  alt={currentHoodie.name}
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold text-gray-900"
              >
                {currentHoodie.name}
              </motion.h2>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 text-gray-600"
              >
                {currentHoodie.description}
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  {currentHoodie.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Select Size:</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {currentHoodie.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Quantity:</h3>
                <div className="mt-2 flex items-center space-x-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    -
                  </motion.button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 flex items-center justify-between"
              >
                <motion.div 
                  className="mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-3xl font-bold text-gray-900">Contact for Price</p>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HoodieDetails;
