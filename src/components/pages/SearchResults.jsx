import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';

const SearchResults = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all products from different categories
  useEffect(() => {
    const products = [
      // T-shirts
      {
        id: 't1',
        name: "Classic Cotton T-Shirt",
        category: "T-shirts",
        price: 24.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
        description: "Premium cotton t-shirt with a comfortable fit"
      },
      // Hoodies
      {
        id: 'h1',
        name: "Classic Zip Hoodie",
        category: "Hoodies",
        price: 49.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format",
        description: "Comfortable zip-up hoodie perfect for any occasion"
      },
      // Mugs
      {
        id: 'm1',
        name: "Classic Coffee Mug",
        category: "Mugs",
        price: 14.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1577937927367-c3e33d7a57b0?w=500&auto=format",
        description: "Ceramic coffee mug for your daily brew"
      },
      // Bottles
      {
        id: 'b1',
        name: "Premium Sublimation Bottle",
        category: "Bottles",
        price: 24.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
        description: "High-quality sublimation water bottle"
      },
      // Corporate
      {
        id: 'c1',
        name: "ID Card and Lanyard",
        category: "Corporate",
        price: 9.99,
        rating: 4.5,
        image: "https://www.mockupworld.co/wp-content/uploads/dynamic/2022/10/id-card-lanyard-free-mockup-psd-536x0-c-default.jpg?w=500&auto=format",
        description: "High-quality ID card with custom lanyard"
      },
      // Kids
      {
        id: 'k1',
        name: "Kids Graphic T-Shirt",
        category: "Kids",
        price: 19.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=500&auto=format",
        description: "Fun and comfortable t-shirt for kids"
      }
    ];

    setAllProducts(products);
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      navigate('/');
      return;
    }

    const filtered = allProducts.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, allProducts, selectedCategory, navigate]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'T-shirts', name: 'T-shirts' },
    { id: 'Hoodies', name: 'Hoodies' },
    { id: 'Mugs', name: 'Mugs' },
    { id: 'Bottles', name: 'Bottles' },
    { id: 'Corporate', name: 'Corporate' },
    { id: 'Kids', name: 'Kids' }
  ];

  const handleProductClick = (product) => {
    const categoryMap = {
      'T-shirts': 'tshirts',
      'Hoodies': 'hoodies',
      'Mugs': 'mugs',
      'Bottles': 'bottles',
      'Corporate': 'corporate',
      'Kids': 'kids'
    };
    
    const route = categoryMap[product.category];
    if (route) {
      navigate(`/${route}/${product.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Search Results for "{searchTerm}"
          </h1>
          <p className="text-gray-600">
            Found {filteredProducts.length} products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No products found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
