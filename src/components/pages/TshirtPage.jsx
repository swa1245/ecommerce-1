import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import TshirtBanner from '../banners/TshirtBanner';

// Temporarily use placeholder image
import familyTshirt1 from '../assests/tshirtbabay.jpg';
import familyTshirt2 from '../assests/tshirtbabay2.jpg';
import familyTshirt3 from '../assests/tshirtbabay3.jpg';
import familyTshirt4 from '../assests/tshirtbaby4.jpg';

import coupleTshirt1 from '../assests/couple tshirt 1.jpg';
import coupleTshirt2 from '../assests/couple tshirt 2.jpg';
import coupleTshirt3 from '../assests/couple tshirt 3.jpg';
import coupleTshirt4 from '../assests/couple tshirt 4.jpg';

import groupTshirt1 from '../assests/group tshirts 1.jpg';
import groupTshirt2 from '../assests/group tshirts 2.jpg';
import groupTshirt3 from '../assests/group tshirts 3.jpg';
import groupTshirt4 from '../assests/group tshirts 4.jpg';

import corporateTshirt5 from '../assests/corporateTshirt1.jpg';
import corporateTshirt6 from '../assests/corporatetshirts2.jpg';
import corporateTshirt7 from '../assests/corporatetshirts3.jpg';
import corporateTshirt8 from '../assests/corporatetshirts5.jpg';
import corporateTshirt9 from '../assests/corporatetshirts6.jpg';

const TshirtPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm, filterProducts } = useSearch();

  const tshirts = [
    // Family T-shirts
    {
      id: 1,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      price: 1499,
      rating: 4.8,
      tags: ["family", "matching", "custom"],
      image: familyTshirt1,
      description: "Matching family t-shirt set with custom prints"
    },
    {
      id: 3,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      price: 1499,
      rating: 4.8,
      tags: ["family", "matching", "custom"],
      image: familyTshirt3,
      description: "Matching family t-shirt set with custom prints"
    },
    {
      id: 4,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      price: 1499,
      rating: 4.8,
      tags: ["family", "matching", "custom"],
      image: familyTshirt4,
      description: "Matching family t-shirt set with custom prints"
    },
    {
      id: 5,
      name: "Family Vacation T-Shirt Set",
      category: "Family T-Shirts",
      price: 1599,
      rating: 4.9,
      tags: ["family", "vacation", "custom"],
      image: familyTshirt2,
      description: "Perfect matching set for family vacations"
    },
    // Couple T-shirts
    {
      id: 5,
      name: "Classic Couple T-Shirt Set",
      category: "Couple T-Shirts",
      price: 999,
      rating: 4.9,
      image: coupleTshirt1,
      description: "Perfect matching set for couples",
      features: [
        "100% cotton material",
        "Matching designs",
        "Comfortable fit",
        "Multiple sizes available",
        "High-quality printing"
      ]
    },
    {
      id: 6,
      name: "Love Theme Couple T-Shirts",
      category: "Couple T-Shirts",
      price: 1099,
      rating: 4.8,
      image: coupleTshirt2,
      description: "Romantic themed matching t-shirts for couples",
      features: [
        "Premium cotton blend",
        "Love-themed designs",
        "Perfect for dates",
        "Soft fabric feel",
        "Durable print quality"
      ]
    },
    {
      id: 7,
      name: "Anniversary Special T-Shirts",
      category: "Couple T-Shirts",
      price: 1199,
      rating: 4.9,
      image: coupleTshirt3,
      description: "Special edition anniversary couple t-shirts",
      features: [
        "Customizable text",
        "Anniversary designs",
        "Gift packaging",
        "Premium material",
        "Perfect fit guarantee"
      ]
    },
    {
      id: 8,
      name: "Designer Couple Collection",
      category: "Couple T-Shirts",
      price: 1299,
      rating: 4.7,
      image: coupleTshirt4,
      description: "Designer collection for stylish couples",
      features: [
        "Designer prints",
        "Premium cotton",
        "Modern designs",
        "Trendy patterns",
        "Comfortable wear"
      ]
    },
    // Group T-shirts
    {
      id: 9,
      name: "Team Event T-Shirt Set",
      category: "Group T-Shirts",
      price: 2499,
      rating: 4.8,
      image: groupTshirt1,
      description: "Perfect for team events and gatherings",
      features: [
        "Bulk ordering available",
        "Team customization",
        "High-quality printing",
        "Multiple size options",
        "Quick delivery"
      ]
    },
    {
      id: 10,
      name: "College Group T-Shirts",
      category: "Group T-Shirts",
      price: 2299,
      rating: 4.7,
      image: groupTshirt2,
      description: "Ideal for college groups and reunions",
      features: [
        "College theme designs",
        "Customizable text",
        "Bulk discounts",
        "Durable material",
        "Various color options"
      ]
    },
    {
      id: 11,
      name: "Sports Team Collection",
      category: "Group T-Shirts",
      price: 2699,
      rating: 4.9,
      image: groupTshirt3,
      description: "Professional sports team t-shirts",
      features: [
        "Athletic material",
        "Team logo printing",
        "Performance fabric",
        "Custom numbering",
        "Professional design"
      ]
    },
    {
      id: 12,
      name: "Event Organizer Special",
      category: "Group T-Shirts",
      price: 2199,
      rating: 4.6,
      image: groupTshirt4,
      description: "Perfect for event organization teams",
      features: [
        "Event branding",
        "Staff identification",
        "Comfortable wear",
        "Quick turnaround",
        "Bulk pricing"
      ]
    },
    // Corporate T-shirts
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

  // const categories = [
  //   { id: 'all', name: 'All T-Shirts' },
  //   { id: 'Family T-Shirts', name: 'Family T-Shirts' },
  //   { id: 'Couple T-Shirts', name: 'Couple T-Shirts' },
  //   { id: 'Group T-Shirts', name: 'Group T-Shirts' },
  //   { id: 'Corporate T-Shirts', name: 'Corporate T-Shirts' }
  // ];

  const filteredTshirts = tshirts.filter(tshirt => {
    const matchesCategory = selectedCategory === 'all' || tshirt.category === selectedCategory;
    const matchesSearch = !searchTerm || filterProducts(tshirt, searchTerm);
    return matchesCategory && matchesSearch;
  });

  // const handleCategoryClick = (categoryId) => {
  //   setSelectedCategory(categoryId);
  // };

  const handleProductClick = (tshirt) => {
    navigate(`/tshirts/${tshirt.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TshirtBanner />
      
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Perfect for teams, events, Couple ,and group activities
          </p>
        </div>
        {/* <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-sm transition-colors duration-200`}
            >
              {category.name}
            </motion.button>
          ))}
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTshirts.map((tshirt) => (
            <ProductCard
              key={tshirt.id}
              product={tshirt}
              onClick={() => handleProductClick(tshirt)}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredTshirts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No T-shirts found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtPage;
