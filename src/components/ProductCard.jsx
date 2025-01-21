import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const isProductFavorite = isFavorite(product.id);

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

  const handleProductClick = () => {
    if (product.category?.includes('Hoodie')) {
      navigate(`/hoodies/${product.id}`);
    } else if (product.category?.includes('T-shirt')) {
      navigate(`/tshirts/${product.id}`);
    }else if(product.category?.includes('Mug')) {
      navigate(`/mugs/${product.id}`);
    }else if(product.category?.includes('Bottle')) {
      navigate(`/bottles/${product.id}`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleProductClick}
      className="group relative bg-white rounded-[2rem] overflow-hidden transform-gpu transition-all duration-500 cursor-pointer"
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
          : '0 10px 30px -3px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <motion.div 
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />

        {/* Quick Actions */}
        <motion.div 
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 inset-x-6 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="px-6 py-3 bg-white text-gray-900 rounded-xl text-sm font-medium 
                hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleFavorite}
          className={`absolute top-6 right-6 p-3.5 rounded-full backdrop-blur-sm
            ${isProductFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'} 
            shadow-xl transform-gpu transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isProductFavorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isProductFavorite ? "0" : "2"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </motion.button>

        {/* Discount Badge */}
        {product.discount && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-6 left-6 px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-semibold
              shadow-xl backdrop-blur-sm"
          >
            {product.discount}% OFF
          </motion.div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-outfit text-xl font-bold text-gray-900 leading-tight mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-blue-600">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
