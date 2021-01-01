import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const CartItem = ({ img, title, price, amount }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} width="50px" height="50px" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <FaCaretUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
