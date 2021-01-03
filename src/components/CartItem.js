import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItem = ({ img, title, price, amount, remove }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} width="50px" height="50px" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
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
const mapDispatchToProps = (dispatch) => {
  return { remove: () => dispatch({ type: REMOVE }) };
};
export default connect(null, mapDispatchToProps)(CartItem);
