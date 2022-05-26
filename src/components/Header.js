import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContextProvider";
import "./Header.css";

export default function Header() {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="header">
      <p className="logo">Omnisella</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/cart">Cart ({cartProducts.length})</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="btns">
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
