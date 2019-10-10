import React, { useContext } from "react";
import { appContext } from "../contexts";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(appContext);
  return (
    <div className="product">
      <img src={product.image} alt={`${product.title} book`} />

      <h1 className="title">{product.title}</h1>

      <p className="price">${product.price}</p>

      <button onClick={() => addItemToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
