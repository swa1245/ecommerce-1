import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ProductCard';
import KidsBanner from '../banners/KidsBanner';

// Import baby set images
import babySet1 from '../assests/New borne baby sets.jpg';
import babySet2 from '../assests/New borne baby sets2.jpg';
import babySet3 from '../assests/New borne baby sets3.jpg';
import babySet4 from '../assests/baby.jpg';
import babySet5 from '../assests/baby1 (1).jpg';
import babySet6 from '../assests/baby2.jpg';

const NewBornSetsPage = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "5-Piece Cotton Baby Set",
      category: "New Born Sets",
      price: 999,
      rating: 4.8,
      image: babySet1,
      description: "Soft cotton essentials for your newborn",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "100% organic cotton",
        "Gentle on baby's skin",
        "Easy to wash",
        "Breathable fabric"
      ],
      includes: [
        "2 Bodysuits",
        "2 Pants",
        "1 Hat"
      ]
    },
    {
      id: 2,
      name: "7-Piece Essential Baby Set",
      category: "New Born Sets",
      price: 1299,
      rating: 4.9,
      image: babySet2,
      description: "Complete starter kit for newborns",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "Premium cotton blend",
        "Double-layered for warmth",
        "Snap closures",
        "Machine washable"
      ],
      includes: [
        "3 Bodysuits",
        "2 Pants",
        "1 Jacket",
        "1 Bib"
      ]
    },
    {
      id: 3,
      name: "3-Piece Organic Cotton Set",
      category: "New Born Sets",
      price: 799,
      rating: 4.7,
      image: babySet3,
      description: "Eco-friendly essentials for your baby",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "100% organic cotton",
        "Chemical-free dyes",
        "Hypoallergenic",
        "Soft elastic waistbands"
      ],
      includes: [
        "1 Bodysuit",
        "1 Pant",
        "1 Cap"
      ]
    },
    {
      id: 4,
      name: "4-Piece Winter Baby Set",
      category: "New Born Sets",
      price: 1499,
      rating: 4.8,
      image: babySet4,
      description: "Warm and cozy winter essentials",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "Fleece-lined fabric",
        "Extra warmth",
        "Water-resistant outer layer",
        "Easy-zip design"
      ],
      includes: [
        "1 Winter Suit",
        "1 Sweater",
        "1 Beanie",
        "1 Pair of Booties"
      ]
    },
    {
      id: 5,
      name: "6-Piece Gift Set",
      category: "New Born Sets",
      price: 1999,
      rating: 5.0,
      image: babySet5,
      description: "Perfect gift for new parents",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "Premium materials",
        "Gift-ready packaging",
        "Mix of essentials",
        "Gender-neutral designs"
      ],
      includes: [
        "2 Bodysuits",
        "1 Sleepsuit",
        "1 Blanket",
        "1 Bib",
        "1 Toy"
      ]
    },
    {
      id: 6,
      name: "8-Piece Deluxe Set",
      category: "New Born Sets",
      price: 2499,
      rating: 4.9,
      image: babySet6,
      description: "Complete luxury set for your newborn",
      sizes: ["0-3M", "3-6M", "6-9M"],
      features: [
        "Premium cotton blend",
        "Embroidered details",
        "Extra soft finish",
        "Easy care instructions"
      ],
      includes: [
        "3 Bodysuits",
        "2 Pants",
        "1 Jacket",
        "1 Blanket",
        "1 Hat"
      ]
    }
  ];

  // const categories = [
  //   { id: 'all', name: 'All Sets', path: '/kids/newborn-sets' },
  //   { id: 'basic', name: 'Basic Sets', path: '/kids/newborn-sets/basic' },
  //   { id: 'premium', name: 'Premium Sets', path: '/kids/newborn-sets/premium' },
  //   { id: 'seasonal', name: 'Seasonal Sets', path: '/kids/newborn-sets/seasonal' }
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mt-8 text-gray-900">New Born Sets</h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover a wide range of new-born sets for your little ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate(`/kids/newborn-sets/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBornSetsPage;
