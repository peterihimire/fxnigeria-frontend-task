import React from "react";
import "./App.css";
// import Modal from "./components/Modal";
// import { Route, Switch } from "react-router-dom";
// import ProductsPage from "./Pages/ProductsPage";
// import DetailsPage from "./Pages/DetailsPage";
// import NotFoundPage from "./Pages/NotFoundPage";
import cartItems from './components/Cart-Items';
import CartContainer from './components/CartContainer';

function App() {
  return (
    // <React.Fragment>
    //   {/* <Modal /> */}
    //   <Switch>
    //     <Route exact path="/" component={ProductsPage} />
    //     <Route path="/details/:id" component={DetailsPage} />
    //     <Route component={NotFoundPage} />
    //   </Switch>
    // </React.Fragment>
    <CartContainer cart={cartItems} />
  );
}

export default App;
