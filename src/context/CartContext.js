import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);
  
  const continuecart =()=>{
alert('your items will be shipped')
clearCart()
  }
  
const incrementQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};
const decrementQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      )
      .filter((item) => item.qty > 0)
  );
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,  incrementQty, decrementQty,continuecart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
