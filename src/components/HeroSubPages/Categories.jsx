import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import polo1 from '../assests/polo1.jpg';
import hoodie1 from '../assests/hoodie1.jpg';
import kid1 from '../assests/kid1.jpg';
import corporate from '../assests/corporate.jpg';
import mug4 from '../assests/mug4.jpg';
import vaccumBootle from '../assests/vaccumBootle.jpg';
// import KeyChain from '../assests/Kitchen.jpg';
import pillowDesign from '../assests/pillowdesign.jpg';
import { useState } from 'react';

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
    {
      id: 7,
      name: 'Fur Pillows',
      image: pillowDesign ,
      description: 'Visit Our Other Product Categories.',
      count: '60+ Items',
      path: '/fur-pillows',
      accent: '#EFF6FF'
    }
   
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mt-12 mb-20 text-center">
        Browse Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="group"
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: category.accent }}
            >
              <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <AnimatePresence>
                    {hoveredCategory === category.id && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="text-sm sm:text-base text-gray-200 mb-2 line-clamp-2"
                      >
                        {category.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <span className="inline-block px-3 py-1 text-sm text-white bg-white/20 rounded-full backdrop-blur-sm">
                    {category.count}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
