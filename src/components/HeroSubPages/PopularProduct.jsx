import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

import polo1 from '../assests/polo1.jpg';
import hoodie1 from '../assests/hoodie1.jpg';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import kid1 from '../assests/kid1.jpg';
import mirrorHear from '../assests/mirrorHear.jpg';
import pen from '../assests/pen.jpg';
import heartpillow from '../assests/heartpillow.jpg';

const PopularProduct = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Mugs'];
  
  const products = [
    {
      id: 1,
      name: 'Classic Polo T-Shirt',
      description: 'Comfortable cotton polo t-shirt for everyday wear',
      price: 29.99,
      oldPrice: 39.99,
      image: polo1,
      category: 'T-Shirts',
      rating: 4.5,
      discount: 25
    },
    {
      id: 2,
      name: 'Cozy Hoodie',
      description: 'Warm and stylish hoodie for cold weather',
      price: 49.99,
      oldPrice: 59.99,
      image: hoodie1,
      category: 'Hoodies',
      rating: 4.8,
      discount: 15
    },
    {
      id: 3,
      name: 'Vacuum Insulated Bottle',
      description: 'Keep your drinks hot or cold for hours',
      price: 34.99,
      oldPrice: 44.99,
      image: vaccumBootle,
      category: 'Mugs',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Kids Favorite T-shirt',
      description: 'Comfortable and colorful kids t-shirt with fun designs',
      price: 19.99,
      oldPrice: 24.99,
      image: kid1,
      category: 'T-Shirts',
      rating: 4.9,
      discount: 20
    },
    {
      id: 5,
      name: 'Heart Wall Mirror',
      description: 'Decorative heart-shaped wall mirror for home decor',
      price: 44.99,
      oldPrice: 54.99,
      image: mirrorHear,
      category: "Designer Mirrors",
      path: '/other-products/mirrors/2',
      rating: 4.6,
      discount: 18
    },
    {
      id: 6,
      name: 'Corporate Gift Pen',
      description: 'Premium corporate pen set for professionals',
      price: 15.99,
      oldPrice: 19.99,
      image: pen,
      category: 'T-Shirts',
      rating: 4.7,
      discount: 20
    },
    {
      id: 7,
      name: 'Heart Fur Pillow',
      description: 'Soft and cozy heart-shaped decorative pillow',
      price: 29.99,
      oldPrice: 39.99,
      image: heartpillow,
      category: 'Mugs',
      rating: 4.8,
      discount: 25
    }
  ];

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    toast.success('Added to cart successfully!');
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Products</h2>
          <p className="mt-4 text-xl text-gray-500">
            Check out our most popular items
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 md:gap-10"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1
                  }
                }}
                className="cursor-pointer"
              >
                <ProductCard product={product} handleAddToCart={(e) => handleAddToCart(e, product)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;