import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';
import threeToneMug from '../assests/3ToneMug.jpg';

const MagicMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const magicMugs = [
    {
      id: 2,
      name: "3-Tone Magic Mug",
      category: "Magic Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect"
    }
  ];

  const filteredMugs = magicMugs.filter(mug =>
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
            Magic Mugs
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

export default MagicMugPage;
