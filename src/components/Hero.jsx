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
    <div className=''>
      <Categories/>
      <PopularProduct/>
      {/* <ExploreMore/> */}
      <VideoSection />
      <section className="fixed bottom-6 gap-3 right-6 z-10 flex items-center justify-center">
          <div className="text-xs bg-white p-2 rounded-md text-black">
            Need Help? <b className="text-orange-600">Chat with us</b>
          </div>
          <div>
            {/* WhatsApp Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center  bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300 transform"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="text-xl sm:text-3xl " />
            </button>

            {/* Suggestions Menu */}
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-20 right-0 bg-black rounded-lg shadow-xl p-4 w-56 space-y-4"
              >
                <a
                  href="https://wa.me/9881460549?text=Hello%20Mam%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaUsers className="text-green-500 text-xl" />
                  <span>Chat with Us</span>
                </a>
              </motion.div>
            )}
          </div>
        </section>
    </div>
  )
}

export default Hero
