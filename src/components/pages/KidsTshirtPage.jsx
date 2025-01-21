import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import KidsBanner from '../banners/KidsBanner';
import kid1 from '../assests/kid1.jpg';
import kid2 from '../assests/kid2.jpg';
import kid3 from '../assests/kid3.jpg';

const KidsTshirtPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const tshirtProducts = [
    {
      id: "1",
      name: "Kids Casual Fun T-Shirt",
      category: "All T-shirts",
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
      id: "2",
      name: "Kids Graphic Print Tee",
      category: "All T-shirts",
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
      id: "3",
      name: "Kids Summer T-Shirt",
      category: "All T-shirts",
      price: 24.99,
      rating: 4.9,
      image: kid3,
      description: "Breathable sport t-shirt for active children",
      sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
      features: [
        'Moisture-wicking',
        'Lightweight fabric',
        'UV protection',
        'Quick-dry technology',
        'Odor-resistant'
      ]
    }
  ];

  const filteredProducts = tshirtProducts.filter(product =>
    searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <KidsBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Kids T-Shirts Collection
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/kids/tshirt/${product.id}`, {
                  state: { product }
                })}
                className="cursor-pointer transform transition-transform hover:scale-105"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsTshirtPage;
