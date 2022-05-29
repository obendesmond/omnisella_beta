import React, { useContext } from "react";
import CartContext from "../context/CartContextProvider";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);

  return (
    <div>
      {cartProducts.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
