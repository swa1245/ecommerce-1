import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';
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

const TshirtPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm, filterProducts } = useSearch();

  const tshirts = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "Round Neck T-shirt",
      price: 24.99,
      rating: 4.5,
      tags: ["cotton", "casual", "round neck"],
      image: t1,
      description: "Premium cotton t-shirt with a comfortable fit"
    },
    {
      id: 2,
      name: "Sport Performance Tee",
      category: "Sport T-shirt",
      price: 29.99,
      rating: 4.8,
      tags: ["sport", "performance", "moisture-wicking"],
      image: t2,
      description: "Moisture-wicking sport t-shirt for active lifestyle"
    },
    {
      id: 3,
      name: "Urban Street T-Shirt",
      category: "Graphic T-shirt",
      price: 27.99,
      rating: 4.6,
      tags: ["urban", "street", "graphic"],
      image: t3,
      description: "Trendy graphic t-shirt with urban design"
    },
    {
      id: 4,
      name: "Premium Cotton Round Neck",
      category: "Round Neck T-shirt",
      price: 32.99,
      rating: 4.7,
      tags: ["cotton", "round neck", "premium"],
      image: t4,
      description: "High-quality cotton t-shirt for everyday comfort"
    },
    {
      id: 5,
      name: "Designer Collection Tee",
      category: "Designer T-shirt",
      price: 34.99,
      rating: 4.9,
      tags: ["designer", "collection", "exclusive"],
      image: t5,
      description: "Exclusive designer t-shirt with unique patterns"
    },
    {
      id: 6,
      name: "Casual Comfort T-Shirt",
      category: "Casual T-shirt",
      price: 26.99,
      rating: 4.6,
      tags: ["casual", "comfort", "relaxed fit"],
      image: t6,
      description: "Comfortable casual t-shirt for daily wear"
    },
    {
      id: 7,
      name: "Classic Polo T-Shirt",
      category: "Collar T-shirt",
      price: 39.99,
      rating: 4.8,
      tags: ["polo", "classic", "collar"],
      image: polo1,
      description: "Premium cotton polo t-shirt with perfect fit"
    },
    {
      id: 8,
      name: "Business Casual Polo",
      category: "Collar T-shirt",
      price: 44.99,
      rating: 4.7,
      tags: ["business", "casual", "polo"],
      image: polo2,
      description: "Elegant polo t-shirt for business casual settings"
    },
    {
      id: 9,
      name: "Sport Performance Polo",
      category: "Collar T-shirt",
      price: 49.99,
      rating: 4.9,
      tags: ["sport", "performance", "polo"],
      image: polo3,
      description: "Athletic polo t-shirt with moisture-wicking fabric"
    },
    {
      id: 10,
      name: "Premium Cotton Polo",
      category: "Collar T-shirt",
      price: 42.99,
      rating: 4.6,
      tags: ["premium", "cotton", "polo"],
      image: polo4,
      description: "High-quality cotton polo for superior comfort"
    },
    {
      id: 11,
      name: "Designer Polo Collection",
      category: "Collar T-shirt",
      price: 54.99,
      rating: 4.8,
      tags: ["designer", "polo", "collection"],
      image: polo5,
      description: "Exclusive designer polo t-shirt with premium finish"
    }
  ];

  // Filter products based on category and search term
  const getFilteredProducts = () => {
    let filtered = tshirts;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    return filterProducts(filtered);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <TshirtBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All T-shirts
          </button>
          <button
            onClick={() => setSelectedCategory('Round Neck T-shirt')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'Round Neck T-shirt'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Round Neck
          </button>
          <button
            onClick={() => setSelectedCategory('Collar T-shirt')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'Collar T-shirt'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Collar
          </button>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Found {filteredProducts.length} results for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtPage;
