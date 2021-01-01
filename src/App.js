import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import cartItems from "./components/Cart-Items";
import CartContainer from "./components/CartContainer";
import { createStore } from "redux";

// intial store
const initialStore = {
  count: 0,
  name: "Peter",
};

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    console.log("Hello, hope this worked.");
    // state.count = state.count - 1;       This would mean we are mutating our state, which is not a good practice.
    return { count: state.count - 1 };
  }
  if (action.type === "INCREASE") {
    return { count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  return state;
}

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });

console.log(store.getState());

function App() {
  return (
    <>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </>
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
