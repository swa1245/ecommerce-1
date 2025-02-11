import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

// Import baby set images
import babySet1 from '../assests/New borne baby sets.jpg';
import babySet2 from '../assests/New borne baby sets2.jpg';
import babySet3 from '../assests/New borne baby sets3.jpg';
import babySet4 from '../assests/baby.jpg';
import babySet5 from '../assests/baby1 (1).jpg';
import babySet6 from '../assests/baby2.jpg';

const NewBornSetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('0-3M');

  const products = [
    {
      id: 1,
      name: "5-Piece Cotton Baby Set",
      category: "New Born Sets",
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

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
    };
    addToCart(cartItem);
  };

  const handleAddToFavorites = () => {
    const favoriteItem = {
      id: product.id,
      name: product.name,
      image: product.image,
    };
    addToFavorites(favoriteItem);
    toast.success('Added to favorites!');
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(product.id);
    toast.success('Removed from favorites!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Contact for Price</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Includes:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Size:</h3>
                <div className="flex space-x-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
                {isFavorite(product.id) ? (
                  <button
                    onClick={handleRemoveFromFavorites}
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <AiFillHeart className="text-lg" />
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    onClick={handleAddToFavorites}
                    className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <AiOutlineHeart className="text-lg" />
                    Add to Favorites
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBornSetDetails;
