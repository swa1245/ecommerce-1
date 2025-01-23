import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterProducts = (products, term = searchTerm) => {
    if (!term.trim()) return products;
    
    const searchLower = term.toLowerCase().trim();
    return products.filter(product => {
      const searchFields = [
        product.name,
        product.description,
        product.category,
        ...(product.tags || []),
      ].map(field => (field || '').toLowerCase());

      return searchFields.some(field => field.includes(searchLower));
    });
  };

  const value = {
    searchTerm,
    setSearchTerm,
    filterProducts
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
