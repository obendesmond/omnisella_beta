import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({ title, id, img, price, qty, handleAddToCart }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="card">
      <div onClick={handleNavigation}>
        <img className="img" src={img} alt="earphones" />
        <p className="title">{title}</p>
        <p>${price}</p>
      </div>
      <button
        onClick={() => handleAddToCart({ title, id, img, price, qty })}
        className="addBtn"
      >
        Add to Cart
      </button>
    </div>
  );
}
