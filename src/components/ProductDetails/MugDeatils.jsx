import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import mug1 from '../assests/mug1.jpg';
import mug2 from '../assests/mug2.jpg';
import printedMug from '../assests/printedMug.jpg';
import mug4 from '../assests/mug4.jpg';

const MugDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('11oz');
  const [quantity, setQuantity] = useState(1);

  // Mug data with local images
  const mugs = [
    {
      id: "1",
      name: 'Classic White Mug',
      category: "Plain Mug",
      price: 14.99,
      rating: 4.5,
      description: 'Simple and elegant white ceramic mug, perfect for daily use and custom designs.',
      sizes: ['11oz', '15oz'],
      features: [
        'High-quality ceramic',
        'Microwave safe',
        'Dishwasher safe',
        'Durable design',
        'Perfect for printing'
      ],
      images: [mug1]
    },
    {
      id: "2",
      name: 'Color Changing Magic Mug',
      category: "Magic Mug",
      price: 19.99,
      rating: 4.8,
      description: 'Heat-sensitive color changing mug that reveals beautiful designs when filled with hot liquid.',
      sizes: ['11oz', '15oz'],
      features: [
        'Heat-sensitive color changing',
        'Food-grade ceramic',
        'Hand wash recommended',
        'Capacity: 300ml',
        'Custom design reveals at 70°C'
      ],
      images: [mug2]
    },
    {
      id: "3",
      name: 'Designer Printed Mug',
      category: "Printed Mug",
      price: 17.99,
      rating: 4.6,
      description: 'Stylish printed ceramic mug with custom design, perfect for gifting and personal use.',
      sizes: ['11oz', '15oz'],
      features: [
        'Premium print quality',
        'Dishwasher safe',
        'Microwave safe',
        'Fade-resistant design',
        'Glossy finish'
      ],
      images: [printedMug]
    }
  ];

  // Find the current mug based on id
  const currentMug = mugs.find(m => m.id === id) || mugs[0];
  const [selectedImage, setSelectedImage] = useState(currentMug.images[0]);

  const handleAddToCart = () => {
    addToCart({
      id: currentMug.id,
      title: currentMug.name,
      price: currentMug.price,
      image: selectedImage,
      size: selectedSize,
      quantity: quantity
    });
    
    toast.success('Added to cart!');
  };

  // Update selected image when color changes
  useEffect(() => {
    setSelectedImage(currentMug.images[0]);
  }, [currentMug]);

  if (!currentMug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Mug not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square rounded-3xl overflow-hidden bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-full h-full relative">
                <img 
                  src={selectedImage} 
                  alt={currentMug.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {currentMug.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-gray-100 relative
                    ${selectedImage === image ? 'ring-2 ring-blue-500' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={image} 
                    alt={`${currentMug.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <motion.h1 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {currentMug.name}
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                ${currentMug.price}
              </motion.p>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentMug.description}
              </motion.p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {currentMug.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  -
                </motion.button>
                <span className="text-lg font-medium">{quantity}</span>
                <motion.button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {currentMug.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                 hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart - ${(currentMug.price * quantity).toFixed(2)}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MugDetails;
