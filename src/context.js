import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    modalProduct: {},
    modalOpen: false,
    cart: [],
    cartTotal: 0,
  };

  getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let products = data.map((product) => {
          console.log(product);
          return product;
        });
        return products;
      })
      .then((productList) => {
        console.log(productList);
        this.setState(() => {
          return {
            products: productList,
          };
        });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getData();
  }

  // Get single product via id
  getProdHandler = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    console.log(product);
    return product;
  };

  // Single product details via id
  detailProdHandler = (id) => {};

  // Add to cart via id
  addToCartHandler = (id) => {};

  // Modal Methods
  openModalHandler = (id) => {
    const product = this.getProdHandler(id);
    console.log(product);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModalHandler = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Cart Methods
  incrementHandler = (id) => {};
  decrementHandler = (id) => {};
  removeProdHandler = (id) => {};
  addTotalHandler = () => {};
  clearCartHandler = () => {};

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProdHandler,
          detailProducts: this.detailProdHandler,
          addToCart: this.addToCartHandler,
          openModal: this.openModalHandler,
          closeModal: this.closeModalHandler,
          increment: this.incrementHandler,
          decrement: this.decrementHandler,
          removeProduct: this.removeProdHandler,
          addTotal: this.addTotalHandler,
          clearCart: this.clearCartHandler,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
// const ProductProvider = (props) => {

// }
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductContext, ProductConsumer };
