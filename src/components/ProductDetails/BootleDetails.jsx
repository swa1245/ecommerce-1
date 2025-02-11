import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

const BootleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Mock data - replace with your actual data fetching logic
  const tshirts = [
    {
      id: "1",
      name: 'Classic Cotton T-Shirt',
      description: 'Premium cotton t-shirt with a comfortable fit and breathable fabric. Perfect for everyday wear.',
      colors: [
        { name: 'Pure Black', value: 'black', hex: '#000000' },
        { name: 'Navy Blue', value: 'navy', hex: '#000080' },
        { name: 'Heather Gray', value: 'gray', hex: '#808080' },
        { name: 'Burgundy Red', value: 'burgundy', hex: '#800020' },
        { name: 'Forest Green', value: 'forest-green', hex: '#228B22' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      features: [
        '100% Premium Cotton',
        'Breathable fabric',
        'Regular fit',
        'Crew neck',
        'Pre-shrunk material'
      ],
      images: {
        black: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        navy: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        gray: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        'forest-green': [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        burgundy: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ]
      }
    },
    {
      id: "2",
      name: 'Premium Graphic T-Shirt',
      description: 'Stylish graphic t-shirt with modern design prints. Made from soft, durable fabric.',
      colors: [
        { name: 'Pure Black', value: 'black', hex: '#000000' },
        { name: 'Navy Blue', value: 'navy', hex: '#000080' },
        { name: 'Heather Gray', value: 'gray', hex: '#808080' },
        { name: 'Burgundy Red', value: 'burgundy', hex: '#800020' },
        { name: 'Forest Green', value: 'forest-green', hex: '#228B22' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      features: [
        'Premium cotton blend',
        'High-quality prints',
        'Regular fit',
        'Crew neck',
        'Fade-resistant colors'
      ],
      images: {
        black: [
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        navy: [
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        gray: [
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        'forest-green': [
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ],
        burgundy: [
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format'
        ]
      }
    }
  ];

  // Find the current t-shirt based on id
  const currentTshirt = tshirts.find(t => t.id === id) || tshirts[0];
  const [selectedImage, setSelectedImage] = useState(currentTshirt.images[selectedColor][0]);

  const handleAddToCart = () => {
    const cartItem = {
      id: currentTshirt.id,
      name: currentTshirt.name,
      image: selectedImage,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    };
    addToCart(cartItem);
    
    toast.success('Added to cart!');
  };

  // Update selected image when color changes
  useEffect(() => {
    setSelectedImage(currentTshirt.images[selectedColor][0]);
  }, [selectedColor, currentTshirt]);

  if (!currentTshirt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">T-shirt not found</p>
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
                  alt={currentTshirt.name}
                  className="w-full h-full object-cover"
                />
                {/* Color Overlay */}
                <div 
                  className="absolute inset-0 mix-blend-multiply"
                  style={{ backgroundColor: currentTshirt.colors.find(c => c.value === selectedColor).hex }}
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {currentTshirt.images[selectedColor].map((image, index) => (
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
                    alt={`${currentTshirt.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Color Overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-multiply"
                    style={{ backgroundColor: currentTshirt.colors.find(c => c.value === selectedColor).hex }}
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
                {currentTshirt.name}
              </motion.h1>
              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-900">Contact for Price</p>
              </div>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentTshirt.description}
              </motion.p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Color - {currentTshirt.colors.find(c => c.value === selectedColor).name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentTshirt.colors.map((color) => (
                  <motion.button
                    key={color.value}
                    onClick={() => {
                      setSelectedColor(color.value);
                      setSelectedImage(currentTshirt.images[color.value][0]);
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                      ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color.hex }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-6 gap-3">
                {currentTshirt.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-medium rounded-xl
                      ${selectedSize === size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
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
              <h3 className="text-sm font-medium text-gray-900 mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {currentTshirt.features.map((feature, index) => (
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
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium
                hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootleDetails;
