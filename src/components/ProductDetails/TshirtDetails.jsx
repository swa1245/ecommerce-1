import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import t1 from '../assests/1.png';
import t2 from '../assests/2.png';
import t3 from '../assests/3.jpg';
import t4 from '../assests/4.jpg';
import t5 from '../assests/5.jpg';
import t6 from '../assests/6.jpg';
import polo1 from '../assests/polo1.jpg';
import polo2 from '../assests/polo2.jpg';
import polo3 from '../assests/polo3.jpg';
import polo4 from '../assests/polo4.jpg';
import polo5 from '../assests/polo5.jpg';
import kid1 from '../assests/kid1.jpg';
import kid2 from '../assests/kid2.jpg';
import kid3 from '../assests/kid3.jpg';
import kid4 from '../assests/kid4.jpg';
import kid5 from '../assests/kid5.jpg';

const TshirtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const tshirts = [
    {
      id: "1",
      name: "Classic Cotton T-Shirt",
      category: "Round Neck T-shirt",
      price: 24.99,
      rating: 4.5,
      image: t1,
      description: "Premium cotton t-shirt with a comfortable fit",
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      features: [
        '100% Premium Cotton',
        'Breathable fabric',
        'Regular fit',
        'Crew neck',
        'Pre-shrunk material'
      ]
    },
    {
      id: "2",
      name: "Sport Performance Tee",
      category: "Sport T-shirt",
      price: 29.99,
      rating: 4.8,
      image: t2,
      description: "Moisture-wicking sport t-shirt for active lifestyle",
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Moisture-wicking fabric',
        'Quick-dry technology',
        'Athletic fit',
        'Reflective details',
        'Anti-odor treatment'
      ]
    },
    {
      id: "3",
      name: "Urban Street T-Shirt",
      category: "Graphic T-shirt",
      price: 27.99,
      rating: 4.6,
      image: t3,
      description: "Trendy graphic t-shirt with urban design",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Premium graphic print',
        'Soft cotton blend',
        'Modern fit',
        'Ribbed crew neck',
        'Double-stitched seams'
      ]
    },
    {
      id: "4",
      name: "Premium Cotton Round Neck",
      category: "Round Neck T-shirt",
      price: 32.99,
      rating: 4.7,
      image: t4,
      description: "High-quality cotton t-shirt for everyday comfort",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      features: [
        'Premium combed cotton',
        'Comfort fit',
        'Reinforced shoulder seams',
        'Tag-free neck label',
        'Pre-washed fabric'
      ]
    },
    {
      id: "5",
      name: "Designer Collection Tee",
      category: "Designer T-shirt",
      price: 34.99,
      rating: 4.9,
      image: t5,
      description: "Exclusive designer t-shirt with unique patterns",
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Limited edition design',
        'Premium cotton blend',
        'Slim fit',
        'Signature details',
        'Custom neck label'
      ]
    },
    {
      id: "6",
      name: "Casual Comfort T-Shirt",
      category: "Casual T-shirt",
      price: 26.99,
      rating: 4.6,
      image: t6,
      description: "Comfortable casual t-shirt for daily wear",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Soft cotton fabric',
        'Relaxed fit',
        'Durable construction',
        'Classic crew neck',
        'Easy care instructions'
      ]
    },
    {
      id: "7",
      name: "Classic Polo T-Shirt",
      category: "Collar T-shirt",
      price: 39.99,
      rating: 4.8,
      image: polo1,
      description: "Premium cotton polo t-shirt with perfect fit",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Premium pique cotton',
        'Classic polo collar',
        'Three-button placket',
        'Ribbed sleeve cuffs',
        'Side vents for comfort'
      ]
    },
    {
      id: "8",
      name: "Business Casual Polo",
      category: "Collar T-shirt",
      price: 44.99,
      rating: 4.7,
      image: polo2,
      description: "Elegant polo t-shirt for business casual settings",
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Wrinkle-resistant fabric',
        'Professional cut',
        'Reinforced buttons',
        'No-curl collar',
        'Extended back hem'
      ]
    },
    {
      id: "9",
      name: "Sport Performance Polo",
      category: "Collar T-shirt",
      price: 49.99,
      rating: 4.9,
      image: polo3,
      description: "Athletic polo t-shirt with moisture-wicking fabric",
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Performance fabric blend',
        'UV protection',
        'Moisture-wicking',
        'Stretch construction',
        'Anti-odor technology'
      ]
    },
    {
      id: "10",
      name: "Premium Cotton Polo",
      category: "Collar T-shirt",
      price: 42.99,
      rating: 4.6,
      image: polo4,
      description: "High-quality cotton polo for superior comfort",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Long-staple cotton',
        'Classic fit',
        'Durable construction',
        'Signature buttons',
        'Reinforced shoulder seams'
      ]
    },
    {
      id: "11",
      name: "Designer Polo Collection",
      category: "Collar T-shirt",
      price: 54.99,
      rating: 4.8,
      image: polo5,
      description: "Exclusive designer polo t-shirt with premium finish",
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Designer fabric blend',
        'Modern slim fit',
        'Premium hardware',
        'Contrast details',
        'Luxury finishing'
      ]
    },
    {
      id: "12",
      name: "Kids Casual Fun T-Shirt",
      category: "Kids T-shirt",
      price: 19.99,
      rating: 4.8,
      image: kid1,
      description: "Comfortable and playful t-shirt for active kids",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Soft cotton blend',
        'Kid-friendly designs',
        'Easy to wash',
        'Durable stitching',
        'Comfortable fit'
      ]
    },
    {
      id: "13",
      name: "Kids Graphic Print Tee",
      category: "Kids T-shirt",
      price: 22.99,
      rating: 4.7,
      image: kid2,
      description: "Colorful graphic t-shirt with fun designs",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Vibrant graphics',
        'Premium cotton',
        'Color-fast fabric',
        'Reinforced seams',
        'Pre-shrunk material'
      ]
    },
    {
      id: "14",
      name: "Kids Sport T-Shirt",
      category: "Kids T-shirt",
      price: 24.99,
      rating: 4.9,
      image: kid3,
      description: "Breathable sport t-shirt for active children",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Moisture-wicking fabric',
        'Breathable mesh panels',
        'Quick-dry technology',
        'UV protection',
        'Odor-resistant'
      ]
    },
    {
      id: "15",
      name: "Kids Premium Cotton Tee",
      category: "Kids T-shirt",
      price: 21.99,
      rating: 4.6,
      image: kid4,
      description: "Soft cotton t-shirt for everyday comfort",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Premium cotton',
        'Tag-free neck label',
        'Double-stitched hem',
        'Easy care fabric',
        'Long-lasting quality'
      ]
    },
    {
      id: "16",
      name: "Kids Designer Collection",
      category: "Kids T-shirt",
      price: 26.99,
      rating: 4.8,
      image: kid5,
      description: "Trendy designer t-shirt for stylish kids",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Designer patterns',
        'Premium fabric blend',
        'Stylish details',
        'Comfortable fit',
        'Fashion-forward design'
      ]
    }
  ];

  const selectedTshirt = tshirts.find(t => t.id === id);

  useEffect(() => {
    if (!selectedTshirt) {
      navigate('/tshirts');
    }
  }, [selectedTshirt, navigate]);

  if (!selectedTshirt) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart({
      ...selectedTshirt,
      quantity,
      size: selectedSize,
      totalPrice: selectedTshirt.price * quantity
    });
    toast.success('Added to cart successfully!');
  };

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
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
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div className="relative w-full max-w-md aspect-square">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                  src={selectedTshirt.image}
                  alt={selectedTshirt.name}
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              >
                {selectedTshirt.category}
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-2 text-2xl font-bold text-gray-900"
              >
                {selectedTshirt.name}
              </motion.h2>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-2 flex items-center"
              >
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{selectedTshirt.rating}</span>
              </motion.div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 text-gray-600"
              >
                {selectedTshirt.description}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  {selectedTshirt.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Select Size:</h3>
                <div className="mt-2 flex gap-2">
                  {selectedTshirt.sizes.map((size, index) => (
                    <motion.button
                      key={size}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">Quantity:</h3>
                <div className="mt-2 flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    -
                  </motion.button>
                  <span className="px-4 py-1">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-8 flex items-center justify-between"
              >
                <motion.span 
                  className="text-2xl font-bold text-gray-900"
                  key={quantity} // This will trigger animation when price changes
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ${(selectedTshirt.price * quantity).toFixed(2)}
                </motion.span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TshirtDetails;
