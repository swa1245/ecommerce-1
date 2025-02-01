import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import TshirtBanner from "../banners/TshirtBanner";

// Import images
import img1 from '../assests/tshirtbabay.jpg';
import img2 from '../assests/tshirtbabay2.jpg';
import img3 from '../assests/tshirtbabay3.jpg';
import img4 from '../assests/tshirtbaby4.jpg';
import img5 from '../assests/family tshirt 1.jpg'
import img6 from '../assests/family tshirt 2.jpg'

const FamilyTshirtPage = () => {
  const navigate = useNavigate();

  const familyTshirts = [
    {
      id: 1,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      price: 1499,
      rating: 4.8,
      image: img1,
      description: "Matching family t-shirt set with custom prints",
      features: [
        "100% cotton material",
        "Custom family prints",
        "Available in all sizes",
        "Comfortable fit",
        "Machine washable"
      ]
    },
    {
      id: 2,
      name: "Family Vacation T-Shirt Set",
      category: "Family T-Shirts",
      price: 1599,
      rating: 4.9,
      image: img2,
      description: "Perfect matching set for family vacations",
      features: [
        "Premium cotton blend",
        "Vacation-themed designs",
        "Multiple color options",
        "Breathable fabric",
        "Easy care instructions"
      ]
    },
    {
      id: 3,
      name: "Family Celebration T-Shirt Set",
      category: "Family T-Shirts",
      price: 1699,
      rating: 4.7,
      image: img3,
      description: "Special occasion family matching t-shirts",
      features: [
        "High-quality printing",
        "Celebration themes",
        "Customizable text",
        "Soft cotton fabric",
        "Durable print quality"
      ]
    },
    {
      id: 4,
      name: "Premium Family T-Shirt Collection",
      category: "Family T-Shirts",
      price: 1799,
      rating: 4.9,
      image: img4,
      description: "Luxury family matching t-shirt collection",
      features: [
        "Premium cotton material",
        "Designer prints",
        "Perfect fit guarantee",
        "Multiple design options",
        "Gift packaging available"
      ]
    },
    {
      id: 17,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      price: 1499,
      rating: 4.8,
      image: img5,
      description: "Matching family t-shirt set with custom prints",
      features: [
        "100% cotton material",
        "Custom family prints",
        "Available in all sizes",
        "Comfortable fit",
        "Machine washable"
      ]
    },{
      id: 18,
      name: "Family Vacation T-Shirt Set",
      category: "Family T-Shirts",
      price: 1599,
      rating: 4.9,
      image: img6,
      description: "Perfect matching set for family vacations",
      features: [
        "Premium cotton blend",
        "Vacation-themed designs",
        "Multiple color options",
        "Breathable fabric",
        "Easy care instructions"
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
          <h1 className="text-3xl font-bold text-gray-900">Family T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Create lasting memories with matching family t-shirts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {familyTshirts.map((product) => (
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

export default FamilyTshirtPage;
