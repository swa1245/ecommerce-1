import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import KidsBanner from '../banners/KidsBanner';
import kid1 from '../assests/kid1.jpg';
import kid2 from '../assests/kid2.jpg';
import kid3 from '../assests/kid3.jpg';
import kid4 from '../assests/kid4.jpg';
import kid5 from '../assests/kid5.jpg';
import baby1 from '../assests/baby.jpg';

const KidsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const kidsProducts = [
    {
      id: "1",
      name: "Baby Romper Set - Blue",
      category: "Baby Romper Set",
      price: 34.99,
      rating: 4.5,
      image: baby1,
      description: "Comfortable cotton romper set for babies",
      sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
      features: [
        'Soft cotton material',
        'Easy snap buttons',
        'Gentle on baby skin',
        'Machine washable',
        'Breathable fabric'
      ]
    },
    {
      id: "12",
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
      id: "13",
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
      id: "14",
      name: "Kids Sport T-Shirt",
      category: "All T-shirts",
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
      category: "All T-shirts",
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
      category: "All T-shirts",
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

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Baby Romper Set', name: 'Baby Romper Sets' },
    { id: 'All T-shirts', name: 'Kids T-shirts' }
  ];

  const filteredProducts = kidsProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (product) => {
    if (product.category === "Baby Romper Set") {
      navigate(`/baby-romper/${product.id}`, {
        state: { product }
      });
    } else if (product.category === "All T-shirts") {
      navigate(`/kids/tshirt/${product.id}`, {
        state: { product }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <KidsBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 font-outfit ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleProductClick(product)}
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

export default KidsPage;
