import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import polo1 from '../assests/polo1.jpg';
import hoodie1 from '../assests/hoodie1.jpg';
import kid1 from '../assests/kid1.jpg';
import corporate from '../assests/corporate.jpg';
import pen from '../assests/pen.jpg';
import mug4 from '../assests/mug4.jpg';
import vaccumBootle from '../assests/vaccumBootle.jpg';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'T-shirts',
      image: polo1,
      description: 'Discover our collection of comfortable and stylish t-shirts for every occasion.',
      count: '150+ Items',
      path: '/tshirts',
      accent: '#E6F4FF'
    },
    {
      id: 2,
      name: 'Hoodies',
      image: hoodie1,
      description: 'Stay cozy and trendy with our premium selection of hoodies.',
      count: '100+ Items',
      path: '/hoodies',
      accent: '#FFF7ED'
    },
    {
      id: 3,
      name: 'Mugs',
      image: mug4,
      description: 'Express yourself with our unique collection of custom designed mugs.',
      count: '80+ Items',
      path: '/mugs',
      accent: '#F3E8FF'
    },
    {
      id: 4,
      name: 'Bottles',
      image: vaccumBootle,
      description: 'Stay hydrated in style with our eco-friendly water bottles.',
      count: '60+ Items',
      path: '/bottles',
      accent: '#ECFDF5'
    },
    {
      id: 5,
      name: 'Kids',
      image: kid1,
      description: 'Adorable and comfortable products designed specially for children.',
      count: '120+ Items',
      path: '/kids',
      accent: '#FDF2F8'
    },
    {
      id: 6,
      name: 'Corporate',
      image: corporate,
      description: 'Elevate your business with our premium corporate gift solutions.',
      count: '90+ Items',
      path: '/corporate',
      accent: '#EFF6FF'
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
     
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section className="min-h-screen w-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-black font-outfit tracking-tight"
          >
            Explore Our Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-6 pb-10 text-lg"
          >
            Discover our carefully curated collection of premium products designed for every occasion
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative "
            >
              <Link to={category.path}>
                <div 
                  className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
                  style={{ backgroundColor: category.accent }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredCategory === category.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="h-full"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-10  flex flex-col justify-end">
                    <motion.div
                      animate={{
                        y: hoveredCategory === category.id ? -10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mt-4 ">
                        <h3 className="text-2xl font-bold text-white">
                          {category.name}
                        </h3>
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-white/80    text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredCategory === category.id ? 1 : 0,
                        y: hoveredCategory === category.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium
                        hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
                      >
                        Explore Collection
                      </button>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
