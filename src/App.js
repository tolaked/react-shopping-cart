import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useAppState } from "./hooks";
import { appContext } from "./contexts";

function App() {
  return (
    <appContext.Provider value={useAppState()}>
      <div className="App">
        <Navigation />
        {/* Routes */}
        <Route exact path="/" component={Products} />} />
        <Route path="/cart" component={ShoppingCart} />
      </div>
    </appContext.Provider>
  );
}

export default App;
