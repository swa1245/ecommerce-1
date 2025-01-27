import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);
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

    // Default navigation logic if no onClick provided
    if (product.category?.includes('Hoodie')) {
      navigate(`/hoodies/${product.id}`);
    } else if (product.category?.includes('T-shirt')) {
      navigate(`/tshirts/${product.id}`);
    } else if(product.category?.includes('Mug')) {
      navigate(`/mugs/${product.id}`);
    } else if(product.category?.includes('Bottle')) {
      navigate(`/bottles/${product.id}`);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className="group relative bg-white rounded-[2rem] overflow-hidden transform-gpu transition-all duration-500 cursor-pointer"
      style={{
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleFavorite}
            className={`p-2 rounded-full ${
              isProductFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-900'
            } shadow-lg backdrop-blur-sm`}
          >
            <svg
              className="w-6 h-6"
              fill={isProductFavorite ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm font-medium text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
