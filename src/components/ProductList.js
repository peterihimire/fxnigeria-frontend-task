import React from "react";
import "./ProductList.css";
import Product from "./Product";
import { ProductConsumer } from "../context";

const ProductList = () => {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value);
        const { products, detailProducts, addToCart, openModal } = value;
        return (
          <section className="product-list">
            <div className="product-list-center">
              {products.map((item) => {
                return (
                  <Product
                    key={item.id}
                    product={item}
                    info={detailProducts}
                    add={addToCart}
                    modal={openModal}
                  />
                );
              })}
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductList;
