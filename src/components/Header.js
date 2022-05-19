import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <p className="logo">Omnisella</p>
      <div className="links">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/cart">Cart</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="btns">
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
