import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        toast.success('Item quantity updated in cart!', {
          duration: 2000,
          position: 'bottom-center',
          style: {
            background: '#4B5563',
            color: '#fff',
          },
        });
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success('Item added to cart!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#4B5563',
          color: '#fff',
        },
      });
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast.success('Item removed from cart!', {
      duration: 2000,
      position: 'bottom-center',
      style: {
        background: '#4B5563',
        color: '#fff',
      },
    });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
    toast.success('Cart updated!', {
      duration: 2000,
      position: 'bottom-center',
      style: {
        background: '#4B5563',
        color: '#fff',
      },
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared!', {
      duration: 2000,
      position: 'bottom-center',
      style: {
        background: '#4B5563',
        color: '#fff',
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
