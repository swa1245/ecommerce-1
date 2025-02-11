import  { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useSearch } from '../context/SearchContext';
import { motion, AnimatePresence } from 'framer-motion';
import FavoritesPage from "./pages/FavoritesPage";

const Navbar = () => {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const { searchTerm, setSearchTerm } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { 
      name: 'Home', 
      path: '/',
      subitems: [] 
    },
    { 
      name: 'T-Shirts', 
      path: '/tshirts',
      subitems: [
        {
          name: 'Family T-Shirts', 
          path: '/tshirts/family',
        },
        {
          name: 'Couple T-Shirts', 
          path: '/tshirts/couple',
        },
        {
          name: 'Group T-Shirts', 
          path: '/tshirts/group',
        },
        {
          name: 'Corporate T-Shirts', 
          path: '/tshirts/corporate',
        }
      ]
    },
    { 
      name: 'Hoodies', 
      path: '/hoodies',
      subitems: [
        { name: 'With Zip', path: '/hoodies/zip' },
        { name: 'Without Zip', path: '/hoodies/without-zip' }
      ]
    },
    { 
      name: 'Kids', 
      path: '/kids',
      subitems: [
        { 
          name: 'New Born Baby Sets', 
          path: '/kids/newborn-sets',
        },
        { name: 'Baby Romper', path: '/kids/romper' },
        { name: 'T-Shirts', path: '/kids/tshirts' },
        // {name:'Kids Romper polyster', path: '/kids/romper'},
      ]
    },
    { 
      name: 'Mugs',
      path: '/mugs',
      subitems: [
        { 
          name: 'Ceramic Mugs', 
          path: '/mugs/plain',
        },
        { 
          name: 'Magic Mugs', 
          path: '/mugs/magic',
        },
        { 
          name: 'Three Tone Mugs', 
          path: '/mugs/three-tone',
        },
        { 
          name: 'Transparent Mugs', 
          path: '/mugs/transparent',
        }
      ]
    },
    { 
      name: 'Bottles', 
      path: '/bottles',
      subitems: [
        { 
          name: 'Sublimation Bottles',
          path: '/bottles?category=Sublimation',
          // description: 'Custom printable bottles for unique designs'
        },
        { 
          name: 'Temperature Bottles',
          path: '/bottles?category=Temperature Bottle',
          // description: 'Insulated bottles for temperature control'
        },
        {
          name:"Tempature Engraving Bottles",
          path: '/bottles?category=Temperature Engraving',
        }
      ]
    },
    { 
      name: 'Fur Pillows', 
      path: '/fur-pillows',
      subitems: [
        { 
          name: 'Plain Pillows',
          path: '/fur-pillows?category=Plain Pillows',
          // description: 'Soft and luxurious plain pillow covers'
        },
        { 
          name: 'Designer Pillows',
          path: '/fur-pillows?category=Designer Pillows',
          // description: 'Beautiful printed and patterned pillows'
        },
        { 
          name: 'Premium Pillows',
          path: '/fur-pillows?category=Premium Pillows',
          // description: 'Premium quality teddy pillows'
        },
        { 
          name: 'Special Pillows',
          path: '/fur-pillows?category=Special Pillows',
          // description: 'Heart-shaped and special occasion pillows'
        }
      ]
    },
    { 
      name: 'Corporate', 
      path: '/corporate',
      subitems: [
        { name: 'ID Cards', path: '/corporate/idcard' },
        { name: 'Visiting Cards', path: '/corporate/visiting-card' },
        { name: 'Pens', path: '/corporate/pens' },
        { name: 'Welcome Kit', path: '/corporate/welcome-kit' },
        { name: 'Diary', path: '/corporate/diary' }
      ]
    },
    { 
      name: 'Other Products',
      path: '/other-products',
      description: 'Explore our collection of custom keychains, designer mirrors, and more'
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white/95 backdrop-blur-sm w-full shadow-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Desktop Logo - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/logo.png"
                alt="Copy Care Digitals"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text tracking-tight">Copy Care Digitals</span>
            </Link>
          </div>

          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Left: Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Middle: Search Bar */}
            <div className="flex-1 max-w-xs mx-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Right: Sign In and Cart */}
            <div className="flex items-center space-x-3">
              <Link to="/signin" className="p-2 rounded-lg hover:bg-gray-100">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              <Link to="/favorites" className="p-2 rounded-lg hover:bg-gray-100 relative">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="p-2 rounded-lg hover:bg-gray-100 relative">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Desktop Search and Icons - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 items-center justify-between ml-8">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-6 ml-6">
              <Link to="/signin" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm font-medium">Sign In</span>
              </Link>

              <Link to="/favorites" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 relative">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 relative">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-white/95 backdrop-blur-sm absolute md:relative w-full left-0 top-full border-t border-gray-100 shadow-sm md:shadow-none z-50`}>
          <div className="mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:h-14 py-4 md:py-0 space-y-2 md:space-y-0 md:gap-10">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group text-gray-600 w-full md:w-auto"
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center justify-between md:justify-start w-full px-4 py-2 hover:bg-gray-50/50 md:hover:bg-transparent md:px-0 md:py-4 text-[15px] tracking-wide transition-colors duration-200 font-medium md:hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 md:group-hover:w-full"></span>
                    </span>
                    {item.subitems && item.subitems.length > 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1.5 transform transition-transform duration-200 md:group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subitems && item.subitems.length > 0 && (
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:pt-2 w-full md:w-64 hidden group-hover:block">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 md:backdrop-blur-sm md:bg-white/95"
                      >
                        {item.subitems.map((subitem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subitem.path}
                            className="block px-4 py-3 hover:bg-gray-50/50 group/item"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <p className="text-[14px] font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors duration-200">
                              {subitem.name}
                            </p>
                            {subitem.description && (
                              <p className="text-[12px] text-gray-500 mt-0.5 group-hover/item:text-gray-600">
                                {subitem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-2 px-4 z-50"
            >
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.name} className="py-2">
                    <Link
                      to={item.path}
                      className="block text-gray-800 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subitems && item.subitems.length > 0 && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.subitems.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;