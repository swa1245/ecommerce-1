import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import TshirtBanner from "../banners/TshirtBanner";

// Import couple t-shirt images
import coupleTshirt1 from '../assests/couple tshirt 1.jpg';
import coupleTshirt2 from '../assests/couple tshirt 2.jpg';
import coupleTshirt3 from '../assests/couple tshirt 3.jpg';
import coupleTshirt4 from '../assests/couple tshirt 4.jpg';

const CoupleTshirtPage = () => {
  const navigate = useNavigate();

  const coupleTshirts = [
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
          <h1 className="text-3xl font-bold text-gray-900">Couple T-Shirts</h1>
          <p className="mt-4 text-lg text-gray-500">
            Express your love with matching couple t-shirts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coupleTshirts.map((product) => (
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

export default CoupleTshirtPage;
