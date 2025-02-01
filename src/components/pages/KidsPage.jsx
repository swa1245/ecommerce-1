import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import KidsBanner from '../banners/KidsBanner';

// Import kids images
import kid1 from '../assests/kid1.jpg';
import kid2 from '../assests/kid2.jpg';
import kid3 from '../assests/kid3.jpg';
import kid4 from '../assests/kid4.jpg';
import kid5 from '../assests/kid5.jpg';
import kid6 from '../assests/kid 6.jpg';
import kid7 from '../assests/kid 7.jpg';
import kid8 from '../assests/kid 8.jpg';
import kid9 from '../assests/kid 9.jpg';

const KidsPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Kids Cotton T-Shirt",
      category: "T-Shirts",
      price: 499,
      rating: 4.5,
      image: kid1,
      description: "Comfortable cotton t-shirt for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "100% cotton",
        "Breathable fabric",
        "Easy to wash",
        "Durable quality"
      ]
    },
    {
      id: 2,
      name: "Kids Printed T-Shirt",
      category: "T-Shirts",
      price: 599,
      rating: 4.7,
      image: kid2,
      description: "Fun printed t-shirt for active kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Colorful prints",
        "Soft material",
        "Color-fast",
        "Machine washable"
      ]
    },
    {
      id: 3,
      name: "Kids Graphic T-Shirt",
      category: "T-Shirts",
      price: 649,
      rating: 4.6,
      image: kid3,
      description: "Cool graphic design t-shirt",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Trendy designs",
        "Premium cotton",
        "Comfortable fit",
        "Long-lasting print"
      ]
    },
    {
      id: 4,
      name: "Kids Striped T-Shirt",
      category: "T-Shirts",
      price: 549,
      rating: 4.4,
      image: kid4,
      description: "Classic striped pattern t-shirt",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Striped pattern",
        "Casual wear",
        "Soft cotton blend",
        "Easy maintenance"
      ]
    },
    {
      id: 5,
      name: "Kids Sports T-Shirt",
      category: "T-Shirts",
      price: 699,
      rating: 4.8,
      image: kid5,
      description: "Perfect for sports and outdoor activities",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Quick-dry fabric",
        "Moisture-wicking",
        "Lightweight",
        "UV protection"
      ]
    },
    {
      id: 6,
      name: "Kids Summer Collection",
      category: "T-Shirts",
      price: 599,
      rating: 4.8,
      image: kid6,
      description: "Stylish summer collection for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Premium cotton blend",
        "Breathable fabric",
        "UV protection",
        "Easy to wash"
      ]
    },
    {
      id: 7,
      name: "Kids Casual Collection",
      category: "T-Shirts",
      price: 649,
      rating: 4.7,
      image: kid7,
      description: "Comfortable casual wear for kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Soft cotton material",
        "Durable stitching",
        "Fade resistant",
        "Perfect for daily wear"
      ]
    },
    {
      id: 8,
      name: "Kids Party Collection",
      category: "T-Shirts",
      price: 699,
      rating: 4.9,
      image: kid8,
      description: "Perfect for special occasions",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Premium quality",
        "Stylish design",
        "Comfortable fit",
        "Easy maintenance"
      ]
    },
    {
      id: 9,
      name: "Kids Sports Collection",
      category: "T-Shirts",
      price: 549,
      rating: 4.6,
      image: kid9,
      description: "Active wear for energetic kids",
      sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
      features: [
        "Quick dry fabric",
        "Sweat absorbent",
        "Flexible material",
        "Durable quality"
      ]
    }
  ];

  // const categories = [
  //   { id: 'all', name: 'All T-Shirts', path: '/kids/tshirts' },
  //   { id: 'casual', name: 'Casual', path: '/kids/tshirts/casual' },
  //   { id: 'sports', name: 'Sports', path: '/kids/tshirts/sports' },
  //   { id: 'graphic', name: 'Graphic', path: '/kids/tshirts/graphic' }
  // ];

  const filteredProducts = products.filter(product => 
    (searchTerm === '' || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const selectedCat = categories.find(cat => cat.id === category);
    if (selectedCat) {
      navigate(selectedCat.path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <KidsBanner />
      
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div> */}
        <div className="text-center mt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Perfect for teams, events, and group activities
          </p>
        </div>

        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate(`/kids/tshirt/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
