import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

// Import kids images
import kid1 from '../assests/kid1.jpg';
import kid2 from '../assests/kid2.jpg';
import kid3 from '../assests/kid3.jpg';
import kid4 from '../assests/kid4.jpg';
import kid5 from '../assests/kid5.jpg';
import kid6 from '../assests/kid 6.jpg';
import kid7 from '../assests/kid 7.jpg';
import kid8 from '../assests/kid 8.jpg';
import kid9 from '../assests/kid 9.jpg';

const KidsTshirtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('2-3Y');
  const [selectedColor, setSelectedColor] = useState('white');

  const products = [
    {
      id: 1,
      name: "Kids Cotton T-Shirt",
      category: "T-Shirts",
      description: "Comfortable cotton t-shirt for kids",
      image: kid1,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "100% cotton",
        "Breathable fabric",
        "Easy to wash",
        "Durable quality"
      ]
    },
    {
      id: 2,
      name: "Kids Printed T-Shirt",
      category: "T-Shirts",
      description: "Fun printed t-shirt for active kids",
      image: kid2,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Colorful prints",
        "Soft material",
        "Color-fast",
        "Machine washable"
      ]
    },
    {
      id: 3,
      name: "Kids Graphic T-Shirt",
      category: "T-Shirts",
      description: "Cool graphic design t-shirt",
      image: kid3,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Trendy designs",
        "Premium cotton",
        "Comfortable fit",
        "Long-lasting print"
      ]
    },
    {
      id: 4,
      name: "Kids Striped T-Shirt",
      category: "T-Shirts",
      description: "Classic striped pattern t-shirt",
      image: kid4,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Striped pattern",
        "Casual wear",
        "Soft cotton blend",
        "Easy maintenance"
      ]
    },
    {
      id: 5,
      name: "Kids Sports T-Shirt",
      category: "T-Shirts",
      description: "Perfect for sports and outdoor activities",
      image: kid5,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Quick-dry fabric",
        "Moisture-wicking",
        "Lightweight",
        "UV protection"
      ]
    },
    {
      id: 6,
      name: "Kids Summer Collection",
      category: "T-Shirts",
      description: "Stylish summer collection for kids",
      image: kid6,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Premium cotton blend",
        "Breathable fabric",
        "UV protection",
        "Easy to wash"
      ]
    },
    {
      id: 7,
      name: "Kids Casual Collection",
      category: "T-Shirts",
      description: "Comfortable casual wear for kids",
      image: kid7,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Soft cotton material",
        "Durable stitching",
        "Fade resistant",
        "Perfect for daily wear"
      ]
    },
    {
      id: 8,
      name: "Kids Party Collection",
      category: "T-Shirts",
      description: "Perfect for special occasions",
      image: kid8,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Premium quality",
        "Stylish design",
        "Comfortable fit",
        "Easy maintenance"
      ]
    },
    {
      id: 9,
      name: "Kids Sports Collection",
      category: "T-Shirts",
      description: "Active wear for energetic kids",
      image: kid9,
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      colors: ["white", "blue", "pink"],
      features: [
        "Quick dry fabric",
        "Sweat absorbent",
        "Flexible material",
        "Durable quality"
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-600">Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-w-1 aspect-h-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-blue-600">Contact for Price</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Color:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedColor === color
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </motion.button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsTshirtDetails;
