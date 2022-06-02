import React, { useContext } from "react";
import CartContext from "../context/CartContextProvider";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { handleRemoveFromCart, handleIncreaseQty, handleDecreaseQty } =
    useContext(CartContext);
  const { id, img, price, title, qty } = item;

  const calculatePrice = () => (price * qty).toFixed(2);

  return (
    <div className="cartContainer">
      <img
        src={img}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
        alt={title}
      />
      <h3>{title}</h3>
      <div className="qtyContainer">
        <span className="plus" onClick={() => handleIncreaseQty(id)}>
          +
        </span>
        <p className="qtyValue">{qty}</p>
        <span className="minus" onClick={() => handleDecreaseQty(id)}>
          -
        </span>
      </div>
      <div className="priceContainer">
        <p>${calculatePrice()}</p>
        <span className="remove" onClick={() => handleRemoveFromCart(id)}>
          remove
        </span>
      </div>
    </div>
  );
}
