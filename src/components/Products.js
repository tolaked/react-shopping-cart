import React, { useContext } from "react";

// Components
import Product from "./Product";
import { appContext } from "../contexts";

const Products = props => {
  const { products } = useContext(appContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
