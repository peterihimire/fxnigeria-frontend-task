import React from "react";
import "./Modal.css";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value);
        const { openModal, closeModal } = value;
        const { image, title, price } = value.modalProduct;
        console.log(openModal, closeModal);

        if (!openModal) {
          return null;
        } else {
          return (
            <div className="modal">
              <div className="modal-center">
                <div id="modal" className="modal-contents">
                  <h4>item added to cart </h4>
                  <img src={image} alt="product" />
                  <h5>{title}</h5>
                  <h5>
                    price : <span>$</span> {price}
                  </h5>
                  <Link to="/">
                    <button
                      className="btn back-product-btn"
                      onClick={() => closeModal()}
                    >
                      continue shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      className="btn add-incart-btn"
                      onClick={() => closeModal()}
                    >
                      go to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
