import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { toast } from 'react-hot-toast';
import ScrollTop from '../ScrollTop';

// Import all T-shirt images
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
import groupTshirt5 from '../assests/group tshirts 5.jpg';
import groupTshirt6 from '../assests/group tshirts 6.jpg';

import corporateTshirt5 from '../assests/corporateTshirt1.jpg';
import corporateTshirt6 from '../assests/corporatetshirts2.jpg';
import corporateTshirt7 from '../assests/corporatetshirts3.jpg';
import corporateTshirt8 from '../assests/corporatetshirts5.jpg';
import corporateTshirt9 from '../assests/corporatetshirts6.jpg';

import img5 from '../assests/family tshirt 1.jpg'
import img6 from '../assests/family tshirt 2.jpg'

const TshirtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  const allTshirts = [
    // Family T-shirts
    {
      id: 1,
      name: "Classic Family T-Shirt Set",
      category: "Family T-Shirts",
      rating: 4.8,
      image: familyTshirt1,
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
      rating: 4.9,
      image: familyTshirt2,
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
      rating: 4.7,
      image: familyTshirt3,
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
      rating: 4.9,
      image: familyTshirt4,
      description: "Luxury family matching t-shirt collection",
      features: [
        "Premium cotton material",
        "Designer prints",
        "Perfect fit guarantee",
        "Multiple design options",
        "Gift packaging available"
      ]
    },
    // Couple T-shirts
    {
      id: 50,
      name: "Classic Couple T-Shirt Set",
      category: "Couple T-Shirts",
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
      name: "Team Event T-Shirts",
      category: "Group T-Shirts",
      rating: 4.7,
      image: groupTshirt1,
      description: "Perfect for team events and gatherings",
      features: [
        "Bulk ordering available",
        "Team customization",
        "Quick delivery",
        "Multiple colors",
        "Size variety"
      ]
    },
    {
      id: 10,
      name: "College Group T-Shirts",
      category: "Group T-Shirts",
      rating: 4.8,
      image: groupTshirt2,
      description: "Ideal for college groups and clubs",
      features: [
        "College logo printing",
        "Department customization",
        "Affordable pricing",
        "Bulk discounts",
        "Quality material"
      ]
    },
    {
      id: 11,
      name: "Sports Team T-Shirts",
      category: "Group T-Shirts",
      rating: 4.9,
      image: groupTshirt3,
      description: "Professional sports team t-shirts",
      features: [
        "Athletic fabric",
        "Team name printing",
        "Number customization",
        "Moisture-wicking",
        "Durable quality"
      ]
    },
    {
      id: 12,
      name: "Event Staff T-Shirts",
      category: "Group T-Shirts",
      rating: 4.6,
      image: groupTshirt4,
      description: "Distinctive t-shirts for event staff",
      features: [
        "High visibility colors",
        "Role identification",
        "Easy maintenance",
        "Comfortable fit",
        "Bulk ordering"
      ]
    },
    // Corporate T-shirts
    {
      id: 13,
      name: "Professional Polo T-Shirt",
      category: "Corporate T-Shirts",
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
      id:31,
      name: "Collar T-Shirt",
      category: "Corporate T-Shirts",
      rating: 4.5,
      image: corporateTshirt9,
      description: "T-shirts with a stylish collar",
      features: [
        "Collar styling",
        "Premium fabric",
        "Size flexibility",
        "Easy wash",
        "Comfortable fit"
      ]
    },
    {
      id: 15,
      name: "Executive Collection",
      category: "Corporate T-Shirts",
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
    },{
      id: 17,
      name: "Family Vacation T-Shirt Set",
      category: "Family T-Shirts",
      rating: 4.9,
      image: img5,
      description: "Perfect matching set for family vacations",
      features: [
        "Premium cotton blend",
        "Vacation-themed designs",
        "Multiple color options",
        "Breathable fabric",
        "Easy care instructions"
      ]
    },{
      id: 18,
      name: "Family Event T-Shirt Set",
      category: "Family T-Shirts",
      rating: 4.8,
      image: groupTshirt5,
      description: "Matching family t-shirt set with custom prints",
      features: [
        "100% cotton material",
        "Custom family prints",
        "Available in all sizes",
        "Comfortable fit",
        "Machine washable"
      ]
    },{
      id:21,
      name: "Family Vacation T-Shirt Set",
      category: "Family T-Shirts",
      rating: 4.9,
      image: groupTshirt6,
      description: "Perfect matching set for family vacations",
      features: [
        "Premium cotton blend",
        "Vacation-themed designs",
        "Multiple color options",
        "Breathable fabric",
        "Easy care instructions"
      ]
    },{
      id:22,
      name: "Family Event T-Shirt Set",
      category: "Family T-Shirts",
      rating: 4.8,
      image: groupTshirt5,
      description: "Matching family t-shirt set with custom prints",
      features: [
        "100% cotton material",
        "Custom family prints",
        "Available in all sizes",
        "Comfortable fit",
        "Machine washable"
      ]
    }
  ];

  const tshirt = allTshirts.find(t => t.id === parseInt(id));

  if (!tshirt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">T-shirt not found</h1>
      </div>
    );
  }

  const isFavorite = favorites.some(item => item.id === tshirt.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(tshirt.id);
      toast.success('Removed from favorites!');
    } else {
      addToFavorites(tshirt);
      toast.success('Added to favorites!');
    }
  };

  const handleAddToCart = () => {
    addToCart(tshirt);
    toast.success('Added to cart successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollTop />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
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
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <img
              src={tshirt.image}
              alt={tshirt.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h1 className="text-3xl font-bold mb-4">{tshirt.name}</h1>
            <p className="text-gray-600 mb-4">{tshirt.description}</p>
            
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold">Contact for Price</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-2">
                {tshirt.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={handleFavoriteClick}
                className={`px-6 py-2 rounded-lg border transition-colors ${
                  isFavorite
                    ? 'bg-red-600 text-white border-red-600'
                    : 'border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TshirtDetails;
