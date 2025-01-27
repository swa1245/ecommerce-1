import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { motion } from 'framer-motion';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import mirror1 from '../assests/mirror1.jpg';
import mirrorHeart from '../assests/mirrorHear.jpg';
import mirror3 from '../assests/mirrow3.jpg';

const MirrorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  const mirrorProducts = {
    1: {
      id: 1,
      name: "Designer Wall Mirror",
      category: "Wall Mirrors",
      price: 1499,
      rating: 4.5,
      image: mirror1,
      description: "Elegant designer wall mirror with intricate patterns",
      features: [
        "Premium quality glass",
        "Decorative frame",
        "Easy wall mounting",
        "Elegant design"
      ],
      sizes: ["18×24 inch", "24×36 inch", "30×40 inch"]
    },
    2: {
      id: 2,
      name: "Heart Shape Mirror",
      category: "Decorative Mirrors",
      price: 999,
      rating: 4.8,
      image: mirrorHeart,
      description: "Beautiful heart-shaped mirror for romantic decor",
      features: [
        "Unique heart shape",
        "Perfect for gifting",
        "High-quality mirror",
        "Stylish design"
      ],
      sizes: ["Small", "Medium", "Large"]
    },
    3: {
      id: 3,
      name: "Modern Art Mirror",
      category: "Wall Mirrors",
      price: 1999,
      rating: 4.7,
      image: mirror3,
      description: "Contemporary art mirror with unique design",
      features: [
        "Modern design",
        "Premium finish",
        "Durable construction",
        "Statement piece"
      ],
      sizes: ["24×24 inch", "30×30 inch", "36×36 inch"]
    }
  };

  const product = mirrorProducts[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
        <button
            onClick={() => navigate('/other-products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Back to Other Products
          </button>
      </div>
    );
  }

  const isInFavorites = favorites.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
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
  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Available Sizes:</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border rounded-md hover:border-blue-500 hover:text-blue-500 transition-colors duration-200"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
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

export default MirrorDetails;
