import React from "react";
import {ProductConsumer} from '../context';

const DetailsPage = () => {
  return (
  <ProductConsumer>
    {value => {
      console.log(value);
      
    }}
  </ProductConsumer>
  );
};

export default DetailsPage;
