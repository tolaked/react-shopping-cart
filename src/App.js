import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

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
        <Navigation cart={cart} />

        {/* Routes */}
        <Route
          exact
          path="/"
          render={() => <Products products={products} addItem={addItem} />}
        />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </div>
    </appContext.Provider>
  );
}

export default App;
