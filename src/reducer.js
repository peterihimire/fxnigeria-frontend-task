import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
  console.log({ state, action });

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("You decreased");
  }
  if (action.type === INCREASE) {
    console.log("You increased");
  }
  if (action.type === REMOVE) {
    console.log("You remove");
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
