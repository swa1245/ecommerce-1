import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';
import threeToneMug2 from '../assests/3ToneMug (2).jpg';

const ThreeToneMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const threeToneMugs = [
    {
      id: 3,
      name: "Premium 3-Tone Mug",
      category: "Magic Mugs",
      price: 399,
      rating: 4.7,
      image: threeToneMug2,
      description: "Premium color-changing mug with metallic finish"
    }
    
  ];

  const filteredMugs = threeToneMugs.filter(mug =>
    searchTerm === '' || 
    mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mug.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MugsBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Three-Tone Mugs
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredMugs.map((mug, index) => (
              <motion.div
                key={mug.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/mugs/${mug.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={mug} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeToneMugPage;
