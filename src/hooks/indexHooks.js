import { useState } from "react";

import data from "../data";

const initialState = {
  products: data,
  cart: []
};

export const useAppState = () => {
  const [state, setState] = useState(initialState);

  const addItemToCart = item => {
    setState(state => ({
      ...state,
      cart: [...state.cart, item]
    }));
  };

  return { ...state, addItemToCart };
};
