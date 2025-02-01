import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import ProductCard from '../ProductCard';
import OtherProductsBanner from '../banners/OtherProductsBanner';
import cap from '../assests/cap.jpg';
import mirror1 from '../assests/mirror1.jpg';
import mirrorHeart from '../assests/mirrorHear.jpg';
import mirror3 from '../assests/mirrow3.jpg';
import customRakhi1 from '../assests/CustomRakhi1.jpg';
import customRakhi2 from '../assests/CustomRakhi2.jpg';

const OtherProductsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm, filterProducts } = useSearch();

  const products = [
    // Mirror Products
    {
      id: 'mirror1',
      name: "Designer Wall Mirror",
      category: "Designer Mirrors",
      price: 1499,
      rating: 4.5,
      tags: ["mirror", "wall", "designer"],
      image: mirror1,
      description: "Elegant designer wall mirror with intricate patterns",
      link: "/other-products/mirrors/1"
    },
    {
      id: 'mirror2',
      name: "Heart Shape Mirror",
      category: "Designer Mirrors",
      price: 999,
      rating: 4.8,
      tags: ["mirror", "heart", "decorative"],
      image: mirrorHeart,
      description: "Beautiful heart-shaped mirror for romantic decor",
      link: "/other-products/mirrors/2"
    },
    {
      id: 'mirror3',
      name: "Modern Art Mirror",
      category: "Designer Mirrors",
      price: 1999,
      rating: 4.7,
      tags: ["mirror", "modern", "art"],
      image: mirror3,
      description: "Contemporary art mirror with unique design",
      link: "/other-products/mirrors/3"
    },
    // Rakhi Products
    {
      id: 'rakhi1',
      name: "Premium Custom Rakhi",
      category: "Custom Rakhis",
      price: 299,
      rating: 4.8,
      tags: ["rakhi", "custom", "premium"],
      image: customRakhi1,
      description: "Beautifully crafted custom rakhi with premium materials",
      link: "/other-products/rakhis/1"
    },
    {
      id: 'rakhi2',
      name: "Personalized Photo Rakhi",
      category: "Custom Rakhis",
      price: 399,
      rating: 4.9,
      tags: ["rakhi", "photo", "personalized"],
      image: customRakhi2,
      description: "Custom photo rakhi to make your bond special",
      link: "/other-products/rakhis/2"
    }
    // Existing Keychain Products
   
  ];

  const handleProductClick = (product) => {
    if (product.link) {
      navigate(product.link, {
        state: { product: {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          rating: product.rating,
          category: product.category
        }}
      });
    }
  };

  const categories = [
    'all',
    'Designer Mirrors',
    'Custom Rakhis',
    'MDF Keychains',
    'Acrylic Keychains',
    'Metal Keychains',
    'Magic Mirrors',
    'Mouse Pads',
    'Caps'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <OtherProductsBanner />
      
      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              } transition duration-300 ease-in-out`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <h3 className="text-xl text-gray-600">No products found matching your criteria</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherProductsPage;
