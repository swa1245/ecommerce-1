import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';

// Import mug images
import whiteMug from '../assests/whiteMug.jpg';
import teaMug11oz from '../assests/11 Oz Tea Mug.jpg';
import teaMug11oz3 from '../assests/11 Oz Tea Mug3.jpg';
import teaMug11oz4 from '../assests/11Oz Tea Mug4.jpg';
import teaMug6oz from '../assests/6 Oz Tea Mug.jpg';
import teaMug6oz2 from '../assests/6 Oz Tea Mug2.jpg';
import teaMug6oz3 from '../assests/6 Oz Tea Mug3.jpg';
import whiteHeartMug from '../assests/WhiteHeartHandleaMug.jpg';
import coupleMug from '../assests/coupleMug.jpg';
import printedMug from '../assests/printedmug.jpg';

const PlainMugPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const plainMugs = [
    {
      id: 1,
      name: "11 Oz Tea Mug",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz,
      description: "Premium 11 Oz ceramic tea mug for your daily brew",
      features: [
        "High-quality ceramic material",
        "Dishwasher and microwave safe",
        "Perfect for hot and cold beverages",
        "Durable and long-lasting",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 2,
      name: "11 Oz Tea Mug (Design 2)",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz3,
      description: "Elegant 11 Oz ceramic tea mug with modern design",
      features: [
        "Modern aesthetic design",
        "Premium ceramic build",
        "Microwave safe",
        "Easy-grip handle",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 3,
      name: "11 Oz Tea Mug (Design 3)",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz4,
      description: "Stylish 11 Oz ceramic tea mug perfect for gifting",
      features: [
        "Gift-worthy design",
        "Superior quality ceramic",
        "Dishwasher safe",
        "Comfortable grip",
        "Capacity: 11 oz"
      ]
    },
    {
      id: 7,
      name: "6 Oz Tea Mug",
      category: "Plain Mugs",
      price: 249,
      rating: 4.6,
      image: teaMug6oz,
      description: "Compact 6 Oz ceramic mug for tea and coffee",
      features: [
        "Compact size",
        "Perfect for small servings",
        "Premium ceramic",
        "Easy to handle",
        "Capacity: 6 oz"
      ]
    },
    
  ];

  const filteredMugs = plainMugs.filter(mug =>
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
          Plain Mugs Collection
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

export default PlainMugPage;
