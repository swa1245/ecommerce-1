import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

const CapDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const { product } = location.state || {};

  if (!product) {
    navigate('/other-products');
    return null;
  }

  const sizeOptions = ['S', 'M', 'L', 'XL'];

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden bg-white p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-10 lg:mt-0 px-4"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="mt-4">
              <p className="text-2xl font-bold text-indigo-600">₹{product.price}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${
                        index < product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-6.327 3.89 1.688-7.302L.074 7.907l7.397-.641L10 .585l2.529 6.681 7.397.641-5.287 4.266 1.688 7.302z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-gray-600">{product.rating} stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-500">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="grid grid-cols-4 gap-4 mt-2">
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
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li>• High-quality sublimation printing</li>
                <li>• Adjustable strap for perfect fit</li>
                <li>• Breathable material</li>
                <li>• Durable construction</li>
                <li>• UV protection</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="mt-8 w-full bg-indigo-600 py-3 px-8 rounded-md text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CapDetails;
