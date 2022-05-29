import React, { useContext } from "react";
import Card from "../components/Card";
import "./HomePage.css";
import CartContext from "../context/CartContextProvider";

export default function HomePage() {
  const { products, handleAddToCart } = useContext(CartContext);

  return (
    <>
      <h1 className="home_title">Best of Omnisella's Quality Items</h1>
      <div className="container">
        {products.map(({ title, id, img, price, description }) => (
          <Card
            handleAddToCart={handleAddToCart}
            key={id}
            id={id}
            img={img}
            price={price}
            title={title}
          />
        ))}
      </div>
    </>
  );
}
