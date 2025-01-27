import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import tempBottle1 from '../assests/TempBottle1.jpg';
import tempBottle2 from '../assests/TempBottle2.jpg';
import tempBottle3 from '../assests/tempBottle.jpg';
import tempBottle4 from '../assests/tempBottle (2).jpg';
import customizeBottle from '../assests/CustomizeBottle.jpg';

const BottleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const bottles = {
    1: {
      id: 1,
      name: "Premium Sublimation Bottle",
      category: "Sublimation",
      price: 24.99,
      rating: 4.5,
      image: customizeBottle,
      description: "High-quality sublimation water bottle for custom designs",
      features: [
        "Premium grade stainless steel",
        "Double-wall insulation",
        "Leak-proof design",
        "Custom sublimation printing",
        "24-hour cold retention"
      ],
      specifications: {
        "Material": "304 Stainless Steel",
        "Capacity": "750ml",
        "Height": "26cm",
        "Diameter": "7.5cm",
        "Weight": "350g"
      }
    },
    2: {
      id: 2,
      name: "Insulated Temperature Bottle",
      category: "Temperature Bottle",
      price: 29.99,
      rating: 4.8,
      image: tempBottle1,
      description: "Double-wall insulated temperature control bottle",
      features: [
        "Triple-layer insulation",
        "Vacuum-sealed technology",
        "BPA-free materials",
        "Wide-mouth design",
        "Powder-coated finish"
      ],
      specifications: {
        "Material": "18/8 Stainless Steel",
        "Capacity": "1000ml",
        "Height": "28cm",
        "Diameter": "8cm",
        "Weight": "400g"
      }
    },
    3: {
      id: 3,
      name: "Sport Sublimation Bottle",
      category: "Sublimation",
      price: 22.99,
      rating: 4.6,
      image: tempBottle2,
      description: "Lightweight sublimation bottle for sports",
      features: [
        "Lightweight design",
        "Easy-grip texture",
        "Quick-access flip cap",
        "Sublimation printing surface",
        "Sweat-proof exterior"
      ],
      specifications: {
        "Material": "Food-grade Stainless Steel",
        "Capacity": "500ml",
        "Height": "22cm",
        "Diameter": "6.5cm",
        "Weight": "280g"
      }
    },
    4: {
      id: 4,
      name: "Vacuum Insulated Bottle",
      category: "Temperature Bottle",
      price: 34.99,
      rating: 4.7,
      image: vaccumBootle,
      description: "Premium vacuum insulated temperature bottle",
      features: [
        "Advanced vacuum insulation",
        "Temperature lock technology",
        "Premium steel construction",
        "Ergonomic design",
        "48-hour temperature retention"
      ],
      specifications: {
        "Material": "Premium 18/8 Stainless Steel",
        "Capacity": "1200ml",
        "Height": "30cm",
        "Diameter": "8.5cm",
        "Weight": "450g"
      }
    },
    5: {
      id: 5,
      name: "Modern Temperature Bottle",
      category: "Temperature Bottle",
      price: 32.99,
      rating: 4.9,
      image: tempBottle3,
      description: "Modern design temperature-controlled bottle",
      features: [
        "Contemporary design",
        "Smart temperature display",
        "One-touch lid operation",
        "Anti-slip base",
        "36-hour insulation"
      ],
      specifications: {
        "Material": "304 Stainless Steel",
        "Capacity": "900ml",
        "Height": "27cm",
        "Diameter": "7.8cm",
        "Weight": "380g"
      }
    },
    6: {
      id: 6,
      name: "Elite Sublimation Bottle",
      category: "Sublimation",
      price: 27.99,
      rating: 4.8,
      image: tempBottle4,
      description: "Elite grade sublimation bottle for professional use",
      features: [
        "Professional-grade construction",
        "Enhanced sublimation surface",
        "Premium insulation",
        "Secure-lock lid",
        "Scratch-resistant coating"
      ],
      specifications: {
        "Material": "High-grade Stainless Steel",
        "Capacity": "800ml",
        "Height": "25cm",
        "Diameter": "7.2cm",
        "Weight": "360g"
      }
    }
  };

  const bottle = bottles[id];

  if (!bottle) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...bottle,
      quantity
    });
    toast.success('Added to cart!');
  };

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
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

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={bottle.image}
              alt={bottle.name}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-900">{bottle.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">${bottle.price}</span>
              <span className="text-sm text-gray-500">/unit</span>
            </div>
            
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < bottle.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({bottle.rating})</span>
            </div>

            <p className="text-gray-600">{bottle.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-700">Quantity:</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {bottle.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(bottle.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm"
                  >
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="ml-2 text-gray-600">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BottleDetails;
