import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { appContext } from "../contexts";

const Navigation = () => {
  const { cart } = useContext(appContext);

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
