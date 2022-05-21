import React from "react";
import "./Card.css";

export default function Card({ title, id, img, price, handleAddToCart }) {
  return (
    <div className="card">
      <img className="img" src={img} alt="earphones" />
      <p className="title">{title}</p>
      <p>${price}</p>
      <button onClick={() => handleAddToCart(id)} className="addBtn">
        Add to Cart
      </button>
    </div>
  );
}
