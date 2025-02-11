import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import BottlesBanner from '../banners/BottlesBanner';
import vaccumBootle from '../assests/vaccumBootle.jpg';
import bootle from '../assests/bootle2.jpg';


const TemperatureBottlesPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const temperatureBottles = [
    {
      id: 2,
      name: "Insulated Temperature Bottle",
      category: "Temperature Bottle",
      rating: 4.8,
      image: bootle,
      description: "Double-wall insulated temperature control bottle"
    },
    {
      id: 4,
      name: "Vacuum Insulated Bottle",
      category: "Temperature Bottle",
      rating: 4.7,
      image:vaccumBootle,
      description: "Premium vacuum insulated temperature bottle"
    }
  ];

  const filteredBottles = temperatureBottles.filter(bottle =>
    searchTerm === '' || 
    bottle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bottle.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BottlesBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Temperature Control Bottles
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredBottles.map((bottle, index) => (
              <motion.div
                key={bottle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/bottles/${bottle.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={bottle} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureBottlesPage;
