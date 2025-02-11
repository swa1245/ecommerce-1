import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import whiteMug from '../assests/whiteMug.jpg';
import threeToneMug from '../assests/3ToneMug.jpg';
import threeToneMug2 from '../assests/3ToneMug (2).jpg';
import threeToneMug3 from '../assests/3 Tone Mug 3.jpg';
import magicMugHeart from '../assests/MagicMugHeartHandle.jpg';
import coupleMug from '../assests/coupleMug.jpg';
import goldenMug from '../assests/GoldenMug.jpg';
import silverMug from '../assests/SilverMug.jpg';
import whiteHeartMug from '../assests/WhiteHeartHandleaMug.jpg';
import printedMug from '../assests/printedmug.jpg';
import teaMug11oz from '../assests/11 Oz Tea Mug.jpg';
import teaMug11oz3 from '../assests/11 Oz Tea Mug3.jpg';
import teaMug11oz4 from '../assests/11Oz Tea Mug4.jpg';
import teaMug6oz from '../assests/6 Oz Tea Mug.jpg';
import teaMug6oz2 from '../assests/6 Oz Tea Mug2.jpg';
import teaMug6oz3 from '../assests/6 Oz Tea Mug3.jpg';

const MugDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const mugs = [
    {
      id: 1,
      name: "11 Oz Tea Mug",
      category: "Plain Mugs",
      rating: 4.5,
      image: teaMug11oz,
      description: "Premium 11 Oz ceramic tea mug for your daily brew",
      features: [
        "High-quality ceramic material",
        "Dishwasher and microwave safe",
        "Perfect for hot and cold beverages",
        "Durable and long-lasting",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 2,
      name: "11 Oz Tea Mug (Design 2)",
      category: "Plain Mugs",
      rating: 4.5,
      image: teaMug11oz3,
      description: "Elegant 11 Oz ceramic tea mug with modern design",
      features: [
        "Modern aesthetic design",
        "Premium ceramic build",
        "Microwave safe",
        "Easy-grip handle",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 3,
      name: "11 Oz Tea Mug (Design 3)",
      category: "Plain Mugs",
      rating: 4.5,
      image: teaMug11oz4,
      description: "Stylish 11 Oz ceramic tea mug perfect for gifting",
      features: [
        "Gift-worthy design",
        "Superior quality ceramic",
        "Dishwasher safe",
        "Comfortable grip",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 4,
      name: "3-Tone Magic Mug",
      category: "Three Tone Mugs",
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect",
      features: [
        "Heat-sensitive color changing",
        "Three distinct color zones",
        "Premium ceramic material",
        "Hand wash recommended",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 5,
      name: "3-Tone Magic Mug (Design 2)",
      category: "Three Tone Mugs",
      rating: 4.8,
      image: threeToneMug2,
      description: "Stunning three-tone magic mug with unique pattern",
      features: [
        "Heat-activated design",
        "Triple color transformation",
        "High-quality ceramic",
        "Gentle hand wash only",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 6,
      name: "3-Tone Magic Mug (Design 3)",
      category: "Three Tone Mugs",
      rating: 4.8,
      image: threeToneMug3,
      description: "Beautiful three-tone magic mug with special design",
      features: [
        "Temperature-sensitive coating",
        "Tri-color pattern reveal",
        "Durable ceramic build",
        "Hand wash recommended",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 7,
      name: "6 Oz Tea Mug",
      category: "Plain Mugs",
      rating: 4.6,
      image: teaMug6oz,
      description: "Compact 6 Oz ceramic mug for tea and coffee",
      features: [
        "Compact size",
        "Perfect for small servings",
        "Premium ceramic",
        "Easy to handle",
        "Capacity: 6 oz"
      ]
    },
    {
      id: 8,
      name: "6 Oz Tea Mug (Design 2)",
      category: "Plain Mugs",
      rating: 4.6,
      image: teaMug6oz2,
      description: "Elegant 6 Oz ceramic mug with unique pattern",
      features: [
        "Unique pattern design",
        "Space-saving size",
        "Quality ceramic build",
        "Perfect for espresso",
        "Capacity: 6 oz"
      ]
    },
    {
      id: 9,
      name: "6 Oz Tea Mug (Design 3)",
      category: "Plain Mugs",
      rating: 4.6,
      image: teaMug6oz3,
      description: "Stylish 6 Oz ceramic mug with modern design",
      features: [
        "Modern styling",
        "Ideal for small servings",
        "Durable construction",
        "Easy to clean",
        "Capacity: 6 oz"
      ]
    },
    {
      id: 10,
      name: "Magic Mug with Heart Handle",
      category: "Magic Mugs",
      rating: 4.9,
      image: magicMugHeart,
      description: "Color-changing mug with lovely heart handle",
      features: [
        "Heat-sensitive color changing",
        "Unique heart-shaped handle",
        "Premium ceramic material",
        "Hand wash recommended",
        "Perfect for gifting"
      ]
    },
    {
      id: 11,
      name: "Golden Premium Mug",
      category: "Transparent Mugs",
      rating: 4.9,
      image: goldenMug,
      description: "Luxurious golden-finished ceramic mug",
      features: [
        "Premium golden finish",
        "Transparent glass design",
        "Heat-resistant material",
        "Elegant appearance",
        "Perfect for special occasions"
      ]
    },
    {
      id: 12,
      name: "Silver Premium Mug",
      category: "Transparent Mugs",
      rating: 4.9,
      image: silverMug,
      description: "Elegant silver-finished ceramic mug",
      features: [
        "Premium silver finish",
        "Crystal clear transparency",
        "Temperature resistant",
        "Modern design",
        "Ideal for gifting"
      ]
    },
    {
      id: 13,
      name: "White Heart Handle Mug",
      category: "Plain Mugs",
      rating: 4.7,
      image: whiteHeartMug,
      description: "White ceramic mug with decorative heart handle",
      features: [
        "Unique heart handle",
        "Premium white ceramic",
        "Perfect for gifting",
        "Elegant design",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 14,
      name: "Couple Mug Set",
      category: "Plain Mugs",
      rating: 5.0,
      image: coupleMug,
      description: "Perfect pair of mugs for couples",
      features: [
        "Set of 2 matching mugs",
        "High-quality ceramic",
        "Romantic design",
        "Gift-ready packaging",
        "Capacity: 11 oz each"
      ]
    },
    {
      id: 15,
      name: "Custom Printed Mug",
      category: "Plain Mugs",
      rating: 4.8,
      image: printedMug,
      description: "Personalized mug with custom printing",
      features: [
        "Customizable design",
        "High-quality printing",
        "Dishwasher safe",
        "Premium ceramic",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 16,
      name: "Classic White Mug",
      category: "Plain Mugs",
      rating: 4.5,
      image: whiteMug,
      description: "Classic white ceramic mug for everyday use",
      features: [
        "Timeless design",
        "Durable ceramic",
        "Microwave safe",
        "Easy to clean",
        "Capacity: 11 oz"
      ]
    }
  ];

  const mug = mugs.find(m => m.id === parseInt(id));

  if (!mug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/mugs')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Back to Mugs
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...mug,
      quantity
    });
  };

  const handleBack = () => {
    navigate(-1);
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={mug.image}
                alt={mug.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  {mug.category}
                </div>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">{mug.name}</h2>
                <p className="mt-4 text-lg text-gray-600">{mug.description}</p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
                  <ul className="mt-2 space-y-2">
                    {mug.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex items-center">
                    <p className="text-3xl font-bold text-gray-900">Contact for Price</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <svg className="h-6 w-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M20 12H4"></path>
                      </svg>
                    </button>
                    <span className="text-xl font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <svg className="h-6 w-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-8 space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate('/mugs')}
                    className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    Back to Mugs
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MugDetails;
