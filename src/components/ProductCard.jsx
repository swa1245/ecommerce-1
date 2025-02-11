import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useNavigate } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { FaHeart, FaStar } from 'react-icons/fa'

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const navigate = useNavigate();
  
  const isProductFavorite = isFavorite(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the card click event from firing
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: 1
    };
    addToCart(cartItem);
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category
      });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(product);
      return;
    }

    // Category-specific routing
    if (product.category?.toLowerCase().includes('t-shirt')) {
      navigate(`/tshirts/${product.id}`);
    } else if (product.category?.toLowerCase().includes('hoodie')) {
      navigate(`/hoodies/${product.id}`);
    } else if (product.category?.toLowerCase().includes('mug')) {
      navigate(`/mugs/${product.id}`);
    } else if (product.category?.toLowerCase().includes('bottle')) {
      navigate(`/bottles/${product.id}`);
    } else if (product.category?.toLowerCase().includes('kid')) {
      navigate(`/kids/${product.id}`);
    } else if (product.category?.toLowerCase().includes('corporate')) {
      navigate(`/corporate/${product.id}`);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-2 sm:p-4"
        />
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          {isProductFavorite ? (
            <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
          ) : (
            <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        {/* Brand/Category */}
        <div className="text-xs sm:text-sm text-gray-500 mb-1">{product.category}</div>
        
        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-1 text-xs sm:text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="mt-2">
          <p className="text-lg font-medium text-gray-900">Contact for Price</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
