import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const CartItem = ({ img, title, price, amount }) => {
  return (
    <div>
      <img src={img} alt={title} width='100px' height='100px' />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button>remove</button>
      </div>
      <div>
        <button>
          <FaCaretUp />
        </button>
        <p>{amount}</p> 
        <button>
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
