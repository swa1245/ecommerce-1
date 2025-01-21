import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';
import bootle from '../assests/bootle2.jpg';
import vaccumBootle from '../assests/vaccumBootle.jpg';
const BottleDetails = () => {
  const { id } = useParams();
  // const navigate = useNavigate();/
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const bottles = {
    1: {
      id: 1,
      name: "Premium Sublimation Bottle",
      category: "Sublimation",
      price: 24.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
      description: "High-quality sublimation water bottle",
      features: [
        "Premium grade stainless steel",
        "Double-wall insulation",
        "Leak-proof design",
        "Custom sublimation printing",
        "24-hour cold retention"
      ],
      specifications: {
        "Material": "304 Stainless Steel",
        "Capacity": "750ml",
        "Height": "26cm",
        "Diameter": "7.5cm",
        "Weight": "350g"
      }
    },
    2: {
      id: 2,
      name: "Insulated Temperature Bottle",
      category: "Temperature Bottle",
      price: 29.99,
      rating: 4.8,
      image: bootle,
      description: "Double-wall insulated temperature control bottle",
      features: [
        "Triple-layer insulation",
        "Vacuum-sealed technology",
        "BPA-free materials",
        "Wide-mouth design",
        "Powder-coated finish"
      ],
      specifications: {
        "Material": "18/8 Stainless Steel",
        "Capacity": "1000ml",
        "Cold Retention": "24 hours",
        "Hot Retention": "12 hours",
        "Weight": "400g"
      }
    },
    3: {
      id: 3,
      name: "Sport Sublimation Bottle",
      category: "Sublimation",
      price: 22.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500&auto=format",
      description: "Lightweight sublimation bottle for sports",
      features: [
        "Lightweight design",
        "Easy-grip texture",
        "One-handed operation",
        "Dishwasher safe",
        "Impact resistant"
      ],
      specifications: {
        "Material": "Tritan Plastic",
        "Capacity": "500ml",
        "Height": "22cm",
        "Diameter": "6.5cm",
        "Weight": "200g"
      }
    },
    4: {
      id: 4,
      name: "Vacuum Insulated Bottle",
      category: "Temperature Bottle",
      price: 34.99,
      rating: 4.7,
      image: vaccumBootle,
      description: "Premium vacuum insulated temperature bottle",
      features: [
        "Advanced vacuum insulation",
        "Scratch-resistant coating",
        "Ergonomic design",
        "Built-in temperature indicator",
        "Lifetime warranty"
      ],
      specifications: {
        "Material": "Premium Stainless Steel",
        "Capacity": "1200ml",
        "Cold Retention": "36 hours",
        "Hot Retention": "18 hours",
        "Weight": "450g"
      }
    }
  };

  const bottle = bottles[id];

  if (!bottle) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...bottle,
      quantity
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={bottle.image}
                alt={bottle.name}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold text-gray-900">{bottle.name}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">${bottle.price}</span>
                <span className="text-sm text-gray-500">/unit</span>
              </div>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < bottle.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({bottle.rating})</span>
              </div>

              <p className="text-gray-600">{bottle.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-700">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {bottle.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(bottle.specifications).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-sm"
                    >
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="ml-2 text-gray-600">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleDetails;
