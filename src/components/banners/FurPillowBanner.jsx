import React from 'react';
import { motion } from 'framer-motion';

const FurPillowBanner = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/tropical-bed-pillow-sea-terrace_1203-3824.jpg?t=st=1737634177~exp=1737637777~hmac=29cb066d6287ee2bc393c5ec3e5cc3175fec3c6a7a2152e7b08a3cb787014a12&w=1380')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 font-outfit tracking-tight">
            Luxury Fur Pillows
          </h1>
          <p className="text-xl mb-8 font-sans max-w-2xl mx-auto">
            Transform your space with our premium collection of soft and luxurious fur pillows
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Premium Material</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Quick Shipping</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Comfort Guaranteed</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-40"
      />
    </div>
  );
};

export default FurPillowBanner;