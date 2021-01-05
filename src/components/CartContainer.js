import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTAL } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  console.log(cart);
  React.useEffect(() => {
    dispatch({ type: GET_TOTAL });
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header className="cart-empty-div">
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section>
      <div className="cart-container">
        <div className="cart-container-center">
          <header>
            <h2>your bag</h2>
          </header>
          <article>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </article>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                Total <span> ${total} </span>
              </h4>
            </div>
            <button
              className="btn clear-btn"
              onClick={() => dispatch({ type: CLEAR_CART })}
            >
              clear bag
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};
function mapStateToProps(store) {
  console.log(store);
  const { cart, total } = store;
  return { cart, total };
}
// function mapStateToProps(store) {
//   return { cart: store.cart, total: store.total };
// }
export default connect(mapStateToProps)(CartContainer);
