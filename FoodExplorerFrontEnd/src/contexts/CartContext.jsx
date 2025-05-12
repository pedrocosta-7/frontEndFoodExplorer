// src/contexts/CartContext.js

import { createContext, useContext, useState } from "react";

// Criando o contexto do carrinho
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  const removeFromCart = (dishId) => {
    setCart((prevCart) => prevCart.filter((dish) => dish.id !== dishId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acessar o contexto
export const useCart = () => {
  return useContext(CartContext);
};
