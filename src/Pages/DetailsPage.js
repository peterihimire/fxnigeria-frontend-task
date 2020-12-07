import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    this.state = {
      id: this.props.match.params.id,
    };
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value);
          const { getProduct, addToCart, openModal } = value;
          console.log(getProduct);
          const product = getProduct(this.state.id);
          console.log(product);
          if (!product) {
            return (
              <div className="error">
                <div className="error-center">
                  <h3>No such product could be found...</h3>
                  <Link to="/" className="btn dark product-not-found-btn">
                    back to products
                  </Link>
                </div>
              </div>
            );
          }

          return (
            <section className="details">
              <div className="details-center">
                <div className="details-title">
                  <h2>{product.title}</h2>
                </div>
                <div className="details-container">
                  <div className="details-img">
                    <div className="details-img-center">
                      <img src={product.image} alt="product" />
                    </div>
                  </div>
                  <div className="details-info">
                    <h3 className="details-model">
                      name : <span>{product.title}</span>
                    </h3>

                    <h5 className="details-price">
                      <strong>
                        price : <span> $ {product.price}</span>
                      </strong>
                    </h5>
                    <h4>some info about product :</h4>
                    <p>{product.description}</p>
                    <div className="details-btn-container">
                      <Link to="/products">
                        <button className="btn back-product-btn">
                          back to products
                        </button>
                      </Link>
                      {/* <button
                        disabled={product.inCart ? true : false}
                        className="btn add-incart-btn"
                        onClick={() => {
                          addToCart(product.id);
                          openModal(product.id);
                        }}
                      >
                        {product.inCart ? "in cart" : "add to cart"}
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default DetailsPage;
