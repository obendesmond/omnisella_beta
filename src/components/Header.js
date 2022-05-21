import React from "react";
import {Link} from "react-router-dom"
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <p className="logo">Omnisella</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="btns">
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
