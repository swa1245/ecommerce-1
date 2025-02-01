import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';

// Import mug images
import threeToneMug from '../assests/3ToneMug.jpg';
import threeToneMug2 from '../assests/3 Tone Mug 2.jpg';
import threeToneMug3 from '../assests/3 Tone Mug 3.jpg';

const ThreeToneMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const threeToneMugs = [
    {
      id: 4,
      name: "3-Tone Magic Mug",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect",
      features: [
        "Heat-sensitive color changing",
        "Three distinct color zones",
        "Premium ceramic material",
        "Hand wash recommended",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 5,
      name: "3-Tone Magic Mug (Design 2)",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug2,
      description: "Stunning three-tone magic mug with unique pattern",
      features: [
        "Heat-activated design",
        "Triple color transformation",
        "High-quality ceramic",
        "Gentle hand wash only",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 6,
      name: "3-Tone Magic Mug (Design 3)",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug3,
      description: "Beautiful three-tone magic mug with special design",
      features: [
        "Temperature-sensitive coating",
        "Tri-color pattern reveal",
        "Durable ceramic build",
        "Hand wash recommended",
        "Capacity: 11 oz"
      ]
    }
  ];

  const filteredMugs = threeToneMugs.filter(mug =>
    searchTerm === '' || 
    mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mug.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <MugsBanner />
      
      <div className="container m-6 mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 font-outfit"
        >
          Three Tone Mugs Collection
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMugs.map((mug, index) => (
            <motion.div
              key={mug.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ProductCard
                key={mug.id}
                product={mug}
                onClick={() => navigate(`/mugs/${mug.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeToneMugPage;
