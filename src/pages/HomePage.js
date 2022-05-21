import React, { useEffect, useState } from "react";
import { items } from "../data";
import Card from "../components/Card";
import "./HomePage.css";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  const handleAddToCart = id => {
    alert(id);
  };

  return (
    <div className="container">
      {products.map(({ title, id, img, price }) => (
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
  );
}
