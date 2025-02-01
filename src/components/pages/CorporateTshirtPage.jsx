import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';

// Import corporate t-shirt images
import corporateTshirt5 from '../assests/corporateTshirt1.jpg';
import corporateTshirt6 from '../assests/corporatetshirts2.jpg';
import corporateTshirt7 from '../assests/corporatetshirts3.jpg';
import corporateTshirt8 from '../assests/corporatetshirts5.jpg';
import corporateTshirt9 from '../assests/corporatetshirts6.jpg';

const CorporateTshirtPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();

  const corporateTshirts = [
    {
      id: 13,
      name: "Professional Polo T-Shirt",
      category: "Corporate T-Shirts",
      price: 899,
      rating: 4.8,
      image: corporateTshirt5,
      description: "Premium polo t-shirts for corporate wear",
      features: [
        "Professional design",
        "Company logo printing",
        "Premium cotton",
        "Collar styling",
        "Business casual fit"
      ]
    },
    {
      id: 14,
      name: "Corporate Event T-Shirts",
      category: "Corporate T-Shirts",
      price: 799,
      rating: 4.7,
      image: corporateTshirt6,
      description: "Perfect for corporate events and team building",
      features: [
        "Bulk ordering",
        "Event customization",
        "Quick delivery",
        "Multiple colors",
        "Size customization"
      ]
    },
    {
      id: 15,
      name: "Executive Collection",
      category: "Corporate T-Shirts",
      price: 999,
      rating: 4.9,
      image: corporateTshirt7,
      description: "Premium collection for executives",
      features: [
        "Premium fabric",
        "Executive styling",
        "Custom embroidery",
        "Professional look",
        "Comfort fit"
      ]
    },
    {
      id: 16,
      name: "Company Uniform T-Shirts",
      category: "Corporate T-Shirts",
      price: 699,
      rating: 4.6,
      image: corporateTshirt8,
      description: "Standard company uniform t-shirts",
      features: [
        "Durable material",
        "Company branding",
        "Bulk discounts",
        "Easy maintenance",
        "Professional design"
      ]
    },
    {
      id: 31,
      name: "Executive Collection",
      category: "Corporate T-Shirts",
      price: 999,
      rating: 4.9,
      image: corporateTshirt9,
      description: "Premium collection for executives",
      features: [
        "Premium fabric",
        "Executive styling",
        "Custom embroidery",
        "Professional look",
        "Comfort fit"
      ]
    },
  ];

  const filteredTshirts = corporateTshirts.filter(tshirt =>
    searchTerm === '' || 
    tshirt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tshirt.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product) => {
    navigate(`/tshirts/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <TshirtBanner />
      
      <div className="container m-6 mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 font-outfit"
        >
          <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Corporate T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Perfect for teams, events, and group activities
          </p>
        </div>
          
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTshirts.map((tshirt, index) => (
            <motion.div
              key={tshirt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ProductCard
                key={tshirt.id}
                product={tshirt}
                onClick={() => handleProductClick(tshirt)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateTshirtPage;
