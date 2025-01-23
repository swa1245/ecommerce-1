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
import baby1 from '../assests/baby1 (1).jpg';
import baby2 from '../assests/baby2.jpg';

const KidsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm } = useSearch();

  const products = [
    // Cotton T-shirts
    {
      id: 1,
      name: "Kids Cotton T-shirt - Size 20",
      category: "Cotton T-shirt",
      price: 299,
      rating: 4.5,
      image: kid1,
      description: "Comfortable cotton t-shirt for kids - Size 20"
    },
    {
      id: 2,
      name: "Kids Cotton T-shirt - Size 24",
      category: "Cotton T-shirt",
      price: 299,
      rating: 4.5,
      image: kid2,
      description: "Comfortable cotton t-shirt for kids - Size 24"
    },
    {
      id: 3,
      name: "Kids Cotton T-shirt - Size 28",
      category: "Cotton T-shirt",
      price: 299,
      rating: 4.5,
      image: kid3,
      description: "Comfortable cotton t-shirt for kids - Size 28"
    },
    // Polyester T-shirts
    {
      id: 4,
      name: "Kids Polyester T-shirt - White",
      category: "Polyester T-shirt",
      price: 349,
      rating: 4.6,
      image: kid4,
      description: "White polyester t-shirt for kids - Available in sizes 20-34"
    },
    {
      id: 5,
      name: "Kids Polyester T-shirt - White",
      category: "Polyester T-shirt",
      price: 349,
      rating: 4.6,
      image: kid5,
      description: "White polyester t-shirt for kids - Available in sizes 20-34"
    },
    // Rompers
    {
      id: 6,
      name: "Baby Romper - White/Red",
      category: "Romper",
      price: 500,
      rating: 4.8,
      image: baby1,
      description: "Polyester romper with red lining - For ages 3 months to 1 year"
    },
    {
      id: 7,
      name: "Baby Romper - White/Blue",
      category: "Romper",
      price: 500,
      rating: 4.8,
      image: baby2,
      description: "Polyester romper with blue lining - For ages 3 months to 1 year"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Kids Items' },
    { id: 'Cotton T-shirt', name: 'Cotton T-shirts' },
    { id: 'Polyester T-shirt', name: 'Polyester T-shirts' },
    { id: 'Romper', name: 'Baby Rompers' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (product) => {
    if (product.category === "Romper") {
      navigate(`/baby-romper/${product.id}`, {
        state: { product }
      });
    } else if (product.category === "Cotton T-shirt" || product.category === "Polyester T-shirt") {
      navigate(`/tshirts/${product.id}`, {
        state: { product }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <KidsBanner />
      
      {/* Category Selection */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: product.id * 0.1 }}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
