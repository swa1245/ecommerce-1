import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import MugsBanner from '../banners/MugsBanner';

// Import all mug images
import whiteMug from '../assests/whiteMug.jpg';
import threeToneMug from '../assests/3ToneMug.jpg';
import threeToneMug2 from '../assests/3 Tone Mug 2.jpg';
import threeToneMug3 from '../assests/3 Tone Mug 3.jpg';
import magicMugHeart from '../assests/MagicMugHeartHandle.jpg';
import coupleMug from '../assests/coupleMug.jpg';
import goldenMug from '../assests/GoldenMug.jpg';
import silverMug from '../assests/SilverMug.jpg';
import whiteHeartMug from '../assests/WhiteHeartHandleaMug.jpg';
import printedMug from '../assests/printedmug.jpg';
import teaMug11oz from '../assests/11 Oz Tea Mug.jpg';
import teaMug11oz3 from '../assests/11 Oz Tea Mug3.jpg';
import teaMug11oz4 from '../assests/11Oz Tea Mug4.jpg';
import teaMug6oz from '../assests/6 Oz Tea Mug.jpg';
import teaMug6oz2 from '../assests/6 Oz Tea Mug2.jpg';
import teaMug6oz3 from '../assests/6 Oz Tea Mug3.jpg';

const MugsPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const products = [
    {
      id: 1,
      name: "11 Oz Tea Mug",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz,
      description: "Premium 11 Oz ceramic tea mug for your daily brew"
    },
    {
      id: 2,
      name: "11 Oz Tea Mug (Design 2)",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz3,
      description: "Elegant 11 Oz ceramic tea mug with modern design"
    },
    {
      id: 3,
      name: "11 Oz Tea Mug (Design 3)",
      category: "Plain Mugs",
      price: 299,
      rating: 4.5,
      image: teaMug11oz4,
      description: "Stylish 11 Oz ceramic tea mug perfect for gifting"
    },
    {
      id: 4,
      name: "3-Tone Magic Mug",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug,
      description: "Color-changing mug with three-tone effect"
    },
    {
      id: 5,
      name: "3-Tone Mug (Design 2)",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug2,
      description: "Stunning three-tone mug with unique pattern"
    },
    {
      id: 6,
      name: "3-Tone Mug (Design 3)",
      category: "Three Tone Mugs",
      price: 349,
      rating: 4.8,
      image: threeToneMug3,
      description: "Beautiful three-tone mug with special design"
    },
    {
      id: 7,
      name: "6 Oz Tea Mug",
      category: "Plain Mugs",
      price: 249,
      rating: 4.6,
      image: teaMug6oz,
      description: "Compact 6 Oz ceramic mug for tea and coffee"
    },
    {
      id: 8,
      name: "6 Oz Tea Mug (Design 2)",
      category: "Plain Mugs",
      price: 249,
      rating: 4.6,
      image: teaMug6oz2,
      description: "Elegant 6 Oz ceramic mug with unique pattern"
    },
    {
      id: 9,
      name: "6 Oz Tea Mug (Design 3)",
      category: "Plain Mugs",
      price: 249,
      rating: 4.6,
      image: teaMug6oz3,
      description: "Stylish 6 Oz ceramic mug with modern design"
    },
    {
      id: 10,
      name: "Magic Mug with Heart Handle",
      category: "Magic Mugs",
      price: 399,
      rating: 4.9,
      image: magicMugHeart,
      description: "Color-changing mug with lovely heart handle"
    },
    {
      id: 11,
      name: "Golden Premium Mug",
      category: "Transparent Mugs",
      price: 449,
      rating: 4.9,
      image: goldenMug,
      description: "Luxurious golden-finished ceramic mug"
    },
    {
      id: 12,
      name: "Silver Premium Mug",
      category: "Transparent Mugs",
      price: 449,
      rating: 4.9,
      image: silverMug,
      description: "Elegant silver-finished ceramic mug"
    },
    {
      id: 13,
      name: "White Heart Handle Mug",
      category: "Plain Mugs",
      price: 349,
      rating: 4.7,
      image: whiteHeartMug,
      description: "White ceramic mug with decorative heart handle"
    },
    {
      id: 14,
      name: "Couple Mug Set",
      category: "Plain Mugs",
      price: 599,
      rating: 5.0,
      image: coupleMug,
      description: "Perfect pair of mugs for couples"
    },
    {
      id: 15,
      name: "Custom Printed Mug",
      category: "Plain Mugs",
      price: 399,
      rating: 4.8,
      image: printedMug,
      description: "Personalized mug with custom printing"
    },
    {
      id: 16,
      name: "Classic White Mug",
      category: "White Mugs",
      price: 249,
      rating: 4.5,
      image: whiteMug,
      description: "Classic white ceramic mug for everyday use"
    }
  ];

  const filteredProducts = products.filter(product => 
    searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
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
          Mugs Collection
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => navigate(`/mugs/${product.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MugsPage;
