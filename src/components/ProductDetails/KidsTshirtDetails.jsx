import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

const KidsTshirtDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const { product } = location.state || {};

  if (!product) {
    navigate('/kids/tshirts');
    return null;
  }

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

  const calculateDiscount = () => {
    if (!product.oldPrice) return 0;
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
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
            className="rounded-lg overflow-hidden bg-white shadow-xl relative"
          >
            {calculateDiscount() > 0 && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {calculateDiscount()}% OFF
              </div>
            )}
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
            
            <div className="mt-3 flex items-end">
              <p className="text-3xl font-bold text-gray-900">
                ₹{product.price}
              </p>
              {product.oldPrice && (
                <p className="ml-2 text-xl text-gray-500 line-through">
                  ₹{product.oldPrice.toFixed(2)}
                </p>
              )}
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating} out of 5 stars
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-500">{product.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Select Size</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${
                      selectedSize === size
                        ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2'
                        : 'bg-white text-gray-900 hover:bg-gray-50 ring-1 ring-gray-200'
                    } border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase focus:outline-none transition-all duration-200`}
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KidsTshirtDetails;
