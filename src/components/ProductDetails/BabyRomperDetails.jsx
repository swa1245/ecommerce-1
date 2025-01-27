import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

const BabyRomperDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const { product } = location.state || {};

  if (!product) {
    navigate('/baby-romper');
    return null;
  }

  const sizeOptions = [
    '3-6 Months',
    '6-9 Months',
    '9-12 Months',
    '12 Months'
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      quantity: 1
    });

    toast.success('Added to cart successfully!');
  };

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
        </motion.button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-outfit">
              {product.name}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-500">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${
                      selectedSize === size
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    } px-4 py-2 border rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Features</h3>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BabyRomperDetails;
