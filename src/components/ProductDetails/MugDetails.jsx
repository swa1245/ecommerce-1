import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import whiteMug from '../assests/whiteMug.jpg';
import threeToneMug from '../assests/3ToneMug.jpg';
import threeToneMug2 from '../assests/3ToneMug (2).jpg';
import magicMugHeart from '../assests/MagicMugHeartHandle.jpg';
import coupleMug from '../assests/coupleMug.jpg';
import goldenMug from '../assests/GoldenMug.jpg';
import silverMug from '../assests/SilverMug.jpg';
import whiteHeartMug from '../assests/WhiteHeartHandleaMug.jpg';
import printedMug from '../assests/printedmug.jpg';

const MugDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const mugs = [
    {
      id: 1,
      name: "Classic White Mug",
      category: "Plain Mugs",
      price: 199,
      rating: 4.5,
      image: whiteMug,
      description: "Premium quality white ceramic mug for everyday use",
      features: [
        "High-quality ceramic material",
        "Dishwasher and microwave safe",
        "Perfect for hot and cold beverages",
        "Durable and long-lasting",
        "Capacity: 330ml"
      ]
    },
    {
      id: 2,
      name: "3-Tone Magic Mug",
      category: "Magic Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect",
      features: [
        "Heat-sensitive color changing",
        "Three distinct color zones",
        "Premium ceramic material",
        "Hand wash recommended",
        "Capacity: 330ml"
      ]
    },
    {
      id: 3,
      name: "Premium 3-Tone Mug",
      category: "Magic Mugs",
      price: 399,
      rating: 4.7,
      image: threeToneMug2,
      description: "Premium color-changing mug with metallic finish",
      features: [
        "Metallic finish coating",
        "Heat-activated color change",
        "Premium quality print",
        "Hand wash only",
        "Capacity: 330ml"
      ]
    },
    {
      id: 4,
      name: "Heart Handle Magic Mug",
      category: "Magic Mugs",
      price: 449,
      rating: 4.9,
      image: magicMugHeart,
      description: "Color-changing mug with heart-shaped handle",
      features: [
        "Unique heart-shaped handle",
        "Heat-sensitive coating",
        "Premium ceramic build",
        "Perfect for gifting",
        "Capacity: 330ml"
      ]
    },
    {
      id: 5,
      name: "Couple Photo Mug Set",
      category: "Special Mugs",
      price: 599,
      rating: 5.0,
      image: coupleMug,
      description: "Perfect gift for couples with custom photo printing",
      features: [
        "Set of 2 matching mugs",
        "High-quality photo printing",
        "Dishwasher safe",
        "Customizable design",
        "Capacity: 330ml each"
      ]
    },
    {
      id: 6,
      name: "Golden Premium Mug",
      category: "Premium Mugs",
      price: 499,
      rating: 4.8,
      image: goldenMug,
      description: "Luxury golden finish ceramic mug",
      features: [
        "Premium golden coating",
        "Elegant design",
        "Hand wash recommended",
        "Perfect for special occasions",
        "Capacity: 330ml"
      ]
    },
    {
      id: 7,
      name: "Silver Premium Mug",
      category: "Premium Mugs",
      price: 499,
      rating: 4.8,
      image: silverMug,
      description: "Elegant silver finish ceramic mug",
      features: [
        "Premium silver coating",
        "Sleek design",
        "Hand wash recommended",
        "Ideal for gifting",
        "Capacity: 330ml"
      ]
    },
    {
      id: 8,
      name: "White Heart Handle Mug",
      category: "Special Mugs",
      price: 299,
      rating: 4.6,
      image: whiteHeartMug,
      description: "Classic white mug with heart-shaped handle",
      features: [
        "Unique heart handle design",
        "Premium ceramic material",
        "Dishwasher safe",
        "Perfect for Valentine's",
        "Capacity: 330ml"
      ]
    },
    {
      id: 9,
      name: "Custom Printed Mug",
      category: "Personalized Mugs",
      price: 349,
      rating: 4.7,
      image: printedMug,
      description: "Personalized mug with your custom design or photo",
      features: [
        "High-quality image printing",
        "Customizable design",
        "Dishwasher safe coating",
        "Fast printing service",
        "Capacity: 330ml"
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
                    <span className="text-3xl font-bold text-gray-900">₹{mug.price}</span>
                    <div className="ml-4">
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