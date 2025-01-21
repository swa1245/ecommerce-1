import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';

const OversizedTshirtPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const oversizedTshirts = [
    {
      id: 3,
      name: "Oversized Street Style Tee",
      category: "Oversized T-shirt",
      price: 34.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
      description: "Trendy oversized t-shirt with modern street style design"
    }
  ];

  const filteredTshirts = oversizedTshirts.filter(tshirt =>
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
            Oversized T-Shirts
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

export default OversizedTshirtPage;
