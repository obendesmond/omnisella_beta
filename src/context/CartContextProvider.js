import React, { createContext, useState, useEffect } from "react";
import { items } from "../data";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  const handleAddToCart = ({ title, id, img, price, qty }) => {
    const existingItem = cartProducts.find(item => item.id === id);

    if (existingItem) return alert("Item already exists!");
    else
      return setCartProducts([...cartProducts, { title, id, img, price, qty }]);
  };

  const handleRemoveFromCart = id => {
    const newCartProducts = cartProducts.filter(item => item.id !== id);
    setCartProducts(newCartProducts);
  };

  const handleIncreaseQty = id => {
    const newCartProducts = cartProducts.map(item => {
      if (item.id === id) item.qty++;
      return item;
    });

    setCartProducts(newCartProducts);
  };

  const handleDecreaseQty = id => {
    const newCartProducts = cartProducts.map(item => {
      if (item.id === id) {
        if (item.qty > 1) item.qty--;
      }
      return item;
    });

    setCartProducts(newCartProducts);
  };

  const removeAll = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseQty,
        handleDecreaseQty,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; // this is for us to be able to use context
export { CartContextProvider }; // this is to wrap our app
