import React from "react";
import "./Product.css";
// import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props);
  const { id, title, price, image, description } = props.product;
  console.log(id, title, price, image, description);
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} alt="product" />

        <Link to={`/details/${id}`} className="cart-btn-details">
          <h5>info</h5>
        </Link>
        {/* <button
          className="cart-btn"
          onClick={() => {
            props.modal(id);
            props.add(id);
          }}
        >
          <p>add to cart</p>
        </button> */}
      </div>
      <div className="product-footer">
        <p>{title}</p>
        <h3>
          <span>$ </span>
          {price}
        </h3>
      </div>
    </article>
  );
};

export default Product;
