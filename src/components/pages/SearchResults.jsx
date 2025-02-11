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
  const [sortOption, setSortOption] = useState('name-asc');

  // Combine all products from different categories
  useEffect(() => {
    // Import all product data
    const fetchAllProducts = () => {
      const products = [
        // T-shirts
        {
          id: 't1',
          name: "Classic Cotton T-Shirt",
          category: "T-shirts",
          subcategory: "Round Neck",
          rating: 4.5,
          tags: ["cotton", "casual", "comfortable"],
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
          description: "Premium cotton t-shirt with a comfortable fit"
        },
        // Hoodies
        {
          id: 'h1',
          name: "Classic Zip Hoodie",
          category: "Hoodies",
          subcategory: "Zip-Up",
          rating: 4.8,
          tags: ["hoodie", "zip-up", "casual"],
          image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format",
          description: "Comfortable zip-up hoodie perfect for any occasion"
        },
        // Mugs
        {
          id: 'm1',
          name: "Classic Coffee Mug",
          category: "Mugs",
          subcategory: "Ceramic",
          rating: 4.7,
          tags: ["mug", "coffee", "ceramic"],
          image: "https://images.unsplash.com/photo-1577937927367-c3e33d7a57b0?w=500&auto=format",
          description: "Ceramic coffee mug for your daily brew"
        },
        // Bottles
        {
          id: 'b1',
          name: "Premium Sublimation Bottle",
          category: "Bottles",
          subcategory: "Sublimation",
          rating: 4.5,
          tags: ["bottle", "sublimation", "water"],
          image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
          description: "High-quality sublimation water bottle"
        },
        // Corporate
        {
          id: 'c1',
          name: "ID Card and Lanyard",
          category: "Corporate",
          subcategory: "ID Card",
          rating: 4.5,
          tags: ["id card", "lanyard", "corporate"],
          image: "https://www.mockupworld.co/wp-content/uploads/dynamic/2022/10/id-card-lanyard-free-mockup-psd-536x0-c-default.jpg?w=500&auto=format",
          description: "High-quality ID card with custom lanyard"
        },
        // Kids
        {
          id: 'k1',
          name: "Kids Graphic T-Shirt",
          category: "Kids",
          subcategory: "Graphic Tee",
          rating: 4.6,
          tags: ["kids", "t-shirt", "graphic"],
          image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=500&auto=format",
          description: "Fun and comfortable t-shirt for kids"
        }
      ];
      setAllProducts(products);
    };

    fetchAllProducts();
  }, []);

  // Enhanced search and filter function
  const searchAndFilterProducts = (products, term, category) => {
    const searchLower = term.toLowerCase().trim();
    
    return products.filter(product => {
      // Search in all relevant fields
      const searchFields = [
        product.name,
        product.description,
        product.category,
        product.subcategory,
        ...(product.tags || []),
      ].map(field => (field || '').toLowerCase());

      // Check if any field contains the search term
      const matchesSearch = searchFields.some(field => 
        field.includes(searchLower)
      );

      // Category filter
      const matchesCategory = category === 'all' || product.category === category;

      return matchesSearch && matchesCategory;
    });
  };

  // Sort function
  const sortProducts = (products, sortType) => {
    switch (sortType) {
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  // Filter products based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      navigate('/');
      return;
    }

    // First filter the products
    const filtered = searchAndFilterProducts(allProducts, searchTerm, selectedCategory);
    
    // Then sort them
    const sorted = sortProducts(filtered, sortOption);
    
    setFilteredProducts(sorted);
  }, [searchTerm, allProducts, selectedCategory, sortOption, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Search Results for "{searchTerm}"
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="T-shirts">T-shirts</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Mugs">Mugs</option>
              <option value="Bottles">Bottles</option>
              <option value="Corporate">Corporate</option>
              <option value="Kids">Kids</option>
            </select>

            {/* Sort Options */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            <p>No products found matching your search criteria.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
