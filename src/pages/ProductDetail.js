import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContextProvider";

import styles from "./productDetail.module.css";

const ProductDetail = () => {
  const { products, handleAddToCart } = useContext(CartContext);
  const { productId } = useParams();

  return products.map(({ img, id, title, price, qty, description }) => {
    if (id == productId) {
      return (
        <div key={id} className={styles.container}>
          {/* first div */}
          <div className={styles.imgContainer}>
            <img src={img} alt="product img" className={styles.img} />
          </div>
          {/* second container */}
          <div className={styles.description}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>${price}</p>
            <p>{description}</p>
            <button
              onClick={() => handleAddToCart({ title, id, img, price, qty })}
              className={styles.btn}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    }
  });
};

export default ProductDetail;
