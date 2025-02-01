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

  const products = [
    {
      id: 1,
      name: "Kids Cotton T-Shirt",
      category: "T-Shirts",
      price: 499,
      rating: 4.5,
      image: kid1,
      description: "Comfortable cotton t-shirt for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 599,
      rating: 4.7,
      image: kid2,
      description: "Fun printed t-shirt for active kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 649,
      rating: 4.6,
      image: kid3,
      description: "Cool graphic design t-shirt",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 549,
      rating: 4.4,
      image: kid4,
      description: "Classic striped pattern t-shirt",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 699,
      rating: 4.8,
      image: kid5,
      description: "Perfect for sports and outdoor activities",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 599,
      rating: 4.8,
      image: kid6,
      description: "Stylish summer collection for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 649,
      rating: 4.7,
      image: kid7,
      description: "Comfortable casual wear for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 699,
      rating: 4.9,
      image: kid8,
      description: "Perfect for special occasions",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
      price: 549,
      rating: 4.6,
      image: kid9,
      description: "Active wear for energetic kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
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
    addToCart({
      ...product,
      quantity,
      selectedSize,
      totalPrice: product.price * quantity
    });
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
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                <div className="ml-4 flex items-center">
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
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">({product.rating})</span>
                </div>
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

              <motion.button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart - ₹{product.price * quantity}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsTshirtDetails;
