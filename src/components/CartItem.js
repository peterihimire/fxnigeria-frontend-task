import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
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
        <button className="amount-btn" onClick={() => increase()}>
          <FaCaretUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decrease()}>
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const { id, amount } = ownProps;
  console.log(id, amount);
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
// The first argument is mapStateToProps, and the second is mapDispatchToProps, since we already got the props, we skipped the first argument by adding 'null' and use the mapDispatchToProps which is the second argument.

// Payload helps us work with our id
