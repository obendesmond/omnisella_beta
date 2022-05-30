import React, { createContext, useState, useEffect } from "react";
import { items } from "../data";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  const handleAddToCart = ({ title, id, img, price }) => {
    const existingItem = cartProducts.find(item => item.id === id);

    if (existingItem) return alert("Item already exists!");
    else return setCartProducts([...cartProducts, { title, id, img, price }]);
  };

  return (
    <CartContext.Provider value={{ products, cartProducts, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; // this is for us to be able to use context
export { CartContextProvider }; // this is to wrap our app