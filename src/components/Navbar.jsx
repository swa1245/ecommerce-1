import  { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useSearch } from '../context/SearchContext';
import { motion } from 'framer-motion';
import FavoritesPage from "./pages/FavoritesPage";

const Navbar = () => {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const { searchTerm, performGlobalSearch } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white w-screen shadow-lg sticky top-0 z-50"
    >
      <div className="w-screen mx-auto px-6 lg:px-12">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/public/logo.png"
              alt="Copy Care Digitals"
              className="h-20 mt-4 w-auto object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-transparent bg-clip-text">Copy Care Digitals</span>
          </Link>

          {/* Center: Search Bar */}
          <div className="hidden lg:flex flex-grow mx-8">
            <div className="relative w-full">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                value={searchTerm}
                onChange={(e) => performGlobalSearch(e.target.value)}
                placeholder="Search across all products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm font-sans"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm5.707-12.293a1 1 0 00-1.414 1.414L16.586 10H13a1 1 0 000 2h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3z"
                />
              </svg>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            {/* Favorites Link */}
            <Link
              to="/favorites"
              className="group flex items-center gap-2 relative"
            >
              <motion.div
                whileHover={{ scale: 1.105 }}
                whileTap={{ scale: 0.95 }}
                className=" relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 group-hover:text-red-500 transition-colors"
                  fill={favorites.length > 0 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {favorites.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {favorites.length}
                  </motion.span>
                )}
              </motion.div>
              <span className="text-sm font-medium font-sans hidden sm:inline">Favorites</span>
            </Link>

            {/* Sign In */}
             <Link to="/signin" className="group flex items-center gap-2 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 group-hover:text-red-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a8 8 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              </motion.div>
              <span className="text-sm font-medium font-sans hidden sm:inline">SignIn</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="group flex items-center gap-2 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 group-hover:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l-2 9M9 16h6"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center font-sans"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.div>
              <span className="text-sm font-medium font-sans hidden sm:inline">My Cart</span>
            </Link>

            {/* Get Help */}
            {/* <button className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 shadow-md font-sans">
              Get Help
            </button> */}

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-6 py-2 bg-gray-50">
          <div className="relative w-full">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm5.707-12.293a1 1 0 00-1.414 1.414L16.586 10H13a1 1 0 000 2h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white absolute lg:relative w-full left-0 top-full border-t border-gray-200 shadow-lg lg:shadow-none z-50`}>
          <div className="mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:h-16 py-4 lg:py-0 space-y-4 lg:space-y-0 lg:gap-12">
              {[
                {
                  label: "T-Shirts",
                  subitems: [
                    { name: "Round Neck T-shirt", path: "/tshirts/round-neck" },
                    { name: "Collar T-shirt", path: "/tshirts/collar" },
                    { name: "Oversized T-shirt", path: "/tshirts/oversized" }
                  ],
                  path: "/tshirts"
                },
                {
                  label: "Hoodies",
                  subitems: [
                    { name: "Zip Hoodie", path: "/hoodies/zip" },
                    { name: "Without Zip Hoodie", path: "/hoodies/without-zip" }
                  ],
                  path: "/hoodies"
                },
                {
                  label: "Mugs",
                  subitems: [
                    // { name: "Plain Mug", path: "/mugs/plain" },
                    // { name: "3-Tone Mug", path: "/mugs/three-tone" },
                    // { name: "Magic Mug", path: "/mugs/magic" },
                    // { name: "Transparent Mug", path: "/mugs/transparent" }
                  ],
                  path: "/mugs"
                },
                {
                  label: "Bottles",
                  subitems: [
                    { name: "Sublimation", path: "/bottles/sublimation" },
                    { name: "Temperature Bottle", path: "/bottles/temperature" }
                  ],
                  path: "/bottles"
                },
                {
                  label: "Kids",
                  subitems: [
                    { name: "Baby Romper Set", path: "/kids/romper" },
                    { name: "All T-shirts", path: "/kids/tshirts" }
                  ],
                  path: "/kids"
                },
                {
                  label: "Corporate",
                  subitems: [
                    { name: "ID Card and Lanyard", path: "/corporate/idcard" },
                    { name: "Visiting Card", path: "/corporate/visiting-card" },
                    { name: "Pens", path: "/corporate/pens" },
                    { name: "Employee Welcome Kit", path: "/corporate/welcome-kit" },
                    { name: "Diary", path: "/corporate/diary" }
                  ],
                  path: "/corporate"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group text-gray-700 font-medium w-full lg:w-auto"
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center justify-between lg:justify-start w-full px-4 py-2 hover:bg-gray-50 lg:hover:bg-transparent"
                  >
                    <span>{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 transform transition-transform lg:group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <div className="lg:absolute lg:left-0 mt-0 lg:mt-2 bg-white w-full lg:w-48 lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-lg lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
                    <ul className="py-2">
                      {item.subitems.map((subitem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-8 lg:px-4 py-2 hover:bg-gray-50 hover:text-blue-500 transition-colors duration-200 font-sans text-sm"
                        >
                          {typeof subitem === 'object' ? (
                            <Link to={subitem.path}>{subitem.name}</Link>
                          ) : (
                            subitem
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Sidebar */}
      {isFavoritesOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed inset-0 z-50"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFavoritesOpen(false)} />
          <div className="absolute right-0 top-0">
            <FavoritesPage onClose={() => setIsFavoritesOpen(false)} />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;