import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const performGlobalSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      navigate('/search');
    }
  };

  const value = {
    searchTerm,
    setSearchTerm,
    performGlobalSearch,
    searchResults,
    setSearchResults
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
