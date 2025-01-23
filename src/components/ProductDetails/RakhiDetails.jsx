import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { motion } from 'framer-motion';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import customRakhi1 from '../assests/CustomRakhi1.jpg';
import customRakhi2 from '../assests/CustomRakhi2.jpg';

const RakhiDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('');

  const rakhiProducts = {
    1: {
      id: 1,
      name: "Premium Custom Rakhi",
      category: "Premium Rakhis",
      price: 299,
      rating: 4.8,
      image: customRakhi1,
      description: "Beautifully crafted custom rakhi with premium materials",
      features: [
        "Premium quality materials",
        "Customizable text",
        "Elegant design",
        "Gift box included"
      ],
      designs: ["Traditional", "Modern", "Royal", "Classic"]
    },
    2: {
      id: 2,
      name: "Personalized Photo Rakhi",
      category: "Photo Rakhis",
      price: 399,
      rating: 4.9,
      image: customRakhi2,
      description: "Custom photo rakhi to make your bond special",
      features: [
        "High-quality photo printing",
        "Water-resistant coating",
        "Adjustable size",
        "Premium packaging"
      ],
      designs: ["Single Photo", "Collage", "Photo with Text", "Heart Frame"]
    }
  };

  const product = rakhiProducts[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
      </div>
    );
  }

  const isInFavorites = favorites.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ 
      ...product, 
      quantity,
      customization: {
        text: customText,
        design: selectedDesign
      }
    });
    toast.success('Added to cart!');
  };

  const handleFavoriteClick = () => {
    if (isInFavorites) {
      removeFromFavorites(product.id);
      toast.success('Removed from favorites!');
    } else {
      addToFavorites(product);
      toast.success('Added to favorites!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 md:h-full"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleFavoriteClick}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                >
                  {isInFavorites ? (
                    <AiFillHeart className="w-6 h-6 text-red-500" />
                  ) : (
                    <AiOutlineHeart className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </motion.div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{product.rating}/5</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Features:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Design Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Select Design:</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.designs.map((design, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDesign(design)}
                        className={`px-4 py-2 border rounded-md transition-colors duration-200 ${
                          selectedDesign === design
                            ? 'border-blue-500 text-blue-500'
                            : 'hover:border-blue-500 hover:text-blue-500'
                        }`}
                      >
                        {design}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Text Input */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Personalize Your Rakhi:</h3>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter your message (optional)"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={50}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {50 - customText.length} characters remaining
                  </p>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="p-2 border rounded-md hover:border-blue-500 hover:text-blue-500"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="p-2 border rounded-md hover:border-blue-500 hover:text-blue-500"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RakhiDetails;
