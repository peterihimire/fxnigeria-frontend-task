import React from "react";
import CartItem from "./CartItem";

const CartContainer = ({ cart = [] }) => {
  console.log(cart);
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
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
                total <span> $0.00 </span>
              </h4>
            </div>
            <button className="btn clear-btn">clear cart</button>
          </footer>
        </div>
      </div>
    </section>
  );
};
export default CartContainer;