import React from "react";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { id, img, price, title } = item;
  return (
    <div className="cartContainer">
      <img
        src={img}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
        alt={title}
      />
      <h3>{title}</h3>
      <div className="qtyContainer">
        <span className="plus">+</span>
        <p className="qtyValue">1</p>
        <span className="minus">-</span>
      </div>
      <div className="priceContainer">
        <p>${price}</p>
        <span className="remove">remove</span>
      </div>
    </div>
  );
}
