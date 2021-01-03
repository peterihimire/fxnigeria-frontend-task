import React from "react";
import "./App.css";
// items
import cartItems from "./cart-items";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux things
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux"; // react-redux - Provider - wraps app , connect - used in  components

// intial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// store
const warehouse = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={warehouse}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;

//
//
//
//
//
//
//
//
// import React from "react";
// import "./App.css";
// // import Modal from "./components/Modal";
// // import { Route, Switch } from "react-router-dom";
// // import ProductsPage from "./Pages/ProductsPage";
// // import DetailsPage from "./Pages/DetailsPage";
// // import NotFoundPage from "./Pages/NotFoundPage";
// import cartItems from "./components/Cart-Items";
// import CartContainer from "./components/CartContainer";
// import { createStore } from "redux";

// // intial store
// const initialStore = {
//   count: 0,
// };
// // reducer
// function reducer(state, action) {
//   console.log({ state, action });
// }

// const store = createStore(reducer, initialStore);

// function App() {
//   return (
//     // <React.Fragment>
//     //   {/* <Modal /> */}
//     //   <Switch>
//     //     <Route exact path="/" component={ProductsPage} />
//     //     <Route path="/details/:id" component={DetailsPage} />
//     //     <Route component={NotFoundPage} />
//     //   </Switch>
//     // </React.Fragment>
//     <CartContainer cart={cartItems} />
//   );
// }

// export default App;

// actions
// const DECREASE = "DECREASE";
// const INCREASE = "INCREASE";
// const RESET = "RESET";
// const CHANGE_NAME = "CHANGE_NAME";

// reducer
// function reducer(state, action) {
//   console.log({ state, action });
//   if (action.type === DECREASE) {
//     console.log("Hello, hope this worked.");
//     // state.count = state.count - 1;  This would mean we are mutating our state, which is not a good practice.
//     // return { count: state.count - 1 };
//     return { ...state, count: state.count - 1, name: "Beatrice" };
//   }
//   if (action.type === INCREASE) {
//     return { ...state, count: state.count + 1 };
//   }

//   return state;
// }

// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// console.log(store.getState());
