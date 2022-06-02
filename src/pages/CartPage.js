import React, { useContext } from "react";
import CartContext from "../context/CartContextProvider";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);

  return cartProducts.length > 0 ? (
    <div style={{ padding: "100px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <h2>Shopping Cart ({cartProducts.length})</h2>
        <p>Remove All</p>
      </div>
      {cartProducts.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <h2>
          Total:$
          {cartProducts
            .reduce((total, item) => total + item.price * item.qty, 0)
            .toFixed(2)}
        </h2>
        <div style={{ width: "200px" }}>
          <button className="addBtn">Checkout</button>
        </div>
      </div>
    </div>
  ) : (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
      No Items in Cart
    </h1>
  );
}
