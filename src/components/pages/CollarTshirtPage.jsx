import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';
import polo1 from '../assests/polo1.jpg';
import polo2 from '../assests/polo2.jpg';
import polo3 from '../assests/polo3.jpg';
import polo4 from '../assests/polo4.jpg';
import polo5 from '../assests/polo5.jpg';

const CollarTshirtPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const collarTshirts = [
    {
      id: 1,
      name: "Classic Polo T-Shirt",
      category: "Collar T-shirt",
      price: 39.99,
      rating: 4.8,
      image: polo1,
      description: "Premium cotton polo t-shirt with perfect fit"
    },
    {
      id: 2,
      name: "Business Casual Polo",
      category: "Collar T-shirt",
      price: 44.99,
      rating: 4.7,
      image: polo2,
      description: "Elegant polo t-shirt for business casual settings"
    },
    {
      id: 3,
      name: "Sport Performance Polo",
      category: "Collar T-shirt",
      price: 49.99,
      rating: 4.9,
      image: polo3,
      description: "Athletic polo t-shirt with moisture-wicking fabric"
    },
    {
      id: 4,
      name: "Premium Cotton Polo",
      category: "Collar T-shirt",
      price: 42.99,
      rating: 4.6,
      image: polo4,
      description: "High-quality cotton polo for superior comfort"
    },
    {
      id: 5,
      name: "Designer Polo Collection",
      category: "Collar T-shirt",
      price: 54.99,
      rating: 4.8,
      image: polo5,
      description: "Exclusive designer polo t-shirt with premium finish"
    }
  ];

  const filteredTshirts = collarTshirts.filter(tshirt =>
    searchTerm === '' || 
    tshirt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tshirt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <TshirtBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Collar T-Shirts
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredTshirts.map((tshirt, index) => (
              <motion.div
                key={tshirt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/tshirts/${tshirt.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={tshirt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollarTshirtPage;
