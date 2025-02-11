import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleContactClick = () => {
    // Format cart items for WhatsApp message
    const itemsList = cartItems.map(item => 
      `${item.title} (Quantity: ${item.quantity})`
    ).join('\n');
    
    const message = `Hi, I'm interested in purchasing:\n\n${itemsList}\n\nPlease provide pricing details.`;
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/+919881460549?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto text-center"
        >
          <svg className="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 font-sans">Start adding items to your cart to see them here.</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium 
                  hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/25"
              >
                Explore Products
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-outfit">Shopping Cart</h1>
        
        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 font-outfit">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-sans">{item.category}</p>
                  <p className="text-sm font-medium text-blue-600 mt-1">Contact for Price</p>
                </div>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </motion.button>
                  
                  <span className="text-gray-900 font-medium w-8 text-center">{item.quantity}</span>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Remove Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 rounded-full hover:bg-red-50 text-red-500"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Total Items</span>
            <span className="text-lg font-semibold">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium 
              hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/25"
          >
            Contact for Pricing
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
