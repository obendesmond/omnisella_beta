import React, { useContext } from "react";
import CartContext from "../context/CartContextProvider";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);

  return (
    <div style={{ padding: "100px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <h2>Shopping Cart</h2>
        <p>Remove All</p>
      </div>
      {cartProducts.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
