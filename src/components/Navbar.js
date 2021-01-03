import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { connect } from "react-redux"; // This is a named import

// const Navbar = ({ cart }) => {
const Navbar = ({ amount }) => {
  // const { count } = cart;
  return (
    <nav>
      <div className="navbar">
        <h3>ReduxGear</h3>
        <div className="shopping-div">
          <FaShoppingBag className="fa-shopping-bag" />
          <div className="cart-amt-div">
            <p className="cart-amt">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { amount: state.amount };
};
export default connect(mapStateToProps)(Navbar); // this is a default import
