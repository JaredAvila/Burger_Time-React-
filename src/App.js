import React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route } from "react-router-dom";

import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" exact component={Checkout} />
    </Layout>
  );
}

export default App;
