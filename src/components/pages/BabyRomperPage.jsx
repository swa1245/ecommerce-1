import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import KidsBanner from '../banners/KidsBanner';
import baby1 from '../assests/baby.jpg';


const BabyRomperPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const romperProducts = [
    {
      id: 1,
      name: "Baby Romper Set - Blue",
      category: "Baby Romper Set",
      price: 34.99,
      rating: 4.5,
      image: baby1,
      description: "Comfortable cotton romper set for babies"
    },
    // {
    //   id: 2,
    //   name: "Baby Romper Set - Pink",
    //   category: "Baby Romper Set",
    //   price: 34.99,
    //   rating: 4.6,
    //   image: baby2,
    //   description: "Soft and cozy romper set for babies"
    // },
    // {
    //   id: 3,
    //   name: "Baby Romper Set - Yellow",
    //   category: "Baby Romper Set",
    //   price: 32.99,
    //   rating: 4.7,
    //   image: baby3,
    //   description: "Adorable summer romper for little ones"
    // },
    // {
    //   id: 4,
    //   name: "Baby Romper Set - Green",
    //   category: "Baby Romper Set",
    //   price: 33.99,
    //   rating: 4.8,
    //   image: baby4,
    //   description: "Cute and comfortable romper for babies"
    // }
  ];

  const filteredProducts = romperProducts.filter(product =>
    searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <KidsBanner />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8 font-outfit"
          >
            Baby Romper Sets
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/baby-romper/${product.id}`, {
                  state: { product }
                })}
                className="cursor-pointer transform transition-transform hover:scale-105"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyRomperPage;
