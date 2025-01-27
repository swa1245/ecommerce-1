import React from 'react';
import { motion } from 'framer-motion';

const CorporateBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[400px] w-full overflow-hidden"
    >
      <motion.div 
        // initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&auto=format')`,
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black" 
        />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl font-bold mb-4 font-outfit tracking-tight"
          >
            Corporate Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl mb-8 font-sans max-w-2xl mx-auto"
          >
            Professional branding solutions for your business needs
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.9,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </motion.svg>
              <span className="font-medium">Custom Branding</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 1.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
              <span className="font-medium">Quick Turnaround</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 1.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
              <span className="font-medium">Competitive Pricing</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CorporateBanner;
