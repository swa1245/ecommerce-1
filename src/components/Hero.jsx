import React, { useState } from 'react'
import { FaWhatsapp, FaUsers, FaBriefcase } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Categories from './HeroSubPages/Categories'
import PopularProduct from './HeroSubPages/PopularProduct'
import ExploreMore from './HeroSubPages/ExploreMore'
import VideoSection from './VideoSection'

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full'>
      <Categories/>
      <PopularProduct/>
      {/* <ExploreMore/> */}
      <VideoSection />
      <section className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 flex items-center justify-center space-x-2 sm:space-x-3">
          <div className="hidden sm:block text-xs sm:text-sm bg-white p-2 sm:p-3 rounded-md shadow-lg text-black">
            Need Help? <b className="text-orange-600">Chat with us</b>
          </div>
          <div className="relative">
            {/* WhatsApp Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300 transform"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
            </button>

            {/* Suggestions Menu */}
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-16 sm:bottom-20 right-0 bg-black rounded-lg shadow-xl p-3 sm:p-4 w-48 sm:w-56 space-y-3 sm:space-y-4"
              >
                <a
                  href="https://wa.me/9881460549?text=Hello%20Mam%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaUsers className="text-green-500 text-lg sm:text-xl" />
                  <span className="text-sm sm:text-base">Chat with Us</span>
                </a>
              </motion.div>
            )}
          </div>
        </section>
    </div>
  )
}

export default Hero
