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

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
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
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          {isProductFavorite ? (
            <FaHeart className="w-5 h-5 text-red-500" />
          ) : (
            <FiHeart className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand/Category */}
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center bg-green-600 text-white text-xs px-1.5 py-0.5 rounded">
            <span className="font-medium">{product.rating}</span>
            <FaStar className="w-3 h-3 ml-0.5" />
          </div>
          <span className="text-xs text-gray-500 ml-2">(120)</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-medium text-gray-900">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {formatPrice(Math.round(product.price * 1.2))}
          </span>
          <span className="text-xs text-green-600 font-medium">20% off</span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
