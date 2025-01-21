import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prev) => {
      if (!prev.some((favItem) => favItem.id === item.id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromFavorites = (itemId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
