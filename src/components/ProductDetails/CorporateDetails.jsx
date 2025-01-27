import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import pen from '../assests/pen.jpg';
import corporate from '../assests/corporate.jpg';

const CorporateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Product data (you can move this to a separate data file)
  const products = {
    1: {
      category: "ID Card and Lanyard",
      price: 9.99,
      rating: 4.5,
      image: "https://www.mockupworld.co/wp-content/uploads/dynamic/2022/10/id-card-lanyard-free-mockup-psd-536x0-c-default.jpg?w=500&auto=format",
      description: "High-quality ID card with custom lanyard",
      features: [
        "Durable PVC material",
        "Custom design options",
        "Multiple card orientations",
        "Premium lanyard material",
        "Quick turnaround time"
      ],
      specifications: {
        "Material": "PVC",
        "Size": "3.375\" x 2.125\"",
        "Print": "Full Color",
        "Minimum Order": "25 pieces",
        "Lanyard Width": "20mm"
      }
    },
    2: {
      category: "Visiting Card",
      price: 24.99,
      rating: 4.8,
      image: "https://th.bing.com/th/id/OIP.O5LlCxcxVSof_Foj8w43XwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format",
      description: "Premium finish business cards, pack of 100",
      features: [
        "Premium paper quality",
        "Multiple finish options",
        "Custom design service",
        "Quick delivery",
        "Bulk order discounts"
      ],
      specifications: {
        "Paper": "300gsm Art Card",
        "Size": "3.5\" x 2\"",
        "Print": "Both Sides",
        "Finish": "Matt/Glossy",
        "Quantity": "100 cards per pack"
      }
    },
    3: {
      name: "Executive Metal Pen Set",
      // category: "Pens",
      price: 29.99,
      rating: 4.6,
      image: pen,
      description: "Luxury metal pen set for professionals",
      features: [
        "Premium paper quality",
        "Multiple finish options",
        "Custom design service",
        "Quick delivery",
        "Bulk order discounts"
      ],
      specifications: {
        "Paper": "300gsm Art Card",
        "Size": "3.5\" x 2\"",
        "Print": "Both Sides",
        "Finish": "Matt/Glossy",
        "Quantity": "100 cards per pack"
      }
    },
    4:{
      // name: "Welcome Kit Bundle",
      category: "Employee Welcome Kit",
      price: 49.99,
      rating: 4.7,
      image: corporate,
      description: "Complete employee welcome kit",
      features: [
        "Premium paper quality",
        "Multiple finish options",
        "Custom design service",
        "Quick delivery",
        "Bulk order discounts"
      ],
      specifications: {
        "Paper": "300gsm Art Card",
        "Size": "3.5\" x 2\"",
        "Print": "Both Sides",
        "Finish": "Matt/Glossy",
        "Quantity": "100 cards per pack"
      }
    },
    5:{
      category: "Diary",
      price: 19.99,
      rating: 4.9,
      image: "https://th.bing.com/th/id/OIP.L7DwdbrsHah3mDtRxFcqdwAAAA?rs=1&pid=ImgDetMain?w=500&auto=format",
      description: "Premium leather-bound diary",
      features: [
        "Premium paper quality",
        "Multiple finish options",
        "Custom design service",
        "Quick delivery",
        "Bulk order discounts"
      ],
      specifications: {
        "Paper": "300gsm Art Card",
        "Size": "3.5\" x 2\"",
        "Print": "Both Sides",
        "Finish": "Matt/Glossy",
        "Quantity": "100 cards per pack"
      }
    }
    // Add more products here...
    
  };

  const product = products[id];

  if (!product) {
    return (<><div>Product not found</div>
    <button
            onClick={() => navigate('/corporate')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Back to Corporate
          </button></>)
  }  
  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
         {/* Back Button */}
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </motion.button>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.category}
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
              <h1 className="text-3xl font-bold text-gray-900">{product.category}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <span className="text-sm text-gray-500">/unit</span>
              </div>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
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
                  {Object.entries(product.specifications).map(([key, value], index) => (
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

              {/* Order Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Place Order
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateDetails;
