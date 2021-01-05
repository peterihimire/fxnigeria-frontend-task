import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./actions";

function reducer(state, action) {
  console.log({ state, action });

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      console.log(cartItem);
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    console.log(action.payload.id);
    console.log(state.cart);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      }),
    };
  }
  if (action.type === GET_TOTAL) {
    console.log(state);
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        console.log(cartTotal, cartItem);
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
    
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2))
    console.log(total, amount);
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
// 0806301909