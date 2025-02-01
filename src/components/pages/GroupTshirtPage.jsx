import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import TshirtBanner from "../banners/TshirtBanner";

// Import group t-shirt images
import groupTshirt1 from '../assests/group tshirts 1.jpg';
import groupTshirt2 from '../assests/group tshirts 2.jpg';
import groupTshirt3 from '../assests/group tshirts 3.jpg';
import groupTshirt4 from '../assests/group tshirts 4.jpg';
import groupTshirt5 from '../assests/group tshirts 5.jpg';
import groupTshirt6 from '../assests/group tshirts 6.jpg';

const GroupTshirtPage = () => {
  const navigate = useNavigate();

  const groupTshirts = [
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
    {
      id: 22,
      name: "Team Event T-Shirt Set",
      category: "Group T-Shirts",
      price: 2499,
      rating: 4.8,
      image: groupTshirt5,
      description: "Perfect for team events and gatherings",
      features: [
        "Bulk ordering available",
        "Team customization",
        "High-quality printing",
        "Multiple size options",
        "Quick delivery"
      ]
    },{
      id: 21,
      name: "College Group T-Shirts",
      category: "Group T-Shirts",
      price: 2299,
      rating: 4.7,
      image: groupTshirt6,
      description: "Ideal for college groups and reunions",
      features: [
        "College theme designs",
        "Customizable text",
        "Bulk discounts",
        "Durable material",
        "Various color options"
      ]
    }
  ];

  const handleProductClick = (product) => {
    navigate(`/tshirts/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TshirtBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Group T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Perfect for teams, events, and group activities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groupTshirts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupTshirtPage;
